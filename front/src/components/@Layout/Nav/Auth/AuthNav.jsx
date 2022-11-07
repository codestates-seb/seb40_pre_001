import React, { useState } from 'react';
import { getAllTags } from '../../../../apis/tags';
import Unnamed from '../../../../assets/unnamed.png';
import useGetCurrentUser from '../../../../hooks/users/useGetCurrentUser';
import {
  HelpIcon,
  InboxIcon,
  StackExchangeIcon2,
  TrophyIcon,
} from '../../../@common/Icons';
import CustomLink from '../../../@common/Link';
import Spinner from '../../../@common/Spinner';
import * as S from './AuthNav.style';

import LogoutPopOver from './LogoutPopOver';

const Auth = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { currentUser, isSuccess, isLoading } = useGetCurrentUser();

  if (isLoading) {
    return <Spinner />;
  }

  if (isSuccess) {
    return (
      <S.Ol style={{ marginTop: 6 }}>
        <S.Li>
          <CustomLink
            path={`users/${currentUser?.userId}/${currentUser?.userNickname}`}
          >
            <S.ProfileBox>
              <img src={Unnamed} alt='A' width='24' height='24' />
              <span>1</span>
            </S.ProfileBox>
          </CustomLink>
        </S.Li>
        <S.Li style={{ marginLeft: 15 }}>
          <InboxIcon />
        </S.Li>
        <S.Li onClick={() => getAllTags()}>
          <TrophyIcon
            fill1='hsl(210,8%,35%)'
            style={{ width: 18, height: 18 }}
          />
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
  }
};

export default Auth;
