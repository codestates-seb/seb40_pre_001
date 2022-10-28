import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pagesState } from '../../../../store';
import * as S from './Pagination.style';

const LeftBox = () => {
  const [state, setCurrentPage] = useRecoilState(pagesState);
  const { selectedLimit, postsLength } = useRecoilValue(pagesState);

  const lastPage = Math.ceil(postsLength / selectedLimit);

  const createEmptyArray = () => {
    return Array.from(
      { length: lastPage < 5 ? lastPage - 1 : 5 },
      (v, i) => i++,
    );
  };

  const onClickButton = (e) => {
    setCurrentPage({
      ...state,
      currentPage: Number(e.target.value),
    });
  };

  return (
    <S.LeftBox>
      {createEmptyArray().map((_, i) => {
        return (
          <S.PageButton
            className={state.currentPage === i + 1 && 'active'}
            value={i + 1}
            onClick={onClickButton}
            key={i}
          >
            {i + 1}
          </S.PageButton>
        );
      })}
      <S.dotButton>…</S.dotButton>

      <S.PageButton
        className={state.currentPage === lastPage && 'active'}
        value={lastPage}
        onClick={onClickButton}
      >
        {lastPage}
      </S.PageButton>
      <S.PageButton
        onClick={() =>
          state.currentPage !== lastPage &&
          setCurrentPage({ ...state, currentPage: state.currentPage + 1 })
        }
      >
        Next
      </S.PageButton>
    </S.LeftBox>
  );
};

export default LeftBox;
