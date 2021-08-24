import { IUser } from '../types';

export const list: IUser[] = [
  {
    id: 1,
    name: 'User Name',
    avatar: {
      id: 1,
      image: 'https://randomuser.me/api/portraits/women/37.jpg',
    },
    league: {
      icon: '/images/program-gold.svg',
      title: 'Золотая лига',
    },
    stat: '154 очков опыта',
  },
  {
    id: 2,
    name: 'User 2 Name',
    avatar: {
      id: 1,
      image: 'https://randomuser.me/api/portraits/women/37.jpg',
    },
    league: {
      icon: '/images/program-gold.svg',
      title: 'Золотая лига',
    },
    stat: '154 очков опыта',
  },
  {
    id: 3,
    name: 'User with a long name Name',
    avatar: null,
    league: {
      icon: '/images/program-gold.svg',
      title: 'Золотая лига',
    },
    stat: '154 очков опыта',
  },
  {
    id: 4,
    name: 'User with Name',
    avatar: null,
    league: {
      icon: '/images/program-gold.svg',
      title: 'Золотая лига',
    },
    stat: '14 очков опыта',
  },
  {
    id: 5,
    name: 'User me',
    avatar: null,
    league: {
      icon: '/images/program-gold.svg',
      title: 'Золотая лига',
    },
    stat: '14 очков опыта',
  },
];
