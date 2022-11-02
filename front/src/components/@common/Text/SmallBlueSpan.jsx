import React from 'react';
import * as S from './Text.style';

const SmallBlueSpan = ({ color, fontSize, content, ...rest }) => {
  return (
    <S.SmallBlueSpan color={color} fontSize={fontSize} {...rest}>
      {content}
    </S.SmallBlueSpan>
  );
};

export default SmallBlueSpan;
