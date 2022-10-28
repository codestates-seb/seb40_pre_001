import React from 'react';
import { useRecoilValue } from 'recoil';
import useGetAllPosts from '../../../hooks/useGetAllPosts';
import pagesState from '../../../store/pagesState';
import * as S from '../Questions.style';

const Post = () => {
  const { currentContentId } = useRecoilValue(pagesState);
  const { data } = useGetAllPosts((data) => {
    const currentPost = data.find(
      (post) => post.contentId === currentContentId,
    );

    return currentPost;
  });

  console.log(data);

  return (
    <S.ContentWrapper>
      <S.PostContainer>
        <p>title : {data.title}</p>
        <p>content : {data.content.context}</p>
        <p>Author : {data.author}</p>
      </S.PostContainer>
    </S.ContentWrapper>
  );
};

export default Post;
