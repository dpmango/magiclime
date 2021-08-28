import Cookies from 'js-cookie';
import { IPhoto } from '../../../types/interfaces/common';

export interface IChat {
  readonly id: number;
  title: string;
  avatar: IPhoto;
  messages: IMessage | null;
  unread_count: number;
}

export interface IChatDetail extends Omit<IChat, 'messages'> {
  participants_count: string;
  messages: IMessage[];
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
}

export interface ICreateChatForm {
  title: string;
  image: IPhoto;
  participants: number[];
}

export interface IGroup {
  readonly id: number;
  title: string;
}
