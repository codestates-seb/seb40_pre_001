import styled from 'styled-components';

const EditContainer = styled.div`
  width: 835px;
  margin-bottom: 24px;
  height: 500px;
  margin-left: 10px;
`;

const TitleContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid hsl(210, 8%, 85%);
  padding-bottom: 16px;
  margin-bottom: 24px;
`;

const Title = styled.span`
  font-size: 27px;
  font-weight: 400;
`;

const PIText = styled.span`
  font-size: 21px;
`;

const PIContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 835px;
  margin-top: 9px;
  padding: 24px;
  border: 1px solid hsl(210, 8%, 85%);
`;

const Label = styled.span`
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 421px;
  height: 33.6px;
  border: 1px solid hsl(210, 8%, 75%);
  margin-bottom: 20px;
`;

export {
  EditContainer,
  TitleContainer,
  Title,
  PIText,
  PIContainer,
  Label,
  Input,
};
