import React from 'react';
import * as S from './Content.style';
import * as M from '../../../pages/Questions/Questions.style';

import Header from './Header.';
import RightBox from './PostBody/RightBox';
import Widget from '../Widget/Widget';
import LeftBox from './PostBody/LeftBox';
import PostAnswer from './Answer/PostAnswer';
import Answer from './Answer/Answer';
import { useParams } from 'react-router-dom';
import useGetPostById from '../../../hooks/questions/useGetPostById';
import Spinner from '../../@common/Spinner';

const Content = () => {
  const { id } = useParams();
  const { data, isSuccess } = useGetPostById(id);

  const {
    questionTitle,
    userId,
    viewCount,
    voteCount,
    createdAt,
    modifiedAt,
    answers,
    context,
  } = data;

  return isSuccess ? (
    <div>
      <Header
        title={questionTitle}
        viewCount={viewCount}
        createdAt={createdAt}
        modifiedAt={modifiedAt}
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
          <RightBox context={context} userId={userId} createdAt={createdAt} />
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
  ) : (
    <Spinner />
  );
};

export default Content;
