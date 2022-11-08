import React from 'react';
import * as S from './Questions.style';
import { Widget, Header } from '../../components/Questions';
import Pagination from '../../components/@common/Pagination/Pagination';
import PostBox from '../../components/Questions/Main/Post/PostBox';

import useGetAllPosts from '../../hooks/questions/useGetAllPosts';
import Spinner from '../../components/@common/Spinner';

const Questions = () => {
  const { questionsData: data, isError, isLoading } = useGetAllPosts();

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <S.ContentWrapper>
      <S.MainContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Header title='All Questions' length={data?.length} />
            <PostBox data={data} />
            <Pagination length={data?.length} />
          </>
        )}
      </S.MainContainer>
      <Widget />
    </S.ContentWrapper>
  );
};

export default Questions;
