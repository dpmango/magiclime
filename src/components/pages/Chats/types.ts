import { IPhoto } from '../../../types/interfaces/common';

export interface IChat {
  readonly id: number;
  title: string;
  avatar: IPhoto;
  last_message: IMessage | null;
  unreaded_count: number;
}

interface IImageMessage extends IPhoto {
  name: string;
  size: number;
}

interface IFileMessage {
  readonly id: number;
  file: string;
  name: string;
  size: number;
}

export interface IChatDetail extends Omit<IChat, 'last_message'> {
  participants_count: string;
  count_of_messages: number;
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
  attached_files: IFileMessage[];
  attached_images: IImageMessage[];
  chat: number;
  read_by_users: number[];
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
