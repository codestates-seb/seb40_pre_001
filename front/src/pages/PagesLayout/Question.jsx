import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer } from '../../components/@Layout';
import Spinner from '../../components/@common/Spinner';
import * as S from './Layout.style';

const Question = () => {
  return (
    <>
      <Nav />
      <S.Container style={{ maxWidth: 'none' }}>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </S.Container>
      <Footer />
    </>
  );
};

export default Question;
