import styled from 'styled-components';

const LeftContainer = styled.div`
  width: 164px;
  flex-shrink: 0;
  z-index: 1000;
  box-shadow: 0 0 0 hsl(210deg 8% 5% / 5%);
  transition: box-shadow ease-in-out 0.1s, transform ease-in-out 0.1s;
  transform: translateZ(0);
  text-align: left;
`;

const LeftStickyContainer = styled.div`
  position: sticky;
  width: auto;
  top: 0;
  margin-bottom: 8px;
  padding-top: 24px;
  max-height: 100vh;
  overflow-y: auto;
  scrollbar-color: var(--scrollbar) transparent;
  top: var(--top-bar-allocated-space);
  max-height: calc(100vh - var(--top-bar-allocated-space));
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
    color: hsl(210, 8%, 35%);
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

const PageLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2;
  color: hsl(210, 8%, 55%);
  // height: 33px;

  &:hover {
    color: hsl(210, 8%, 5%);
  }
`;

const TeamsContainer = styled.div`
  border-top: 1px solid hsl(210, 8%, 85%);
  border-bottom: 1px solid hsl(210, 8%, 85%);
  padding: 12px 12px 6px 12px;
`;

export {
  LeftContainer,
  LeftStickyContainer,
  Ol,
  Li,
  PageLinkContainer,
  TeamsContainer,
};
