import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  height: 50px;
  position: fixed;
  min-width: auto;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  width: 100%;
  z-index: 2;
  background-color: hsl(210, 8%, 97.5%);
  border-top: 3px solid hsl(27, 90%, 55%);
  position: relative;
  align-items: center;
`;

const NavContainer = styled.nav`
  width: 97.2307692rem;
  max-width: 75%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const LogoBox = styled.div`
  flex: 0 0 150px;
  position: relative;
  margin-left: 15px;
  margin-top: 3px;
  height: 40px;
  overflow: hidden;
`;

export { Header, NavContainer, LogoBox };
