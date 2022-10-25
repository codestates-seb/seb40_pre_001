import React from 'react';
import StyledButton from '../../../Buttons/Button';
import CustomLink from '../../../Link';
import * as S from './AuthNav.style';

const AuthNav = () => {
  return (
    <S.Nav>
      <S.Ol>
        <S.Li>
          <CustomLink path='/login'>
            <StyledButton
              content='Login'
              backgroundColor='hsl(205,46%,92%)'
              borderColor='hsl(205,41%,63%)'
              color='hsl(205,47%,42%)'
            />
          </CustomLink>
        </S.Li>
        <S.Li>
          <CustomLink path='/signup'>
            <StyledButton content='Sign up' style={{ marginLeft: 3 }} />
          </CustomLink>
        </S.Li>
      </S.Ol>
    </S.Nav>
  );
};

export default AuthNav;
