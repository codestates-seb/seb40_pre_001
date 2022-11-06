import React from 'react';
import * as S from './Introduce.style';

const IntroLine = ({ icon, content }) => {
  return (
    <S.IntroElement>
      {icon}
      <div className='content'> {content}</div>
    </S.IntroElement>
  );
};

export default IntroLine;
