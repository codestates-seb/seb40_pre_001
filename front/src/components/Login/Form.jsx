import React, { useState } from 'react';
import * as S from './Form.style.js';
import SmallLogoIcon from '../@common/Icons/SmallLogoIcon';
import LoginHelp from '../../components/Login/LoginHelp';
import SnsButton from '../@common/Buttons/Sns';
import SNS_BUTTONS from '../../constants/snsButton.js';
import { userLogin } from '../../apis/login.js';
import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { usersState } from '../../store';

const Form = () => {
  const setIsAuthenticated = useSetRecoilState(usersState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate } = useMutation(userLogin, {
    onSuccess: () => {
      setIsAuthenticated(true);
    },
    onError: () => {
      console.log('aa');
    },
  });

  return (
    <S.Container>
      <S.IconContainer>
        <SmallLogoIcon />
      </S.IconContainer>
      {/* SNS Buttons */}
      <S.SnsButtonContainer>
        {SNS_BUTTONS.map(
          ({ BGC, BORDER_C, COLOR, HOVER_BG, MESSAGE, ICON }) => {
            return (
              <SnsButton
                key={MESSAGE}
                borderColor={BORDER_C}
                backgroundColor={BGC}
                color={COLOR}
                hoverBackground={HOVER_BG}
                snsIcon={ICON}
                content={MESSAGE}
              />
            );
          },
        )}
      </S.SnsButtonContainer>

      <S.FormContainer>
        <S.LoginForm>
          {/* label */}
          <S.FormContents>Email</S.FormContents>
          {/* htmlFor 사용 필요  */}
          <S.FormInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></S.FormInput>
          <S.PasswordTextContainer>
            <S.FormContents>Password</S.FormContents>
            <S.Forgot>Forgot password?</S.Forgot>
          </S.PasswordTextContainer>
          <S.FormInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></S.FormInput>
          <S.SubmitButton
            onClick={(e) => {
              e.preventDefault();
              mutate({ email, password });
            }}
          >
            Log in
          </S.SubmitButton>
        </S.LoginForm>
      </S.FormContainer>
      <LoginHelp />

      <p>email: eve.holt@reqres.in</p>
      <p>password: cityslicka</p>
    </S.Container>
  );
};

export default Form;
