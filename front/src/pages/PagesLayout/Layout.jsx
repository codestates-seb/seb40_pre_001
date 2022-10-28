import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav, Footer, LeftSidebar } from '../../components/@common/Layout';
import * as S from './Layout.style';

<<<<<<< HEAD
const paths = ['/login', '/signup'];
=======
const paths = Object.freeze(['/login', '/signup']);
>>>>>>> 1675333802cb9e7665c0432a6457815e261d4d64

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
      {!isIncluded && <Footer />}
    </>
  );
};

export default Layout;
