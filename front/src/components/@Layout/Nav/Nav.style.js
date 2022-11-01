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

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
`;

const NavContainer = styled.nav`
  display: flex;
  width: 97.23rem;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  font: inherit;
  vertical-align: baseline;
`;

const LogoBox = styled.a`
  display: flex;
  background-color: transparent;
  width: 166px;
  height: 100%;
  line-height: 17px;
  padding: 0 8px;

  svg {
    width: 142px;
    height: 30px;
    margin-top: 8px;
    margin-left: 0;
  }
`;

export { Header, NavContainer, LogoBox };
