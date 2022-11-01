import React from 'react';
import { ArrowIcon, HistoryIcon, SaveIcon } from '../../../@common/Icons';
import * as S from './PostBody.style';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import pagesState from '../../../../store/pagesState';
import { apiClient } from '../../../../apis/questions';

const LeftBox = ({ status }) => {
  // const queryClient = useQueryClient();
  const { currentContentId } = useRecoilValue(pagesState);

  // const updateVoteCount = useMutation(
  //   (vote) => {
  //     putStatus(currentContentId, vote);
  //   },

  //   {
  //     retry: 1,
  //     onSuccess: () =>
  //       queryClient.invalidateQueries(['questions'], currentContentId),
  //   },
  // );

  const putMethod = async () => {
    return await apiClient.put(`/api/questions/${currentContentId}`, {
      ...status,
      votes: status.votes + 1,
    });
  };

  return (
    <S.LeftBox>
      <S.VotingContainer>
        <S.IconContainer
          onClick={() => {
            // updateVoteCount.mutate(status.votes + 1);
            putMethod();
          }}
        >
          <ArrowIcon direction='up' />
        </S.IconContainer>
        <S.VoteCount>
          <span>{status.votes}</span>
        </S.VoteCount>
        <S.IconContainer>
          <ArrowIcon direction='down' />
        </S.IconContainer>
        <SaveIcon style={{ margin: '10px 0 10px 12px' }} />
        <HistoryIcon style={{ margin: '3px 0 0 11px' }} />
      </S.VotingContainer>
    </S.LeftBox>
  );
};

export default LeftBox;
