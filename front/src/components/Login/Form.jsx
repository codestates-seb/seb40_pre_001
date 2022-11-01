import React from 'react';
import * as S from './Form.style.js';
import SmallLogoIcon from '../@common/Icons/SmallLogoIcon';
import LoginHelp from '../../components/Login/LoginHelp';
import SnsButton from '../@common/Buttons/Sns';
import SNS_BUTTONS from '../../constants/snsButton.js';

const Form = () => {
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
          <S.FormInput></S.FormInput>
          <S.PasswordTextContainer>
            <S.FormContents>Password</S.FormContents>
            <S.Forgot>Forgot password?</S.Forgot>
          </S.PasswordTextContainer>
          <S.FormInput></S.FormInput>
          <S.SubmitButton>Log in</S.SubmitButton>
        </S.LoginForm>
      </S.FormContainer>
      <LoginHelp />
    </S.Container>
  );
};

export default Form;
