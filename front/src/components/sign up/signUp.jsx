import React from 'react';
import * as S from './signUp.style';
import SnsButton from '../@common/Buttons/Sns';
import SNS_BUTTONS from '../../constants/snsbutton.js';

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
              <svg aria-hidden='true' viewBox='0 0 14 14'>
                <path d='M7 1C3.74 1 1 3.77 1 7c0 3.26 2.77 6 6 6 3.27 0 6-2.73 6-6s-2.73-6-6-6Zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08Zm.73-3.07-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 0 0-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 0 1 7.7 6.07c.15-.1.21-.21.3-.33.18-.2.28-.47.28-.74.01-.67-.53-1.14-1.18-1.14-.9 0-1.18.7-1.18 1.46H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 0 1 1.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01Z'></path>
              </svg>
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
          <svg aria-hidden='true' width='14' height='14' viewBox='0 0 14 14'>
            <path d='M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z'></path>
          </svg>
        </S.HelpLink>
      </S.HelpContainer>
    </S.Container>
  );
};

export default SignUpForm;
