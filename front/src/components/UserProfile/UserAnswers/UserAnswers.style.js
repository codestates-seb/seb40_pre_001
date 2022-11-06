import styled from 'styled-components';

const Container = styled.div`
  width: 75%;
  height: 100%;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
`;
const TitleContainer = styled.div`
  display: column;
`;

const Title = styled.div`
  font-size: 22px;
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

const BoxLeft = styled.div`
  display: flex;
  margin-right: 16px;
  flex-flow: row nowrap;
  margin-top: 2px;
  border: 1px solid hsl(210, 8%, 65%);
  border-radius: 4px;
  height: 36px;
`;

export { Container, Title, CategoryButton, BoxLeft, TitleContainer };
