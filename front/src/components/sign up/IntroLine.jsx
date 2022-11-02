import React from 'react';
import * as S from './introduce.style';

const IntroLine = ({ key, icon, content }) => {
  return (
    <S.IntroElment type={key}>
      {icon}
      <div className='content'> {content}</div>
    </S.IntroElment>
  );
};

export default IntroLine;
