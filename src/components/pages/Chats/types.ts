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
  readonly id: string;
  text: string;
  date: string;
  user_name: string;
  user_avatar: string;
}
