import styled from 'styled-components';

const Ol = styled.ol`
  display: flex;
  column-gap: 5px;
  margin-left: 10px;
  list-style: none;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(210, 8%, 20%);
  border-radius: 20px;
  width: 80px;
  height: 32px;
  font-size: 13px;

  &:hover {
    background-color: hsl(210, 8%, 90%);
  }
`;

export { Ol, Li };
