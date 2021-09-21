import { IPhoto } from 'types/interfaces/common';

export interface IForumMember {
  readonly id: number;
  avatar: string;
  username: string;
}

export interface IForum {
  readonly id: number;
  name: string;
  description: string;
  topics_count: number;
  members: IForumMember[];
  last_activity_date?: any;
  last_answer?: {
    author_avatar?: string;
    text: string;
  };
  image: string;
}

export interface IAnswer {
  readonly id: number;
  text: string;
  author: {
    readonly id: number;
    name: string;
    avatar: string;
  };
  create_date: string;
}

export interface ITopicListItem {
  readonly id: number;
  name: string;
  description: string;
  creator: {
    readonly id: number;
    name: string;
    avatar: string;
  };
  create_date: string;
  answers_count: number;
  last_activity_date: string;
  views_count: number;
}

export interface ITopic {
  readonly id: 1;
  description: string;
  name: string;
}

export interface IQuestion {
  readonly id: number;
  readonly forum_id: number;
  name: string;
  description: string;
  creator: {
    readonly id: number;
    name: string;
    avatar: string;
  };
  answers_count: number;
  create_date: string;
}
