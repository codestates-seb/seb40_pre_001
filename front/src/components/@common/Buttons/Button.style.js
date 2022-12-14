import styled from 'styled-components';

// 공용 버튼
const SquareButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.5em 0.5em 0.5em 0.5em;
  color: ${({ color }) => color || 'hsl(0,0%,100%)'};
  border: 1px solid ${({ borderColor }) => borderColor || 'transparent'};
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
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
`;

// SNS 버튼

const StyledSnsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  width: 255px;
  height: 35px;
  font-size: 13px;
  margin: 6px 0px;
  padding: 10.4px;

  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  &:hover {
    color: white;
    transition: 0.2s;
    background: ${({ hoverBackground }) => hoverBackground};
  }
`;

const StyledTag = styled.button`
  font-size: 12px;
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  border-color: transparent;
  display: inline-block;
  padding: 0.4em 0.5em !important;
  margin: 0 2px 2px 0;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  width: ${({ width }) => width};
`;

export { SquareButton, StyledSnsButton, StyledTag };
