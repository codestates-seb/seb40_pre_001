import React, { useState } from 'react';
import * as S from './Form.style.js';
import SmallLogoIcon from '../@common/Icons/SmallLogoIcon';
import LoginHelp from '../../components/Login/LoginHelp';
import SnsButton from '../@common/Buttons/Sns';
import SNS_BUTTONS from '../../constants/snsButton.js';
import { useRecoilState } from 'recoil';
import { usersState } from '../../store';
import { useEffect } from 'react';
import useLogin from './hooks/useLogin.jsx';

const Form = () => {
  const [authState, setIsAuthenticated] = useRecoilState(usersState);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { mutate } = useLogin();

  useEffect(() => {
    setIsAuthenticated({
      ...authState,
      currentUser: localStorage.getItem('user'),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      // eslint-disable-next-line
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      // eslint-disable-next-line
      /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
  };

  handleSubmit;
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
          <S.FormContents htmlFor='email'>Email</S.FormContents>
          <S.FormInput
            type='text'
            name='email'
            autoComplete='username'
            value={email}
            onChange={handleEmail}
          ></S.FormInput>
          {!emailValid && email.length > 0 && (
            <S.EmailCheck>The email is not a valid email address.</S.EmailCheck>
          )}

          <S.PasswordTextContainer>
            <S.FormContents htmlFor='password'>Password</S.FormContents>
            <S.Forgot>Forgot password?</S.Forgot>
          </S.PasswordTextContainer>
          <S.FormInput
            name='password'
            type='password'
            autoComplete='current-password'
            onChange={handlePw}
          ></S.FormInput>
          {!pwValid && pw.length < 1 && (
            <S.PasswordEmpty>Password cannot be empty.</S.PasswordEmpty>
          )}
          <S.SubmitButton
            type='submit'
            disabled={disabled}
            onClick={(e) => {
              e.preventDefault();
              mutate({ email, password: pw });
            }}
          >
            Log in
          </S.SubmitButton>
        </S.LoginForm>
      </S.FormContainer>
      <LoginHelp />
    </S.Container>
  );
};

export default Form;
