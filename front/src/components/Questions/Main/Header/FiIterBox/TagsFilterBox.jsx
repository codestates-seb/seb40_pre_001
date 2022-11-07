import React from 'react';
import { TagsCategoryButton } from '../../../../../constants/';

import * as S from './UsersFilterBox.style';

const TagsFilterBox = () => {
  return (
    <S.FlexBox>
      <div>
        <S.ButtonWrapper>
          <S.BoxLeft>
            {TagsCategoryButton.map((button) => {
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

export default TagsFilterBox;
