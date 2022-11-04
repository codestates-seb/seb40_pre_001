import React from 'react';

const HistoryIcon = ({ ...props }) => {
  return (
    <svg
      aria-hidden='true'
      className='mln2 mr0 svg-icon iconHistory'
      width='19'
      height='18'
      viewBox='0 0 19 18'
      {...props}
    >
      <path d='M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z'></path>
    </svg>
  );
};

export default HistoryIcon;