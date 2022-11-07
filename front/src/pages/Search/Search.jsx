import React from 'react';
import * as S from '../Questions/Questions.style';
import { Header, Widget } from '../../components/Questions';
import Pagination from '../../components/@common/Pagination/Pagination';
import FilteredPostBox from '../../components/Questions/Main/Post/FilteredPostBox';
import SearchNotFound from '../../components/Questions/Main/Post/SearchNotFound/SearchNotFound';
import { useGetFilteredPost } from '../../hooks/questions';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('q');
  const { data, isSuccess } = useGetFilteredPost(keyword);

  return (
    <S.ContentWrapper>
      <S.MainContainer>
        {isSuccess && (
          <>
            <Header title='Search Results' length={data.length} />
            {data.length !== 0 ? (
              <>
                <FilteredPostBox data={data} />
                <Pagination length={data.length} />
              </>
            ) : (
              <SearchNotFound />
            )}
          </>
        )}
      </S.MainContainer>
      <Widget />
    </S.ContentWrapper>
  );
};

export default Search;
