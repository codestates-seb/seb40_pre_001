import React from 'react';

import { ROUTES } from '../constants';
import { Nav } from '../components/@Layout';

import { lazy } from 'react';
import Layout from './PagesLayout/Layout';
import Tags from './Tags/Tags';
import Login from './AuthPage/Login';
import SignUp from './AuthPage/Signup';
import Users from './Users/Users';
import UserProfile from './UserProfile/UserProfile';
import NotFound from './404/404';
import Search from './Search/Search';
import EditPostPage from './Questions/Edit/EditPost';
import EditAnswerPage from './Questions/Edit/EditAnswer';
import AskPage from './Questions/ASK/AskPage';

const Questions = lazy(() => import('./Questions/Questions'));
const Post = lazy(() => import('./Questions/Post/Post'));

// Layout 하위로 페이지 라우팅
const PAGES = [
  {
    element: <Layout />,
    children: [
      {
        name: ROUTES.INDEX.name,
        path: ROUTES.INDEX.path,
        element: <Questions />,
      },
      {
        name: ROUTES.QUESTIONS.name,
        path: ROUTES.QUESTIONS.path,
        element: <Questions />,
      },
      {
        // post 관련 edit은 params 앞에 7 이 붙는다
        name: ROUTES.EDIT_POST.name,
        path: ROUTES.EDIT_POST.path,
        element: <EditPostPage />,
      },
      {
        // answer 관련 edit은 params 앞에 8 이 붙는다
        name: ROUTES.EDIT_ANSWER.name,
        path: ROUTES.EDIT_ANSWER.path,
        element: <EditAnswerPage />,
      },
      {
        name: ROUTES.TAGS.name,
        path: ROUTES.TAGS.path,
        element: <Tags />,
      },

      {
        name: ROUTES.POST.name,
        path: ROUTES.POST.path,
        element: <Post />,
      },
      {
        name: ROUTES.SEARCH.name,
        path: ROUTES.SEARCH.path,
        element: <Search />,
      },
      {
        name: ROUTES.USERS.name,
        path: ROUTES.USERS.path,
        element: <Users />,
      },
      {
        name: ROUTES.USERPROFILE.name,
        path: ROUTES.USERPROFILE.path,
        element: <UserProfile />,
      },
    ],
  },
  {
    element: <Nav />,
    children: [
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
    ],
  },
  {
    name: ROUTES.NOT_FOUND.name,
    path: ROUTES.NOT_FOUND.path,
    element: <NotFound />,
  },
  { name: ROUTES.ASK.name, path: ROUTES.ASK.path, element: <AskPage /> },
];

export default PAGES;
