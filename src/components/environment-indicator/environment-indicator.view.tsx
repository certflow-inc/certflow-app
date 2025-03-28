export function EnvironmentIndicatorView() {
  if (process.env.ENVIRONMENT?.toLowerCase() === 'production') {
    return null;
  }

  return (
    <div className="bg-primary-500 fixed top-0 right-0 left-0 flex h-6 items-center justify-center font-bold text-white">
      {process.env.ENVIRONMENT}
    </div>
  );
}
