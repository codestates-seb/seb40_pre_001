import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
`;
const Buttons = styled.button`
  border: none;
  font-size: 14px;
  margin: 2px;
  padding: 6px 12px;
  background-color: white;
  &:active {
    border: 1px solid white;
    background-color: #f48225;
    border-radius: 20px;
    color: white;
  }
`;

export { Container, Buttons };
