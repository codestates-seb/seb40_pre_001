import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 1000px;
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
  width: 350px;
  display: flex;
  margin-bottom: 12px;
`;

const ContentsTitle = styled.div`
  font-size: 21px;
  width: 76%;
`;

const UserGridBox = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 4fr;
  gap: 20px;
`;

const AnswersContainer = styled.div`
  display: flex;
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
export { StatsContainer, ContentsTitle, UserGridBox, AnswersContainer };
