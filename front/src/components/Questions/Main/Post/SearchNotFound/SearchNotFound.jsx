import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchNFIcon } from '../../../../@common/Icons';
import * as P from '../Post.style';
import * as S from './SearchNotFound.style';

const SearchNotFound = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('q');

  return (
    <P.PostContainer>
      <S.Container>
        <SearchNFIcon />
        <p className='title'>
          We couldn&apos;t find anything for <b>{keyword}</b>
        </p>
        <p className='option'>
          <b>Search options:</b> not deleted
        </p>
        <p className='option'>Try different or less specific keywords.</p>
      </S.Container>
    </P.PostContainer>
  );
};

export default SearchNotFound;
