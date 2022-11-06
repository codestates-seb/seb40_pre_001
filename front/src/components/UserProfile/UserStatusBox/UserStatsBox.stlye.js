import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const StatsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 5px;
  padding: 12px;
`;

const StatsBoxContentsCount = styled.div`
  font-size: 20px;
  margin: 8px;
  display: column;
  align-items: center;
  justify-content: center;
`;

const StatsBoxContentsItem = styled.div`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
`;

export { Container, StatsBox, StatsBoxContentsCount, StatsBoxContentsItem };
