import React from 'react';
import Pagination from './Pagination/Pagination';
import Header from './Features/Header';
import * as S from './Main.style';

const Main = () => {
  return (
    <S.MainContainer>
      <Header />
      <Pagination />
    </S.MainContainer>
  );
};

export default Main;
