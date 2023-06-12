import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  console.log(user);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < Date.now()) {
        logout();
      } else {
        setIsAuthenticated(true);
        setUser(decodedToken.username);
      }
    }
  }, []);

  const login = (token) => {
    handleVerify(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  const handleVerify = (token) => {
    axios
      .get('http://localhost:3001/protected', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const decodedToken = jwtDecode(token);

        if (decodedToken.exp * 1000 < Date.now()) {
          console.error('Token inválido');
          return;
        }

        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        setUser(decodedToken.username);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
  };
}
