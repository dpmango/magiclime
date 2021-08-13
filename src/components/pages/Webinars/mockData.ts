import { IType } from 'types/interfaces/courses';
import { IWebinar } from './types';

export const tags: IType[] = [
  {
    id: 1,
    label: 'Все вебинары',
  },
  {
    id: 2,
    label: 'Мероприятия',
  },
  {
    id: 3,
    label: 'Встречи',
  },
];

export const mockWebinars: IWebinar[] = [
  {
    id: 1,
    title: 'Представление информации и данных. Создание презентаций',
    description:
      'В курсе есть всё, что нужно для дистанционного обучения: видеоуроки, домашние задания....',
    tags: ['Дизайн'],
    referals: [
      {
        id: 1,
        avatar: {
          id: 1,
          image: 'https://randomuser.me/api/portraits/women/15.jpg',
        },
        name: 'R A',
      },
      {
        id: 2,
        avatar: {
          id: 2,
          image: 'https://randomuser.me/api/portraits/men/15.jpg',
        },
        name: 'R A',
      },
      {
        id: 3,
        avatar: {
          id: 3,
          image: 'https://randomuser.me/api/portraits/women/15.jpg',
        },
        name: 'R A',
      },
      {
        id: 4,
        avatar: {
          id: 4,
          image: 'https://randomuser.me/api/portraits/men/19.jpg',
        },
        name: 'R A',
      },
      {
        id: 5,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        name: 'R A',
      },
      {
        id: 6,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        name: 'R A',
      },
      {
        id: 7,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        name: 'R A',
      },
      {
        id: 8,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        name: 'R A',
      },
      {
        id: 9,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        name: 'R A',
      },
      {
        id: 11,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        name: 'R A',
      },
      {
        id: 51,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        name: 'R A',
      },
    ],
    author: {
      name: 'A B',
    },
  },
  {
    id: 2,
    title: 'Представление информации и данных. Создание презентаций',
    description:
      'В курсе есть всё, что нужно для дистанционного обучения: видеоуроки, домашние задания....',
    tags: ['Дизайн', 'Разработка', 'Прочее'],
    referals: [
      {
        id: 1,
        avatar: {
          id: 1,
          image: 'https://randomuser.me/api/portraits/women/15.jpg',
        },
        name: 'R A',
      },
      {
        id: 2,
        avatar: {
          id: 2,
          image: 'https://randomuser.me/api/portraits/men/15.jpg',
        },
        name: 'R A',
      },
      {
        id: 3,
        avatar: {
          id: 3,
          image: 'https://randomuser.me/api/portraits/women/15.jpg',
        },
        name: 'R A',
      },
      {
        id: 8,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        name: 'R A',
      },
      {
        id: 9,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        name: 'R A',
      },
      {
        id: 11,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        name: 'R A',
      },
      {
        id: 51,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        name: 'R A',
      },
    ],
    author: {
      name: 'A B',
    },
  },
];
