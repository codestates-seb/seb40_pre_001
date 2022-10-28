import React from 'react';
import * as S from './Questions.style';
import { Main, Side } from '../../components/Questions';

const Questions = () => {
  return (
    <S.ContentWrapper>
      <Main />
      <Side />
    </S.ContentWrapper>
  );
};

export default Questions;
