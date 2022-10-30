import React, { useEffect } from 'react';
import Form from '../../components/Login/Form';
import { isLoggedIn } from '../../constants/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigator = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigator('/questions');
    }
  }, [isLoggedIn]);

  return (
    <div>
      <Form />
    </div>
  );
};

export default Login;
