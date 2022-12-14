// 라우팅에 필요한 라우팅 컴포넌트에 대한 디테일들

const ROUTES = Object.freeze({
  INDEX: {
    path: '/',
    name: 'Index',
  },
  TAGS: {
    path: '/tags',
    name: 'Tags',
  },
  LOGIN: {
    path: '/login',
    name: 'Login',
  },
  SIGNUP: {
    path: '/signup',
    name: 'SignUp',
  },
  QUESTIONS: {
    path: '/questions',
    name: 'Questions',
  },
  USERS: {
    path: '/users',
    name: 'Users',
  },
  POST: {
    path: '/questions/:id',
    name: 'Post',
  },
  ASK: {
    path: '/questions/ask',
    name: 'Ask Question',
  },
  NOT_FOUND: {
    path: '*',
    name: '404NotFound',
  },
  SEARCH: {
    path: '/search',
    name: 'Search',
  },
  USER_PROFILE: {
    path: '/users/:userId/:userNickname',
    name: 'UserProfile',
  },
  USER_EDIT: {
    path: '/users/edit/:userId/:userNickname',
    name: 'UserEdit',
  },
  EDIT_POST: {
    path: '/questions/7:id/edit',
    name: 'EditPost',
  },
  EDIT_ANSWER: {
    path: '/questions/8:id/edit',
    name: 'EditAnswer',
  },
});

export default ROUTES;
