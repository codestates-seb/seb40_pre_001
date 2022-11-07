import React from 'react';
import * as S from '../Questions.style';
import { Content } from '../../../components/Questions';

const Post = () => {
  return (
    <S.ContentWrapper>
      <S.PostContainer>
        <Content />
      </S.PostContainer>
    </S.ContentWrapper>
  );
};

export default Post;
