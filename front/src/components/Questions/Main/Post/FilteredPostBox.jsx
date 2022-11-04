import React from 'react';
import PostDetails from './Details';
import PostStatus from './Status';
import * as S from './Post.style';

const FilteredPostBox = ({ data }) => {
  return data?.map((postData, i) => {
    return (
      <S.PostContainer key={i}>
        <PostStatus status={postData.status} />
        <PostDetails data={postData} />
      </S.PostContainer>
    );
  });
};

export default FilteredPostBox;
