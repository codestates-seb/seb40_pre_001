import React from 'react';
import * as S from './UsersFilter.style';
import SearchInput from '../../@Layout/Nav/SearchInput/SearchInput';
import UsersFilterBox from '../../Questions/Main/Header/FiIterBox/UsersFilterBox';

const UsersFilter = () => {
  return (
    <S.UsersFilterBoxContainer>
      <SearchInput style={{ width: 190, height: 40, margin: 0 }} />
      <UsersFilterBox />
    </S.UsersFilterBoxContainer>
  );
};

export default UsersFilter;
