import { atom } from 'recoil';

const usersState = atom({
  key: 'usersState',
  default:
    localStorage.getItem('token') && localStorage.getItem('token') !== undefined
      ? true
      : false,
});

export default usersState;
