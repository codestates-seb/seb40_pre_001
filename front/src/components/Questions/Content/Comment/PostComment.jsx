import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import useCreateComment from '../../../../hooks/questions/useCreateComment';
import * as S from './PostComment.style';

const PostComment = ({ type, isClicked, setIsClicked, currentUser }) => {
  const { id } = useParams();
  const textRef = useRef(null);
  const { handleCreate: handleCreateComment } = useCreateComment();

  return (
    <S.PostCommentBox isClicked={isClicked}>
      <S.TextArea ref={textRef} placeholder='write your comment here' />
      <S.submitButton
        onClick={(e) => {
          e.preventDefault();

          setIsClicked(!isClicked);
          type === 'post'
            ? handleCreateComment(
                currentUser.userId,
                Number(id),
                textRef.current.value,
              )
            : console.log(type);
        }}
      >
        Submit
      </S.submitButton>
    </S.PostCommentBox>
  );
};

export default PostComment;
