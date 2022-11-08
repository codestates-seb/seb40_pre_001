import React from 'react';
import UserInfo from '../../components/UsersPage/Users/Userinfo';
import * as S from './Users.style.js';

import UsersTab from '../../components/UsersPage/UsersTab/UsersTab';
import UsersFilter from '../../components/UsersPage/UsersFilter/UsersFilter';
import useGetAllUsers from '../../hooks/users/useGetAllUsers';
import TitleBox from '../../components/@common/TitleBox/TitleBar';

const Users = () => {
  const { data, isSuccess } = useGetAllUsers();

  if (isSuccess) {
    return (
      <S.Container>
        <TitleBox title='Users' />
        <UsersFilter />
        <UsersTab />
        <S.UsersContainer>
          {data.map((data, i) => {
            return <UserInfo key={i} data={data} />;
          })}
        </S.UsersContainer>
        <S.UsersfooterContainer>
          <S.UsersLegend>
            weekly / monthly / quarterly resutatiom leagues
          </S.UsersLegend>

          <S.PagiNationContainer></S.PagiNationContainer>
        </S.UsersfooterContainer>
      </S.Container>
    );
  }
};

export default Users;
