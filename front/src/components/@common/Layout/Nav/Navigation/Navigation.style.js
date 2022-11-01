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
  user-select: none;
  font-size: 13px;
  outline: none;
  cursor: pointer;

  a:hover {
    border-radius: 40px;
    background-color: hsl(210, 8%, 90%);
    color: hsl(210, 8%, 35%);
    padding: 6px 12px;
  }

  .active {
    border-radius: 40px !important;
    background: hsl(27, 90%, 55%) !important;
    color: hsl(0, 0%, 100%) !important;
    padding: 6px 12px !important;
  }
`;

export { Ol, Li };
