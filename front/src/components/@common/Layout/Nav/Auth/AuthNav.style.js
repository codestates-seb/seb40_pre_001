import styled from 'styled-components';

const Nav = styled.nav`
  height: 100% !important;

  width: 143px;
  height: 47px;
`;

const Ol = styled.ol`
  display: flex;
  width: 127.3px;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  margin-left: auto;
`;

const Li = styled.li`
  display: inline-flex;
`;

export { Nav, Ol, Li };
