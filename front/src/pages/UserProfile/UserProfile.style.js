import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 175px;
  margin-top: 75px;
`;

const ContainerHeader = styled.div`
  display: flex;
`;

const UserContainer = styled.div`
  display: column;
  align-items: center;
  margin-top: 25px;
  margin-left: 20px;
  height: 128px;
`;
const Userimg = styled.img`
  width: 128px;
  height: 128px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: black;
`;

const UserName = styled.div`
  width: 200px;
  font-size: 34px;
  margin-bottom: 10px;
`;
const UserAnchor = styled.span`
  font-size: 13px;
  margin-right: 10px;
  color: #6a737c;
`;

const StatsContainer = styled.div`
  width: 100%;
`;

const ContentsTitle = styled.div`
  font-size: 21px;
  width: 100%;
`;

const UserGridBox = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 4fr;
`;
export {
  Container,
  ContainerHeader,
  Userimg,
  UserName,
  UserAnchor,
  UserContainer,
};

// contnets
export { StatsContainer, ContentsTitle, UserGridBox };
