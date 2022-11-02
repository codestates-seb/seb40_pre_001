import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
  width: 255px;
`;

// 레이아웃 컨테이너
const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

// 폼컨테이너
const FormContainer = styled.form`
  width: 255px;
  height: 210.19px;
  border: 1px solid rgb(214, 217, 220);
  border-radius: 5px;
  padding: 12px;
  background: white;
  box-shadow: 1px 1px 10px 1px gray;
`;

// 폼 레이아웃
const LoginForm = styled.div`
  width: 230px;
  display: column;
`;

// 인풋 레이아웃
const FormInput = styled.input`
  width: 230px;
  height: 32.59px;
  border: 1px solid rgb(214, 217, 220);
  border-radius: 5px;
  padding: 7.9px 9.1px;
  margin: 6px 0 6px 0;
`;

// 버튼 레이아웃
const SubmitButton = styled.button`
  width: 230px;
  height: 37.78px;
  margin-top: 12px;
  background-color: #0a95ff;
  color: white;
  border: 1px solid rgb(214, 217, 220);
  border-radius: 5px;
  &:hover {
    background: rgba(10, 149, 255, 0.6);
    color: white;
    transition: 0.2s;
  }
`;
// 패스워드 콘텐츠
const FormContents = styled.label`
  display: block;
  margin: 1px;
  font-weight: 600;
`;
// 비밀번호 분실
const Forgot = styled.span`
  font-size: 12px;
  color: #0a95ff;
`;
// 비밀번호 텍스트 컨테이너
const PasswordTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Sns Button Container

const SnsButtonContainer = styled.div`
  width: 278px;
  height: 121.34px;
  margin: -4px 0px 16px;
`;

export {
  FormContainer,
  LoginForm,
  FormInput,
  SubmitButton,
  FormContents,
  Forgot,
  PasswordTextContainer,
  Container,
  IconContainer,
};

export { SnsButtonContainer };
