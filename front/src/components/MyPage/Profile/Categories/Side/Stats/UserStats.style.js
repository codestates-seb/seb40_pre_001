import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 21px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const StatsContainer = styled.div`
  display: grid;
  color: hsl(210, 8%, 45%);
  grid-template-columns: 1fr 1fr;
  border: 1px solid hsl(210, 8%, 85%);
  background-color: hsl(0, 0%, 100%);
  border-radius: 5px;

  width: 245px;
  height: 120px;
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 16px);
  align-items: flex-start;
  justify-content: center;
`;

const StatCount = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 17px;
  justify-content: flex-start;
  margin-left: 10px;

  span {
    font-size: 13px;
    color: hsl(210, 8%, 45%);
    text-align: left;
  }
`;

export { Container, Title, StatsContainer, StatCount, StatBox };
