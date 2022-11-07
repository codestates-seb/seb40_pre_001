import React from 'react';
import * as S from './LoginHelp.style';

const LoginHelp = () => {
  return (
    <>
      <S.HelpContainer>
        <S.HelpContent>Don’t have an account?</S.HelpContent>
        <S.HelpLink>Sign up</S.HelpLink>
      </S.HelpContainer>
      <S.HelpContainer>
        <S.HelpContent>Are you an employer?</S.HelpContent>
        <S.HelpLink>Sign up on Talent</S.HelpLink>
      </S.HelpContainer>
    </>
  );
};

export default LoginHelp;
