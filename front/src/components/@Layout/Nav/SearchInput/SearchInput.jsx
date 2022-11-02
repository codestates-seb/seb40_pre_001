import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import useDebounce from '../../../../hooks/useDebounce';
import usersState from '../../../../store/users';
import SearchIcon from '../../../@common/Icons/SearchIcon';

import * as S from './SearchInput.style';

const SearchInput = () => {
  const [keyword, setKeyword] = useState('');
  const isAuthenticated = useRecoilValue(usersState);
  const debounceKeyword = useDebounce(keyword);
  debounceKeyword;

  return (
    <S.Form>
      <S.Container isAuthenticated={isAuthenticated}>
        <S.Input
          type='text'
          placeholder='Search...'
          autoComplete='off'
          maxLength={240}
          aria-label='Search'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        ></S.Input>
        <SearchIcon
          width={18}
          height={18}
          style={{
            position: 'absolute',
            marginLeft: 9,
            marginTop: 8,
          }}
        />
      </S.Container>
    </S.Form>
  );
};

export default SearchInput;
