import React from 'react';
import * as S from './UserProfile.style';
import UserProfileButton from '../../components/UserProfileButton/UserProfileButton';
import UserProfileTab from '../../components/UserprofileTab/UserProfileTab';

import CakeIcon from '../../components/@common/Icons/CakeIcon';
import CalendarIcon from '../../components/@common/Icons/CalendarIcon';
import ClockIcon from '../../components/@common/Icons/ClockIcon';
// import Eeeaaaooo from '../../components/@common/img';

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
      </S.StatsContainer>
    </S.Container>
  );
};

export default UserProfile;
