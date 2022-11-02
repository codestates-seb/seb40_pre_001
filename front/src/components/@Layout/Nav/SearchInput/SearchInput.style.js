import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  padding: ${(props) => props.padding || '0 calc(8px * 1)'};
  align-items: center;
`;

const Container = styled.div`
  width: ${({ isAuthenticated }) =>
    isAuthenticated ? '773.39px' : '704.55px'};
  max-width: 773.9px !important;
  display: flex;
`;

const Input = styled.input`
  width: ${(props) => props.width || '200px'};
  height: ${(props) => props.height || '32.59px'};
  border-color: hsl(210, 8%, 75%);
  background-color: hsl(0, 0%, 100%);
  color: ${(props) => props.color || 'hsl(210, 8%, 45%)'};
  line-height: calc((13 + 2) / 13);
  -webkit-appearance: none;
  margin: 0;
  padding: 0.6em 0.7em;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  font-size: 13px;
  font-family: inherit;
  padding-left: 32px;

  &:focus {
    outline: none !important;
    border-color: hsl(206, 93%, 83.5%);
    box-shadow: rgba(0, 116, 204, 0.15) 0px 0px 0px 4px;
  }
`;
// const TextInput = styled.TextInput.attrs({
//   placeholderTextColor: 'grey',
// })`
//   background-color: white;
//   border-radius: 15px;
//   padding: 5px 10px;
//   font-size: 18px;
// `;
export { Form, Container, Input };
