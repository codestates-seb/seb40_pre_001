import React from 'react';

import PostDetails from './Details';
import PostStatus from './Status';
import * as S from './Post.style';
import { useRecoilValue } from 'recoil';
import { pagesState } from '../../../../store';

const PostBox = ({ data }) => {
  const { selectedLimit, currentPage } = useRecoilValue(pagesState);
  const offset = (currentPage - 1) * selectedLimit;

  return data.slice(offset, offset + selectedLimit).map((post) => (
    <S.PostContainer key={post.questionsId}>
      {/* BoxLeft */}
      <PostStatus votes={post.voteCount} views={post.viewCount} />
      {/* BoxRight */}
      <PostDetails data={post} />
    </S.PostContainer>
  ));
};

export default PostBox;
