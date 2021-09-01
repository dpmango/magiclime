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
