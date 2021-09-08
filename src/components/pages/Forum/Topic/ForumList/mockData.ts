import { IForum } from '../../types';

export const list: IForum[] = [
  {
    id: 1,
    title: 'Инструментарий для моделирования архитектуры',
    timestamp: 'сегодня в 14:22',
    author: {
      id: 1,
      name: 'Елена Анатольевна',
      avatar: null,
    },
    unread: 49,
    views: 0,
  },
  {
    id: 2,
    title: 'моделирования архитектуры',
    timestamp: 'вчера',
    author: {
      id: 1,
      name: 'Всеволод Анатольевич',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    unread: 0,
    views: 0,
  },
  {
    id: 3,
    title:
      'Очень длинное название которое может не поместиться сюда архитектуры',
    timestamp: 'вчера',
    author: {
      id: 1,
      name: 'Петр Иванович ',
      avatar: null,
    },
    unread: 3,
    views: 0,
  },
  {
    id: 4,
    title: 'Инструментарий для моделирования архитектуры',
    timestamp: 'вчера',
    author: {
      id: 1,
      name: 'Елена Витальевич',
      avatar: null,
    },
    unread: 35,
    views: 0,
  },
];
