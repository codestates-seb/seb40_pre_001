import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { categoryButton } from '../../../../../constants';
import useGetAllPosts from '../../../../../hooks/useGetAllPosts';
import { pagesState } from '../../../../../store';
import { FilterIcon } from '../../../../@common/Icons';
import * as S from './FilterBox.style';

const FilterBox = () => {
  const [state, setPostsLength] = useRecoilState(pagesState);
  const { data: count } = useGetAllPosts((data) => data.length);

  useEffect(
    () => setPostsLength({ ...state, postsLength: count }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count, state.postsLength],
  );

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
