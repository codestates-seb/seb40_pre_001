import styled from 'styled-components';

const UsersTabContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  margin-bottom: 9px;
`;

const UsersTabButton = styled.button`
  display: flex;
  padding: 0.8em;
  border: none;
  outline: none;
  font-family: inherit;
  font-weight: normal;
  font-size: 12px;
  text-decoration: none;
  background-color: white;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid orange;
  }
`;

export { UsersTabContainer, UsersTabButton };
