import React from 'react';
import * as S from './Tags.style';
import TagsTitleText from './TagsTitleText';
import TagsAll from './TagsAll';
import TagsFilter from '../../components/TagsPage/TagsFilter/TagsFilter';
import Contents from '../../components/TagsPage/Tags/Contents';

import useGetAllTags from '../../hooks/tags/useGetAllTags';
import TitleBox from '../../components/@common/TitleBox/TitleBar';

const Tags = () => {
  const { data, status } = useGetAllTags();

  if (status === 'success') {
    return (
      <S.Container style={{ height: 1000 }}>
        <TitleBox title='Tags' />
        <TagsTitleText />
        <TagsAll />
        <TagsFilter />
        <S.TagsContainer>
          {data.map(({ tagId, tagName, tagDescription }) => {
            return (
              tagName.trim().length !== 0 && (
                <Contents
                  key={tagId}
                  tagName={tagName}
                  tagDescription={tagDescription}
                >
                  {tagName}
                </Contents>
              )
            );
          })}
          <Contents />
        </S.TagsContainer>
        <S.PagiNationContainer></S.PagiNationContainer>
      </S.Container>
    );
  }
};

export default Tags;
