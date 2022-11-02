import React from 'react';
import { useRecoilValue } from 'recoil';
import { usersState } from '../../../../store';
import CustomLink from '../../../@common/Link';
import * as S from './Navigation.style';

const Links = ({ isClicked, setIsClicked }) => {
  const isAuthenticated = useRecoilValue(usersState);

  console.log(isAuthenticated);

  return (
    <S.Ol>
      {!isAuthenticated && (
        <S.Li>
          <CustomLink path='/about'>About</CustomLink>
        </S.Li>
      )}

      <S.Li>
        <a
          className={isClicked ? 'active' : undefined}
          onClick={() => setIsClicked(!isClicked)}
        >
          Products
        </a>
      </S.Li>
      {!isAuthenticated && (
        <S.Li>
          <CustomLink path='/teams'>For Teams</CustomLink>
        </S.Li>
      )}
    </S.Ol>
  );
};

export default Links;
