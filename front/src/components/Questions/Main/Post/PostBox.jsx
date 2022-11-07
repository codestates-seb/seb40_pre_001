import React from 'react';
import { useRecoilValue } from 'recoil';
import { pagesState } from '../../../../store';

import PostDetails from './Details';
import PostStatus from './Status';
import * as S from './Post.style';

const PostBox = ({ data }) => {
  const { selectedLimit, currentPage } = useRecoilValue(pagesState);
  const offset = (currentPage - 1) * selectedLimit;

  return data.slice(offset, offset + selectedLimit).map((post, i) => (
    <S.PostContainer key={i}>
      {/* BoxLeft */}
      <PostStatus
        id={post.questionId}
        votes={post.voteCount}
        views={post.viewCount}
      />
      {/* BoxRight */}
      <PostDetails data={post} />
    </S.PostContainer>
  ));
};

export default PostBox;
