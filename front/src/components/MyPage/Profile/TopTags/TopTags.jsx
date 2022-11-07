import React from 'react';
import * as M from '../../MyPage.style';
import * as S from './TopTags.style';

import useGetAllTags from '../../../../hooks/tags/useGetAllTags';
import TagList from './TagList';
import CustomLink from '../../../@common/Link';

import { ROUTES } from '../../../../constants';

const TopTags = () => {
  const { data: tags, status } = useGetAllTags();

  if (status === 'success') {
    const sortedTags = tags
      .sort((a, b) => b.usedTagCnt - a.usedTagCnt)
      .slice(0, 10);

    return (
      <S.TagsWrapper>
        <S.TitleContainer>
          <M.Title>Top Tags</M.Title>
          <CustomLink path={ROUTES.TAGS.path}>
            <span style={{ cursor: 'pointer' }}>View all tags</span>
          </CustomLink>
        </S.TitleContainer>
        <S.TagContainer>
          {sortedTags.map(({ tagName, tagDescription, usedTagCnt }, i) => (
            <TagList
              key={i}
              content={tagName}
              count={usedTagCnt}
              desc={tagDescription}
            />
          ))}
        </S.TagContainer>
      </S.TagsWrapper>
    );
  }
};

export default TopTags;
