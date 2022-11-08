import React from 'react';
import useGetUserStatus from '../../hooks/users/useGetUserStatus';

import * as S from './UserProfile.style';
import MyPage from '../../components/MyPage/MyPage';
import UserEdit from '../../components/MyPage/Edit/Edit';
import { useParams } from 'react-router-dom';

const UserEditPage = () => {
  const { userId } = useParams();

  const { data: userStatus, isSuccess } = useGetUserStatus(userId);

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
