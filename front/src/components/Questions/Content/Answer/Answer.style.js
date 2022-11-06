import styled from 'styled-components';

const AnswerContainer = styled.div`
  border-top: 1px solid gray;
  margin-top: 10px;
`;

const Header = styled.h1`
  font-size: 19px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Helper = styled.h2`
  padding-top: 8px;
  margin-bottom: -8px;
  font-weight: 400;
  margin-top: 15px;
  padding: 0 10px 0 0;
  font-size: 17px;

  span {
    font-size: 17px;
  }
`;

export { AnswerContainer, Header, Helper };
