import React, { useState, useEffect } from 'react';
import UserInfo from '../../components/Users/Userinfo';
import * as S from './Users.style.js';
import Title from '../../components/Title/Title';
import UsersTab from '../../components/UsersTab/UsersTab';
import UsersFilter from '../../components/UsersFilter/UsersFilter';
import axios from 'axios';
import LeftBox from '../../components/Questions/Main/Pagination/LeftBox';

const Users = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/api/users');

    if (response) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <Title title={'Users'} />
      <UsersFilter />
      <UsersTab />
      <S.UsersContainer>
        {data?.map(({ content }, i) => {
          return <UserInfo key={i}>{content}</UserInfo>;
        })}
      </S.UsersContainer>
      <S.UsersfooterContainer>
        <S.UsersLegend>
          weekly / monthly / quarterly resutatiom leagues
        </S.UsersLegend>

        <S.PagiNationContainer>
          <LeftBox length={data?.length} />
        </S.PagiNationContainer>
      </S.UsersfooterContainer>
    </S.Container>
  );
};

export default Users;
