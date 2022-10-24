import React from 'react';
import Home from './Home';
import Layout from './pagesLayout/Layout';

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
    ],
  },
];

export default PAGES;
