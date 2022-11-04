import React from 'react';
// import { useRecoilValue } from 'recoil';
import { Content } from '../../../components/Questions';
// import useGetAllPosts from '../../../hooks/questions/useGetAllPosts';
// import pagesState from '../../../store/pagesState';
import * as S from '../Questions.style';

const Post = () => {
  // const { currentContentId } = useRecoilValue(pagesState);
  // const { data, status } = useGetAllPosts((data) => {
  //   const currentPost = data.find(
  //     (post) => post.questionId === currentContentId,
  //   );

  //   return currentPost;
  // });

  return (
    <S.ContentWrapper>
      <S.PostContainer>
        <Content />
      </S.PostContainer>
    </S.ContentWrapper>
  );
};

export default Post;
