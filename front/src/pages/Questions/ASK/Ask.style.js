import styled from 'styled-components';

const AskZone = styled.form`
  width: 100vw;
  /* height: 100vh; */
  display: flex;

  align-items: center;
  justify-content: center;
  margin: 0;
  margin-top: 50px;
  background-color: #f8f9f9;
  padding: 24px;
`;

const ComponentZone = styled.div`
  width: 1264px;
  padding: 0 24px 24px 24px;
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
  width: 1216px;
  height: 130px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .header {
    font-size: 27px;
    font-family: inherit;
    font-weight: 600;
  }
  .img {
    width: 600px;
    overflow: hidden;
  }
`;

const WritGoodQue = styled.div`
  width: 851px;
  height: 249px;
  padding: 24px;
  background-color: #ebf4fb;
  border: 1px solid #a6ceed;
  margin-bottom: 24px;
  border-radius: 3px;

  .header2 {
    font-size: 21px;
    color: #3b4045;
    font-weight: 400;
    line-height: 27.3px;
    margin-bottom: 8px;
  }

  .script {
    font-size: 15px;
    line-height: 17px;
    margin-bottom: 3px;
  }

  .script > a {
    font-size: 15px;
    line-height: 17px;
    color: #0074cc;
    cursor: pointer;
  }

  .list {
    margin-top: 15px;
    margin-bottom: 8px;
    font-size: 13px;
    font-weight: 600;
  }

  ul {
    margin-left: 30px;
  }
`;

const AskForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid hsl(210, 8%, 90%);
  border-radius: 3px;
  padding: 24px;
  background-color: #ffffff;

  margin-bottom: 21px;

  .title {
    font-size: 15px;
    color: #0c0d0e;
    line-height: 19.6154px;
    font-weight: 600;
  }
  .content {
    font-size: 12px;
    color: #3b4045;
    margin-bottom: 6px;
  }
`;

const ButtonFooter = styled.div`
  width: inherit;
  height: 37px;
  /* border: 1px solid; */
  justify-content: center;
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
