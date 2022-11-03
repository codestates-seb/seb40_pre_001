import React from 'react';
import * as S from './UserProfileButton.style';

import PencilIcon from '../@common/Icons/PencilIcon';
import { StackExChangeIcon } from '../@common/Icons/StackExIcon';
const UserProfileButton = () => {
  return (
    <S.Container>
      <S.UserButtons>
        <PencilIcon />
        Edit profile
      </S.UserButtons>
      <S.UserButtons>
        <StackExChangeIcon />
        Network profile
      </S.UserButtons>
    </S.Container>
  );
};

export default UserProfileButton;
