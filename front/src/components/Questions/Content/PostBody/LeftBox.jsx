import React from 'react';
import {
  usePostDownVote,
  usePostUpVote,
} from '../../../../hooks/questions/usePostVote';
import {
  useAnswerUpVote,
  useAnswerDownVote,
} from '../../../../hooks/questions/useAnswerVote';
import { ArrowIcon, HistoryIcon, SaveIcon } from '../../../@common/Icons';
import * as S from './PostBody.style';

const LeftBox = ({ type, questionId, answerId, currentUser, votes }) => {
  // 프론트에서도 vote에 대한 상태관리 필요
  const { handleVoteCount: postUpVote } = usePostUpVote();
  const { handleVoteCount: postDownVote } = usePostDownVote();
  const { handleVoteCount: answerUpVote } = useAnswerUpVote();
  const { handleVoteCount: answerDownVote } = useAnswerDownVote();

  return (
    <S.LeftBox>
      <S.VotingContainer>
        <S.IconContainer
          onClick={() => {
            if (type === 'post') {
              postUpVote(questionId, currentUser.userId);
            } else if (type === 'answer') {
              answerUpVote(questionId, answerId, currentUser.userId);
            }
          }}
        >
          <ArrowIcon direction='up' />
        </S.IconContainer>
        <S.VoteCount>
          <span>{votes}</span>
        </S.VoteCount>
        <S.IconContainer
          onClick={() => {
            if (type === 'post') {
              postDownVote(questionId, currentUser.userId);
            } else if (type === 'answer') {
              answerDownVote(questionId, answerId, currentUser.userId);
            }
          }}
        >
          <ArrowIcon direction='down' />
        </S.IconContainer>
        <SaveIcon style={{ margin: '10px 0 10px 12px' }} />
        <HistoryIcon style={{ margin: '3px 0 0 11px' }} />
      </S.VotingContainer>
    </S.LeftBox>
  );
};

export default LeftBox;
