import React, { useState } from 'react';

import PostDetails from './Details';
import PostStatus from './Status';
import * as S from './Post.style';

import useGetAllPosts from '../../../../../hooks/useGetAllPosts';

const PostBox = () => {
  // Pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit;

  const { data } = useGetAllPosts((data) => {
    return data.slice(offset, offset + limit);
  });

  setPage, setLimit;

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
