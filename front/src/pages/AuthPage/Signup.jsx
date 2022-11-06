import React from 'react';
import SignUpForm from '../../components/SignUp/SIgnUp';
import Introduce from '../../components/SignUp/Introduce';
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
