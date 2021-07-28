import { useTheme } from '@consta/uikit/Theme';

export const useCheckDefaultTheme = (): boolean => {
  const { theme } = useTheme();
  return theme.color.primary === 'gpnDefault';
};
