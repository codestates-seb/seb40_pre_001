import React from 'react';
import * as S from './Features.style';
import CustomLink from '../../../@common/Link';
import StyledButton from '../../../@common/Buttons/Button';

const Header = () => {
  return (
    <S.Header>
      <h1>All Questions</h1>
      <S.ButtonContainer>
        <CustomLink path='/questions/ask'>
          <StyledButton
            content='Ask Question'
            style={{ width: 103, height: 38 }}
          />
        </CustomLink>
      </S.ButtonContainer>
    </S.Header>
  );
};

export default Header;
