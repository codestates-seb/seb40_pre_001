import styled from 'styled-components';

const SmallBlueSpan = styled.span`
  margin: 5px 0;
  font-size: ${({ fontSize }) => fontSize || '13px'};
  color: ${({ color }) => color || 'hsl(206, 100%, 40%)'};
  cursor: pointer;
`;

export { SmallBlueSpan };
