import React, { useState } from 'react';
import * as S from './Nav.style';
import { LogoIcon } from '../../Icons';

import Navigation from './Navigation/Navigation';
import SearchInput from './SearchInput/SearchInput';

import CustomLink from '../../Link';
import PopOver from './Popover/PopOver';
import { isLoggedIn } from '../../../../constants/auth';
import Auth from './Auth/AuthNav';
import NonAuth from './Auth/NonAuthNav';

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  console.log(isLoggedIn);

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
        <SearchInput />
        {isLoggedIn ? <Auth /> : <NonAuth />}
      </S.NavContainer>
    </S.Header>
  );
};

export default Nav;
