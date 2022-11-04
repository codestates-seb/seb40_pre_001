import React from 'react';
import { Navigate, Outlet, redirect } from 'react-router-dom';
import { ROUTES } from '../../constants/index';

const ProtectedRoute = (when, redirectPath = ROUTES.QUESTIONS.path) => {
  if (!when) {
    redirect(ROUTES.QUESTIONS.path);

    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
