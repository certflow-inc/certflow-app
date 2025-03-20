export function SignupActivationSkeleton() {
  return (
    <div className="flex w-full max-w-[1000px] flex-1 flex-col items-center gap-12 px-4 lg:px-10">
      <div className="bg-primary-50 text-primary-300 h-16 w-2/3 animate-pulse rounded-md text-center text-2xl font-bold lg:text-4xl/relaxed">
        Validando sua conta
      </div>
      <div className="bg-primary-50 h-14 w-3/4 animate-pulse rounded-md" />
      <div className="bg-primary-50 h-12 w-1/4 animate-pulse rounded-md" />
    </div>
  );
}
