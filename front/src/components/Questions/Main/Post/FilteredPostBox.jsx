import React from 'react';
import PostDetails from './Details';
import PostStatus from './Status';
import * as S from './Post.style';

const FilteredPostBox = ({ data }) => {
  return data?.map((post, i) => {
    const { questionId, viewCount, voteCount } = post;
    return (
      <S.PostContainer key={i}>
        <PostStatus id={questionId} views={viewCount} votes={voteCount} />
        <PostDetails data={post} />
      </S.PostContainer>
    );
  });
};

export default FilteredPostBox;
