import React from 'react';
import * as S from './Content.style';
import * as M from '../../../pages/Questions/Questions.style';

import Header from './Header.';
import RightBox from './PostBody/RightBox';
import Widget from '../Widget/Widget';
import LeftBox from './PostBody/LeftBox';
import PostAnswer from './Answer/PostAnswer';
import useGetAllPosts from '../../../hooks/questions/useGetAllPosts';
import Answer from './Answer/Answer';
import { useParams } from 'react-router-dom';

const Content = () => {
  const { id } = useParams();
  const { data, status: fetchingStatus } = useGetAllPosts((data) =>
    data.find((post) => post.questionId === Number(id)),
  );

  // const author = getUserById(id).userNickname;

  return fetchingStatus === 'success' ? (
    <div>
      <Header
        title={data.questionTitle}
        views={data.status.views}
        createdAt={data.createdAt}
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
          <LeftBox
            status={data.status}
            upVotedUsers={data.upVotedUsers}
            downVotedUsers={data.downVotedUsers}
          />
          <RightBox
            tags={data.tags}
            content={data.content}
            author={data?.author}
            createdAt={data.createdAt}
          />
        </S.PostLayout>
        {/* Answers */}

        {data?.answers && (
          <>
            <S.AnswerHeader>{data.answers.length} Answer</S.AnswerHeader>
            {data.answers.map(
              (
                {
                  content,
                  status,
                  tags,
                  author,
                  createdAt,
                  upVotedUsers,
                  downVotedUsers,
                },
                i,
              ) => {
                return (
                  <Answer
                    key={i}
                    status={status}
                    tags={tags}
                    content={content}
                    author={author}
                    createdAt={createdAt}
                    upVotedUsers={upVotedUsers}
                    downVotedUsers={downVotedUsers}
                  />
                );
              },
            )}
          </>
        )}
        {/* Post Answer */}
        <PostAnswer />
      </M.MainContainer>
      <Widget />
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default Content;
