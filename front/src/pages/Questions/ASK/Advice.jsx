import React from 'react';
import * as S from '../../../components/Questions/Widget/Collectives/Collectives.style';
import QuestionPen from '../../../components/@common/Icons/QuestionPen';

const QuestionAdvice = ({ key, title, content }) => {
  return (
    <S.Container key={key}>
      <S.Header>{title}</S.Header>
      <S.ContentContainer>
        <QuestionPen />
        <div>{content}</div>
      </S.ContentContainer>
    </S.Container>
  );
};

export default QuestionAdvice;
