import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  position: relative;
  top: -3px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
`;

const QuestionCount = styled.p`
  font-size: 1.3rem;
  margin-right: 12px;
  flex: 1, auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    width: 65px;

    &:after {
      position: absolute;
      content: '';
      right: 10px;
      top: calc(50% - 2px);
      border-style: solid;
      border-top-width: 4px;
      border-bottom-width: 0;

      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
    }
  }

  &:hover {
    background-color: hsl(210, 8%, 97.5%);
    color: hsl(210, 8%, 35%);
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 0.6em 0.5em 0.6em;
  color: hsl(205, 47%, 42%);
  border: 1px solid hsl(205, 41%, 63%);
  border-radius: 3px;
  background-color: hsl(205, 46%, 92%);
  width: 71px;
  height: 35px;
  font-size: 13px;
  text-align: center;
  cursor: pointer;
`;

const Count = styled.p`
  border-color: transparent;
  background-color: hsl(206, 100%, 40%);
  color: hsl(0, 0%, 100%);
  border-radius: 5px;
  height: 13px;
  font-size: 11px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 1px;
  margin-left: 4px;
  min-width: 18px;
  align-self: flex-start;
`;

export {
  FlexBox,
  QuestionCount,
  ButtonWrapper,
  BoxLeft,
  CategoryButton,
  FilterButton,
  Count,
};
