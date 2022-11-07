import React from 'react';
import { UsersCategoryButton } from '../../../../../constants/pages';
import * as S from './UsersFilterBox.style';

const UsersFilterBox = () => {
  return (
    <S.FlexBox>
      <div>
        <S.ButtonWrapper>
          <S.BoxLeft>
            {UsersCategoryButton.map((button) => {
              return button === 'Bountied' ? (
                <S.CategoryButton key={button}>{button}</S.CategoryButton>
              ) : (
                <S.CategoryButton key={button}>{button}</S.CategoryButton>
              );
            })}
          </S.BoxLeft>
        </S.ButtonWrapper>
      </div>
    </S.FlexBox>
  );
};

export default UsersFilterBox;
