import React from 'react';
import CustomLink from '../../../Link';
import * as S from './Navigation.style';

import { isLoggedIn } from '../../../../../constants/auth';

const Links = ({ isClicked, setIsClicked }) => {
  return (
    <S.Ol login={isLoggedIn}>
      <S.Li>
        <CustomLink path='/about'>About</CustomLink>
      </S.Li>
      <S.Li>
        <a
          className={isClicked ? 'active' : undefined}
          onClick={() => setIsClicked(!isClicked)}
        >
          Products
        </a>
      </S.Li>
      <S.Li>
        <CustomLink path='/teams'>For Teams</CustomLink>
      </S.Li>
    </S.Ol>
  );
};

export default Links;
