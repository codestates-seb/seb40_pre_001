import React from 'react';
import * as S from './Users.style.js';
import Title from '../../components/Title/Title';
import UsersTab from '../../components/UsersTab/UsersTab';
import UsersFilter from '../../components/UsersFilter/UsersFilter';
import UsersPagiNation from '../../components/Questions/Main/UsersPaginaton/UsersPagination';
import UserData from '../../components/Users/UserData';
import UserInfo from '../../components/Users/Userinfo';

const Users = () => {
  return (
    <S.Container>
      <Title></Title>
      <UsersFilter />
      <UsersTab />
      <S.UsersContainer>
        {UserData.map((UserData) => {
          return <UserInfo key={name} UserData={UserData} />;
        })}
        <UserInfo />
      </S.UsersContainer>
      <S.UsersfooterContainer>
        <S.UsersLegend>
          weekly / monthly / quarterly resutatiom leagues
        </S.UsersLegend>
        <UsersPagiNation />
      </S.UsersfooterContainer>
    </S.Container>
  );
};

export default Users;
