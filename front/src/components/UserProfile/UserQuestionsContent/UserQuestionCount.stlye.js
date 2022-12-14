import styled from 'styled-components';

const Container = styled.div`
  border-radius: 5px;
  background-color: green;
  color: white;
  padding: 5px;
`;
const UserQuestionList = styled.div`
  margin-left: 5px;

  font-size: 16px;
  color: blue;
  max-width: 240px;
  overflow: hidden;
`;
const UsesQuestionDays = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  width: 80px;
`;

export { Container, UserQuestionList, UsesQuestionDays };
