import React from 'react';
import * as S from './Text.style';

const SmallBlueSpan = ({ color, fontSize, content }) => {
  return (
    <S.SmallBlueSpan color={color} fontSize={fontSize}>
      {content}
    </S.SmallBlueSpan>
  );
};

export default SmallBlueSpan;
