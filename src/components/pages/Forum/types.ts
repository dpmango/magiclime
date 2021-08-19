export interface ITab {
  id: number;
  slug: string;
  label: string;
}

export interface IForum {
  id: number;
  title: string;
  timestamp: string;
  unread: number;
  author: {
    id: number;
    name: string;
    avatar: string | null;
  };
}

export interface ICourse {
  readonly id: number;
  image: string;
  tag: string;
  title: string;
  description: string;
  progress: string;
  rate: [number, number];
}

export interface IReferral {
  readonly id: number;
  avatar?: string;
  username: string;
  btl: number;
  level: number;
  referralsCount: number;
}
