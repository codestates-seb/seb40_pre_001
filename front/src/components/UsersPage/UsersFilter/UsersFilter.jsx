import React from 'react';
import * as S from './UsersFilter.style';
import UsersFilterBox from '../Questions/Main/Header/FilterBox/UsersFilterBox';
import SearchInput from '.././@Layout/Nav/SearchInput/SearchInput';

const UsersFilter = () => {
  return (
    <S.UsersFilterBoxContainer>
      <SearchInput
        width={'190px'}
        placeholder={'Filter by user'}
        height={'40px'}
        padding={'0'}
      />
      <UsersFilterBox />
    </S.UsersFilterBoxContainer>
  );
};

export default UsersFilter;
