import styled from 'styled-components';

const Status = styled.div`
  display: flex;
  position: inherit;
  margin-top: 30px;
  bottom: 20px;
  justify-content: left;

  font-size: 13px;
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

export { Status, TextBox };
