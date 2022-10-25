import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../../../Link';
import * as S from './Links.style';

const Links = () => {
  return (
    <S.Ol>
      <S.Li>
        <CustomLink path='/about'>About</CustomLink>
      </S.Li>
      <S.Li>
        <CustomLink path='/products'>Products</CustomLink>
      </S.Li>
      <S.Li>
        <CustomLink path='/teams'>For Teams</CustomLink>
      </S.Li>
    </S.Ol>
  );
};

export default Links;
