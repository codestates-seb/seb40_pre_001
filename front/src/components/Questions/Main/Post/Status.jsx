import React from 'react';
import { useGetAnswersLength } from '../../../../hooks/questions';
import * as S from './Post.style';

const PostStatus = ({ id, views, votes }) => {
  const { length, isSuccess } = useGetAnswersLength(id);

  return (
    <S.BoxLeft>
      <S.VoteBox>
        <span>{votes}</span>
        <span>votes</span>
      </S.VoteBox>
      <S.AnswerBox>
        {isSuccess && <span>{length}</span>}
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
