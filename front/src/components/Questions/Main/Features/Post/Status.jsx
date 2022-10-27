import React from 'react';
import * as S from './Post.style';

const PostStatus = ({ status }) => {
  return (
    <S.BoxLeft>
      <S.VoteBox>
        <span>{status.votes}</span>
        <span>votes</span>
      </S.VoteBox>
      <S.AnswerBox>
        <span>{status.answers}</span>
        <span>answers</span>
      </S.AnswerBox>
      <S.ViewBox>
        <span>{status.views}</span>
        <span>views</span>
      </S.ViewBox>
    </S.BoxLeft>
  );
};

export default PostStatus;
