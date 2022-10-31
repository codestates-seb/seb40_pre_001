import styled from 'styled-components';

const LeftContainer = styled.div`
  position: fixed;
  width: 164px;
  flex-shrink: 0;
  box-shadow: 0 0 0 hsl(210deg 8% 5% / 5%);
  transition: box-shadow ease-in-out 0.1s, transform ease-in-out 0.1s;
  text-align: left;
  height: 100vh;
  overflow: auto;

  .active {
    background-color: hsl(210, 8%, 95%);
    font-weight: 700;
    border-right: 3px solid hsl(27, 90%, 55%);

    div {
      color: hsl(210, 8%, 5%);
      font-weight: 700;
    }
  }
`;

const LeftStickyContainer = styled.div`
  position: sticky;
  width: auto;
  margin-bottom: 8px;
  padding-top: 24px;
  overflow-y: auto;
  top: 35px;
  max-height: calc(100vh - 50px);
`;

const Ol = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Li = styled.li`
  text-align: -webkit-match-parent;
  margin: 0;
  padding: 0;

  a {
    color: hsl(210, 8%, 45%);

    display: block;
    padding: 4px 4px 4px 8px;
    line-height: 26px;
    font-size: 13px;
    font-weight: 400;
    height: 33px;

    div:hover {
      color: hsl(210, 8%, 5%);
      font-weight: 700;

      .icon:hover {
        color: hsl(210, 8%, 5%);
        font-weight: 700;
      }
    }
  }
`;

const HeaderText = styled.p`
  position: relative;

  margin: 22px 0 4px 8px;
  font-size: 13px;
  color: hsl(210, 8%, 35%);
`;

const CollectiveBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PageLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2;
  color: hsl(210, 8%, 35%);
  // height: 33px;

  &:hover {
    color: hsl(210, 8%, 5%);
  }
`;

const TeamsContainer = styled.div`
  padding: 12px 12px 6px 12px;
  border: 1px solid hsl(210, 8%, 90%);

  a {
    text-decoration: none;
    text-align: center;
    font-size: 12px;
    color: hsl(210, 8%, 55%);
  }

  button {
    position: relative;
    display: inline-block;
    color: hsl(0, 0%, 100%);
    background-color: hsl(27, 90%, 55%);
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    border: 1px solid transparent;
    padding: 4.8px;
    border-radius: 3px;

    width: 129px;
    height: 28px;
  }
`;

export {
  LeftContainer,
  LeftStickyContainer,
  Ol,
  Li,
  HeaderText,
  CollectiveBox,
  PageLinkContainer,
  TeamsContainer,
};
