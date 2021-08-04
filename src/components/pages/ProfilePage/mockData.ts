import { IProgram, IActivementsGroups, IEvent, ICourse } from './types';

export const mockPrograms: IProgram[] = [
  {
    id: 1,
    profit: 3.13,
    background: 'green',
    image: 'images/program-silver.svg',
    title: 'BitLime',
    matrixLevel: 2,
    level: 3,
    league: 'Серебрянная',
    progress: [3, 17],
    referals: [
      { id: 1, avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
      { id: 2, avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
      { id: 3, avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
      { id: 4, avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
      { id: 5, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    ],
    referalsTotal: 17,
  },
  {
    id: 2,
    profit: 3.13,
    background: 'lime',
    image: 'images/program-gold.svg',
    title: 'Лайм',
    matrixLevel: 2,
    level: 8,
    league: 'Золотая',
    progress: [8, 15],
    referals: [
      { id: 1, avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
      { id: 2, avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
      { id: 3, avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
      { id: 4, avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
      { id: 5, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    ],
    referalsTotal: 12,
  },
  {
    id: 3,
    profit: 3.13,
    background: 'blue',
    image: 'images/program-silver.svg',
    title: 'Дом',
    matrixLevel: 2,
    level: 3,
    league: 'Серебрянная',
    progress: [5, 10],
    referals: [
      { id: 1, avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
      { id: 2, avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
      { id: 3, avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
      { id: 4, avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
      { id: 5, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    ],
    referalsTotal: 7,
  },
  {
    id: 4,
    profit: 3.13,
    background: 'violet',
    image: 'images/program-silver.svg',
    title: 'Авто Премиум',
    matrixLevel: 2,
    level: 1,
    league: 'Серебрянная',
    progress: [5, 17],
    referals: [],
    referalsTotal: 0,
  },
];

export const mockAchivements: IActivementsGroups[] = [
  {
    id: 1,
    image: 'images/achivement-1.svg',
    title: 'Заголовок группы достижений',
    stats: {
      compleated: 2,
      total: 10,
    },
    list: [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        compleated: true,
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        compleated: false,
      },
    ],
  },
  {
    id: 2,
    image: 'images/achivement-2.svg',
    title: 'Заголовок группы достижений',
    stats: {
      compleated: 1,
      total: 35,
    },
    list: [
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        compleated: true,
      },
      {
        id: 4,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        compleated: true,
      },
    ],
  },
  {
    id: 3,
    image: 'images/achivement-2.svg',
    title: 'Заголовок группы достижений',
    stats: {
      compleated: 1,
      total: 35,
    },
    list: [
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        compleated: true,
      },
      {
        id: 4,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        compleated: true,
      },
    ],
  },
];

export const mockEvents: IEvent[] = [
  { id: 1, title: '+ 15 опыта' },
  { id: 2, title: 'Вебинар “SEO-специалист” скоро начнётся' },
  { id: 3, title: 'Вы не окончили курс “Instagram-маркетолог”' },
  { id: 4, title: '+ 15 опыта' },
  { id: 5, title: '+ 15 опыта' },
];

export const mockCourses: ICourse[] = [
  {
    id: 1,
    image: 'images/course-image.jpg',
    tag: 'Маркетинг',
    title: 'SEO-специалист с нуля до PRO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod...',
    progress: 'Не отслеживается',
    rate: [7.5, 10],
  },
];
