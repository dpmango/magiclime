import { toast } from 'react-hot-toast';

export const copyToClipboard = (
  value: string,
  tSucces?: string,
  tError?: string
): void => {
  const textArea = document.createElement('textarea');
  textArea.value = value;
  textArea.style.opacity = '0';
  textArea.style.position = 'absolute';
  textArea.style.top = window.scrollY ? `${window.scrollY}px` : '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    const msg = successful ? 'successful' : 'unsuccessful';
    if (tSucces) {
      toast.success(tSucces);
    }
  } catch (err) {
    if (tError) {
      toast.error(`${tError} : ${err.message}`);
    }
  }

  // document.body.removeChild(textArea);
};
