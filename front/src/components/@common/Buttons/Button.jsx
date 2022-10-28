import React from 'react';
import * as S from './Button.style';

const StyledButton = ({ content, ...rest }) => {
  return (
    <S.SquareButton type='button' {...rest}>
      {content}
    </S.SquareButton>
  );
};

export default StyledButton;
