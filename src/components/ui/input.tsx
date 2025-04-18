'use client';

import { cn } from '@/lib/utils';
import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';

export type InputProps = React.ComponentProps<'input'> & {
  error?: string;
  icon?: React.ReactNode;
};
function Input({ className, type, error, icon, ...props }: InputProps) {
  const isPassword = type === 'password';
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex flex-col gap-1">
      <div className="relative">
        <input
          type={!showPassword ? type : 'text'}
          data-slot="input"
          data-error={!!error}
          className={cn(
            'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent py-1 pl-3 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-lg',
            'focus-visible:border-primary-500 focus-visible:ring-primary-500/50 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            'py-6 pr-10',
            'data-[error=true]:ring-destructive/20 data-[error=true]:border-destructive',
            className
          )}
          {...props}
        />
        {isPassword && (
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            <Button
              tabIndex={-1}
              type="button"
              variant="ghost"
              onClick={() => setShowPassword(!showPassword)}
              size="icon"
            >
              {!showPassword ? (
                <EyeClosed className="text-muted-foreground" />
              ) : (
                <Eye className="text-muted-foreground" />
              )}
            </Button>
          </div>
        )}
        {!isPassword && icon && (
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>

      <small className="min-h-5 pl-2 text-sm text-red-400">{error}</small>
    </div>
  );
}

export { Input };
