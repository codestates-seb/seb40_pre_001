import React from 'react';
import SmallBlueSpan from '../../../@common/Text/SmallBlueSpan';
import TimeAgo from 'react-timeago';
import * as S from './Comment.style';
import { PencilIcon } from '../../../@common/Icons';
import useDeleteAnswerComment from './hooks/useDeleteAnswerComment';
import useDeletePostComment from './hooks/useDeletePostComment';
import useGetCurrentUser from '../../../../hooks/users/useGetCurrentUser';
// import useUpdateAnswerComment from './hooks/useUpdateAnswerComment';

const CommentList = ({
  type,
  id,
  content,
  userName,
  createdAt,
  userId,
  answerId,
}) => {
  const { currentUser } = useGetCurrentUser();
  const { handleDelete: handleDeleteAnswerComment } = useDeleteAnswerComment();
  const { handleDelete: handleDeletePostComment } = useDeletePostComment();
  // const { handleUpdate: handleUpdateAnswerComment } = useUpdateAnswerComment();
  answerId;
  return (
    <S.CommentList data-id={id}>
      <S.Li>
        <S.TextContainer>
          <S.CommentBody>
            {/* comment Context */}
            <S.Copy>{content}</S.Copy>
            <S.Author>
              &nbsp;-&nbsp;
              {/* author */}
              <SmallBlueSpan content={userName} />
            </S.Author>
            {/* createdAt */}
            <TimeAgo
              date={createdAt}
              style={{
                color: 'hsl(210,8%,60%)',
                fontSize: 13,
                marginLeft: 2,
                marginRight: 3,
              }}
            />
            {currentUser?.userId === userId && (
              <>
                <S.EditButton
                  onClick={() => {
                    if (type === 'post') {
                      // 수정
                    } else if (type === 'answer') {
                      // 수정
                    }
                  }}
                >
                  <PencilIcon fill='hsl(210,8%,60%)' />
                </S.EditButton>
                <span
                  style={{ marginLeft: 5, fontSize: 15, cursor: 'pointer' }}
                  onClick={() => {
                    if (type === 'post') {
                      handleDeletePostComment(id, currentUser.userId);
                    } else if (type === 'answer') {
                      handleDeleteAnswerComment(id, currentUser.userId);
                    }
                  }}
                >
                  &times;
                </span>
              </>
            )}
          </S.CommentBody>
        </S.TextContainer>
      </S.Li>
    </S.CommentList>
  );
};

export default CommentList;
