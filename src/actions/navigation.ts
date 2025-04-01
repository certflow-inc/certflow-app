'use server';

import { redirect } from 'next/navigation';

export async function redirectFromClient(url: string) {
  redirect(url);
}
