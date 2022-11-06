import React from 'react';
import * as S from './UsersTab.style';
import { UsersTabButton } from '../../../constants/pages';
const UsersTab = () => {
  return (
    <S.UsersTabContainer>
      {UsersTabButton.map((button) => {
        return button === 'tap' ? (
          <S.UsersTabButton key={button}>{button}</S.UsersTabButton>
        ) : (
          <S.UsersTabButton key={button}>{button}</S.UsersTabButton>
        );
      })}
    </S.UsersTabContainer>
  );
};

export default UsersTab;
