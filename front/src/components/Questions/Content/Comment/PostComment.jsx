import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import useCreateAnswerComment from './hooks/useCreateAnswerComment';
import useCreateComment from './hooks/useCreateComment';
import * as S from './PostComment.style';

const PostComment = ({
  type,
  isClicked,
  setIsClicked,
  currentUser,
  answerId,
}) => {
  const { id } = useParams();
  const textRef = useRef(null);
  const { handleCreate: handleCreateComment } = useCreateComment();
  const { handleCreate: handleCreateAnswerComment } = useCreateAnswerComment();
  return (
    <S.PostCommentBox isClicked={isClicked}>
      <S.TextArea ref={textRef} placeholder='write your comment here' />
      <S.submitButton
        id={answerId}
        onClick={(e) => {
          e.preventDefault();
          setIsClicked(!isClicked);

          if (!currentUser || !currentUser.userId) {
            alert('로그인을 해주시기 바랍니다.');
            return;
          }
          type === 'post'
            ? handleCreateComment(currentUser.userId, id, textRef.current.value)
            : handleCreateAnswerComment(
                currentUser.userId,
                e.target.id,
                textRef.current.value,
              );
        }}
      >
        Submit
      </S.submitButton>
    </S.PostCommentBox>
  );
};

export default PostComment;
