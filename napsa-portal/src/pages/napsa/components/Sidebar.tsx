import React from 'react';

interface SidebarProps {
  currentView: string;
  setView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
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

        <div className="text-xs uppercase text-white/70 font-semibold mb-2 mt-4">OPERATIONS</div>

        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'accounting' ? 'bg-white/10' : ''}`} onClick={() => setView('accounting')}>
          <i className="fa-solid fa-calculator"></i>
          <span>Accounting</span>
        </div>
        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'fund_mgmt' ? 'bg-white/10' : ''}`} onClick={() => setView('fund_mgmt')}>
          <i className="fa-solid fa-chart-pie"></i>
          <span>Fund Management</span>
        </div>
        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'pension_payroll' ? 'bg-white/10' : ''}`} onClick={() => setView('pension_payroll')}>
          <i className="fa-solid fa-money-check-dollar"></i>
          <span>Pension Payroll</span>
        </div>
        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'member_admin' ? 'bg-white/10' : ''}`} onClick={() => setView('member_admin')}>
          <i className="fa-solid fa-users-gear"></i>
          <span>Member Admin</span>
        </div>
        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'contribution_mgmt' ? 'bg-white/10' : ''}`} onClick={() => setView('contribution_mgmt')}>
          <i className="fa-solid fa-hand-holding-dollar"></i>
          <span>Contribution Mgmt</span>
        </div>

        <div className="text-xs uppercase text-white/70 font-semibold mb-2 mt-4">PORTAL SERVICES</div>

        <div className="p-3 mb-2 rounded cursor-pointer flex items-center gap-3 bg-white/10">
          <i className="fa-regular fa-user"></i>
          <span>Member</span>
          <span className="flex-1"></span>
          <i className="fa-solid fa-chevron-down text-xs"></i>
        </div>

        <div className="ml-4 mb-2">
          <div className={`p-2 mb-1 rounded cursor-pointer flex items-center gap-3 ${currentView === 'member_home' ? 'bg-white/20' : ''}`} onClick={() => setView('member_home')}>
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </div>
          <div className={`p-2 mb-1 rounded cursor-pointer flex items-center gap-3 ${currentView === 'benefits' ? 'bg-white/20' : ''}`} onClick={() => setView('benefits')}>
            <i className="fa-solid fa-wallet"></i>
            <span>Benefits</span>
          </div>
          <div className={`p-2 mb-1 rounded cursor-pointer flex items-center gap-3 ${currentView === 'contributions' ? 'bg-white/20' : ''}`} onClick={() => setView('contributions')}>
            <i className="fa-solid fa-layer-group"></i>
            <span>Contributions</span>
          </div>
          <div className={`p-2 mb-1 rounded cursor-pointer flex items-center gap-3 ${currentView === 'kyc' ? 'bg-white/20' : ''}`} onClick={() => setView('kyc')}>
            <i className="fa-solid fa-user-gear"></i>
            <span>Manage Account</span>
          </div>
        </div>

        <div className="p-3 mb-2 rounded cursor-pointer flex items-center gap-3">
          <i className="fa-solid fa-briefcase"></i>
          <span>Employer</span>
          <span className="flex-1"></span>
          <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
        </div>

        <div className="ml-4 mb-2">
          <div className="p-2 mb-1 rounded cursor-pointer flex items-center gap-3">
            <i className="fa-solid fa-file-import"></i>
            <span>Attach Existing</span>
          </div>
          <div className="p-2 mb-1 rounded cursor-pointer flex items-center gap-3">
            <i className="fa-regular fa-pen-to-square"></i>
            <span>New Registration</span>
          </div>
        </div>

        <div className="text-xs uppercase text-white/70 font-semibold mb-2 mt-4">SERVICES</div>
        <div className="p-3 mb-2 rounded cursor-pointer flex items-center gap-3">
          <i className="fa-regular fa-user"></i>
          <span>Other Services</span>
        </div>
        <div className="text-xs uppercase text-white/70 font-semibold mb-2 mt-4">SYSTEM</div>
        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'web_portal' ? 'bg-white/10' : ''}`} onClick={() => setView('web_portal')}>
          <i className="fa-solid fa-globe"></i>
          <span>Web Portal Services</span>
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

export default Sidebar;