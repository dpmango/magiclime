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
