import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginView from './components/LoginView';

// Layouts
import MemberLayout from './layouts/MemberLayout';
import EmployerLayout from './layouts/EmployerLayout';
import AdminLayout from './layouts/AdminLayout';

// Member Pages
import MemberDashboard from './pages/MemberDashboard';
import MemberProfile from './pages/MemberProfile';
import MemberContributions from './pages/MemberContributions';
import MemberCalculator from './pages/MemberCalculator';

// Employer Pages
import EmployerDashboard from './pages/EmployerDashboard';
import EmployerUpload from './pages/EmployerUpload';

// Admin Pages
import AdminDashboard from './pages/AdminDashboard';
import AdminMembers from './pages/AdminMembers';

function App() {
    // For now, we mock auth state.
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState<'member' | 'employer' | 'admin'>('member');

    const handleLogin = (role: 'member' | 'employer' | 'admin') => {
        setUserRole(role);
        setIsAuthenticated(true);
    };

    if (!isAuthenticated) {
        return (
            <LoginView onLogin={handleLogin} />
        );
    }

    return (
        <Routes>
            {/* Redirect root to appropriate dashboard based on role */}
            <Route path="/" element={<Navigate to={`/${userRole}/dashboard`} replace />} />

            {/* Member Portal Routes */}
            <Route path="/member" element={<MemberLayout />}>
                <Route path="dashboard" element={<MemberDashboard />} />
                <Route path="profile" element={<MemberProfile />} />
                <Route path="contributions" element={<MemberContributions />} />
                <Route path="calculator" element={<MemberCalculator />} />
                <Route path="claims" element={<div className="p-4">Claims Page Placeholder</div>} />
                <Route path="documents" element={<div className="p-4">Documents Page Placeholder</div>} />
            </Route>

            {/* Employer Portal Routes */}
            <Route path="/employer" element={<EmployerLayout />}>
                <Route path="dashboard" element={<EmployerDashboard />} />
                <Route path="employees" element={<div className="p-4">Employees List Placeholder</div>} />
                <Route path="contributions" element={<div className="p-4">Contribution Management Placeholder</div>} />
                <Route path="upload" element={<EmployerUpload />} />
                <Route path="compliance" element={<div className="p-4">Compliance Reports Placeholder</div>} />
            </Route>

            {/* Admin Portal Routes */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="members" element={<AdminMembers />} />
                <Route path="funds" element={<div className="p-4">Fund Management Placeholder</div>} />
                <Route path="accounting" element={<div className="p-4">Accounting Placeholder</div>} />
                <Route path="settings" element={<div className="p-4">System Settings Placeholder</div>} />
                <Route path="security" element={<div className="p-4">Security Logs Placeholder</div>} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;