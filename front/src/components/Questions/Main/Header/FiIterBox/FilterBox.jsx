import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { pagesState } from '../../../../../store';
import { FilterIcon } from '../../../../@common/Icons';
import * as S from './FilterBox.style';

const FilterBox = ({ length }) => {
  const [state, setPostsLength] = useRecoilState(pagesState);

  useEffect(
    () => setPostsLength({ ...state, postsLength: length }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [length, state.postsLength],
  );

  return (
    <S.FlexBox>
      <S.QuestionCount>{length} questions</S.QuestionCount>
      <div>
        <S.ButtonWrapper>
          <S.BoxLeft>
            <S.CategoryButton className='active'>Newest</S.CategoryButton>
            <S.CategoryButton>Unanswered</S.CategoryButton>
            <S.CategoryButton className='moreBtn'>More</S.CategoryButton>
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
