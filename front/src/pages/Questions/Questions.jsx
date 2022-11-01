import React from 'react';
import * as S from './Questions.style';
import { Widget, Header, Pagination } from '../../components/Questions';

const Questions = () => {
  return (
    <S.ContentWrapper>
      <S.MainContainer>
        <Header />
        <Pagination />
      </S.MainContainer>
      <Widget />
    </S.ContentWrapper>
  );
};

export default Questions;
