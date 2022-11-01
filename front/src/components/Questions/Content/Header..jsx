import React from 'react';
import TitleBox from '../../@common/TitleBox/TitleBar';

import * as S from './Content.style';

const Header = ({ title }) => {
  return (
    <>
      <TitleBox title={title} style={{ width: 1051 }} />
      <S.Status>
        <S.TextBox>
          <span>Asked</span>
          <p>today</p>
        </S.TextBox>
        <S.TextBox>
          <span>Modified</span>
          <p>today</p>
        </S.TextBox>
        <S.TextBox>
          <span>Viewed</span>
          <p>10 times</p>
        </S.TextBox>
      </S.Status>
    </>
  );
};

export default Header;
