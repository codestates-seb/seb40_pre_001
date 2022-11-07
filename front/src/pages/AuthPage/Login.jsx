import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Form from '../../components/Login/Form';
import { usersState } from '../../store';

const Login = () => {
  const { isAuthenticated } = useRecoilValue(usersState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/questions');
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <Form />
    </div>
  );
};

export default Login;
