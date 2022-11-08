import React from 'react';
import { useSetRecoilState } from 'recoil';
import { usersState } from '../../../../store';
import { SmallLogoIcon } from '../../../@common/Icons';
import SmallBlueSpan from '../../../@common/Text/SmallBlueSpan';

import * as S from './AuthNav.style';

const LogoutPopOver = () => {
  const setIsAuthenticated = useSetRecoilState(usersState);

  const handleLogout = () => {
    setIsAuthenticated({ isAuthenticated: false, currentUser: 'anonymous' });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert('로그아웃 되었습니다');
  };

  return (
    <S.PopOverContainer>
      <S.PopOverHeaderContainer>
        <SmallBlueSpan
          content='CURRENT COMMUNITY'
          style={{ fontWeight: 700, fontSize: 11 }}
        />
      </S.PopOverHeaderContainer>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <S.LogoutContainer>
          <SmallLogoIcon style={{ width: 10 }} />
          <SmallBlueSpan content='Stack Overflow' />
        </S.LogoutContainer>
        <SmallBlueSpan
          onClick={() => handleLogout()}
          content='log out'
          style={{ marginRight: 10 }}
        />
      </div>
    </S.PopOverContainer>
  );
};

export default LogoutPopOver;
