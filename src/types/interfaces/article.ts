export interface IArticle {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  tags: [
    {
      id: number;
      title: string;
    }
  ];
  text: string;
  author_image: {
    id: number;
    image: string;
  };
  image: {
    id: number;
    image: string;
  };
}

export interface IArticlesList {
  count?: number;
  next?: number;
  previous?: number;
  results: IArticle[];
}
