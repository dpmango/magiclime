interface IWebinarReferal {
  readonly id: number;
  avatar: string;
}

interface IWebinarAuthor {
  name: string;
  avatar?: string;
}

export interface IWebinar {
  readonly id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  referals: IWebinarReferal[];
  referalsTotal: number;
  author: IWebinarAuthor;
}
