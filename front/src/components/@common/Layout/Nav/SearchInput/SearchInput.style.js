import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  padding: 0 calc(8px * 1);
  align-items: center;
  flex-shrink: 10000;
  flex-grow: 1;
`;

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Input = styled.input`
  width: 100%;
  border-color: hsl(210, 8%, 75%);
  background-color: hsl(0, 0%, 100%);
  color: hsl(210, 8%, 45%);
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
    box-shadow: 0 0 3px hsl(206, 93%, 83.5%);
  }
`;

export { Form, Container, Input };
