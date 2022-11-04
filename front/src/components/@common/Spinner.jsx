import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <RotatingLines
        strokeColor='grey'
        strokeWidth='5'
        animationDuration='0.75'
        width='96'
        visible={true}
      />
    </SpinnerContainer>
  );
};

export default Spinner;
