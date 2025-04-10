export function EnvironmentIndicatorView() {
  if (process.env.ENVIRONMENT?.toLowerCase() === 'production') {
    return null;
  }

  return (
    <div className="fixed right-1 bottom-1 z-50 flex h-6 items-center justify-center rounded-md bg-red-400 px-4 font-bold text-white">
      {process.env.ENVIRONMENT}
    </div>
  );
}
