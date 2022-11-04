import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: hsl(210, 8%, 95%);
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  position: relative;
  bottom: 30px;
  margin: calc(32px / 2);
`;

const Content = styled.div`
  position: relative;
  top: 22px;
  margin: calc(32px / 2);
  margin-bottom: 4px;
  max-width: calc(calc(97.2rem / 12) * 5);
`;

const Header = styled.h1`
  font-size: 27px;
  margin-bottom: 4px;
  line-height: 1.3;
  font-weight: 400;
`;

const SubHeading = styled.p`
  font-size: 19px;
  margin-bottom: 24px;
`;

const ContentBody = styled.div`
  font-size: 15px;
  p {
    font-size: 15px;
    margin-bottom: 15px;
  }
  span {
    font-size: 15px;
  }
`;

export {
  Wrapper,
  Container,
  IconContainer,
  Content,
  Header,
  SubHeading,
  ContentBody,
};
