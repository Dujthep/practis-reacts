import React, { useState } from 'react';
import { AuthService } from '../../services/AuthService';
import { Layout } from '../layout/Layout';
import { Login } from '../login/Login';

export const HomePage: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(AuthService.checkAuth());

  return (
    <>
      {authenticated ? (
        <Layout setAuthenticated={setAuthenticated} />
      ) : (
        <Login setAuthenticated={setAuthenticated} />
      )}
    </>
  );
};
