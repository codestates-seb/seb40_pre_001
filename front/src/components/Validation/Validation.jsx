// import { useCallback, useState, useRouter } from 'react';
// import axios from 'axios';
// // const ValidationEmail = (email) => {
// //   const regex =
// //     /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
// //   return regex.test(email);
// // };

// // const removeWhitespace = (text) => {
// //   const regex = /\s/g;
// //   return text.replace(regex, '');
// // };

// // export { ValidationEmail, removeWhitespace };

// const SingUp = () => {
//   //이메일, 비밀번호 확인
//   const [email, setEmail] = useState('');
//   //   const [password, setPassword] = useState('');

//   //오류 메세지
//   const [emailMessage, setEmailMessage] = useState('');
//   //   const [passwordMessage, setpasswordMessage] = useState('');

//   //유효성 검사
//   const [isEmail, setIsEmail] = useState(false);
//   //   const [isPassword, setIsPassword] = useState(false);
//   const router = useRouter();

//   const onSubmit = useCallback(async () => {
//     e.preventDefault();
//     try {
//       await axios
//         .post('http://localhost:3000/api/questions/', {
//           email: email,
//           password: password,
//         })
//         .then((res) => {
//           console.log('response:', res);
//           if (res.status === 200) {
//             router.push('http://localhost:3000/api/questions/');
//           }
//         });
//     } catch (err) {
//       console.log(err);
//     }
//   }, [email, password]);

//   //이메일 정규식
//   const onChangeEmail = useCallback(() => {
//     const emailRegex =
//       /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//     const emailCurrent = e.target.value;
//     setEmail(emailCurrent);
//     if (!emailRegex.test(emailCurrent)) {
//       setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ');
//       setIsEmail(false);
//     } else {
//       setEmailMessage('올바른 이메일 형식이에요 : )');
//       setIsEmail(true);
//     }
//   }, []);
// };

// export { SingUp };
