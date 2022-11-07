import React from 'react';
import * as S from './Button.style';

const SnsButton = ({ type, content, snsIcon, ...rest }) => {
  return (
    <S.StyledSnsButton type={type} {...rest}>
      {snsIcon}
      {content}
    </S.StyledSnsButton>
  );
};

export default SnsButton;
