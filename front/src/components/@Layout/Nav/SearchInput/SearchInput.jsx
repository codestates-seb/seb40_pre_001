import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import pagesState from '../../../../store/pagesState';
import { usersState } from '../../../../store';
import SearchIcon from '../../../@common/Icons/SearchIcon';

import * as S from './SearchInput.style';

const SearchInput = () => {
  const navigate = useNavigate();
  const [state, setFilterKeyword] = useRecoilState(pagesState);
  const keywordRef = useRef(null);
  const isAuthenticated = useRecoilValue(usersState);

  return (
    <S.Form>
      <S.Container isAuthenticated={isAuthenticated}>
        <S.Input
          ref={keywordRef}
          type='text'
          placeholder='Search...'
          autoComplete='off'
          maxLength={240}
          aria-label='Search'
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setFilterKeyword({ ...state, keyword: keywordRef.current.value });
              navigate(`/search?q=${keywordRef.current.value}`);
            }
          }}
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
