import { IPhoto } from 'types/interfaces/common';

export interface IExercis {
  id: number;
  title: string;
  content: string;
  file?: any;
  tasks: any[];
}

export interface IChapter {
  id: number;
  format: number;
  file: string;
  content: string;
  exercises: IExercis[];
}

export interface ICourseFull {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  lang: string;
  student_level: number;
  image: IPhoto;
  video?: any;
  price: string;
  level: number;
  greeting_message: string;
  congrats_message: string;
  chapters: IChapter[];
  category: { id: number; title: string };
  subcategory: { id: number; title: string };
  training_type?: any;
}

export interface ISection {
  readonly id: number;
  chapter: number;
  chapterLabel: string;
  compleated: boolean;
  available: boolean;
  current: boolean;
  label: string;
}

export interface IMultipleSelect {
  id: number;
  label: string;
  options: {
    id: number;
    label: string;
  }[];
}

export interface ITask {
  id: number;
  text?: string;
  empty?: boolean;
  multipleSelect?: IMultipleSelect[];
}
