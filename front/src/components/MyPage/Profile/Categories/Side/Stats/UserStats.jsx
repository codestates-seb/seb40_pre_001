import React from 'react';
import * as S from './UserStats.style';

const UserStats = ({ userStatus }) => {
  const { answerCounts, questionCounts, reputation, totalViewCounts } =
    userStatus;

  return (
    <S.Container>
      <S.Title>Stats</S.Title>
      <S.StatsContainer>
        <S.StatBox>
          <S.StatCount>
            {reputation}
            <span>reputation</span>
          </S.StatCount>
        </S.StatBox>
        <S.StatBox>
          <S.StatCount>
            {totalViewCounts}
            <span>reached</span>
          </S.StatCount>
        </S.StatBox>
        <S.StatBox>
          <S.StatCount>
            {answerCounts}
            <span>answers</span>
          </S.StatCount>
        </S.StatBox>
        <S.StatBox>
          <S.StatCount>
            {questionCounts}
            <span>questions</span>
          </S.StatCount>
        </S.StatBox>
      </S.StatsContainer>
    </S.Container>
  );
};

export default UserStats;
