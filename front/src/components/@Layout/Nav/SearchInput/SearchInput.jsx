import React, { useRef } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { usersState } from '../../../../store';
import SearchIcon from '../../../@common/Icons/SearchIcon';
import * as S from './SearchInput.style';
import { useSearchBar } from '../../../../hooks/questions';

const SearchInput = ({ ...rest }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const keywordRef = useRef('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { isAuthenticated } = useRecoilValue(usersState);
  const { mutate } = useSearchBar();
  searchParams;

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
          ref={keywordRef}
          placeholder={userLocation ? 'Filter by user' : 'Search...'}
          autoComplete='off'
          maxLength={240}
          aria-label='Search'
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setSearchParams({ q: keywordRef?.current.value });
              mutate(keywordRef?.current.value);
              navigate(`/search?q=${keywordRef?.current.value}`);

              keywordRef.current.value = '';
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
