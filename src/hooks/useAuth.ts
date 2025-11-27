import { useState, useEffect } from 'react';
import { user } from '../data/mock';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (memberId: string, password: string): boolean => {
    // Mock login - in real app, this would call API
    if (memberId && password) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const loginWithPin = (pin: string): boolean => {
    // Mock PIN login
    if (pin.length === 6) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  const verifyPin = (pin: string): boolean => {
    // Mock PIN verification
    return pin === '123456';
  };

  return {
    isAuthenticated,
    currentUser,
    login,
    loginWithPin,
    logout,
    verifyPin
  };
};
