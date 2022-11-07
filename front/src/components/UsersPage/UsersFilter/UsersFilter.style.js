import styled from 'styled-components';

const UsersFilterBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch !important;
`;

const UserSerachBar = styled.div`
  width: 200px;
  height: 40px;
  background-color: red;
`;

const UsersFilterInput = styled.input`
  background-color: green;
  width: 190px;
  height: 36px;
  padding: 7.8px 9.1px 7.8px 32px;
`;

export { UsersFilterInput, UserSerachBar, UsersFilterBoxContainer };
