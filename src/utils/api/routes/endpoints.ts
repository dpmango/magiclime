export default {
  auth: {
    root: '/auth/',
    create: '/auth/jwt/create/',
    refresh: '/auth/jwt/refresh/',
  },
  admin: {
    root: '/admin/',
    users: '/admin/users/',
    usersExport: '/admin/users/export/',
    webinars: '/admin/webinars/',
    blockUser: (id: string) => `/admin/users/${id}/block/`,
  },
  users: {
    root: '/auth/users/',
    me: '/auth/users/me/',
    byId: (id: number | string) => `/auth/users/${id}/`,
    password: '/auth/users/set_password/',
  },
  courses: {
    root: '/courses/',
    byId: (id: number | string) => `/courses/${id}/`,
    buy: (id: number | string) => `/courses/${id}/buy/`,
    status: (id: number | string) => `/courses/${id}/status/`, // todo
    active: '/courses/active/', // todo
    actual: '/courses/actual/', // todo
    my: '/courses/my/', // todo
    passed: '/courses/passed/', // todo
  },
  profile: {
    root: '/profile/',
    pdf: '/profile/pdf/',
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
