import styled from 'styled-components';

const Nav = styled.nav`
  padding-right: 12px;
  height: 47px;
`;

const Ol = styled.ol`
  display: flex;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  align-items: center;
  padding-bottom: 5px;
  width: auto;
`;

const Li = styled.li`
  margin: 10px 10px;
  padding: 2px;
  cursor: pointer;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 3px;
  }

  span {
    text-decoration: none;
    margin-left: 5px;
    font-size: 12px;
    font-weight: 700;
  }
`;

export { Nav, Ol, Li, ProfileBox };
