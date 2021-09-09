export default {
  auth: {
    root: '/auth/',
    create: '/auth/jwt/create/',
    refresh: '/auth/jwt/refresh/',
  },
  users: {
    root: '/auth/users/',
    me: '/auth/users/me/',
    byId: (id: number | string) => `/auth/users/${id}/`,
    password: '/auth/users/set_password/',
  },
  profile: {
    root: '/profile/',
    options: {
      root: '/profile/options/',
      avatar: '/profile/options/avatar/',
    },
    achievements: '/profile/achievements/', // todo
    events: '/profile/events/', // todo
  },
  payments: {
    root: '/payments/',
    balance: '/payments/balance/',
    buy: '/payments/buy/',
    sell: '/payments/sell/', // todo
  },
};
