import React from 'react';
import * as S from './introduce.style';

const IntroLine = ({ icon, content }) => {
  return (
    <S.IntroElment>
      {icon}
      <div className='content'> {content}</div>
    </S.IntroElment>
  );
};

export default IntroLine;
