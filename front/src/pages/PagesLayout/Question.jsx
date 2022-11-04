import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer } from '../../components/@Layout';
import * as S from './Layout.style';

const Question = () => {
  return (
    <>
      <Nav />
      <S.Container style={{ maxWidth: 'none' }}>
        <Outlet />
      </S.Container>
      <Footer />
    </>
  );
};

export default Question;
