import React from 'react';
import useGetUserStatus from '../../hooks/users/useGetUserStatus';
import useGetCurrentUser from '../../hooks/users/useGetCurrentUser';
import Spinner from '../../components/@common/Spinner';

import * as S from './UserProfile.style';
import MyPage from '../../components/MyPage/MyPage';

const UserProfile = () => {
  const { currentUser } = useGetCurrentUser();
  const {
    data: userStatus,
    isLoading,
    isSuccess,
  } = useGetUserStatus(currentUser.userId);
  userStatus;

  if (isLoading) {
    return <Spinner />;
  }

  if (isSuccess) {
    return (
      <S.ContentWrapper>
        <MyPage />
      </S.ContentWrapper>
    );
  }
};

export default UserProfile;
