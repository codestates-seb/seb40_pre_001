// 라우팅에 필요한 라우팅 컴포넌트에 대한 디테일들

const ROUTES = Object.freeze({
  HOME: {
    path: '/',
    name: 'Home',
  },
  ABOUT: {
    path: '/about',
    name: 'About',
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
  POST: {
    path: '/questions/:id',
    name: 'Post',
  },
  USERS: {
    path: '/users',
    name: 'Users',
  },
});

export default ROUTES;
