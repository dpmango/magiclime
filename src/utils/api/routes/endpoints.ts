export default {
  auth: {
    root: '/auth/',
    create: '/auth/jwt/create/',
    refresh: '/auth/jwt/refresh/',
    sendEmail: '/auth/email/send/',
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
    resetPassword: '/auth/users/reset_password/',
    resetPasswordConfirm: '/auth/users/reset_password_confirm/',
  },
  profile: {
    root: '/profile/',
    pdf: '/profile/pdf/',
    options: {
      root: '/profile/options/',
      avatar: '/profile/options/avatar/',
      programs: '/profile/options/programs/',
    },
    achievements: '/profile/achievements/',
    events: '/profile/events/',
    programsList: '/matrices/programs_info/',
    getLevel: '/matrices/max_level_in_program/',
    invited: '/matrices/invited_noactive_users/',
  },
  payments: {
    root: '/payments/',
    balance: '/payments/balance/',
    balanceHistory: '/payments/balance/history/',
    bonuseHistory: '/payments/balance/bonuses_history/',
    buy: '/payments/buy/',
    sell: '/payments/sell/',
    transfer: '/payments/transfer/',
  },
  courses: {
    root: '/courses/',
    byId: (id: number | string) => `/courses/${id}/`,
    buy: (id: number | string) => `/courses/${id}/buy/`,
    status: (id: number | string) => `/courses/${id}/status/`, // todo
    currentChapter: (id: number | string) => `/courses/${id}/current_chapter/`,
    answer: (id: number | string) => `/courses/tasks/${id}/answer/`,
    completeCourse: (id: number | string) => `/courses/${id}/complete/`,
    completeChapter: (id: number | string) =>
      `/courses/chapters/${id}/complete/`,
    completeExercise: (id: number | string) =>
      `/courses/exercises/${id}/complete/`,
    recommended: '/courses/recommended/',
    active: '/courses/active/', // todo
    actual: '/courses/actual/', // todo
    my: '/courses/my/', // todo
    passed: '/courses/passed/', // todo
  },
  forum: {
    root: '/forum/',
    byId: (id: number | string) => `/forum/${id}/`,
    createTopic: (id: string) => `/forum/${id}/create_topic/`,
    getTopicList: (id: string) => `/forum/${id}/topic_list/`,
    getQuestion: (id: string) => `/topic/${id}/`,
    getAnswers: (id: string) => `/topic/${id}/answer_list/`,
    createAnswer: (id: string) => `/topic/${id}/create_answer/`,
  },
  referrals: {
    list: '/auth/users/me/referrals/',
    clones: '/matrices/clones/',
    team: '/matrices/my_team/',
    clonePlace: '/matrices/future_clone_place/',
    buy: '/matrices/buy/',
    history: '/matrices/history/',
  },
  feedback: {
    government: '/feedback/government/',
  },
  position: {
    outcoming: '/profile/position_requests/',
    incoming: '/position-requests/',
    activeIncoming: '/position-requests/active/',
    post: '/position-requests/',
    approve: (id: number | string) => `/position-requests/${id}/approve/`,
    reject: (id: number | string) => `/position-requests/${id}/reject/`,
  },
};
