import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout, switchRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleRoleSwitch = () => {
    const newRole = user?.role === 'ADMIN' ? 'EMPLOYEE' : 'ADMIN';
    switchRole(newRole);
  };

  return (
    <div className="h-16 bg-white border-b border-border-color px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="p-2 border-none bg-transparent cursor-pointer">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="w-8 h-8 bg-primary-navy rounded"></div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <i className="fa-solid fa-link"></i>
            <span>Quick Links</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <i className="fa-solid fa-bullhorn"></i>
            <span>Announcements</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Role Badge */}
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
          user?.role === 'ADMIN' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
        }`}>
          {user?.role === 'ADMIN' ? 'Admin' : 'Employee'}
        </div>
        
        {/* Role Switcher for Demo */}
        <button 
          onClick={handleRoleSwitch}
          className="px-3 py-1 border border-gray-300 rounded text-xs hover:bg-gray-50 transition-colors"
          title="Switch role (Demo)"
        >
          <i className="fa-solid fa-arrows-rotate mr-1"></i>
          Switch Role
        </button>

        <div className="text-sm">{user?.name || 'User'}</div>
        <button className="p-2 border border-border-color rounded cursor-pointer">
          <i className="fa-regular fa-envelope"></i>
        </button>
        <button className="p-2 border border-border-color rounded cursor-pointer">
          <i className="fa-regular fa-sun"></i>
        </button>
        
        {/* Logout Button */}
        <button 
          onClick={handleLogout}
          className="px-3 py-2 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors"
          title="Logout"
        >
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
        
        <div className="w-8 h-8 bg-bg-gray rounded-full flex items-center justify-center font-bold text-primary-navy">
          <img src="https://i.pravatar.cc/150?u=kebbie" alt="User" className="w-full h-full rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;