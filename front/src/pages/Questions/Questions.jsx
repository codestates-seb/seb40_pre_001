import React from 'react';
import * as S from './Questions.style';
import { Widget, Header } from '../../components/Questions';
import Pagination from '../../components/@common/Pagination/Pagination';
import { useRecoilValue } from 'recoil';
import { pagesState } from '../../store';

const Questions = () => {
  const { postsLength } = useRecoilValue(pagesState);

  return (
    <S.ContentWrapper>
      <S.MainContainer>
        <Header />
        <Pagination length={postsLength} />
      </S.MainContainer>
      <Widget />
    </S.ContentWrapper>
  );
};

export default Questions;
