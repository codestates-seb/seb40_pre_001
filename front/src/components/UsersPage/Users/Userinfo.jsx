import React from 'react';
import * as S from './UserInfo.style';

const UserInfo = () => {
  return (
    <S.UserInfoContainer>
      <S.UserInfoProfil></S.UserInfoProfil>
      <S.UserDetails>
        <S.UserInfoName>이름</S.UserInfoName>
        <S.UserInfoLocation>장소</S.UserInfoLocation>
        <S.UserInfoScore>조회수</S.UserInfoScore>
      </S.UserDetails>
      <S.UsersTagsContainer>
        <S.UsersTags>태그,태그</S.UsersTags>
      </S.UsersTagsContainer>
    </S.UserInfoContainer>
  );
};

export default UserInfo;
