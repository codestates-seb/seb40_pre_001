import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: relative;
  bottom: 10px;
  margin-left: 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: calc(16px / 2 * -1);
`;

const ImgContainer = styled.div`
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-radius: 5px;
  margin-top: 18px;

  img {
    display: block;
    border-radius: 5px;
    width: 128px;
    aspect-ratio: auto 128 / 128;
    height: 128px;
  }
`;

const UserInfoContainer = styled.div`
  margin: calc(16px / 2);
  max-width: calc(421px * 4);
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: calc(8px / 2 * -1);
  margin-left: 4px;
  margin-bottom: 3px;

  span {
    margin: calc(8px / 2);
    line-height: 1px;
    font-size: 34px;
    margin-bottom: 12px;
  }
`;

const UserInfoBox = styled.ul`
  display: flex;
  position: relative;
  top: 20px;
  left: 15px;
  color: hsl(210, 8%, 45%);
  margin-left: calc(4px * -1);
  flex-wrap: wrap;
  list-style: none;
`;

const Li = styled.li`
  display: flex;
  color: hsl(210, 8%, 45%);
  margin-top: 0;
  margin-bottom: 0;
  margin: calc(4px / 2 * -1);
  align-items: center;

  svg {
    fill: hsl(210, 8%, 55%);
    margin-right: 3px;
  }

  .timeago,
  span {
    font-size: 13px;
    margin-left: 5px;
    margin-right: 15px;
    color: hsl(210, 8%, 45%);
  }
`;

export {
  HeaderWrapper,
  Container,
  ImgContainer,
  UserInfoContainer,
  NameContainer,
  UserInfoBox,
  Li,
};
