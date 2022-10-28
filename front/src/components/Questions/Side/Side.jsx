import React from 'react';
import Widget from './Features/Widget/Widget.jsx';
import * as S from './Side.style';

const Side = () => {
  return (
    <S.SideContainer>
      <Widget />
    </S.SideContainer>
  );
};

export default Side;
