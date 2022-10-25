import styled from 'styled-components';

const Ol = styled.ol`
  display: flex;
  width: 237.56px;
  height: 37px;
  margin: -2px;
  padding-bottom: 2px;
  margin-left: -10px;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: hsl(210, 8%, 20%);
  border-radius: 20px;
  width: 40%;
  font-size: 13px;

  a:hover {
    border-radius: 40px;
    background-color: hsl(210, 8%, 90%);
    padding: 5px;
  }
`;

export { Ol, Li };
