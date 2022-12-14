import React from 'react';

const StackExChangeIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 120 120'
      width={14}
      height={14}
    >
      <path fill={'#376db6'} className='st0' d='M22.4 57.5h74.8v15.4H22.4z' />
      <path fill={'#4ca2da'} className='st1' d='M22.4 37.6h74.8V53H22.4z' />
      <path
        fill={'#91d8f4'}
        className='st2'
        d='M85.5 17H34.4c-6.6 0-12 5.5-12 12.3v4h74.8v-4C97.2 22.5 92 17 85.5 17z'
      />
      <path
        fill={'#1e5397'}
        className='st3'
        d='M22.4 77.3v4c0 6.8 5.4 12.3 12 12.3h32v16.3l15.8-16.3h3.5c6.6 0 12-5.5 12-12.3v-4H22.4z'
      />
    </svg>
  );
};

const StackExchangeIcon2 = () => {
  return (
    <svg
      aria-hidden='true'
      className='svg-icon iconStackExchange'
      width='18'
      height='16'
      viewBox='0 0 18 16'
    >
      <path
        fill='hsl(210,8%,35%)'
        d='M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z'
      ></path>
    </svg>
  );
};

export { StackExChangeIcon, StackExchangeIcon2 };
