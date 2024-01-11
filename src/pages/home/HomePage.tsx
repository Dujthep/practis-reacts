import React, { createContext, useState } from 'react';
import { AuthService } from '../../services/AuthService';
import { LayoutPage } from '../layout/LayoutPage';
import { Login } from '../login/Login';

type UserInformation = {
  name: string;
  role: string;
} | null;

// type ThemeContextProps = {
//   theme: string;
//   toggleTheme: () => void;
// }

export const HomePage: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(AuthService.checkAuth());
  const UserContext = createContext<UserInformation>(null);

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
