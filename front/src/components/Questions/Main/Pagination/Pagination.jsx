import React from 'react';
import LeftBox from './LeftBox';
import RightBox from './RightBox';
import * as S from './Pagination.style';

const Pagination = () => {
  return (
    <S.Container>
      <LeftBox />
      <RightBox />
    </S.Container>
  );
};

export default Pagination;
