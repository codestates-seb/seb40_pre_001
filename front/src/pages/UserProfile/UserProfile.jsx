import React from 'react';
import useGetUserStatus from '../../hooks/users/useGetUserStatus';

import * as S from './UserProfile.style';
import MyPage from '../../components/MyPage/MyPage';
import UserProfile from '../../components/MyPage/Profile/Profile';
import { useParams } from 'react-router-dom';

const UserProfilePage = () => {
  const { userId } = useParams();
  const { data: userStatus, isSuccess } = useGetUserStatus(userId);

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
