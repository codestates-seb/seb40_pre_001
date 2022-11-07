import React from 'react';
import FilterBox from './FilterBox/FilterBox';
import TitleBox from '../../../@common/TitleBox/TitleBar';

const Header = ({ title, length }) => {
  return (
    <>
      <TitleBox title={title} />
      <FilterBox length={length} />
    </>
  );
};

export default Header;
