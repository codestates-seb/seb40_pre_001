import React from 'react';
import { ArrowIcon, HistoryIcon, SaveIcon } from '../../../@common/Icons';
import * as S from './PostBody.style';

const LeftBox = ({ votes }) => {
  return (
    <S.LeftBox>
      <S.VotingContainer>
        <S.IconContainer>
          <ArrowIcon direction='up' />
        </S.IconContainer>
        <S.VoteCount>
          <span>{votes}</span>
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
