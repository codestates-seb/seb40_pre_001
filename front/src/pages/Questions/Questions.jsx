import React from 'react';
import * as S from './Questions.style';
import { Widget, Header } from '../../components/Questions';
import Pagination from '../../components/@common/Pagination/Pagination';
import PostBox from '../../components/Questions/Main/Post/PostBox';
import useGetAllPosts from '../../hooks/questions/useGetAllPosts';

const Questions = () => {
  const { data: length } = useGetAllPosts((data) => data.length);

  return (
    <S.ContentWrapper>
      <S.MainContainer>
        <Header title='All Questions' length={length} />
        <PostBox />
        <Pagination length={length} />
      </S.MainContainer>
      <Widget />
    </S.ContentWrapper>
  );
};

export default Questions;
