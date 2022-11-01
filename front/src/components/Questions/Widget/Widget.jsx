import React from 'react';
import Collectives from './Collectives/Collectives';
import YellowBox from './YellowBox/YellowBox';
import RelatedTags from './WidgetBottom/RelatedTags';
import HotNetwork from './WidgetBottom/HotNetwork';

import * as S from './Widget.style';
import SmallBlueSpan from '../../@common/Text/SmallBlueSpan';

const Widget = () => {
  return (
    <S.SideContainer>
      <YellowBox />
      <Collectives />
      <S.AdBox>
        <img
          src='https://tpc.googlesyndication.com/simgad/3248856506927570682'
          alt='advertisement'
        />
        <SmallBlueSpan content='Report this ad' />
      </S.AdBox>
      <RelatedTags />
      <HotNetwork />
    </S.SideContainer>
  );
};

export default Widget;
