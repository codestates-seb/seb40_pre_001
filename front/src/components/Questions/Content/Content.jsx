import React from 'react';
import * as S from './Content.style';
import * as M from '../../../pages/Questions/Questions.style';

import Header from './Header.';
import RightBox from './PostBody/RightBox';
import Widget from '../Widget/Widget';
import LeftBox from './PostBody/LeftBox';
import PostAnswer from './Answer/PostAnswer';
import { useRecoilValue } from 'recoil';
import { pagesState } from '../../../store';
import useGetAllPosts from '../../../hooks/questions/useGetAllPosts';
import Answer from './Answer/Answer';

const Content = () => {
  const { currentContentId } = useRecoilValue(pagesState);
  const { data } = useGetAllPosts((data) => {
    const currentPost = data.find(
      (post) => post.contentId === currentContentId,
    );

    return currentPost;
  });

  const { title, tags, content, status, answers, createdAt, author } = data;

  return (
    <div>
      <Header title={title} views={status.views} createdAt={createdAt} />
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
          <RightBox
            tags={tags}
            content={content}
            author={author}
            createdAt={createdAt}
          />
        </S.PostLayout>
        {/* Answers */}
        <S.AnswerHeader>{answers.length} Answer</S.AnswerHeader>
        {answers?.map(({ content, status, tags, author, createdAt }, i) => {
          return (
            <Answer
              key={i}
              status={status}
              tags={tags}
              content={content}
              author={author}
              createdAt={createdAt}
            />
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
