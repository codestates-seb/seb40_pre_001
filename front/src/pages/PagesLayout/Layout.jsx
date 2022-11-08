import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from '../../components/@common/Spinner';
import { Nav, Footer, LeftSidebar } from '../../components/@Layout';
import * as S from './Layout.style';

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Nav />
        <S.Container>
          <LeftSidebar />
          <Outlet />
        </S.Container>
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
