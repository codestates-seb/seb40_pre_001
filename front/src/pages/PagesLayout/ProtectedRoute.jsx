import React from 'react';
import { Navigate, Outlet, redirect } from 'react-router-dom';
import { ROUTES } from '../../constants/index';

const ProtectedRoute = (when, redirectPath = ROUTES.LOGIN.path) => {
  if (!when) {
    redirect(ROUTES.LOGIN.path);

    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
