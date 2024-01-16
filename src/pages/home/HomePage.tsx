import React, { useState } from 'react';
import { AuthService } from '../../services/AuthService';
import { LayoutPage } from '../layout/LayoutPage';
import { Login } from '../login/Login';

type UserInformation = {
  name: string;
  role: string;
} | null;

export const HomePage: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(AuthService.checkAuth());

  return (
    <>
      {authenticated ? (
        <LayoutPage setAuthenticated={setAuthenticated} />
      ) : (
        <Login setAuthenticated={setAuthenticated} />
      )}
    </>
  );
};
