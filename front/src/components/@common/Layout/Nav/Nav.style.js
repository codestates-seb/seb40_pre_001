import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  position: fixed !important;
  width: 1920px;
  height: 50px;
  min-width: auto;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  width: 100%;
  z-index: 999999 !important;
  background-color: hsl(210, 8%, 97.5%);
  border-top: 3px solid hsl(27, 90%, 55%);
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 13px;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 1264px;
  max-width: 100%;
  height: 47px;
  line-height: 17px;
  margin-left: 328px;
  margin-right: 328px;

  vertical-align: baseline;
`;

const LogoBox = styled.a`
  width: 166px;
  height: 47px;
  line-height: 17px;
  padding: 0 8px;

  svg {
    width: 150px;
    height: 30px;
    margin: 7px 0 0 0;
    background-position-y: -500px;
  }
`;

export { Header, NavContainer, LogoBox };
