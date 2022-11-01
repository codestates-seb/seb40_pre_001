import React from 'react';

import SideBarTop from './SidebarTop';
import SidebarBottom from './SidebarBottom';
import * as S from './Sidebar.style';

const LeftSidebar = () => {
  return (
    <S.LeftContainer>
      <S.LeftStickyContainer>
        <SideBarTop />
        <SidebarBottom />
      </S.LeftStickyContainer>
    </S.LeftContainer>
  );
};

export default LeftSidebar;
