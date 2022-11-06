import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import pagesState from '../../../../store/pagesState';
import { usersState } from '../../../../store';
import SearchIcon from '../../../@common/Icons/SearchIcon';
import * as S from './SearchInput.style';

const SearchInput = ({ ...rest }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [state, setFilterKeyword] = useRecoilState(pagesState);
  const { isAuthenticated } = useRecoilValue(usersState);

  const userLocation = pathname === '/users';

  return (
    <S.Form>
      <S.Container
        isAuthenticated={isAuthenticated}
        location={pathname}
        {...rest}
      >
        <S.Input
          type='text'
          placeholder={userLocation ? 'Filter by user' : 'Search...'}
          autoComplete='off'
          maxLength={240}
          aria-label='Search'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();

              setFilterKeyword({ ...state, keyword });
              navigate(`/search?q=${keyword}`);
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
