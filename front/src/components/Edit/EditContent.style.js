import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  width: 861px;
  height: 102px;
  margin-bottom: 30px;
  padding: 16px;
  color: rgb(59, 64, 69);
  background-color: rgb(253, 247, 226);
  border: 1px solid rgb(230, 207, 121);
  border-radius: 3px;
  font-size: 10px;
  line-height: 17px;
  flex-direction: column;
  justify-content: space-between;
`;

const LeftBox = styled.div`
  .save-edit,
  .cancel {
    width: 85px;
    height: 38px;
  }

  .save-edit:hover {
    background-color: hsl(206, 100%, 40%);
  }

  .cancel:hover {
    background-color: hsl(206, 100%, 97%) !important;
  }
`;

const EditLayout = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const Section = styled.div`
  padding: 20px 0px;

  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-weight: 400;
  margin-top: 16px;
  font-size: 19px;
  line-height: 1.3;
  margin: 0 0 1em;
`;

const Input = styled.input`
  width: 100%;
  margin: 0;
  padding: 0.6em 0.7em;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  background-color: hsl(0, 0%, 100%);
  color: hsl(210, 8%, 5%);
  font-size: 13px;
  font-family: inherit;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { Header, LeftBox, EditLayout, Title, Input, Section, ButtonBox };
