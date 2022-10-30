import React from 'react';

import Layout from './PagesLayout/Layout';
import Home from './Home';
import Tags from './Tags';
import Login from './AuthPage/Login';
import SignUp from './AuthPage/Signup';
import Questions from './Questions/Questions';
// import PostPage from './Questions/Post/Post';

import { ROUTES } from '../constants';
import Ask from './Questions/ASK/Ask';

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
        name: ROUTES.TAGS.name,
        path: ROUTES.TAGS.path,
        element: <Tags />,
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
