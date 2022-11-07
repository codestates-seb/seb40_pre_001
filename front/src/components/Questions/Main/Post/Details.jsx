import React from 'react';
import CustomLink from '../../../@common/Link';
import TagButton from '../../../@common/Buttons/Tag';
import UserCard from './UserCard';
import * as S from './Post.style';
import useGetAllTags from '../../../../hooks/tags/useGetAllTags';

const PostDetails = ({
  data: { questionId, questionTitle, context, createdAt, userId, tagList },
}) => {
  // const questionTagList = ['javascript', 'java', 'python'];
  const { data: tags, status } = useGetAllTags();

  const getTag = (tagId) => {
    const tag = tags?.find((tag) => tag.tagId === tagId);

    return tag.tagName;
  };

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
              {status === 'success' &&
                tagList?.map(({ tagId }, i) => {
                  return <TagButton key={i} content={getTag(tagId)} />;
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
