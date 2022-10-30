import React from 'react';
import StyledButton from '../../../Buttons/Button';
import CustomLink from '../../../Link';
import * as S from './AuthNav.style';

const NonAuth = () => {
  return (
    <S.Nav>
      <S.Ol>
        <li>
          <CustomLink path='/login'>
            <StyledButton
              content='Log in'
              backgroundColor='hsl(205,46%,92%)'
              borderColor='hsl(205,41%,63%)'
              color='hsl(205,47%,42%)'
            />
          </CustomLink>
        </li>
        <li>
          <CustomLink path='/signup'>
            <StyledButton
              content='Sign up'
              style={{ marginLeft: 3, width: 69 }}
            />
          </CustomLink>
        </li>
      </S.Ol>
    </S.Nav>
  );
};

export default NonAuth;
