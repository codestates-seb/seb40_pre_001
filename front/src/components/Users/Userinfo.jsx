import React from "react";
import * as S from "./UserInfo.style"
const UserInfo = () => {
    return (
        <S.UserInfoContainer>
            <S.UserInfoProfil />
            <S.UserDetails>
                <S.UserInfoName>유저이름</S.UserInfoName>
                <S.UserInfoLocation>로케이션</S.UserInfoLocation>
                <S.UserInfoScore>스코어</S.UserInfoScore>
            </S.UserDetails>
            <S.UsersTagsContainer>
                <S.UsersTags>asd,asda,asdasd,asd</S.UsersTags>
            </S.UsersTagsContainer>
        </S.UserInfoContainer>
    )
}

export default UserInfo;