import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';
import { COOKIE_NAMES } from './lib/common-constants';
import { isExpired } from './lib/jwt';
import { updateSession } from './lib/session';
import { PRIVATE_ROUTES, PUBLIC_ROUTES, ROUTES } from './routes';

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAMES.SESSION);
  const refreshToken = cookieStore.get(COOKIE_NAMES.REFRESH_TOKEN)?.value;

  // Private Routes
  const isPrivateRouteRequested = PRIVATE_ROUTES.some((route) => {
    return request.nextUrl.pathname.startsWith(route);
  });

  if (isPrivateRouteRequested) {
    if (session) {
      if (isExpired(session.value) && refreshToken) {
        const result = await updateSession(session.value, refreshToken);

        return !result
          ? NextResponse.redirect(new URL(ROUTES.SIGNIN, request.url))
          : NextResponse.next();
      }
      return NextResponse.next();
    }

    if (!session) {
      return NextResponse.redirect(new URL(ROUTES.SIGNIN, request.url));
    }
  }

  // Public Routes
  const isPublicRouteRequested = PUBLIC_ROUTES.some((route) => {
    return request.nextUrl.pathname.startsWith(route);
  });

  if (isPublicRouteRequested) {
    return session
      ? NextResponse.redirect(new URL(ROUTES.DASHBOARD, request.url))
      : NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ]
};
