import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetAnswerComments from './hooks/useGetAnswerComments';
import useGetPostComments from './hooks/useGetPostComments';
import * as S from './Comment.style';
import CommentList from './CommentList';
import PostComment from './PostComment';

const CommentBox = ({ type, currentUser, answerId }) => {
  const { id } = useParams();
  const [isClicked, setIsClicked] = useState(false);

  const { questionComments, status: postStatus } = useGetPostComments(id);
  const { answerComments, status: answerStatus } = useGetAnswerComments(id);

  if (postStatus === 'success' || answerStatus === 'success') {
    return (
      <S.Container>
        {type === 'post'
          ? questionComments?.map(
              ({
                userId,
                questionCommentId,
                questionCommentContent,
                questionCommentUsername,
                createdAt,
              }) => {
                return (
                  <CommentList
                    type='post'
                    key={questionCommentId}
                    id={questionCommentId}
                    userId={userId}
                    content={questionCommentContent}
                    userName={questionCommentUsername}
                    createdAt={createdAt}
                  />
                );
              },
            )
          : answerComments?.map(
              ({
                userId,
                answerCommentId,
                answerCommentContent,
                answerCommentUsername,
                createdAt,
                answerId: commentAnswerId,
              }) => {
                if (answerId) {
                  if (commentAnswerId === answerId) {
                    return (
                      <CommentList
                        type='answer'
                        key={answerCommentId}
                        id={answerCommentId}
                        answerId={answerId}
                        userId={userId}
                        content={answerCommentContent}
                        userName={answerCommentUsername}
                        createdAt={createdAt}
                      />
                    );
                  }
                }
              },
            )}

        <S.Comment
          isClicked={isClicked}
          onClick={() => setIsClicked(!isClicked)}
        >
          Add a comment
        </S.Comment>
        <PostComment
          type={type}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          currentUser={currentUser}
          answerId={answerId}
        />
      </S.Container>
    );
  }
};

export default CommentBox;
