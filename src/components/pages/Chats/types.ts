import { IPhoto } from '../../../types/interfaces/common';

export interface IChat {
  readonly id: string;
  name: string;
  image: string;
  last_message: string;
  last_message_time: string;
  unread_count: number;
  members_count: number;
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
