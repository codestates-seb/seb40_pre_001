import React from 'react';
import useGetUserStatus from '../../hooks/users/useGetUserStatus';
import useGetCurrentUser from '../../hooks/users/useGetCurrentUser';
import Spinner from '../../components/@common/Spinner';

import * as S from './UserProfile.style';
import MyPage from '../../components/MyPage/MyPage';
import UserEdit from '../../components/MyPage/Edit/Edit';

const UserEditPage = () => {
  const { currentUser } = useGetCurrentUser();
  const {
    data: userStatus,
    isLoading,
    isSuccess,
  } = useGetUserStatus(currentUser.userId);

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
