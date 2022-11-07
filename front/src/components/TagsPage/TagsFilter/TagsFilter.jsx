import React from 'react';
import * as S from './TagsFilter.style';
import TagsFilterBox from '../../Questions/Main/Header/FilterBox/TagsFilterBox';
import SearchInput from '../../@Layout/Nav/SearchInput/SearchInput';

const TagsFilter = () => {
  return (
    <S.TagsFilterBoxContainer>
      <SearchInput
        width={'190px'}
        placeholder={'filter by tag name'}
        height={'40px'}
        padding={'0'}
      />
      <TagsFilterBox />
    </S.TagsFilterBoxContainer>
  );
};

export default TagsFilter;
