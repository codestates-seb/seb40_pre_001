// 라우팅에 필요한 라우팅 컴포넌트에 대한 디테일들

const ROUTES = Object.freeze({
  HOME: {
    path: '/',
    name: 'Home',
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
  USERPROFILE: {
    path: '/userprofile',
    name: 'UserPofile',
  },
});

export default ROUTES;
