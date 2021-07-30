import React from 'react';
import { createIcon } from '@consta/uikit/createIcon';

export const createConstaIcon = (
  Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  name: string
) =>
  createIcon({
    m: Icon,
    s: Icon,
    xs: Icon,
    name,
  });
