import { createContext, useContext, useState } from "react";

import { loginRequest, registerRequest } from "../api/auth";
import { AuthContextType, AuthProviderType, CredentialsType } from "../types/auth";

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = (credentials: CredentialsType) => {
    registerRequest(credentials)
      .then((data) => {
        setIsAuthenticated(true);
        setUser(data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  const login = (credentials: CredentialsType) => {
    loginRequest(credentials)
      .then((data) => {
        setIsAuthenticated(true);
        setUser(data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
