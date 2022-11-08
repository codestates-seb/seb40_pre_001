import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CustomLink from '../../../../@common/Link';
import * as S from './CategoryTop.style';

const CategoryTop = () => {
  const { userId, userNickname } = useParams();
  const { pathname } = useLocation();

  return (
    <S.TopContainer>
      <CustomLink
        path={`/users/${userId}/${userNickname}`}
        className={pathname.includes('edit') ? undefined : 'active'}
      >
        Profile
      </CustomLink>
      <CustomLink
        path={`/users/edit/${userId}/${userNickname}`}
        className={pathname.includes('edit') ? 'active' : undefined}
      >
        Settings
      </CustomLink>
    </S.TopContainer>
  );
};

export default CategoryTop;
