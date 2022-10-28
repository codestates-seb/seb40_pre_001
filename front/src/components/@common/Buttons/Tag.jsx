import React from 'react';
import { StyledTag } from './Button.style';

const TagButton = ({ content, ...rest }) => {
  return <StyledTag {...rest}>{content}</StyledTag>;
};

export default TagButton;
