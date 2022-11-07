import React from 'react';
import styled from 'styled-components';

const HeaderButton = ({ icon, content }) => {
  return (
    <StyledButton>
      {icon}
      {content}
    </StyledButton>
  );
};

const StyledButton = styled.div`
  position: relative;
  display: inline-block;
  padding: 0.5em 0.5em 0.5em 0.5em;
  color: hsl(210, 8%, 25%);
  border: 1px solid hsl(210, 8%, 65%);
  border-radius: 3px;
  background-color: transparent;
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
  padding-right: 15px;
  padding-top: 8px;

  margin-left: 190px;
  margin-bottom: 90px;
`;

export default HeaderButton;
