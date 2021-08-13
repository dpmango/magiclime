import { IPhoto } from '../../../types/interfaces/common';

export interface ISpeaker {
  readonly id: number;
  name: string;
  avatar: IPhoto | null;
  description: string;
  position: string;
}
