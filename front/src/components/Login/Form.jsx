import React, { useState } from 'react';
import * as S from './Form.style.js';
import SmallLogoIcon from '../@common/Icons/SmallLogoIcon';
import LoginHelp from '../../components/Login/LoginHelp';
import SnsButton from '../@common/Buttons/Sns';
import SNS_BUTTONS from '../../constants/snsButton.js';

import { loginUser } from '../../apis/questions';

const Form = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

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
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
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
              loginUser({ id: userId, username: 'mock 유저' });
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
