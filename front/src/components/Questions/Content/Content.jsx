import React from 'react';

import Header from './Header.';
import RightBox from './PostBody/RightBox';
import Widget from '../Widget/Widget';
import LeftBox from './PostBody/LeftBox';
import PostAnswer from './Answer/PostAnswer';
import Answer from './Answer/Answer';

import * as S from './Content.style';
import * as M from '../../../pages/Questions/Questions.style';
import { useParams } from 'react-router-dom';
import useGetPostById from '../../../hooks/questions/useGetPostById';

import Spinner from '../../@common/Spinner';

const Content = () => {
  const { id } = useParams();

  const { data, isSuccess, isLoading } = useGetPostById(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (isSuccess) {
    const {
      questionTitle,
      createdAt,
      modifiedAt,
      viewCount,
      voteCount,
      questionId,
      context,
      userId,
      answers,
    } = data;

    return (
      <div>
        <Header
          title={questionTitle}
          createdAt={createdAt}
          modifiedAt={modifiedAt}
          viewCount={viewCount}
        />
        <M.MainContainer>
          <S.ImgContainer>
            <img
              src='https://tpc.googlesyndication.com/simgad/10582817586221403560'
              border='0'
              width='728'
              height='90'
              alt='googleImage'
            />
          </S.ImgContainer>
          <S.PostLayout>
            <LeftBox votes={voteCount} />
            <RightBox
              questionId={questionId}
              context={context}
              userId={userId}
              createdAt={createdAt}
            />
          </S.PostLayout>
          {/* Answers */}
          {answers && (
            <>
              <S.AnswerHeader>{answers.length} Answer</S.AnswerHeader>
              {answers.map((answer, i) => {
                return <Answer detail={answer} key={i} />;
              })}
            </>
          )}
          {/* Post Answer */}
          <PostAnswer />
        </M.MainContainer>
        <Widget />
      </div>
    );
  }
};

export default Content;
