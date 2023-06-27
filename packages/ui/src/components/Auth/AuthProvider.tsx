/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext, createContext, useState, useEffect } from "react";
import { AuthResponse } from "../../types/types";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  isAuthenticated: false,
  getToken: () => {},
  saveUser: (userData: AuthResponse) => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string>("");

  useEffect(() => {checkAuth()}, []);

  async function checkAuth() {
    if (token) {
      // El usuario está autenticado
    } else {
      const token = localStorage.getItem("token");
      if (token) {
        setIsAuthenticated(true);
      }
    }
  }

  function getToken() {
    return token;
  }

  function saveUser(userData: AuthResponse) {
    setToken(userData.token);
    localStorage.setItem("token", JSON.stringify(userData.token));
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("username", userData.username);
    localStorage.setItem("email", userData.email);
    setIsAuthenticated(true);
  }

  function signOut() {
    setIsAuthenticated(false);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, getToken, saveUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);