import React from 'react';
import * as S from './Button.style';
// import GoogleIcon from '../Icons/GoogleIcon';
// import GithubIcon from '../Icons/GithubIcon';
// import FacebookIcon from '../Icons/FacebookIcon';

const SnsButton = ({ type, content, snsIcon, ...rest }) => {
  return (
    <S.StyledSnsButton type={type} {...rest}>
      {snsIcon}
      {content}
    </S.StyledSnsButton>
  );
};

export default SnsButton;

// <S.GoogleButton>
//     <GoogleIcon /> Log in Google
// </S.GoogleButton>

// <S.GithubButton>
//     <GithubIcon />Log in with Github
// </S.GithubButton>

// <S.FacebookButton>
//     <FacebookIcon />Log in with Facebook
// </S.FacebookButton>
