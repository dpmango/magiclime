import { IPhoto, ICategory } from './common';

export interface ICourse {
  readonly id: number; // used
  title: string;
  image: IPhoto;
  category: ICategory;
  subcategory: ICategory;
  status: number; // 1 | 2 | 3 ?
  price: string;
  student_level: number;
  level: number;
  is_bought: boolean;
}
