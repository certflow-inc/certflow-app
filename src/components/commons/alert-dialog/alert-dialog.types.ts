import { AlertDialogProps } from '@radix-ui/react-alert-dialog';

export type AlertDialogViewProps = AlertDialogProps & {
  title: string;
  onConfirm: () => void;
  confirmButtonLabel: string;
  description?: string;
  onCancel?: () => void;
  cancelButtonLabel?: string;
};
