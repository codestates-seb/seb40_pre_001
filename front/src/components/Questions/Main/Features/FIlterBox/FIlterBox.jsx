import React from 'react';
import { FilterIcon } from '../../../../@common/Icons';
import * as S from './FilterBox.style';

const FilterBox = () => {
  const count = 255;
  const categoryButton = ['Newest', 'Active', `Bountied`, 'Unanswered', 'More'];
  return (
    <S.FlexBox>
      <S.QuestionCount>23,145,068 questions</S.QuestionCount>
      <div>
        <S.ButtonWrapper>
          <S.BoxLeft>
            {categoryButton.map((button) => {
              return button === 'Bountied' ? (
                <S.CategoryButton key={button}>
                  {button}
                  <S.Count>{count}</S.Count>
                </S.CategoryButton>
              ) : (
                <S.CategoryButton key={button}>{button}</S.CategoryButton>
              );
            })}
          </S.BoxLeft>
          <div>
            <S.FilterButton>
              <FilterIcon fill='hsl(205,47%,42%)' />
              Filter
            </S.FilterButton>
          </div>
        </S.ButtonWrapper>
      </div>
    </S.FlexBox>
  );
};

export default FilterBox;
