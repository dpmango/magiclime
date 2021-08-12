import { IPhoto } from '../../../types/interfaces/common';

export interface IChat {
  readonly id: number;
  title: string;
  type: number;
  image: string;
  messages: IMessage[];
  unread_count: number;
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
}

export interface IFriend {
  readonly id: number;
  name: string;
  image: string;
}
