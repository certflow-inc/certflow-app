'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { LoaderCircle } from 'lucide-react';
import { AlertDialogViewProps } from './alert-dialog.types';

export function AlertDialogView({
  title,
  onConfirm,
  confirmButtonLabel,
  description,
  onCancel,
  cancelButtonLabel,
  isProcess = false,
  ...props
}: AlertDialogViewProps) {
  return (
    <AlertDialog {...props}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription
            data-visible={!!description}
            className="hidden data-[visible=true]:block"
          >
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            data-visible={!!onCancel && !!cancelButtonLabel}
            className="hidden data-[visible=true]:block"
            onClick={onCancel}
            disabled={isProcess}
          >
            {cancelButtonLabel}
          </AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} disabled={isProcess}>
            <div className="flex items-center gap-2">
              {confirmButtonLabel}
              {isProcess && (
                <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
              )}
            </div>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
