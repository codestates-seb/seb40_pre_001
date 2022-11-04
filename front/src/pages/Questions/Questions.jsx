import React from 'react';
import * as S from './Questions.style';
import { Widget, Header } from '../../components/Questions';
import Pagination from '../../components/@common/Pagination/Pagination';
import PostBox from '../../components/Questions/Main/Post/PostBox';
import useGetAllPosts from '../../hooks/questions/useGetAllPosts';

const Questions = () => {
  const { data } = useGetAllPosts();

  return (
    <S.ContentWrapper>
      <S.MainContainer>
        <Header title='All Questions' length={data?.length} />
        <PostBox data={data} />
        <Pagination length={data?.length} />
      </S.MainContainer>
      <Widget />
    </S.ContentWrapper>
  );
};

export default Questions;
