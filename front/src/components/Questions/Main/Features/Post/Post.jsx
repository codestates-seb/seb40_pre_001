import React from 'react';

import PostDetails from './Details';
import PostStatus from './Status';
import * as S from './Post.style';

import useGetAllPosts from '../../../../../hooks/useGetAllPosts';

const PostBox = () => {
  const { data } = useGetAllPosts();

  return data?.map((postData, i) => {
    return (
      <S.PostContainer key={i}>
        <PostStatus status={postData.status} />
        <PostDetails data={postData} />
      </S.PostContainer>
    );
  });
};

export default PostBox;
