import React from 'react';

import Layout from './PagesLayout/Layout';
import Home from './Home';
import About from './About';
import Login from './AuthPage/Login';
import SignUp from './AuthPage/Signup';
import Questions from './Questions/Questions';
// import PostPage from './Questions/Post/Post';

import { ROUTES } from '../constants';

// Layout 하위로 페이지 라우팅
const PAGES = [
  {
    element: <Layout />,
    children: [
      {
        name: ROUTES.HOME.name,
        path: ROUTES.HOME.path,
        element: <Home />,
      },
      {
        name: ROUTES.ABOUT.name,
        path: ROUTES.ABOUT.path,
        element: <About />,
      },
      {
        name: ROUTES.LOGIN.name,
        path: ROUTES.LOGIN.path,
        element: <Login />,
      },
      {
        name: ROUTES.SIGNUP.name,
        path: ROUTES.SIGNUP.path,
        element: <SignUp />,
      },
      {
        name: ROUTES.QUESTIONS.name,
        path: ROUTES.QUESTIONS.path,
        element: <Questions />,
        // children: [
        //   {
        //     name: ROUTES.POST.name,
        //     path: ROUTES.POST.path,
        //     element: <PostPage />,
        //   },
        // ],
      },
    ],
  },
];

export default PAGES;
