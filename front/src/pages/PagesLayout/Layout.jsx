import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer, LeftSidebar } from '../../components/@Layout';
import * as S from './Layout.style';
import Spinner from '../../components/@common/Spinner';

const Layout = () => {
  return (
    <>
      <Nav />
      <S.Container>
        <LeftSidebar />
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </S.Container>
      <Footer />
    </>
  );
};

export default Layout;
