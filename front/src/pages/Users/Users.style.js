import styled from 'styled-components';

const Container = styled.div`
  display: columns;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1114px;
  margin: 50px auto 0;
  padding: 24px;
  margin-left: 164px;
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
export { UsersContainer, Container, UsersLegend, UsersfooterContainer };
