import React from 'react';
import * as S from './Post.style';

const PostStatus = () => {
  return (
    <S.BoxLeft>
      <S.VoteBox>
        <span>0</span>
        <span>votes</span>
      </S.VoteBox>
      <S.AnswerBox>
        <span>0</span>
        <span>answers</span>
      </S.AnswerBox>
      <S.ViewBox>
        <span>2</span>
        <span>views</span>
      </S.ViewBox>
    </S.BoxLeft>
  );
};

export default PostStatus;
