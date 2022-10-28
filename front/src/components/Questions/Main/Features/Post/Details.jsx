import React from 'react';
import TimeAgo from 'react-timeago';
import TagButton from '../../../../@common/Buttons/Tag';

import * as S from './Post.style';

const PostDetails = ({ data }) => {
  const { title, author, content, tags, createdAt } = data;

  return (
    <S.BoxRight>
      <S.Title>
        <a href='/questions/74210325/ansible-merge-2-task-with-condition-checks'>
          {title}
        </a>
      </S.Title>
      <p>{content.context}</p>
      {/* Tag Box */}
      <S.ExtraDetailsBox>
        <S.TagBox>
          <ul>
            <li>
              {tags.map((tag) => {
                return <TagButton key={tag} content={tag} />;
              })}
            </li>
          </ul>
        </S.TagBox>
        {/* User Box */}
        <S.DetailRight>
          <S.UserCard>
            <S.UserCardLink>
              <a href='/users/17314281/user17314281'>{author}</a>
            </S.UserCardLink>
            <S.UserPostCount>13</S.UserPostCount>
          </S.UserCard>
          <S.TimeBox>
            <span>
              asked{' '}
              <TimeAgo
                date={createdAt}
                style={{ color: 'hsl(210, 8%, 45%)' }}
              />
            </span>
          </S.TimeBox>
        </S.DetailRight>
      </S.ExtraDetailsBox>
    </S.BoxRight>
  );
};

export default PostDetails;
