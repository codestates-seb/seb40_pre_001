import styled from 'styled-components';

const Nav = styled.nav`
  height: 100% !important;
`;

const Ol = styled.ol`
  display: flex;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  // scrollbar-color: var(--scrollbar) transparent;
  margin-left: auto;
`;

const Li = styled.li`
  display: inline-flex;
`;

export { Nav, Ol, Li };
