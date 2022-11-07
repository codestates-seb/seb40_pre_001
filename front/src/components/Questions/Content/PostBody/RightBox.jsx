import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { pagesState } from '../../../../store';
import * as S from './PostBody.style';
import UserInfo from './UserInfo';
import CustomLink from '../../../@common/Link';
import { TagButton } from '../../../@common/Buttons';
import useGetCurrentUser from '../../../../hooks/users/useGetCurrentUser';
import useGetUserById from '../../../../hooks/users/useGetUserById';
import { useDeleteAnswer, useDeletePost } from '../../../../hooks/questions';
import CommentBox from '../Comment/Comment';

const RightBox = ({
  type,
  questionId,
  answerId,
  context,
  userId,
  createdAt,
}) => {
  const { id } = useParams();
  const [state, setCurrentQuestionId] = useRecoilState(pagesState);
  const { data: user } = useGetUserById(userId);
  const { handleDelete: handleDeletePost } = useDeletePost();
  const { handleDelete: handleDeleteAnswer } = useDeleteAnswer();
  const { currentUser: responseUser } = useGetCurrentUser();

  useEffect(() => {
    setCurrentQuestionId({ ...state, currentQuestionId: questionId });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionId]);

  const currentUser = localStorage.getItem('user') || 'anonymous';
  const tags = ['Javascript', 'Django', 'styled-components'];
  const isAuthor = user?.email === currentUser;

  return (
    <S.RightBox>
      <S.PostBody>
        <p className='textViewer'>{context.replace(/<[^>]+>/g, '')}</p>
      </S.PostBody>
      <S.TagBox>
        {tags.map((tag) => {
          return <TagButton key={tag} content={tag} />;
        })}
      </S.TagBox>
      <S.BottomBox>
        <S.FeatureBox>
          <S.FeatureLeft>
            <S.FeatureSpan style={{ margin: 0 }}>Share</S.FeatureSpan>
            {isAuthor && (
              <>
                <CustomLink
                  path={
                    type === 'post'
                      ? `/questions/7${id}/edit`
                      : `/questions/8${answerId}/edit`
                  }
                >
                  <S.FeatureSpan>Edit</S.FeatureSpan>
                </CustomLink>
                <S.FeatureSpan
                  onClick={() => {
                    type === 'answer'
                      ? handleDeleteAnswer(
                          responseUser.userId,
                          questionId,
                          answerId,
                        )
                      : type === 'post'
                      ? handleDeletePost(questionId, userId)
                      : null;
                  }}
                >
                  Delete
                </S.FeatureSpan>
              </>
            )}
            <S.FeatureSpan>Follow</S.FeatureSpan>
          </S.FeatureLeft>
        </S.FeatureBox>
        <UserInfo
          type={type}
          author={user?.userNickname}
          createdAt={createdAt}
          isAuthor={isAuthor}
        />
      </S.BottomBox>
      <CommentBox type={type} currentUser={responseUser} answerId={answerId} />
    </S.RightBox>
  );
};

export default RightBox;
