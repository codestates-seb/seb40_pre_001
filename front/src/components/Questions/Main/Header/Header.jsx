import React from 'react';
import FilterBox from './FilterBox/FilterBox';
import PostBox from './Post/PostBox';
import TitleBox from '../../../@common/TitleBox/TitleBar';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <TitleBox
        title={
          pathname.includes('/search') ? 'Search Results' : 'All Questions'
        }
      />
      <FilterBox />
      {pathname.includes('/questions') ? <PostBox /> : <div></div>}
    </>
  );
};

export default Header;
