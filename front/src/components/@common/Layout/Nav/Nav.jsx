import React, { useState } from 'react';
import * as S from './Nav.style';
import { LogoIcon } from '../../Icons';

import Navigation from './Navigation/Navigation';
import SearchInput from './SearchInput/SearchInput';
import AuthNav from './Auth/AuthNav';

import CustomLink from '../../Link';
import PopOver from './Popover/PopOver';

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <S.Header>
      <S.NavContainer>
        <S.LogoBox>
          <CustomLink path='/'>
            <LogoIcon width={150} height={30} />
          </CustomLink>
        </S.LogoBox>
        <Navigation isClicked={isClicked} setIsClicked={setIsClicked} />
        {isClicked && <PopOver setIsClicked={setIsClicked} />}
        <SearchInput width={'100%'} placeholder={'Search...'} />
        <AuthNav />
      </S.NavContainer>
    </S.Header>
  );
};

export default Nav;
