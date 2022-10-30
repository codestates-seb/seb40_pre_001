import React from 'react';
import * as S from './signUp.style';
import SnsButton from '../@common/Buttons/Sns';
import SNS_BUTTONS from '../../constants/snsbutton.js';

//icon
import AdviceMark from '../@common/Icons/AdviceMark';
import NewWindow from '../@common/Icons/NewWinow';

//로그인과 회원가입 페이지 추후 파일 위치 수정
//버튼 스타일은 일단 복사하여 사용했는데 나중에 한 개의 style으로 합치고 재사용 가능하게 수정이 필요

const SignUpForm = () => {
  return (
    <S.Container>
      {SNS_BUTTONS.map(({ BGC, BORDER_C, COLOR, HOVER_BG, MESSAGE, ICON }) => {
        return (
          <SnsButton
            key={MESSAGE}
            borderColor={BORDER_C}
            backgroundColor={BGC}
            color={COLOR}
            hoverBackground={HOVER_BG}
            snsIcon={ICON}
            content={MESSAGE}
            style={{ width: '293px' }}
          />
        );
      })}
      <S.FormContainer>
        <S.LoginForm>
          <S.FormContents>Display name</S.FormContents>
          <S.FormInput></S.FormInput>
          <S.FormContents>Email</S.FormContents>
          <S.FormInput></S.FormInput>
          <S.FormContents>Password</S.FormContents>
          <S.FormInput></S.FormInput>
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

          <S.SubmitButton>Sign up</S.SubmitButton>
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
