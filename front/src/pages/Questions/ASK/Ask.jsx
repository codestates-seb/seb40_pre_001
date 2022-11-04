/*eslint-disable*/
import React, { useState } from 'react';

import useGetAllPost from '../../../hooks/questions/useGetAllPosts';
import { useCreatePost } from '../../../hooks/usePost';

import * as S from './Ask.style';

import ASK_FORM from '../../../constants/askform';
import { SquareButton } from '../../../components/@common/Buttons/Button.style';

import QuestionAdvice from './Advice';
import QUESTION_ADVICE from '../../../constants/questionAdvice';

const Ask = () => {
  // useState를 useRef로 대체했을때 차이 (렌더링 ), debounce 적용하면 onChange마다 rendering 일어나지 않음??
  // 예시
  const [state, setState] = useState({ title: '', author: '', context: '' });
  const { data, status } = useGetAllPost();
  const addPost = useCreatePost('questions', '/questions');

  // createdAt
  const date = new Date().getDate();
  const day = new Date().getDay();
  const year = new Date().getFullYear();
  const randomDate = `${year}-${day}-${date}`;

  const onClick = () => {
    const mockData = Object.assign({
      questionId: data.length + 1,
      userId: Math.floor(Math.random() * 123456),
      title: state.title,
      author: state.author,
      createdAt: randomDate,
      tags: ['Mock', 'Service', 'Network'],
      status: {
        votes: 2022,
        answers: 12,
        views: 25,
      },
      content: {
        image: 'url',
        context: state.context,
        code: `<div>code</div>`,
      },
    });

    status === 'success'
      ? addPost.mutate(mockData)
      : status === 'error'
      ? console.log('Failed to add new Post')
      : null;
  };

  const AskForm = ({ title, script, button, markdown }) => {
    return (
      <S.AskForm>
        <div className='title'>{title}</div>
        <div className='content'>{script}</div>
        {markdown ? null : <input></input>}
        {button ? (
          <SquareButton style={{ width: '49px' }}>Next</SquareButton>
        ) : null}
      </S.AskForm>
    );
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
            {ASK_FORM.map(({ TITLE, SCRIPT, BUTTON, MARKDOWN }) => {
              return (
                <AskForm
                  key={TITLE}
                  title={TITLE}
                  script={SCRIPT}
                  button={BUTTON}
                  markdown={MARKDOWN}
                ></AskForm>
              );
            })}
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

        {/* <form
          type='submit'
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <label htmlFor='author'>Author</label>
          <input
            type='author'
            value={state.author}
            name='author'
            style={{ width: 300, height: 30 }}
            onChange={(e) => setState({ ...state, author: e.target.value })}
            required
          />
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            value={state.title}
            name='title'
            style={{ width: 300, height: 30 }}
            onChange={(e) => setState({ ...state, title: e.target.value })}
            required
          />
          <label htmlFor='context'>Context</label>
          <textarea
            type='text'
            name='context'
            style={{ width: 300, height: 300 }}
            onChange={(e) => setState({ ...state, context: e.target.value })}
            required
          />
          <button type='button' onClick={onClick}>
            제출하기
          </button>
        </form> */}
        <S.ButtonFooter>
          <SquareButton>Review your question</SquareButton>
        </S.ButtonFooter>
      </S.ComponentZone>
    </S.AskZone>
  );
};

export default Ask;
