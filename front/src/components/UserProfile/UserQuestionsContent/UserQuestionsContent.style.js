import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-left: 200px;
  padding: 12px;
  gap: 10px;
  align-items: center;
  margin-right: 23px;
`;

const Li = styled.div`
  display: flex;
  flex-direction: row;
`;

export { Container, Li };
