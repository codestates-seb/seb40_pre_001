import styled from 'styled-components';

const Footer = styled.footer`
  background-color: hsl(210, 8%, 15%);
  background-image: none;
  background-position: top left;
  background-repeat: repeat;
  border-top: 0;
  background-size: auto;
  color: hsl(210, 8%, 60%);
  padding-top: 0;
  padding-bottom: 0;
`;

const Container = styled.div`
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  padding: calc(32 *1); calc(32 *1); calc(32 *1); calc(32 *1);
  display: flex;
  flex-flow: row wrap;
`;

export { Footer, Container };
