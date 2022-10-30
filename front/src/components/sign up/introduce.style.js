import styled from 'styled-components';

const JoinIntroZone = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  width: calc(var(97.2rem) / 12);
  margin-right: 48px;
  margin-bottom: 128px;
`;

const IntroHeader = styled.div`
  margin: 0 0 1em;
  font-size: 2.1rem;
  font-family: inherit;
  margin-bottom: 32px;
`;

const IntroElment = styled.div`
  vertical-align: baseline;
  margin-bottom: 24px;
  display: flex;
  /* font-size: 14px; */
  > svg {
    margin-right: 8px;
  }
  .content {
    font-size: 15px;
  }
`;

const PrivateIntro = styled.div`
  display: flex;
  flex-direction: column;
  color: hsl(210, 8%, 45%);
  margin-bottom: 10px;

  > a {
    color: hsl(206, 100%, 40%);
    cursor: pointer;
  }
`;

export { JoinIntroZone, IntroHeader, IntroElment, PrivateIntro };
