import React from 'react';
import * as S from './SignUp.style';
import SnsButton from '../@common/Buttons/Sns';
import SNS_BUTTONS from '../../constants/snsButton.js';

//icon
import AdviceMark from '../@common/Icons/AdviceMark';
import NewWindow from '../@common/Icons/NewWinow';
import { useState } from 'react';

//sign up
import axios from 'axios';
// import axios from 'axios';

//로그인과 회원가입 페이지 추후 파일 위치 수정
//버튼 스타일은 일단 복사하여 사용했는데 나중에 한 개의 style으로 합치고 재사용 가능하게 수정이 필요

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = async (e) => {
    e.preventDefault();
    return await axios
      .post(
        'https://630c-125-177-243-74.jp.ngrok.io/users/signup',
        {
          email: email,
          userNickname: nickName,
          password: password,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          withCredentials: true,
        },
      )
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <S.Container>
      {SNS_BUTTONS.map(({ BGC, BORDER_C, COLOR, HOVER_BG, ICON }, i) => {
        return (
          <SnsButton
            key={i}
            borderColor={BORDER_C}
            backgroundColor={BGC}
            color={COLOR}
            hoverBackground={HOVER_BG}
            snsIcon={ICON}
            style={{ width: '293px' }}
          />
        );
      })}
      <S.FormContainer>
        <S.LoginForm>
          <S.FormContents>Display name</S.FormContents>
          <S.FormInput
            type='text'
            name='nickName'
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
          ></S.FormInput>
          <S.FormContents>Email</S.FormContents>
          <S.FormInput
            name='email'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></S.FormInput>
          <S.FormContents>Password</S.FormContents>
          <S.FormInput
            name='password'
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></S.FormInput>
          <S.PasswordTextDirection>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </S.PasswordTextDirection>
          <S.RecapchaZone></S.RecapchaZone>
          <S.OptionChocie>
            <div className='button'>
              <input type='checkbox'></input>
            </div>
            <S.OptionDiscription>
              Opt-in to receive occasional product updates, user research
              invitations, company announcements, and digests.
            </S.OptionDiscription>
            <S.AdviceMark>
              <AdviceMark></AdviceMark>
            </S.AdviceMark>
          </S.OptionChocie>

          <S.SubmitButton type='submit' onClick={(e) => handleChange(e)}>
            Sign up
          </S.SubmitButton>
          <S.SignUpWarn>
            By clicking “Sign up”, you agree to our
            <a> terms of service</a>, <a>privacy policy</a> and
            <a> cookie policy</a>
          </S.SignUpWarn>
        </S.LoginForm>
      </S.FormContainer>
      <S.HelpContainer>
        <S.HelpContent>Already have an account?</S.HelpContent>
        <S.HelpLink>Sing up</S.HelpLink>
      </S.HelpContainer>
      <S.HelpContainer>
        <S.HelpContent>Are you an employer?</S.HelpContent>
        <S.HelpLink>
          Sign up on Talent
          <NewWindow></NewWindow>
        </S.HelpLink>
      </S.HelpContainer>
    </S.Container>
  );
};

export default SignUpForm;