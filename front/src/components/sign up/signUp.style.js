import styled from 'styled-components';

// 레이아웃 컨테이너
const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

// 폼컨테이너
const FormContainer = styled.form`
  width: 293px;
  /* height: 210.19px; */
  border: 1px solid rgb(214, 217, 220);
  border-radius: 5px;
  padding: 12px;
  background: white;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
`;

// 폼 레이아웃
const LoginForm = styled.div`
  width: 268px;
  display: column;
`;

// 인풋 레이아웃
const FormInput = styled.input`
  width: 268px;
  height: 32.59px;
  border: 1px solid rgb(214, 217, 220);
  border-radius: 5px;
  padding: 7.9px 9.1px;
  margin: 6px 0 6px 0;
`;

// 버튼 레이아웃
const SubmitButton = styled.button`
  width: 268px;
  height: 37.78px;
  margin-top: 12px;
  background-color: #0a95ff;
  color: white;
  border: 1px solid rgb(214, 217, 220);
  border-radius: 5px;
  margin-bottom: 24px;
  &:hover {
    background: rgba(10, 149, 255, 0.6);
    color: white;
    transition: 0.2s;
  }
`;
// 패스워드 콘텐츠
const FormContents = styled.span`
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
  width: 316px;
  height: 121.34px;
  margin: -4px 0px 16px;
`;

// password direction
const PasswordTextDirection = styled.div`
  width: 268px;
  color: hsl(210, 8%, 45%);
  font-size: 12px;
  margin: 4px 0px 12px;
`;

//Recapcha Zone
const RecapchaZone = styled.div`
  width: 268px;
  height: 156px;
  background-color: hsl(210, 8%, 95%);
  margin: 18px 0px 12px;
`;

//optional choice
const OptionChocie = styled.div`
  display: flex;
  text-align: left;
  width: 268px;
  justify-content: space-between;

  .button {
    margin-right: 2px;
    vertical-align: baseline;
  }

  .button > input {
    border-radius: 3px;
    ::focus {
      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    }
  }
`;

const OptionDiscription = styled.div`
  width: 235px;
  font-weight: 400;
  font-size: 12px;
  color: hsl(210, 8%, 5%);
  vertical-align: baseline;
  cursor: pointer;
  box-sizing: inherit;
  word-wrap: break-word;
  margin-bottom: 10px;
`;

const AdviceMark = styled.div`
  width: 14px !important;
  height: 14px;
  overflow: hidden;
  color: hsl(210, 8%, 45%) !important;
`;

//sign up warning
const SignUpWarn = styled.div`
  color: hsl(210, 8%, 45%);
  margin-bottom: 10px;

  > a {
    color: hsl(206, 100%, 40%);
    cursor: pointer;
  }
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
  PasswordTextDirection,
  RecapchaZone,
  OptionChocie,
  OptionDiscription,
  AdviceMark,
  SignUpWarn,
};

export { SnsButtonContainer };
