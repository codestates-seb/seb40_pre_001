/* eslint-disable react/prop-types */
import React from 'react';

const FilterIcon = ({ fill }) => {
  return (
    <svg
      aria-hidden='true'
      className='svg-icon iconFilter'
      width='18'
      height='18'
      viewBox='0 0 18 18'
    >
      <path fill={fill} d='M2 4h14v2H2V4Zm2 4h10v2H4V8Zm8 4H6v2h6v-2Z'></path>
    </svg>
  );
};

export default FilterIcon;
