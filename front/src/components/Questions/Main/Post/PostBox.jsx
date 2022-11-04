import React from 'react';

import PostDetails from './Details';
import PostStatus from './Status';
import * as S from './Post.style';

import useGetAllPosts from '../../../../hooks/questions/useGetAllPosts';
// import { useRecoilValue } from 'recoil';
// import { pagesState } from '../../../../store';

const PostBox = () => {
  // Pagination
  // const { selectedLimit, currentPage } = useRecoilValue(pagesState);

  // const offset = (currentPage - 1) * selectedLimit;
  // const offset = (2 - 1) * 10;
  // const { data: questions, status } = useGetAllPosts((data) =>
  //   // data.slice(offset, offset + selectedLimit),
  //   data.slice(offset, offset + 10),
  // );

  const { data: questions, status } = useGetAllPosts();

  return status === 'success' ? (
    questions.map((post, i) => {
      return (
        <S.PostContainer key={i}>
          <PostStatus data={post} />
          <PostDetails data={post} />
        </S.PostContainer>
      );
    })
  ) : (
    <div>loading</div>
  );
};

export default PostBox;
