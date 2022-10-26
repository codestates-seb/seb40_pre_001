import React from "react";
import * as S from "./Form.stlye.js";
import Sns from "../@common/Buttons/Sns";
import SmallLogoIcon from "../@common/Icons/SmallLogoIcon"
import LoginHelp from "../../components/Login/LoginHelp"


const Form = () => {
    return (
        <S.Container>
            <S.IconContainer>
                <SmallLogoIcon />
            </S.IconContainer>
            <Sns />
            <S.FormContainer >
                <S.LoginForm>
                    <S.FormContnets>Email</S.FormContnets>
                    <S.FormInput></S.FormInput>
                    <S.PasswordTextContaier>
                        <S.FormContnets>Password</S.FormContnets>
                        <S.Forgot>Forgot password?</S.Forgot>
                    </S.PasswordTextContaier>
                    <S.FormInput></S.FormInput>
                    <S.SubmitButton>Log in</S.SubmitButton>
                </S.LoginForm>
            </S.FormContainer>
            <LoginHelp />
        </S.Container>
    )
}

export default Form