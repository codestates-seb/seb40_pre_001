import React from 'react';
import * as S from './Content.style';
import * as M from '../../../pages/Questions/Questions.style';

import Header from './Header.';
import RightBox from './PostBody/RightBox';
import Widget from '../Widget/Widget';
import LeftBox from './PostBody/LeftBox';
import PostAnswer from './Answer/PostAnswer';

const Content = ({ data }) => {
  const { title, tags, content, status, answers } = data;

  return (
    <div>
      <Header title={title} />
      <M.MainContainer>
        <S.ImgContainer>
          <img
            src='https://tpc.googlesyndication.com/simgad/10582817586221403560'
            border='0'
            width='728'
            height='90'
            alt=''
          />
        </S.ImgContainer>
        <S.PostLayout>
          <LeftBox status={status} />
          <RightBox tags={tags} content={content} />
        </S.PostLayout>
        {/* Answers */}
        {answers.map(({ content }, i) => {
          return (
            <>
              <div>
                <S.AnswerHeader>{answers.length} Answer</S.AnswerHeader>
              </div>
              <S.PostLayout key={i}>
                <LeftBox status={status} />
                <RightBox tags={tags} content={content} />
              </S.PostLayout>
            </>
          );
        })}

        {/* Post Answer */}
        <PostAnswer />
      </M.MainContainer>
      <Widget />
    </div>
  );
};

export default Content;
