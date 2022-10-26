import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav, Footer, LeftSidebar } from '../../components/@common/Layout';
import * as S from './Layout.style';

const paths = ['/login'];

const Layout = () => {
  const { pathname } = useLocation();

  const isIncluded = paths.includes(pathname);

  console.log(isIncluded);

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
