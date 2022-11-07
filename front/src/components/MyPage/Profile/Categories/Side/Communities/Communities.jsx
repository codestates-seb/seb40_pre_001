import React from 'react';
import * as S from './Communities.style';
import SmallLogoIcon from '../../../../../@common/Icons/SmallLogoIcon';
import SmallBlueSpan from '../../../../../@common/Text/SmallBlueSpan';

const UserCommunities = () => {
  return (
    <>
      <S.Title>Communities</S.Title>
      <S.Container>
        <S.LinkBox>
          <SmallLogoIcon style={{ width: 16, height: 13, marginRight: 8 }} />
          <SmallBlueSpan content='Stack Overflow' />
        </S.LinkBox>
        <S.Count>1</S.Count>
      </S.Container>
    </>
  );
};

export default UserCommunities;
