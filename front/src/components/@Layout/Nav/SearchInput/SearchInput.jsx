import React from 'react';
import SearchIcon from '../../../@common/Icons/SearchIcon';

import * as S from './SearchInput.style';

const SearchInput = ({ width, placeholder, height, padding, ...rest }) => {
  return (
    <S.Form padding={padding}>
      <S.Container>
        <S.Input
          type='text'
          placeholder={placeholder}
          autoComplete='off'
          maxLength={240}
          aria-label='Search'
          width={width}
          height={height}
          {...rest}
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
