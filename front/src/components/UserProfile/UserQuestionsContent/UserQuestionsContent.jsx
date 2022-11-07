import React from 'react';
import * as S from './UserQuestionsContent.style';
import UserQeustionCount from './UserQuestionCount';
import { UserQuestionList, UsesQuestionDays } from './UserQuestionCount.stlye';
import useGetUserAnswers from '../../../hooks/users/useGetUserAnsers';

const UserQuestions = ({ userId }) => {
  const { userQuestions } = useGetUserAnswers(userId);

  return (
    <S.Container>
      {userQuestions?.map(({ questionTitle, createdAt }) => {
        return (
          <S.Li key={questionTitle}>
            <UserQeustionCount number={1000} />
            <UserQuestionList>{questionTitle}</UserQuestionList>
            <UsesQuestionDays>{createdAt}</UsesQuestionDays>
          </S.Li>
        );
      })}
    </S.Container>
  );
};

export default UserQuestions;
