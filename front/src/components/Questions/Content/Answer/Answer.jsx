import React from 'react';
import LeftBox from '../PostBody/LeftBox';
import RightBox from '../PostBody/RightBox';
import * as S from '../Content.style';

const Answer = ({ status, tags, content, author, createdAt }) => {
  return (
    <>
      <S.PostLayout>
        <LeftBox status={status} />
        <RightBox
          tags={tags}
          content={content}
          author={author}
          createdAt={createdAt}
        />
      </S.PostLayout>
    </>
  );
};

export default Answer;
