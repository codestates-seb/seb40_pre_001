import styled from 'styled-components';

const SquareButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.5em 0.8em 0.5em 0.8em;
  color: ${({ color }) => color || 'hsl(0,0%,100%)'};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 3px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'hsl(206,100%,52%)'};
  outline: none;
  font-family: inherit;
  font-size: 13px;
  font-weight: normal;
  line-height: calc((13 + 2) / 13);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  height: 34px;
  user-select: none;
  margin-top: 6px;
  border: 1px solid transparent;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
`;

export { SquareButton };
