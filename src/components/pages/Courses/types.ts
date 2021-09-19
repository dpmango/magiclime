export interface ICategory {
  id: number;
  title: string;
}

export interface IFilter {
  categories: ICategory[];
  // level: string[];
  types: string[];
  priceRange: [string, string];
  levelRange: [string, string];
}
