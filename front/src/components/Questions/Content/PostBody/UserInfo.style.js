import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 4px;
  margin-right: 0;
  margin-left: 0;
  border-radius: 3px;
  // Author 여부에 따라 색 바뀜
  background-color: ${({ isAuthor }) => (isAuthor ? '#d9eaf7' : 'transparent')};
  text-align: left;
  vertical-align: top;
  width: 200px;
`;

const Container = styled.div`
  color: hsl(210, 8%, 45%);
  box-sizing: border-box;
  padding: 5px 6px 7px 7px;
`;

const TimeContainer = styled.div`
  margin-top: 1px;
  margin-bottom: 4px;
  font-size: 13px;
  color: hsl(210, 8%, 45%);

  span {
    text-decoration: none;
    color: hsl(210, 8%, 45%);
  }
`;

const UserBox = styled.div`
  display: flex;
`;

const UserDetails = styled.div`
  margin-left: 8px;
  width: calc(100% - 40px);
  float: left;
  line-height: 17px;
  word-wrap: break-word;
`;

const flair = styled.div`
  color: hsl(210, 8%, 45%);
`;

export { Wrapper, Container, TimeContainer, UserBox, UserDetails, flair };
