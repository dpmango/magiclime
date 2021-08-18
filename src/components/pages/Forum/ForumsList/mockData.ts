import { IForum } from '../types';

export const list: IForum[] = [
  {
    id: 1,
    title: 'Инструментарий для моделирования архитектуры',
    timestamp: '9 июня 2021 в 16:03',
    author: {
      id: 1,
      name: 'Елена Анатольевна',
      avatar: null,
    },
    unread: 49,
  },
  {
    id: 2,
    title: 'моделирования архитектуры',
    timestamp: '2 июня 2021 в 16:03',
    author: {
      id: 1,
      name: 'Всеволод Анатольевич',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    unread: 0,
  },
  {
    id: 3,
    title:
      'Очень длинное название которое может не поместиться сюда архитектуры',
    timestamp: '29 июня 2021 в 16:03',
    author: {
      id: 1,
      name: 'Петр Иванович ',
      avatar: null,
    },
    unread: 3,
  },
  {
    id: 4,
    title: 'Инструментарий для моделирования архитектуры',
    timestamp: '30 июня 2020 в 16:03',
    author: {
      id: 1,
      name: 'Елена Витальевич',
      avatar: null,
    },
    unread: 35,
  },
];
