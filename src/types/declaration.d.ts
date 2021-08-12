declare module '*.png' {
  const png: any;
  export default png;
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

import 'react-i18next';
declare module 'react-i18next' {
  export interface Resources {
    ru: typeof import('../../public/locales/ru/translation.json');
    en: typeof import('../../public/locales/en/translation.json');
  }
}
