import React from 'react';
import CustomLink from '../../../Link';
import * as S from './Navigation.style';

const Links = ({ isClicked, setIsClicked }) => {
  return (
    <S.Ol>
      <S.Li>
        <CustomLink path='/about'>About</CustomLink>
      </S.Li>
      <S.Li style={{ position: 'relative', right: 10 }}>
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
