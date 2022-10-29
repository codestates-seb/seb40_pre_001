import React from 'react';
import SignUpForm from '../../components/sign up/signUp';
import Introduce from '../../components/sign up/introduce';
import * as S from './Signup.style';

const SignUp = () => {
  return (
    <S.Container>
      <S.SignUpZone>
        <Introduce></Introduce>
        <SignUpForm></SignUpForm>
      </S.SignUpZone>
    </S.Container>
  );
};

export default SignUp;
