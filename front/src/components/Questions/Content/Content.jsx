import React from 'react';
import * as S from './Content.style';
import * as M from '../../../pages/Questions/Questions.style';

import Header from './Header.';
import RightBox from './PostBody/RightBox';
import Answer from './Answer/Answer';
import Widget from '../Widget/Widget';
import LeftBox from './PostBody/LeftBox';

const Content = ({ data }) => {
  const { title, tags, content, status } = data;

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
        <Answer />
      </M.MainContainer>
      <Widget />
    </div>
  );
};

export default Content;
