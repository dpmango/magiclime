import { toast } from 'react-hot-toast';

export const copyToClipboard = (
  value: string,
  tSuccess?: string,
  tError?: string
): void => {
  const listener = (e: Event & ClipboardEvent) => {
    (e.clipboardData as DataTransfer).setData('text/plain', value);
    e.preventDefault();
  };

  try {
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);

    if (tSuccess) {
      toast.success(tSuccess);
    }
  } catch (err: any) {
    if (tError) {
      toast.error(`${tError} : ${err.message}`);
    }
  }
};
