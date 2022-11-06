import React from 'react';
import LeftBox from '../PostBody/LeftBox';
import RightBox from '../PostBody/RightBox';
import * as S from '../Content.style';

const Answer = ({ detail }) => {
  const { context, createdAt, questionId, userId, voteCount, answerId } =
    detail;

  return (
    <>
      <S.PostLayout>
        <LeftBox type='answer' votes={voteCount} />
        <RightBox
          type='answer'
          answerId={answerId}
          questionId={questionId}
          context={context}
          userId={userId}
          createdAt={createdAt}
        />
      </S.PostLayout>
    </>
  );
};

export default Answer;
