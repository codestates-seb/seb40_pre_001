import React from 'react';
import useGetUserStatus from '../../hooks/users/useGetUserStatus';
import Spinner from '../../components/@common/Spinner';

import * as S from './UserProfile.style';
import MyPage from '../../components/MyPage/MyPage';
import UserEdit from '../../components/MyPage/Edit/Edit';
import { useParams } from 'react-router-dom';

const UserEditPage = () => {
  const { userId } = useParams();

  const { data: userStatus, isLoading, isSuccess } = useGetUserStatus(userId);

  if (isLoading) {
    return <Spinner />;
  }

  if (isSuccess) {
    return (
      <S.ContentWrapper>
        <MyPage userStatus={userStatus}>
          <UserEdit />
        </MyPage>
      </S.ContentWrapper>
    );
  }
};

export default UserEditPage;
