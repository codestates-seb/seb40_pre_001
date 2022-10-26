import React from "react";
import * as S from "./Sns.stlye";
import GoogleIcon from "../Icons/GoogleIcon";
import GithubIcon from "../Icons/GithubIcon";
import FacebookIcon from "../Icons/FacebookIcon";


const Sns = () => {
    return (
        <S.SnsButtonContainer>

            <S.GoogleButton>
                <GoogleIcon /> Log in Google
            </S.GoogleButton>

            <S.GithubButton>
                <GithubIcon />Log in with Github
            </S.GithubButton>

            <S.FacebookButton>
                <FacebookIcon />Log in with Facebook
            </S.FacebookButton>

        </S.SnsButtonContainer>
    )
}

export default Sns;