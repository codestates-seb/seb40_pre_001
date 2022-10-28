import styled from "styled-components";


const UserInfoContainer = styled.div`
background-color: white;
/* display: flex; */
width: 253.75px;
height: 87.18px;
padding: 5px 6px 7px 7px;
float: left;
`

const UserDetails = styled.div`
display: inline-block;
width: 176.75px;
height:54.09px;
margin: 0 0 0 9px;
background-color: gray;
line-height: 1.3;
`
const UserInfoProfil = styled.img`
width: 48px;
height: 48px;
`
const UserInfoName = styled.a`
font-size: 15px;
background-color: red;
display: block;
`
const UserInfoLocation = styled.span`
font-size: 12px;
margin: 0 0 2px;
background-color: beige;
display: block;
`
const UserInfoScore = styled.span`
font-size: 12px;
font-weight: 300;
margin: 0 0 4px;
background-color: aqua;
display: block;
`
const UsersTagsContainer = styled.div`
    width: 183.75px;
    height: 15.69px;
    margin: 0 0 0 57px;
`
const UsersTags = styled.a`
font-size: 12px;
`
export {
    UserInfoContainer,
    UserInfoProfil,
    UserDetails,
    UserInfoName,
    UserInfoLocation,
    UserInfoScore,
    UsersTagsContainer,
    UsersTags
}