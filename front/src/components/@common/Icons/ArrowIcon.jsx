import React from 'react';

const ArrowIcon = ({ direction }) => {
  if (direction === 'up') {
    return (
      <svg
        aria-hidden='true'
        className='svg-icon iconArrowUpLg'
        width='36'
        height='36'
        viewBox='0 0 36 36'
      >
        <path d='M2 25h32L18 9 2 25Z'></path>
      </svg>
    );
  } else {
    return (
      <svg
        aria-hidden='true'
        className='svg-icon iconArrowDownLg'
        width='36'
        height='36'
        viewBox='0 0 36 36'
      >
        <path d='M2 11h32L18 27 2 11Z'></path>
      </svg>
    );
  }
};

export default ArrowIcon;
