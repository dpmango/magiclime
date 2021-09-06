import { IPhoto } from '../../../types/interfaces/common';

export interface IChat {
  readonly id: number;
  title: string;
  avatar: IPhoto;
  last_message: IMessage | null;
  unreaded_count: number;
}

export interface IChatDetail extends Omit<IChat, 'last_message'> {
  participants_count: string;
}

export interface IMessage {
  readonly id: number;
  action?: string;
  creator: {
    readonly id: number;
    name: string;
    avatar: IPhoto | null;
  };
  text: string;
  created_at: string;
  reply_to?: {
    readonly id: number;
    text: string;
    creator: {
      readonly id: number;
      name: string;
      avatar: IPhoto | null;
    };
  };
  attached_files: [];
  attached_images: IPhoto[];
}

export interface ICreateChatForm {
  title: string;
  avatar: IPhoto;
  participants: number[];
}

export interface IGroup {
  readonly id: number;
  title: string;
}

export type MessageFile = { id: number; file: File } | IPhoto;
