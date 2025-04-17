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
import { AlertDialogViewProps } from './alert-dialog.types';

export function AlertDialogView({
  title,
  onConfirm,
  confirmButtonLabel,
  description,
  onCancel,
  cancelButtonLabel,
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
          >
            {cancelButtonLabel}
          </AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            {confirmButtonLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
