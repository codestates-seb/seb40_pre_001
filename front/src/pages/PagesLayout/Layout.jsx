import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer, LeftSidebar } from '../../components/@Layout';
import * as S from './Layout.style';

const Layout = () => {
  return (
    <>
      <Nav />
      <S.Container className='NonMaxWidth'>
        <LeftSidebar />
        <Outlet />
      </S.Container>
      <Footer />
    </>
  );
};

export default Layout;
