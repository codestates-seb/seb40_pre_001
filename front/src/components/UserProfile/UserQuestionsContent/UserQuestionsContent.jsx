import React from 'react';
import * as S from './UserQuestionsContent.style';
import UserQeustionCount from './UserQuestionCount';
import { UserQuestionList, UsesQuestionDays } from './UserQuestionCount.stlye';

const UserQuestions = () => {
  return (
    <S.Container>
      <UserQeustionCount />
      <UserQuestionList>힘드렁심드렁큰타이거</UserQuestionList>
      <UsesQuestionDays>jus 1,2022</UsesQuestionDays>
    </S.Container>
  );
};

export default UserQuestions;
