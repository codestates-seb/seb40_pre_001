import React from 'react';
import * as S from '../../../components/Questions/Widget/Collectives/Collectives.style';
import QuestionPen from '../../../components/@common/Icons/QuestionPen';

const QuestionAdvice = ({ title, content }) => {
  return (
    <S.Container>
      <S.Header>{title}</S.Header>
      <S.ContentContainer>
        <QuestionPen />
        <div>{content}</div>
      </S.ContentContainer>
    </S.Container>
  );
};

export default QuestionAdvice;
