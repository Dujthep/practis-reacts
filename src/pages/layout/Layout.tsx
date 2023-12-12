import { Button } from 'antd';
import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';

const onLogout = (navigate: NavigateFunction) => {
  AuthService.removeUser();
  navigate('/');
};

export const Layout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => onLogout(navigate)}>Logout</Button>
    </>
  );
};
