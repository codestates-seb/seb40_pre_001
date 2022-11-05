import React from 'react';
import useGetUserById from '../../../../hooks/useGetUserById';
import { TagButton } from '../../../@common/Buttons';
import { TextViewer } from '../../../@common/TextEditor/TextEditor';
import * as S from './PostBody.style';
import UserInfo from './UserInfo';
import useDeletePost from '../../../../hooks/questions/useDeletePost';

const RightBox = ({
  type,
  questionId,
  answerId,
  context,
  userId,
  createdAt,
}) => {
  const { data: user } = useGetUserById(userId);
  const { handleDelete } = useDeletePost();

  const currentUser = localStorage.getItem('user') || 'anonymous';
  const tags = ['Javascript', 'Django', 'styled-components'];
  const isAuthor = user?.email === currentUser;

  return (
    <S.RightBox>
      <S.PostBody>
        <TextViewer initialValue={context} />
      </S.PostBody>
      <S.TagBox>
        {tags.map((tag) => {
          return <TagButton key={tag} content={tag} />;
        })}
      </S.TagBox>
      <S.BottomBox>
        <S.FeatureBox>
          <S.FeatureLeft>
            <a style={{ margin: 0 }}>Share</a>
            {isAuthor && (
              <>
                <a>Edit</a>
                <a
                  onClick={() => {
                    type === 'answer'
                      ? handleDelete(answerId, userId)
                      : type === 'post'
                      ? handleDelete(questionId, userId)
                      : null;
                  }}
                >
                  Delete
                </a>
              </>
            )}
            <a>Follow</a>
          </S.FeatureLeft>
        </S.FeatureBox>
        <UserInfo
          author={user?.userNickname}
          createdAt={createdAt}
          isAuthor={isAuthor}
        />
      </S.BottomBox>
      <S.Comment>Add a comment</S.Comment>
    </S.RightBox>
  );
};

export default RightBox;

// const onClick = (id) => {
//   status === 'success'
//     ? deletePost.mutate(id)
//     : status === 'error'
//     ? console.log('Failed to Delete Post')
//     : null;
// };
