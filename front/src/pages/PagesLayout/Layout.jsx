import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav, Footer, LeftSidebar } from '../../components/@Layout';
import * as S from './Layout.style';

const paths = Object.freeze(['/login', '/signup', '/questions/ask', '/404']);

const Layout = () => {
  const { pathname } = useLocation();

  const isIncluded = paths.includes(pathname);

  return (
    <>
      <Nav />
      {isIncluded ? (
        <S.Container className='NonMaxWidth'>
          {!isIncluded && <LeftSidebar />}
          <Outlet />
        </S.Container>
      ) : (
        <S.Container>
          {!isIncluded && <LeftSidebar />}
          <Outlet />
        </S.Container>
      )}
      {!isIncluded || pathname.includes('questions') ? <Footer /> : null}
    </>
  );
};

export default Layout;
