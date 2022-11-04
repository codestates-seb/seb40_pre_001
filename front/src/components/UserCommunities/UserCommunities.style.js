import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 13px;
  width: 22.5%;
  margin-top: 10px;
`;

const CommutnitiesTitle = styled.div`
  color: blue;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommutnitiesCount = styled.div`
  color: gray;
`;

export { Container, CommutnitiesCount, CommutnitiesTitle };
