import React from 'react';
import TimeAgo from 'react-timeago';
import TitleBox from '../../@common/TitleBox/TitleBar';

import * as S from './Content.style';

const Header = ({ title, viewCount, createdAt, modifiedAt }) => {
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
          <span>modified</span>
          <TimeAgo
            date={modifiedAt}
            style={{ color: 'hsl(210, 8%, 15%)', fontSize: 13 }}
          />
        </S.TextBox>
        <S.TextBox>
          <span>Viewed</span>
          <p>{viewCount} times</p>
        </S.TextBox>
      </S.Status>
    </>
  );
};

export default Header;
