import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

import {
  UserType,
  AuthContextType,
  CredentialsType,
  AuthProviderType,
} from "../types/auth";
import { loginRequest, registerRequest } from "../api/auth";

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const id = Cookies.get("id");
    const email = Cookies.get("email");
    const token = Cookies.get("token");

    if (id && email) {
      setUser({ email, id, token });
      setIsAuthenticated(true);
    }
  }, []);

  const register = (credentials: CredentialsType) => {
    registerRequest(credentials)
      .then((data) => {
        setUser(data);
        setIsAuthenticated(true);
        Cookies.set("token", data.token);
        Cookies.set("email", data.email);
        Cookies.set("id", data.id);
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
    setUser(null);
    setIsAuthenticated(false);
    Cookies.remove("id");
    Cookies.remove("email");
    Cookies.remove("token");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
