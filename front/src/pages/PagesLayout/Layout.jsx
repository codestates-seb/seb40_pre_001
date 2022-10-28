import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav, Footer, LeftSidebar } from '../../components/@common/Layout';
import * as S from './Layout.style';

const paths = Object.freeze(['/login', '/signup']);

const Layout = () => {
  const { pathname } = useLocation();

  const isIncluded = paths.includes(pathname);

  return (
    <>
      <Nav />
      <S.Container>
        {!isIncluded && <LeftSidebar />}
        <Outlet />
      </S.Container>
      {!isIncluded && <Footer />}
    </>
  );
};

export default Layout;
