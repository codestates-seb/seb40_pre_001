import React from 'react';
import useGetAllPosts from '../../../../../hooks/useGetAllPosts';
import { FilterIcon } from '../../../../@common/Icons';
import * as S from './FilterBox.style';

const FilterBox = () => {
  const categoryButton = ['Newest', 'Active', `Bountied`, 'Unanswered', 'More'];

  const { data: count } = useGetAllPosts((data) => data.length);

  return (
    <S.FlexBox>
      <S.QuestionCount>{count} questions</S.QuestionCount>
      <div>
        <S.ButtonWrapper>
          <S.BoxLeft>
            {categoryButton.map((button) => {
              return button === 'Bountied' ? (
                <S.CategoryButton key={button}>
                  {button}
                  <S.Count>{255}</S.Count>
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
