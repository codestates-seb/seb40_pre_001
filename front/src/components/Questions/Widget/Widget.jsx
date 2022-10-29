import React from 'react';
import Collectives from './Collectives/Collectives';
import YellowBox from './YellowBox/YellowBox';

import * as S from './Widget.style';

const Widget = () => {
  return (
    <S.SideContainer>
      <YellowBox />
      <Collectives />
    </S.SideContainer>
  );
};

export default Widget;
