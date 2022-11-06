import styled from 'styled-components';

// Post Body

const PostLayout = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

// LeftBox
const LeftBox = styled.div`
  user-select: none;
  width: 52px;
  padding-right: 16px;
  grid-column: 1;

  svg {
    cursor: pointer;
    fill: hsl(210, 8%, 75%);
  }
`;

const VotingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin: -2px;

  color: hsl(210, 8%, 75%);

  svg {
    margin: 2px;
  }
`;

const IconContainer = styled.div`
  width: 36px;
  height: 36px;

  overflow: hidden;
`;

const VoteCount = styled.div`
  display: flex;
  height: 36px;
  justify-content: center;
  align-items: center;

  span {
    padding-left: 2px;
    color: hsl(210, 8%, 45%);
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 21px;
  }
`;

const RightBox = styled.div`
  padding-right: 16px;
  grid-column: 2;
  width: auto;
  min-width: 0;
`;

const PostBody = styled.div`
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
  line-height: 1.5;
  word-spacing: 1.1em;
  font-size: 15px;
  overflow-wrap: break-word;
`;

const TagBox = styled.div`
  margin-top: 24px;
  margin-bottom: 12px;
`;

const BottomBox = styled.div`
  display: flex;
  margin: 16px 0px;
  padding-top: 4px;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const FeatureBox = styled.div`
  display: flex;
  width: 96px;
  margin: 4px 16px 4px 0;
  flex: 1 auto;
`;

const FeatureLeft = styled.div`
  width: 160px;

  display: flex;
`;

const UserBox = styled.div``;

// Answers

const FeatureSpan = styled.span`
  text-decoration: none;
  color: hsl(210, 8%, 45%);
  cursor: pointer;
  margin-left: 10px;
`;

export {
  PostLayout,
  VotingContainer,
  IconContainer,
  LeftBox,
  VoteCount,
  RightBox,
  PostBody,
  TagBox,
  BottomBox,
  FeatureBox,
  FeatureLeft,
  UserBox,
  FeatureSpan,
};
