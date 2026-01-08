import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'ADMIN' | 'EMPLOYEE' | 'REAL_ESTATE' | 'ACTUARIAL' | 'FINANCE' | 'INVESTMENT' | 'OPERATIONS' | 'MEMBER_SERVICES' | null;

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
  switchRole: (role: NonNullable<UserRole>) => void;
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
    } else if (email === 'realestate@napsa.com') {
      setUser({
        email: 'realestate@napsa.com',
        role: 'REAL_ESTATE',
        name: 'John Banda',
      });
      return true;
    } else if (email === 'actuarial@napsa.com') {
      setUser({
        email: 'actuarial@napsa.com',
        role: 'ACTUARIAL',
        name: 'Dr. Mary Phiri',
      });
      return true;
    } else if (email === 'finance@napsa.com') {
      setUser({
        email: 'finance@napsa.com',
        role: 'FINANCE',
        name: 'Sarah Zulu',
      });
      return true;
    } else if (email === 'investment@napsa.com') {
      setUser({
        email: 'investment@napsa.com',
        role: 'INVESTMENT',
        name: 'David Tembo',
      });
      return true;
    } else if (email === 'operations@napsa.com') {
      setUser({
        email: 'operations@napsa.com',
        role: 'OPERATIONS',
        name: 'Grace Mulenga',
      });
      return true;
    } else if (email === 'memberservices@napsa.com') {
      setUser({
        email: 'memberservices@napsa.com',
        role: 'MEMBER_SERVICES',
        name: 'Peter Ng\'ombe',
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const switchRole = (role: UserRole) => {
    const roleUsers: Record<NonNullable<UserRole>, User> = {
      ADMIN: {
        email: 'admin@napsa.com',
        role: 'ADMIN',
        name: 'Admin User',
      },
      EMPLOYEE: {
        email: 'employee@napsa.com',
        role: 'EMPLOYEE',
        name: 'Kebbie Hamalala',
        ssn: '113292218',
      },
      REAL_ESTATE: {
        email: 'realestate@napsa.com',
        role: 'REAL_ESTATE',
        name: 'John Banda',
      },
      ACTUARIAL: {
        email: 'actuarial@napsa.com',
        role: 'ACTUARIAL',
        name: 'Dr. Mary Phiri',
      },
      FINANCE: {
        email: 'finance@napsa.com',
        role: 'FINANCE',
        name: 'Sarah Zulu',
      },
      INVESTMENT: {
        email: 'investment@napsa.com',
        role: 'INVESTMENT',
        name: 'David Tembo',
      },
      OPERATIONS: {
        email: 'operations@napsa.com',
        role: 'OPERATIONS',
        name: 'Grace Mulenga',
      },
      MEMBER_SERVICES: {
        email: 'memberservices@napsa.com',
        role: 'MEMBER_SERVICES',
        name: 'Peter Ng\'ombe',
      },
    };

    if (role && roleUsers[role]) {
      setUser(roleUsers[role]);
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
