import React from 'react';

interface EmployeeSidebarProps {
  currentView: string;
  setView: (view: string) => void;
}

const EmployeeSidebar: React.FC<EmployeeSidebarProps> = ({ currentView, setView }) => {
  return (
    <div className="fixed left-0 top-0 w-64 h-full bg-primary-navy text-white flex flex-col overflow-y-auto z-50">
      <div className="p-4 flex items-center gap-3 border-b border-white/10">
        <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center font-bold text-primary-navy">
          <i className="fa-solid fa-people-roof"></i>
        </div>
        <div className="text-xs font-bold uppercase leading-tight text-white">
          NATIONAL PENSION<br />SCHEME AUTHORITY
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'dashboard' ? 'bg-white/10' : ''}`} onClick={() => setView('dashboard')}>
          <i className="fa-solid fa-table-columns"></i>
          <span>Dashboard</span>
        </div>

        <div className="text-xs uppercase text-white/70 font-semibold mb-2 mt-4">MY ACCOUNT</div>

        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'member_home' ? 'bg-white/10' : ''}`} onClick={() => setView('member_home')}>
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </div>
        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'benefits' ? 'bg-white/10' : ''}`} onClick={() => setView('benefits')}>
          <i className="fa-solid fa-wallet"></i>
          <span>Benefits</span>
        </div>
        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'contributions' ? 'bg-white/10' : ''}`} onClick={() => setView('contributions')}>
          <i className="fa-solid fa-layer-group"></i>
          <span>Contributions</span>
        </div>
        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'kyc' ? 'bg-white/10' : ''}`} onClick={() => setView('kyc')}>
          <i className="fa-solid fa-user-gear"></i>
          <span>Manage Account</span>
        </div>

        <div className="text-xs uppercase text-white/70 font-semibold mb-2 mt-4">SERVICES</div>
        <div className="p-3 mb-2 rounded cursor-pointer flex items-center gap-3">
          <i className="fa-regular fa-circle-question"></i>
          <span>Help & Support</span>
        </div>
      </div>

      <div className="p-4">
        <div className="p-3 rounded cursor-pointer flex items-center gap-3">
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSidebar;
