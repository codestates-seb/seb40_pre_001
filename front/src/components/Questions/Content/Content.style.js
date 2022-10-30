import styled from 'styled-components';

const Status = styled.div`
  display: flex;
  position: inherit;
  margin-top: 30px;
  bottom: 20px;
  justify-content: left;

  font-size: 13px;
  padding-bottom: 17px;
  margin-bottom: 16px;

  border-bottom: 1px solid hsl(210, 8%, 90%);
`;

const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100px;
  margin-right: 16px;

  span {
    color: hsl(210, 8%, 45%);
    font-size: 13px;
    margin-right: 4px;
  }

  p {
    color: hsl(210, 8%, 15%);
    font-size: 13px;
  }
`;

const ImgContainer = styled.div`
  margin-bottom: 24px;
`;

const PostLayout = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

// LeftBox
const LeftBox = styled.div`
  width: auto;
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
    padding-left: 5px;
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

  border: 1px solid red;
`;

const PostBody = styled.div`
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
  line-height: 1.5;
  word-spacing: 1.1em;
  font-size: 15px;
  overflow-wrap: break-word;

  // 추후 삭제 예정
  height: 700px;
  border: 1px solid blue;
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

  // 추후 삭제 예정
  height: 100px;
`;

const FeatureBox = styled.div`
  display: flex;
  width: 96px;
  margin: 4px 16px 4px 0;
  flex: 1 auto;
`;

const FeatureLeft = styled.div`
  width: 110px;

  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: hsl(210, 8%, 45%);
    cursor: pointer;
  }
`;

export {
  Status,
  TextBox,
  PostLayout,
  VotingContainer,
  IconContainer,
  ImgContainer,
  LeftBox,
  VoteCount,
  RightBox,
  PostBody,
  TagBox,
  BottomBox,
  FeatureBox,
  FeatureLeft,
};
