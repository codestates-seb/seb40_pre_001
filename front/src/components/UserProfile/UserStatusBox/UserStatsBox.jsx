import React from 'react';
import * as S from './UserStatsBox.stlye';

const UserStatsBox = ({ userStatus }) => {
  const { answerCounts, questionCounts, reputation, totalViewCounts } =
    userStatus;

  return (
    <S.Container>
      <S.StatsBox>
        <S.StatsBoxContentsCount>
          {reputation}
          <S.StatsBoxContentsItem>reputation</S.StatsBoxContentsItem>
        </S.StatsBoxContentsCount>
        <S.StatsBoxContentsCount>
          {totalViewCounts}
          <S.StatsBoxContentsItem>reached</S.StatsBoxContentsItem>
        </S.StatsBoxContentsCount>
        <S.StatsBoxContentsCount>
          {answerCounts}
          <S.StatsBoxContentsItem>answers</S.StatsBoxContentsItem>
        </S.StatsBoxContentsCount>
        <S.StatsBoxContentsCount>
          {questionCounts}
          <S.StatsBoxContentsItem>questions</S.StatsBoxContentsItem>
        </S.StatsBoxContentsCount>
      </S.StatsBox>
    </S.Container>
  );
};

export default UserStatsBox;
