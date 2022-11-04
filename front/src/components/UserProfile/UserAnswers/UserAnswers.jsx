import React from 'react';
import * as S from './UserAnswers.style';
import {
  UserAnswersButton,
  UserQuestionButton,
} from '../../../constants/pages';
import UserViewAll from '../UserViewAll/UserViewAll';

const UserAnswers = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Answers</S.Title>
        <UserViewAll />
      </S.TitleContainer>

      <S.BoxLeft>
        {UserAnswersButton.map((button) => {
          return button === 'Answers' ? (
            <S.CategoryButton key={button}>{button}</S.CategoryButton>
          ) : (
            <S.CategoryButton key={button}>{button}</S.CategoryButton>
          );
        })}
      </S.BoxLeft>
      <S.TitleContainer>
        <S.Title>Questions</S.Title>
        <UserViewAll />
      </S.TitleContainer>

      {/* qeustions */}
      <S.BoxLeft>
        {UserQuestionButton.map((button) => {
          return button === 'Qeustion' ? (
            <S.CategoryButton key={button}>{button}</S.CategoryButton>
          ) : (
            <S.CategoryButton key={button}>{button}</S.CategoryButton>
          );
        })}
      </S.BoxLeft>
    </S.Container>
  );
};

export default UserAnswers;
