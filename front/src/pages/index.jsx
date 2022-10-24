import React from 'react';
import Home from './Home';
import Layout from './pagesLayout/Layout';

import { ROUTES } from '../constants';

const PAGES = [
  {
    name: <Layout />,
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
