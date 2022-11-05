import React from 'react';
import * as S from '../Questions/Questions.style';
import { Header, Widget } from '../../components/Questions';
import Pagination from '../../components/@common/Pagination/Pagination';
import FilteredPostBox from '../../components/Questions/Main/Post/FilteredPostBox';
import { useRecoilValue } from 'recoil';
import useGetFilteredPost from '../../hooks/questions/useGetFilteredPost';
import { pagesState } from '../../store';
import SearchNotFound from '../../components/Questions/Main/Post/SearchNotFound/SearchNotFound';

const Search = () => {
  const { keyword } = useRecoilValue(pagesState);
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
