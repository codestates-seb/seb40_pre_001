import React from 'react';
import * as S from './Pagination.style';

const RightBox = () => {
  return (
    <S.RightBox>
      <S.PageButton className='active'>15</S.PageButton>
      <S.PageButton>30</S.PageButton>
      <S.PageButton>50</S.PageButton>
      <S.Text>per page</S.Text>
    </S.RightBox>
  );
};

export default RightBox;
