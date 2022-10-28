import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  /* height: 100vh; */
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: hsl(210, 8%, 95%);
  padding: 24px;
`;

const SignUpZone = styled.div`
  width: 100%;
  /* max-width: 1264px; */
  margin: 0;
  background-color: transparent;
  border-left: 0;
  border-right: 0;
  display: flex;
  align-items: center !important;
  justify-content: center;
`;

export { SignUpZone, Container };
