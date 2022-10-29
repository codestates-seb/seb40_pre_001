import React from 'react';
import FilterBox from './FIlterBox/FIlterBox';
import PostBox from './Post/PostBox';
import TitleBox from '../../../@common/TitleBox/TitleBar';

const Header = () => {
  return (
    <>
      <TitleBox title={'All Questions'} />
      <FilterBox />
      <PostBox />
    </>
  );
};

export default Header;
