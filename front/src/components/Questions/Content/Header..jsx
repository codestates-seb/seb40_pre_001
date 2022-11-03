import React from 'react';
import TimeAgo from 'react-timeago';
import TitleBox from '../../@common/TitleBox/TitleBar';

import * as S from './Content.style';

const Header = ({ title, views, createdAt }) => {
  return (
    <>
      <TitleBox title={title} style={{ width: 1051 }} />
      <S.Status>
        <S.TextBox>
          <span>Asked</span>
          <TimeAgo
            date={createdAt}
            style={{ color: 'hsl(210, 8%, 15%)', fontSize: 13 }}
          />
          {/* <p>today</p> */}
        </S.TextBox>
        <S.TextBox>
          <span>Modified</span>
          <p>today</p>
        </S.TextBox>
        <S.TextBox>
          <span>Viewed</span>
          <p>{views} times</p>
        </S.TextBox>
      </S.Status>
    </>
  );
};

export default Header;
