import React from 'react';
import * as S from './UserProfileTab.style';
const UserProfileTab = () => {
  return (
    <S.Container>
      <S.Buttons>Profile</S.Buttons>
      <S.Buttons>Activity</S.Buttons>
      <S.Buttons>Saves</S.Buttons>
      <S.Buttons>Settings</S.Buttons>
    </S.Container>
  );
};

export default UserProfileTab;
