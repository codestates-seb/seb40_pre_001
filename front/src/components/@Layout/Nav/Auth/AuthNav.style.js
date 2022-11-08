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
  overflow: hidden;
  align-items: center;
  padding-bottom: 5px;
  width: auto;
`;

const Li = styled.li`
  margin: 10px 10px;
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

const PopOverContainer = styled.div`
  user-select: none;
  position: absolute;
  background-color: hsl(210, 8%, 105%);
  border-radius: 3px;
  top: 47px;
  right: 220px;
  width: 375px;
  border: 1px solid hsl(210, 8%, 90%);
`;

const PopOverHeaderContainer = styled.div`
  padding: 10px;

  border-bottom: 1px solid hsl(210, 8%, 80%);
`;

const LogoutContainer = styled.div`
  width: 150px;
  display: flex;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 2px;

  align-items: center;
  justify-content: space-between;
`;

export {
  Nav,
  Ol,
  Li,
  ProfileBox,
  PopOverContainer,
  LogoutContainer,
  PopOverHeaderContainer,
};
