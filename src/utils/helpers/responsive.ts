export const getMediaByLetter = (mediaLetter: string): number => {
  switch (mediaLetter) {
    case 'xs':
      return 360;
    case 's':
      return 640;
    case 'm':
      return 1024;
    case 'l':
      return 1280;
    case 'xl':
      return 1440;
    case '2xl':
      return 1920;
    default:
      return 0;
  }
};
