import React from 'react';
import * as S from './UserCommunities.style';

import SmallLogoIcon from '../@common/Icons/SmallLogoIcon';
const UserCommunities = () => {
  return (
    <S.Container>
      <S.CommutnitiesTitle>
        <SmallLogoIcon style={{ width: 16, marginRight: 8 }} />
        Stack Overflow
      </S.CommutnitiesTitle>
      <S.CommutnitiesCount>1</S.CommutnitiesCount>
    </S.Container>
  );
};

export default UserCommunities;
