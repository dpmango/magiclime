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
      { id: 1, avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
      { id: 2, avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
      { id: 3, avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
      { id: 4, avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
      { id: 5, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    ],
    referalsTotal: 17,
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
      { id: 1, avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
      { id: 2, avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
      { id: 3, avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
      { id: 4, avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
      { id: 5, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    ],
    referalsTotal: 7,
    author: {
      name: 'A B',
    },
  },
];
