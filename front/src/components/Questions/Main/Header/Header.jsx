import React from 'react';
import TitleBox from '../../../@common/TitleBox/TitleBar';
import FilterBox from './FiIterBox/FilterBox';

const Header = ({ title, length }) => {
  return (
    <>
      <TitleBox title={title} />
      <FilterBox length={length} />
    </>
  );
};

export default Header;
