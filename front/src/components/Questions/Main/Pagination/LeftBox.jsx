import React from 'react';
import * as S from './Pagination.style';

const LeftBox = () => {
  return (
    <S.LeftBox>
      <S.PageButton className='active'>1</S.PageButton>
      <S.PageButton>2</S.PageButton>
      <S.PageButton>3</S.PageButton>
      <S.PageButton>4</S.PageButton>
      <S.PageButton>5</S.PageButton>
      <S.PageButton>6</S.PageButton>
      <S.dotButton>…</S.dotButton>
      <S.PageButton>lastPage</S.PageButton>
      <S.PageButton> Next</S.PageButton>
    </S.LeftBox>
  );
};

export default LeftBox;
