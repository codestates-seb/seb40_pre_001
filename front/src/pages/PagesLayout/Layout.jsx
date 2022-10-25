import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer } from '../../components/@common/Layout';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
