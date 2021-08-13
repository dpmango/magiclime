import { IReferal, IReferalGroup } from 'components/pages/Profile/types';

export const referalRoot: IReferal = {
  id: 99,
  avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  username: 'MyUserLogin',
  btl: 153.13,
  level: 5,
  referalsCount: 10,
};

export const referalsList: IReferalGroup[] = [
  {
    id: 1,
    referal: {
      id: 1,
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      username: 'AnotherUser',
      btl: 153.13,
      level: 1,
      referalsCount: 17,
    },
    referals: [
      {
        id: 2,
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        username: 'AnotherUser',
        btl: 0,
        level: 4,
        referalsCount: 0,
      },
      {
        id: 3,
        username: 'This user have a very very very long name',
        btl: 0,
        level: 4,
        referalsCount: 0,
      },
    ],
  },
  {
    id: 2,
    referal: {
      id: 10,
      avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
      username: 'AnotherUser',
      btl: 123.13,
      level: 1,
      referalsCount: 17,
    },
    referals: [
      {
        id: 11,
        avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
        username: 'AnotherUser with long name',
        btl: 424,
        level: 4,
        referalsCount: 100,
      },
      {
        id: 12,
        username: 'AnotherUser',
        btl: 0,
        level: 4,
        referalsCount: 0,
      },
    ],
  },
];
