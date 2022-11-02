import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CustomLink = ({ className, path, children, ...rest }) => {
  return (
    <StyledLink className={className} to={path} {...rest}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  font-weight: 300;
`;

export default CustomLink;
