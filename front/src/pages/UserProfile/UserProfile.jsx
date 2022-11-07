import React from 'react';
import useGetUserStatus from '../../hooks/users/useGetUserStatus';
import Spinner from '../../components/@common/Spinner';

import * as S from './UserProfile.style';
import MyPage from '../../components/MyPage/MyPage';
import UserProfile from '../../components/MyPage/Profile/Profile';
import { useParams } from 'react-router-dom';

const UserProfilePage = () => {
  const { userId } = useParams();
  const { data: userStatus, isLoading, isSuccess } = useGetUserStatus(userId);

  if (isLoading) {
    return <Spinner />;
  }

  if (isSuccess) {
    return (
      <S.ContentWrapper>
        <MyPage userStatus={userStatus}>
          <UserProfile />
        </MyPage>
      </S.ContentWrapper>
    );
  }
};

export default UserProfilePage;
