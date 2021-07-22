import { ThemePreset } from '@consta/uikit/Theme';
import { presetGpnDefault } from './presets/presetGpnDefault';
import { presetGpnDark } from './presets/presetGpnDark';

type ThemeName = 'gpnDefault' | 'gpnDark';

export const getPreset = (themeName: ThemeName): ThemePreset => {
  const obj = {
    gpnDefault: presetGpnDefault,
    gpnDark: presetGpnDark,
  };
  return obj[themeName] || presetGpnDefault;
};
