export interface ICourse {
  readonly id: number; // used
  title: string; //
  status: number;
  price: string;
  category: {
    id: number;
    title: string;
  };
  subcategory: {
    id: number;
    title: string;
  };
  student_level: number;
  level: number;
  image: {
    id: number;
    image: string;
  };
}
