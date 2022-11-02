import React from 'react';
import { TagButton } from '../../../@common/Buttons';
import { TextViewer } from '../../../@common/TextEditor/TextEditor';
import * as S from './PostBody.style';
import UserInfo from './UserInfo';

const RightBox = ({ tags, content }) => {
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
            {/* 글쓴 유저에게만 보이게 */}
            {/* ex) currentUserId === userId */}
            <a>Edit</a>
            <a>Follow</a>
          </S.FeatureLeft>
        </S.FeatureBox>
        <UserInfo />
      </S.BottomBox>
      <S.Comment>Add a comment</S.Comment>
    </S.RightBox>
  );
};

export default RightBox;
