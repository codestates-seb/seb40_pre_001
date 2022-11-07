import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  margin-bottom: 12px;
  align-items: center;
  justify-content: space-between;
`;

const QuestionCount = styled.p`
  font-size: 1.3rem;
  margin-right: 12px;
  flex: 1, auto;
`;

const ButtonWrapper = styled.div`
  /* display: flex; */
  /* align-items: center;
  justify-content: space-between; */
  margin-right: -16px;
`;

const BoxLeft = styled.div`
  display: flex;
  margin-right: 16px;
  flex-flow: row nowrap;
  margin-top: 2px;
  border: 1px solid hsl(210, 8%, 65%);
  border-radius: 4px;
`;

const CategoryButton = styled.button`
  display: flex;
  position: relative;
  padding: 0.8em;
  border: none;
  border-radius: 0;
  border-right: 1px solid gray;
  background-color: transparent;
  outline: none;
  font-family: inherit;
  font-weight: normal;
  font-size: 12px;
  color: hsl(210, 8%, 45%);
  line-height: calc((13px + 2) / 13px);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  height: 35px;

  &:nth-child(5) {
    border-right: none;
    width: 80px;
  }

  &:hover {
    background-color: hsl(210, 8%, 97.5%);
    color: hsl(210, 8%, 35%);
  }
`;

export { FlexBox, QuestionCount, ButtonWrapper, BoxLeft, CategoryButton };
