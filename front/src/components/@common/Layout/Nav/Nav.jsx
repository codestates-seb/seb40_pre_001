import React from 'react';
import * as S from './Nav.style';
import { LogoIcon } from '../../Icons';

import Navigation from './Navigation/Navigation';
import SearchInput from './SearchInput/SearchInput';
import AuthNav from './Auth/AuthNav';

import CustomLink from '../../Link';

const Nav = () => {
  return (
    <S.Header>
      <S.NavContainer>
        <S.LogoBox>
          <CustomLink path='/'>
            <LogoIcon width={150} height={30} />
          </CustomLink>
        </S.LogoBox>
        <Navigation />
        <SearchInput />
        <AuthNav />
      </S.NavContainer>
    </S.Header>
  );
};

export default Nav;
