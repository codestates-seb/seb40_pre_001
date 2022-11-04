import styled from 'styled-components';

const Container = styled.div`
  display: columns;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 50px auto 0;
  padding: 24px;
  margin-left: 164px;
  overflow: hidden;
`;
const UsersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 10px;
  column-gap: 20px;
  line-height: 1.3;
  width: 1051px;
  margin: auto;
  overflow: hidden;
`;

const UsersfooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const UsersLegend = styled.div`
  color: #0074cc;
  font-size: 13px;
  font-weight: bold;
`;

const PagiNationContainer = styled.div`
  .active {
    background-color: hsl(27, 90%, 55%);
    color: hsl(0, 0%, 100%);
  }
`;

export {
  UsersContainer,
  Container,
  UsersLegend,
  UsersfooterContainer,
  PagiNationContainer,
};
