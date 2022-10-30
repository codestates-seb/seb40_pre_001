import React from 'react';
import SearchIcon from '../../../Icons/SearchIcon';

import * as S from './SearchInput.style';

const SearchInput = () => {
  return (
    <S.Form>
      <S.Container>
        <S.Input
          type='text'
          placeholder='Search...'
          autoComplete='off'
          maxLength={240}
          aria-label='Search'
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
