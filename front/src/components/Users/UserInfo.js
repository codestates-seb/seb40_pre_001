import styled from "styled-components";


const UserInfoContainer = styled.div`
background-color: red;
width: 253.75px;
height: 87.18px;
`

const UserDetails = styled.div`
width: 176.75px;
height:54.09px;
margin: 0 0 0 9px;
`
const UserInfoProfil = styled.img`
width: 48px;
height: 48px;
`
const UserInfoName = styled.a`
font-size: 15px;
`
const UserInfoLocation = styled.span`
font-size: 12px;
margin: 0 0 2px;
`
const UserInfoScore = styled.span`
font-size: 12px;
font-weight: 300;
margin: 0 0 4px;
`
const UsersTagsContainer = styled.div`
    width: 183.75px;
    height: 15.69px;
    margin: 0 0 0 57px;
`
const UsersTags = styled.a`
font-size: 12px;
`
export default {
    UserInfoContainer,
    UserInfoProfil,
    UserDetails,
    UserInfoName,
    UserInfoLocation,
    UserInfoScore,
    UsersTagsContainer,
    UsersTags
}