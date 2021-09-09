import { IProgram, IEvent } from './types';

export const mockPrograms: IProgram[] = [
  {
    id: 1,
    profit: 3.13,
    background: 'green',
    image: '/images/program-silver.svg',
    title: 'BitLime',
    matrixLevel: 2,
    level: 3,
    league: 'Серебрянная',
    progress: [3, 17],
    referrals: [
      {
        id: 1,
        avatar: {
          id: 1,
          image: 'https://randomuser.me/api/portraits/women/15.jpg',
        },
      },
      { id: 2, avatar: { id: 2, image: '' }, name: 'A B ' },
      {
        id: 3,
        avatar: {
          id: 3,
          image: 'https://randomuser.me/api/portraits/women/15.jpg',
        },
      },
      {
        id: 4,
        avatar: {
          id: 4,
          image: 'https://randomuser.me/api/portraits/men/19.jpg',
        },
      },
      {
        id: 5,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
      },
      {
        id: 6,
        avatar: {
          id: 6,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
      },
    ],
    referralsTotal: 17,
  },
  {
    disabled: true,
    id: 2,
    profit: 3.13,
    background: 'lime',
    image: '/images/program-gold.svg',
    title: 'Лайм',
    matrixLevel: 2,
    level: 8,
    league: 'Золотая',
    progress: [8, 15],
    referrals: [
      {
        id: 1,
        avatar: {
          id: 1,
          image: 'https://randomuser.me/api/portraits/women/15.jpg',
        },
      },
      { id: 2, avatar: { id: 2, image: '' }, name: 'A B ' },
      {
        id: 3,
        avatar: {
          id: 3,
          image: 'https://randomuser.me/api/portraits/women/5.jpg',
        },
      },
      {
        id: 4,
        avatar: {
          id: 4,
          image: 'https://randomuser.me/api/portraits/men/9.jpg',
        },
      },
      {
        id: 5,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
      },
      {
        id: 7,
        avatar: {
          id: 6,
          image: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
      },
      {
        id: 8,
        avatar: {
          id: 6,
          image: 'https://randomuser.me/api/portraits/men/3.jpg',
        },
      },
    ],
    referralsTotal: 12,
  },
  {
    disabled: true,
    id: 3,
    profit: 3.13,
    background: 'blue',
    image: '/images/program-silver.svg',
    title: 'Дом',
    matrixLevel: 2,
    level: 3,
    league: 'Серебрянная',
    progress: [5, 10],
    referrals: [
      {
        id: 1,
        avatar: {
          id: 1,
          image: 'https://randomuser.me/api/portraits/women/15.jpg',
        },
      },
      { id: 2, avatar: { id: 2, image: '' }, name: 'A B ' },
      {
        id: 3,
        avatar: {
          id: 3,
          image: 'https://randomuser.me/api/portraits/women/15.jpg',
        },
      },
      {
        id: 4,
        avatar: {
          id: 4,
          image: 'https://randomuser.me/api/portraits/men/19.jpg',
        },
      },
      {
        id: 5,
        avatar: {
          id: 5,
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
      },
    ],
    referralsTotal: 7,
  },
  {
    disabled: true,
    id: 4,
    profit: 3.13,
    background: 'violet',
    image: '/images/program-silver.svg',
    title: 'Авто Премиум',
    matrixLevel: 2,
    level: 1,
    league: 'Серебрянная',
    progress: [5, 17],
    referrals: [],
    referralsTotal: 0,
  },
];

export const mockEvents: IEvent[] = [
  { id: 1, title: '+ 15 опыта' },
  { id: 2, title: 'Вебинар “SEO-специалист” скоро начнётся' },
  { id: 3, title: 'Вы не окончили курс “Instagram-маркетолог”' },
  { id: 4, title: '+ 15 опыта' },
  { id: 5, title: '+ 15 опыта' },
];
