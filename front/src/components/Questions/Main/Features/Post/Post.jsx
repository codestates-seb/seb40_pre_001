import React from 'react';

import PostDetails from './Details';
import PostStatus from './Status';
import * as S from './Post.style';

const PostBox = () => {
  return (
    <S.PostContainer>
      <PostStatus />
      <PostDetails />
    </S.PostContainer>
  );
};

export default PostBox;
