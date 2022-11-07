import React from 'react';
import { useParams } from 'react-router-dom';
import useGetUserById from '../../hooks/users/useGetUserById';
import Spinner from '../@common/Spinner';
import Header from './Header/Header';
import * as S from './MyPage.style';
import Category from './Profile/Categories/Category';

const MyPage = ({ userStatus, children }) => {
  const { userId } = useParams();
  // const { currentUser } = useGetCurrentUser();
  const { data: user, isLoading, isSuccess } = useGetUserById(userId);
  // 유저에 대한 검증 필요 로그인 유저인지 그냥 유저 클릭해서 들어왓는지

  if (isLoading) {
    return <Spinner />;
  }

  if (isSuccess) {
    const { userNickname, createdAt, modifiedAt } = user;

    return (
      <div>
        <Header
          userNickname={userNickname}
          createdAt={createdAt}
          modifiedAt={modifiedAt}
        />
        <S.MiddleContainer>
          <Category userStatus={userStatus} />
          {children}
        </S.MiddleContainer>
      </div>
    );
  }
};

export default MyPage;
