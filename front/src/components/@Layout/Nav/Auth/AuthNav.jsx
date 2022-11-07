import React, { useState } from 'react';
import { getAllTags } from '../../../../apis/tags';
import Unnamed from '../../../../assets/unnamed.png';
import {
  HelpIcon,
  InboxIcon,
  StackExchangeIcon2,
  TrophyIcon,
} from '../../../@common/Icons';
import * as S from './AuthNav.style';

import LogoutPopOver from './LogoutPopOver';

const Auth = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <S.Ol style={{ marginTop: 6 }}>
      <S.Li>
        <S.ProfileBox>
          <img src={Unnamed} alt='A' width='24' height='24' />
          <span>1</span>
        </S.ProfileBox>
      </S.Li>
      <S.Li style={{ marginLeft: 15 }}>
        <InboxIcon />
      </S.Li>
      <S.Li onClick={() => getAllTags()}>
        <TrophyIcon fill1='hsl(210,8%,35%)' style={{ width: 18, height: 18 }} />
      </S.Li>
      <S.Li>
        <HelpIcon />
      </S.Li>
      <S.Li onClick={() => setIsClicked(!isClicked)}>
        <StackExchangeIcon2 />
        {isClicked && <LogoutPopOver />}
      </S.Li>
    </S.Ol>
  );
};

export default Auth;
