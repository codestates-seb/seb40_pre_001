import React from 'react';
import useGetAnswersById from '../../../../hooks/questions/useGetAnswersById';

import * as S from './Post.style';

const PostStatus = ({ data }) => {
  const { data: answers } = useGetAnswersById(data.userId);

  const status = {
    votes: data.voteCount,
    views: data.viewCount,
    answers: answers?.length || 0,
  };

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
