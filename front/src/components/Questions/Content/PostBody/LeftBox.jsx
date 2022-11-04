import React from 'react';
import { ArrowIcon, HistoryIcon, SaveIcon } from '../../../@common/Icons';
import * as S from './PostBody.style';
import { useRecoilValue } from 'recoil';
import pagesState from '../../../../store/pagesState';
import useUpdateStatus from '../../../../hooks/questions/useUpdateStatus';

const LeftBox = ({ status, upVotedUsers, downVotedUsers }) => {
  const { currentContentId } = useRecoilValue(pagesState);
  const { handleStatus } = useUpdateStatus();
  const currentUserId = 1231244;

  return (
    <S.LeftBox>
      <S.VotingContainer>
        <S.IconContainer
          onClick={() =>
            handleStatus(currentContentId, {
              ...status,
              upVotedUsers: [...upVotedUsers, currentUserId],
              votes: status?.votes + 1,
            })
          }
        >
          <ArrowIcon direction='up' />
        </S.IconContainer>
        <S.VoteCount>
          <span>{status?.votes}</span>
        </S.VoteCount>
        <S.IconContainer
          onClick={() =>
            handleStatus(currentContentId, {
              ...status,
              downVotedUsers: [...downVotedUsers, currentUserId],
              votes: status?.votes - 1,
            })
          }
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
