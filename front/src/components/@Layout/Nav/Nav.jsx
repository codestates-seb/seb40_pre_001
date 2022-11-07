import React, { useState } from 'react';
import * as S from './Nav.style';
import { LogoIcon } from '../../@common/Icons';

import Navigation from './Navigation/Navigation';
import SearchInput from './SearchInput/SearchInput';
import CustomLink from '../../@common/Link';
import PopOver from './Popover/PopOver';
import Auth from './Auth/AuthNav';
import NonAuth from './Auth/NonAuthNav';
import { useRecoilValue } from 'recoil';
import { usersState } from '../../../store';
import { Outlet, useLocation } from 'react-router-dom';

const Nav = () => {
  const { isAuthenticated } = useRecoilValue(usersState);
  const [isClicked, setIsClicked] = useState(false);
  const { pathname } = useLocation();
  const paths = ['/login', '/signup'];

  return (
    <>
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
          {isAuthenticated ? <Auth /> : <NonAuth />}
        </S.NavContainer>
      </S.Header>
      {paths.includes(pathname) && <Outlet />}
    </>
  );
};

export default Nav;
