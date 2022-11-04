import React from 'react';
import * as S from './UserProfile.style';
import UserProfileButton from '../../components/UserProfileButton/UserProfileButton';
import UserProfileTab from '../../components/UserprofileTab/UserProfileTab';
import UserContents from '../../components/UserContents/UserContents';
import UserCommunities from '../../components/UserCommunities/UserCommunities';
import UserAnswers from '../../components/UserAnswers/UserAnswers';

import CakeIcon from '../../components/@common/Icons/CakeIcon';
import CalendarIcon from '../../components/@common/Icons/CalendarIcon';
import ClockIcon from '../../components/@common/Icons/ClockIcon';
// import Eeeaaaooo from '../../components/@common/img';
import UserStatsBox from '../../components/UserStatusBox/UserStatsBox';

const UserProfile = () => {
  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Userimg />
        <UserProfileButton />
        <S.UserContainer>
          <S.UserName>React master</S.UserName>
          <CakeIcon />
          <S.UserAnchor>UserAnchor</S.UserAnchor>
          <CalendarIcon />
          <S.UserAnchor>Last seen this week</S.UserAnchor>
          <ClockIcon />
          <S.UserAnchor>Visited 3 days, 2 consecutive</S.UserAnchor>
        </S.UserContainer>
      </S.ContainerHeader>
      <UserProfileTab />
      {/* contnets */}
      <S.StatsContainer>
        <S.ContentsTitle>Status</S.ContentsTitle>
        <S.ContentsTitle style={{ width: '15%' }}>About</S.ContentsTitle>
      </S.StatsContainer>
      <S.UserGridBox>
        <UserStatsBox />
        <UserContents />
      </S.UserGridBox>
      <S.ContentsTitle style={{ marginTop: 15 }}>Communities</S.ContentsTitle>
      <div style={{ display: 'flex' }}>
        <UserCommunities />
        <UserAnswers>asdasd</UserAnswers>
      </div>
    </S.Container>
  );
};

export default UserProfile;
