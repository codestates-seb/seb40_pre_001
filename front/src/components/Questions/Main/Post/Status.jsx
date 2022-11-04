import React from 'react';

import * as S from './Post.style';

const PostStatus = ({ views, votes }) => {
  return (
    <S.BoxLeft>
      <S.VoteBox>
        <span>{votes}</span>
        <span>votes</span>
      </S.VoteBox>
      <S.AnswerBox>
        <span>{10}</span>
        <span>answers</span>
      </S.AnswerBox>
      <S.ViewBox>
        <span>{views}</span>
        <span>views</span>
      </S.ViewBox>
    </S.BoxLeft>
  );
};

export default PostStatus;
