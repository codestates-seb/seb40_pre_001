import { atom } from 'recoil';

const usersState = atom({
  key: 'usersState',
  default: {
    isAuthenticated:
      localStorage.getItem('token') &&
      localStorage.getItem('token') !== undefined
        ? true
        : false,
    currentUser: 'anonymous',
  },
});

export default usersState;
