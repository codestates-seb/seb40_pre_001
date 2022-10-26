import styled from 'styled-components';

const PostContainer = styled.div`
  position: relative;
  display: flex;
  border-top: 1px solid hsla(0, 0%, 0%, 0.09);
  padding: 16px;
  right: 25px;
  width: 751px;
`;

const BoxLeft = styled.div`
  gap: 6px;
  margin-right: 16px;
  margin-bottom: 4px;
  width: calc(96px + 12px);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: flex-end;
  font-size: 13px;
  color: hsl(210, 8%, 45%);
`;

const VoteBox = styled.div`
  display: inline-flex;
  gap: 0.3em;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
  color: hsl(210, 8%, 5%);

  span {
    font-weight: 500;
  }
`;

const AnswerBox = styled(VoteBox)`
  color: hsl(210, 8%, 45%);

  span {
    font-weight: 300;
  }
`;

const ViewBox = styled(VoteBox)`
  color: hsl(210, 8%, 45%);

  span {
    font-weight: 300;
  }
`;

const BoxRight = styled.div`
  flex-grow: 1;
  max-width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
`;

const Title = styled.h3`
  display: block;
  font-size: 1.3rem;
  margin-top: -0.15rem;
  margin-bottom: 0.3846rem;
  padding-right: 24px;
  line-height: calc((13px + 4) / 13px);

  font-weight: 400;
  hyphens: auto;

  a {
    word-break: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    color: hsl(206, 100%, 40%);

    text-decoration: none;
    cursor: pointer;
    user-select: auto;
    font-size: 100%;
  }
`;

const Content = styled.p`
  margin-top: calc(2px * -1);
  margin-bottom: 8px;
  overflow: hidden;
  word-break: break-word;
  overflow-wrap: break-word;
  color: hsl(210, 8%, 25%);
  font-size: 13px;
  font-weight: 300px;
`;

const ExtraDetailsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 8px;
`;

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  line-height: 18px;
  float: left;

  margin-top: 10px;
  ul {
    display: inline;
    list-style: none;
    margin-left: 0;
    margin: 0;
    padding: 0;

    li {
      margin-right: 4px;
    }
  }
`;

const Tab = styled.a`
  font-size: 12px;
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  border-color: transparent;
  display: inline-block;
  padding: 0.4em 0.5em;
  margin: 10px 2px 2px 0;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
`;

const DetailRight = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  flex-wrap: wrap;
  margin-left: auto;
  justify-content: flex-end;
`;

const UserCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  margin: 20px 2px 0 0;
`;

const UserCardLink = styled.div`
  display: flex;
  white-space: nowrap;
  margin: calc(4px / 2 * -1);
  min-width: 0;
  font-size: 12px;
  align-items: center;
  flex-wrap: wrap;
  overflow-wrap: break-word;

  a {
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
  }
`;

const UserPostCount = styled.p`
  font-size: 12px;
  color: hsl(210, 8%, 35%);
  font-weight: 700;
  margin-left: 2px;
`;

const TimeBox = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  color: var(--black-500);
  font-size: var(--fs-caption);

  margin-top: 20px;

  span {
    color: hsl(210, 8%, 45%);
  }
`;

export { PostContainer };

export { BoxLeft, VoteBox, AnswerBox, ViewBox };

export { BoxRight, Title, Content };

export { ExtraDetailsBox, TagBox, Tab, DetailRight };

export { UserCard, UserCardLink, UserPostCount, TimeBox };
