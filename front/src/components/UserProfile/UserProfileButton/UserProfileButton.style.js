import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: absolute;
  right: 350px;
  top: 65px;
`;

const UserButtons = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 5px;
  margin: 3px;
  padding: 9.6px;
  font-size: 12px;
  height: 35px;
`;

export { Container, UserButtons };
