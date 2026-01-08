import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'ADMIN' | 'EMPLOYEE' | null;

interface User {
  email: string;
  role: UserRole;
  name: string;
  ssn?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  switchRole: (role: 'ADMIN' | 'EMPLOYEE') => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load auth state from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('napsa_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Save auth state to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('napsa_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('napsa_user');
    }
  }, [user]);

  const login = (email: string, _password: string): boolean => {
    // Fake authentication logic (password not validated for demo)
    if (email === 'admin@napsa.com') {
      setUser({
        email: 'admin@napsa.com',
        role: 'ADMIN',
        name: 'Admin User',
      });
      return true;
    } else if (email === 'employee@napsa.com') {
      setUser({
        email: 'employee@napsa.com',
        role: 'EMPLOYEE',
        name: 'Kebbie Hamalala',
        ssn: '113292218',
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const switchRole = (role: 'ADMIN' | 'EMPLOYEE') => {
    if (role === 'ADMIN') {
      setUser({
        email: 'admin@napsa.com',
        role: 'ADMIN',
        name: 'Admin User',
      });
    } else {
      setUser({
        email: 'employee@napsa.com',
        role: 'EMPLOYEE',
        name: 'Kebbie Hamalala',
        ssn: '113292218',
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        switchRole,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
