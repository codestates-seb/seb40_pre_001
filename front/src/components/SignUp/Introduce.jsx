import React from 'react';
import * as S from './Introduce.style';
import SIGNUP_INTRO from '../../constants/SignUp';
import IntroLine from './IntroLine';

const Introduce = () => {
  return (
    <S.JoinIntroZone>
      <S.IntroHeader>Join the Stack Overflow community</S.IntroHeader>
      {SIGNUP_INTRO.map(({ SCRIPT, ICON }, i) => {
        return <IntroLine key={i} icon={ICON} content={SCRIPT}></IntroLine>;
      })}
      <S.PrivateIntro>
        Collaborate and share knowledge with a private group for FREE.
        <a>Get Stack Overflow for Teams free for up to 50 users.</a>
      </S.PrivateIntro>
    </S.JoinIntroZone>
  );
};

export default Introduce;
