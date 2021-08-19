import { ICourse, IType } from 'types/interfaces/courses';
import { ICourse as IProfileCourse } from 'components/pages/Profile/types';

export const mockProfileCourses: IProfileCourse[] = [
  {
    id: 1,
    image: '/images/course-image.jpg',
    tag: 'Маркетинг',
    title: 'SEO-специалист с нуля до PRO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod...',
    progress: 'Не отслеживается',
    rate: [7.5, 10],
  },
];

export const mockCourses: ICourse[] = [
  {
    id: 1,
    category: 1,
    title: 'Интернет-маркетолог',
    type: 'Онлайн-курс',
    duration: 12,
    image: '/images/category-image.svg',
  },
  {
    id: 2,
    category: 2,
    title: 'SMM специалист',
    type: 'Онлайн-курс',
    duration: 9,
    image: '/images/category-image.svg',
  },
  {
    id: 3,
    category: 3,
    title: 'Таргетолог с нуля до PRO',
    type: 'Онлайн-курс',
    duration: 5,
    image: '/images/category-image.svg',
  },
  {
    id: 4,
    category: 4,
    title: 'SEO-специалист с нуля до PRO',
    type: 'Онлайн-курс',
    duration: 7,
    image: '/images/category-image.svg',
  },
  {
    id: 5,
    category: 5,
    title: 'Редактор с нуля до PRO',
    type: 'Онлайн-курс',
    duration: 9,
    image: '/images/category-image.svg',
  },
  {
    id: 6,
    category: 6,
    title: 'Копирайтер с нуля до PRO',
    type: 'Онлайн-курс',
    duration: 10,
    image: '/images/category-image.svg',
  },
  {
    id: 7,
    category: 7,
    title: 'Instagram-маркетолог',
    type: 'Онлайн-курс',
    duration: 14,
    image: '/images/category-image.svg',
  },
  {
    id: 8,
    category: 8,
    title: 'PR-менеджер',
    type: 'Онлайн-курс',
    duration: 9,
    image: '/images/category-image.svg',
  },
  {
    id: 9,
    category: 9,
    title: 'Event-менеджер',
    type: 'Онлайн-курс',
    duration: 12,
    image: '/images/category-image.svg',
  },
  {
    id: 10,
    category: 7,
    title: 'Fullstack маркетолог',
    type: 'Онлайн-курс',
    duration: 24,
    image: '/images/category-image.svg',
  },
];

export const tags: IType[] = [
  {
    id: 1,
    label: 'Маркетинг',
  },
  {
    id: 2,
    label: 'Финансы',
  },
  {
    id: 3,
    label: 'Языки',
  },
  {
    id: 4,
    label: 'Личный рост',
  },
  {
    id: 5,
    label: 'Инстаграм',
  },
  {
    id: 6,
    label: 'Программирование',
  },
  {
    id: 7,
    label: 'Инвестиции',
  },
  {
    id: 9,
    label: 'Общеобразовательные',
  },
];
