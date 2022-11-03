import React from 'react';
import { TagButton } from '../../../@common/Buttons';
import { TextViewer } from '../../../@common/TextEditor/TextEditor';
import * as S from './PostBody.style';
import UserInfo from './UserInfo';

import { useRecoilValue } from 'recoil';
import { pagesState } from '../../../../store';
import { useDeletePost } from '../../../../hooks/usePost';
import useGetAllPosts from '../../../../hooks/questions/useGetAllPosts';

const RightBox = ({ tags, content, author, createdAt }) => {
  const { currentContentId } = useRecoilValue(pagesState);
  const iam = true;

  const { status } = useGetAllPosts();
  const deletePost = useDeletePost('questions', '/questions');

  const onClick = (id) => {
    status === 'success'
      ? deletePost.mutate(id)
      : status === 'error'
      ? console.log('Failed to Delete Post')
      : null;
  };

  return (
    <S.RightBox>
      <S.PostBody>
        <TextViewer initialValue={content.context} />
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
            {iam && (
              <>
                <a>Edit</a>
                <a onClick={() => onClick(currentContentId)}>Delete</a>
              </>
            )}
            <a>Follow</a>
          </S.FeatureLeft>
        </S.FeatureBox>
        <UserInfo author={author} createdAt={createdAt} />
      </S.BottomBox>
      <S.Comment>Add a comment</S.Comment>
    </S.RightBox>
  );
};

export default RightBox;
