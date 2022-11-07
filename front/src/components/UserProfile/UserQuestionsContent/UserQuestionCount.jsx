import React from 'react';
import * as S from './UserQuestionCount.stlye';
const UserQeustionCount = ({ number }) => {
  return (
    <div>
      <S.Container>{number}</S.Container>
    </div>
  );
};

export default UserQeustionCount;
