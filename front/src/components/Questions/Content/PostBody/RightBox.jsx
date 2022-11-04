import React from 'react';
import useGetUserById from '../../../../hooks/useGetUserById';
import { TagButton } from '../../../@common/Buttons';
import { TextViewer } from '../../../@common/TextEditor/TextEditor';
import * as S from './PostBody.style';
import UserInfo from './UserInfo';

const RightBox = ({ context, userId, createdAt }) => {
  const tags = ['Javascript', 'Django', 'styled-components'];
  console.log(userId);

  const { data: user } = useGetUserById(userId);

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
            {/* 글쓴이에게만 보이게 */}
            <a>Edit</a>
            <a>Delete</a>
            {/*  */}
            <a>Follow</a>
          </S.FeatureLeft>
        </S.FeatureBox>
        <UserInfo author={user?.userNickname} createdAt={createdAt} />
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
