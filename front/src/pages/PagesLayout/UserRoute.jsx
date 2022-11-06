import React from 'react';
import { useRecoilValue } from 'recoil';
import { usersState } from '../../store';
import ProtectedRoute from './ProtectedRoute';

const AuthRoutes = () => {
  const isAuthenticated = useRecoilValue(usersState);

  console.log('isAuth', isAuthenticated);

  // if (!isAuthenticated) {
  //   return <ProtectedRoute when={isAuthenticated} />;
  // }

  return <ProtectedRoute when={!isAuthenticated} />;
};

export default AuthRoutes;
