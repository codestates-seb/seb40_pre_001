import React from 'react';
import * as S from './TitleBox.style';
import CustomLink from '../Link';
import { StyledButton } from '../Buttons';

const TitleBox = ({ title, ...rest }) => {
  return (
    <S.TitleContainer {...rest}>
      <h1>{title}</h1>
      <S.ButtonContainer>
        <CustomLink path='/questions/ask'>
          <StyledButton
            content='Ask Question'
            style={{ width: 103, height: 38, marginTop: 0 }}
          />
        </CustomLink>
      </S.ButtonContainer>
    </S.TitleContainer>
  );
};

export default TitleBox;
