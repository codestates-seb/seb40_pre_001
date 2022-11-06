import styled from 'styled-components';

const UserInfoContainer = styled.div`
  background-color: white;
  width: 253.75px;
  height: 87.18px;
  padding: 5px 6px 7px 7px;
`;

const UserDetails = styled.div`
  display: inline-block;
  width: 176.75px;
  height: 54.09px;
  margin: 0 0 0 9px;
  line-height: 1.3;
`;
const UserInfoProfil = styled.img`
  width: 48px;
  height: 48px;
  /* background-image: ${({ backgrondImges }) => backgrondImges || 'null'}; ; */
`;
const UserInfoName = styled.a`
  font-size: 15px;
  display: block;
  color: #0077cc;
`;
const UserInfoLocation = styled.span`
  font-size: 12px;
  margin: 0 0 2px;
  display: block;
`;
const UserInfoScore = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin: 0 0 4px;
  display: block;
`;
const UsersTagsContainer = styled.div`
  width: 183.75px;
  height: 15.69px;
  margin: 0 0 0 57px;
`;
const UsersTags = styled.a`
  font-size: 12px;
  color: #0077cc;
`;
export {
  UserInfoContainer,
  UserInfoProfil,
  UserDetails,
  UserInfoName,
  UserInfoLocation,
  UserInfoScore,
  UsersTagsContainer,
  UsersTags,
};
