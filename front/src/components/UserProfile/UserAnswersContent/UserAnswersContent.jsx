import React from 'react';
import * as S from './UsersAnswersContent.style';
import UserAnswersCount from './UserAnswersCount';
import { UserAnswerdays, UserAnswerList } from './UserAnswersCount.style';

const UserAnswersContent = () => {
  return (
    <div>
      <S.Container>
        <UserAnswersCount />
        <UserAnswerList>How can I react well?</UserAnswerList>
        <UserAnswerdays>may 1,2022</UserAnswerdays>
      </S.Container>
    </div>
  );
};

export default UserAnswersContent;
