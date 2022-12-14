/*eslint-disable*/
import React from 'react';
import * as S from './Ask.style';

import ASK_FORM from '../../../constants/askform';
import { SquareButton } from '../../../components/@common/Buttons/Button.style';

import QuestionAdvice from './Advice';
import QUESTION_ADVICE from '../../../constants/questionAdvice';

import { AskForm } from './AskForm';
import useCreateQuestions from '../../../hooks/questions/useCreateQuestions';
import { useCreatePost } from '../../../hooks/usePost';
import { useRecoilValue } from 'recoil';
import { questions } from '../../../store/questions';
import useGetCurrentUser from '../../../hooks/users/useGetCurrentUser';

const Ask = () => {
  const { title, questionsUp, questionsDown, tags } = useRecoilValue(questions);
  const { mutate } = useCreateQuestions();
  const addPost = useCreatePost('questions', '/questions');

  const { currentUser } = useGetCurrentUser();

  const onClick = () => {
    const mockData = Object.assign({
      userId: currentUser.userId,
      questionTitle: title,
      context: `${questionsUp}\n\n ${questionsDown}`,
      tagList: [
        {
          tagId: 1,
        },
        {
          tagId: 2,
        },
      ],
    });

    console.log(mockData);

    addPost.mutate(mockData)
      ? addPost.mutate(mockData)
      : mutate === 'error'
      ? console.log('Failed to add new Post')
      : null;
  };

  return (
    <S.AskZone>
      <S.ComponentZone>
        <S.AskHeader>
          <div className='header'>Ask a public question</div>
          <img
            className='img'
            src='https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368'
          ></img>
        </S.AskHeader>
        <S.WritGoodQue>
          <div className='header2'>Writing a good question</div>
          <div className='script'>
            You’re ready to <a>ask</a> a <a>programming-related question</a> and
            this form will help guide you through the process.
          </div>
          <div className='script'>
            Looking to ask a non-programming question? See{' '}
            <a>the topics here</a> to find a relevant site.
          </div>
          <div className='list'> Steps</div>
          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </S.WritGoodQue>
        <S.Wrapper>
          <S.LeftWrapper>
            {ASK_FORM.map(
              ({ TITLE, SCRIPT, INDEX, MARKDOWN, PLACEHOLDER, TYPE }) => {
                return (
                  <AskForm
                    key={TITLE}
                    title={TITLE}
                    script={SCRIPT}
                    index={INDEX}
                    markdown={MARKDOWN}
                    placeholder={PLACEHOLDER}
                    type={TYPE}
                  ></AskForm>
                );
              },
            )}
          </S.LeftWrapper>
          <S.RightWrapper>
            {QUESTION_ADVICE.map(({ TITLE, SCRIPT }) => {
              return (
                <QuestionAdvice
                  key={TITLE}
                  title={TITLE}
                  content={SCRIPT}
                ></QuestionAdvice>
              );
            })}
          </S.RightWrapper>
        </S.Wrapper>
        <S.ButtonFooter>
          <SquareButton
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          >
            Review your question
          </SquareButton>
        </S.ButtonFooter>
      </S.ComponentZone>
    </S.AskZone>
  );
};

export default Ask;
