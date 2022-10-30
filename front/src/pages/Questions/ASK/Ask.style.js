import styled from 'styled-components';

const AskZone = styled.div`
  width: 100vw;
  /* height: 100vh; */
  display: flex;

  align-items: center;
  justify-content: center;
  margin: 0;
  margin-top: 50px;
  background-color: hsl(210, 8%, 95%);
  padding: 24px;
`;

const ComponentZone = styled.div`
  width: 1264px;
  padding: 0 24px 24px 24px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
`;

const RightWrapper = styled.div`
  width: 332px;
`;

const LeftWrapper = styled.div`
  width: 851px;
  margin-right: 17px;
`;

const AskHeader = styled.div`
  height: 130px;
  margin-bottom: 16px;
`;

const WritGoodQue = styled.div`
  width: 851px;
  height: 249px;
  padding: 24px;
  background-color: #ebf4fb;
  border: 1px dotted;
  margin-bottom: 24px;
`;

const AskForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  height: 500px;
`;

const ButtonFooter = styled.div`
  width: inherit;
  height: 37px;
  border: 1px solid;
`;

export {
  AskZone,
  ComponentZone,
  AskForm,
  AskHeader,
  WritGoodQue,
  LeftWrapper,
  RightWrapper,
  Wrapper,
  ButtonFooter,
};
