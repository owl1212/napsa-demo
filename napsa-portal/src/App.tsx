import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import NapsaPrototype from './pages/NapsaPrototype';
import AdminDashboardLegacy from './pages/AdminDashboardLegacy';
import MobileCalculator from './pages/MobileCalculator';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <NapsaPrototype />
              </ProtectedRoute>
            } />
            <Route path="/napsa-prototype" element={
              <ProtectedRoute>
                <NapsaPrototype />
              </ProtectedRoute>
            } />
            <Route path="/admin-dashboard" element={<AdminDashboardLegacy />} />
            <Route path="/mobile-calculator" element={<MobileCalculator />} />
        </Routes>
    );
}

function App() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
}

export default App;