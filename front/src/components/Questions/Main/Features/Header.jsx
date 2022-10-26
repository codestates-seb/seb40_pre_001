import React from 'react';
import FilterBox from './FIlterBox/FIlterBox';
import PostBox from './Post/Post';
import TitleBox from './TitleBox/TitleBar';

const Header = () => {
  return (
    <>
      <TitleBox />
      <FilterBox />
      <PostBox />
    </>
  );
};

export default Header;
