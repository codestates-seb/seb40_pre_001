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
  max-width: 160px;
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

const AnswerHeader = styled.h2`
  font-size: 19px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export { Status, TextBox, ImgContainer, PostLayout, AnswerHeader };
