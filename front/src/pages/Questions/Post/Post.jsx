import React from 'react';
import { useRecoilValue } from 'recoil';
import { Content } from '../../../components/Questions';
import useGetAllPosts from '../../../hooks/useGetAllPosts';
import pagesState from '../../../store/pagesState';
import * as S from '../Questions.style';

const Post = () => {
  const { currentContentId } = useRecoilValue(pagesState);
  const { data, status } = useGetAllPosts((data) => {
    const currentPost = data.find(
      (post) => post.contentId === currentContentId,
    );

    return currentPost;
  });

  console.log(status);

  return (
    <S.ContentWrapper>
      <S.PostContainer>
        {status === 'success' && <Content data={data} />}
      </S.PostContainer>
    </S.ContentWrapper>
  );
};

export default Post;