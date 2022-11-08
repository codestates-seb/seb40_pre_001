import React from 'react';
import * as S from '../MyPage.style';
import TopTags from './TopTags/TopTags';
import Badge from '../../../assets/badge.png';

const UserProfile = () => {
  return (
    <>
      <div style={{ padding: 10 }}>
        <S.FakeBadgeContainer>
          <img src={Badge} width={806} height={235} />
        </S.FakeBadgeContainer>
        <TopTags />
      </div>
    </>
  );
};

export default UserProfile;
