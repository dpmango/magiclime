import { RefObject } from 'react';
import { ComponentType } from '../../../../../../types/common';

export interface IProps {
  clickOutside: VoidFunction;
  targetRef: RefObject<HTMLDivElement>;
}

export type DropdownItem = {
  name: string;
  icon: ComponentType;
};
