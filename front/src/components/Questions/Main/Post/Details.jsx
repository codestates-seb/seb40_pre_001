import React from 'react';
import * as S from './Post.style';
import CustomLink from '../../../@common/Link';
import TagButton from '../../../@common/Buttons/Tag';
import UserCard from './UserCard';

const PostDetails = ({
  data: { questionId, questionTitle, context, createdAt, userId },
}) => {
  const questionTagList = ['javascript', 'java', 'python'];

  return (
    <S.BoxRight>
      <S.Title>
        <CustomLink path={`/questions/${questionId}`}>
          {questionTitle}
        </CustomLink>
      </S.Title>
      <p className='textViewer'>{context.replace(/<[^>]+>/g, '')}</p>
      {/* Tag Box */}
      <S.ExtraDetailsBox>
        <S.TagBox>
          <ul>
            <li>
              {questionTagList.map((tag) => {
                return <TagButton key={tag} content={tag} />;
              })}
            </li>
          </ul>
        </S.TagBox>
        {/* User Box */}
        <UserCard id={userId} createdAt={createdAt} />
      </S.ExtraDetailsBox>
    </S.BoxRight>
  );
};

export default PostDetails;
