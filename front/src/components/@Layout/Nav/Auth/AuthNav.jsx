import React from 'react';
import {
  HelpIcon,
  InboxIcon,
  StackExchangeIcon2,
  TrophyIcon,
} from '../../../@common/Icons';
import * as S from './AuthNav.style';

const Auth = () => {
  return (
    <S.Ol>
      <S.Li>
        <S.ProfileBox>
          <img
            src='https://lh3.googleusercontent.com/a/AATXAJxRbtWtiiQfLRliQJ403f5uiryCfFRKhBFb3yme=k-s48'
            alt="Keonhee Lee's user avatar"
            width='24'
            height='24'
          />
          <span>1</span>
        </S.ProfileBox>
      </S.Li>
      <S.Li style={{ marginLeft: 15 }}>
        <InboxIcon />
      </S.Li>
      <S.Li>
        <TrophyIcon fill1='hsl(210,8%,35%)' style={{ width: 18, height: 18 }} />
      </S.Li>
      <S.Li>
        <HelpIcon />
      </S.Li>
      <S.Li>
        <StackExchangeIcon2 />
      </S.Li>
    </S.Ol>
  );
};

export default Auth;