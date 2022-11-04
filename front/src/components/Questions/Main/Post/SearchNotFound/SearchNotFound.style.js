import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 18px;
  padding: 24px;
  margin: 0 auto;

  .title {
    color: red;
    text-align: center;
    font-size: 17px;
    color: hsl(210, 8%, 15%);
    margin-top: 12px;

    b {
      font-size: 17px;
    }
  }

  .option {
    font-size: 13px;
    margin-top: 4px;
  }
`;

export { Container };
