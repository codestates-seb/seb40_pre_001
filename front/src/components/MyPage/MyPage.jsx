import React from 'react';
import Header from './Header/Header';
import useGetCurrentUser from '../../hooks/users/useGetCurrentUser';
import { useParams } from 'react-router-dom';
import useGetUserById from '../../hooks/users/useGetUserById';
import Spinner from '../@common/Spinner';

const MyPage = () => {
  const { userId } = useParams();
  const { currentUser } = useGetCurrentUser();
  const { data: user, isLoading, isSuccess } = useGetUserById(userId);

  if (isLoading) {
    return <Spinner />;
  }

  const current = currentUser.userId === Number(userId);

  current;

  if (isSuccess) {
    const { userNickname, createdAt, modifiedAt } = user;

    return (
      <>
        <Header
          userNickname={userNickname}
          createdAt={createdAt}
          modifiedAt={modifiedAt}
        />
      </>
    );
  }
};

export default MyPage;
