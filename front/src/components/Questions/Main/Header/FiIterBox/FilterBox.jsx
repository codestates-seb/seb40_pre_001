import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { filterState, pagesState } from '../../../../../store';
import { FilterIcon } from '../../../../@common/Icons';
import * as S from './FilterBox.style';

const FilterBox = ({ length }) => {
  const [state, setPostsLength] = useRecoilState(pagesState);

  const [currentFilter, setCurrentFilterState] = useRecoilState(filterState);
  const filters = ['Newest', 'Unanswered', 'More'];

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
            {filters.map((filter) => {
              return (
                <S.CategoryButton
                  key={filter}
                  className={
                    currentFilter === filter && filter !== 'More'
                      ? 'active'
                      : filter === 'More'
                      ? 'moreBtn'
                      : null
                  }
                  onClick={() => {
                    if (filter !== 'More') {
                      setCurrentFilterState(filter);
                    }
                  }}
                >
                  {filter}
                </S.CategoryButton>
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
