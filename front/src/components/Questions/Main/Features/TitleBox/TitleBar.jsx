import React from 'react';
import * as S from './TitleBox.style';
import CustomLink from '../../../../@common/Link';
import { StyledButton } from '../../../../@common/Buttons';

const TitleBox = () => {
  return (
    <S.TitleContainer>
      <h1>All Questions</h1>
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
