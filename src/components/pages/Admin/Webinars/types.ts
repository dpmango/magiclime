export interface IWebinar {
  readonly id: string;
  title: string;
  date: string;
  speaker: string;
  city: {
    readonly id: number;
    title: string;
  };
  zoom_url: string;
}
