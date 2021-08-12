import { RefObject } from 'react';
import { ComponentType } from '../../../../types/common';

export interface IUserDropdownProps {
  clickOutside: VoidFunction;
  targetRef: RefObject<HTMLDivElement>;
  changeTheme: VoidFunction;
  theme: 'dark' | 'default';
}

export type UserDropdownItem = {
  name: string;
  icon?: ComponentType;
  image?: string;
  path?: string;
  switch?: boolean;
  clickCallback?: VoidFunction;
  group?: number;
  menu?: UserDropdownItem[];
};
