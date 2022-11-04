import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 100px;

  .active {
    background-color: hsl(27, 90%, 55%);
    color: hsl(0, 0%, 100%);
  }
`;

const LeftBox = styled.div``;

const RightBox = styled.div`
  display: flex;
  align-items: center;
`;

const PageButton = styled.button`
  border-color: transparent;
  background-color: transparent;
  color: hsl(210, 8%, 25%);
  margin-left: 2px;
  margin-right: 2px;
  padding: 0 8px;
  border-radius: 3px;
  border: 1px solid hsl(210, 8%, 85%);
  font-size: 13px;
  line-height: 25px;
`;

const dotButton = styled.button`
  margin-left: 2px;
  margin-right: 2px;
  padding: 0 8px;
  border-radius: var(--br-sm);
  background-color: transparent;
  border: none;
  font-size: 13px;
  line-height: 25px;
`;

const Text = styled.p`
  margin-left: 10px;
`;

export { Container, LeftBox, RightBox, PageButton, dotButton, Text };
