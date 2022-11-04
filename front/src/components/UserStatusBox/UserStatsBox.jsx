import React from 'react';
import * as S from './UserStatsBox.stlye';

const UserStatsBox = () => {
  return (
    <S.Container>
      <S.StatsBox>
        <S.StatsBoxContentsCount>
          1<S.StatsBoxContentsItem>reputation</S.StatsBoxContentsItem>
        </S.StatsBoxContentsCount>
        <S.StatsBoxContentsCount>
          0<S.StatsBoxContentsItem>reached</S.StatsBoxContentsItem>
        </S.StatsBoxContentsCount>
        <S.StatsBoxContentsCount>
          0<S.StatsBoxContentsItem>answers</S.StatsBoxContentsItem>
        </S.StatsBoxContentsCount>
        <S.StatsBoxContentsCount>
          0<S.StatsBoxContentsItem>questions</S.StatsBoxContentsItem>
        </S.StatsBoxContentsCount>
      </S.StatsBox>
    </S.Container>
  );
};

export default UserStatsBox;
