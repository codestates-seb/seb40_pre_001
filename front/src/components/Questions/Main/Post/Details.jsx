import React from 'react';
import { useRecoilState } from 'recoil';
import pagesState from '../../../../store/pagesState';
import TimeAgo from 'react-timeago';
import TagButton from '../../../@common/Buttons/Tag';
import CustomLink from '../../../@common/Link';

import * as S from './Post.style';
import { TextViewer } from '../../../@common/TextEditor/TextEditor';

const PostDetails = ({ data }) => {
  const { title, author, content, tags, createdAt, userId, contentId } = data;
  const [state, setCurrentContentId] = useRecoilState(pagesState);

  return (
    <S.BoxRight>
      <S.Title
        onClick={() => {
          setCurrentContentId({
            ...state,
            currentContentId: contentId,
          });
        }}
      >
        <CustomLink path={`/questions/${userId}`}>{title}</CustomLink>
      </S.Title>
      <TextViewer initialValue={content.context.replace(/<[^>]+>/g, '')} />
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
