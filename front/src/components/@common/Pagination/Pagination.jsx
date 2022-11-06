import React from 'react';
import LeftBox from './LeftBox';
import RightBox from './RightBox';
import * as S from './Pagination.style';

const Pagination = ({ length }) => {
  return (
    <S.Container>
      <LeftBox length={length} />
      <RightBox />
    </S.Container>
  );
};

export default Pagination;
