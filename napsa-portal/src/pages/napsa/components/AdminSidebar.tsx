import React from 'react';

interface AdminSidebarProps {
  currentView: string;
  setView: (view: string) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ currentView, setView }) => {
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
        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'admin_dashboard' ? 'bg-white/10' : ''}`} onClick={() => setView('admin_dashboard')}>
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

        <div className="text-xs uppercase text-white/70 font-semibold mb-2 mt-4">EMPLOYER MANAGEMENT</div>

        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'employer_accounts' ? 'bg-white/10' : ''}`} onClick={() => setView('employer_accounts')}>
          <i className="fa-solid fa-briefcase"></i>
          <span>Employer Accounts</span>
        </div>

        <div className="text-xs uppercase text-white/70 font-semibold mb-2 mt-4">SYSTEM</div>
        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'web_portal' ? 'bg-white/10' : ''}`} onClick={() => setView('web_portal')}>
          <i className="fa-solid fa-globe"></i>
          <span>Web Portal Services</span>
        </div>
        <div className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${currentView === 'audit_trail' ? 'bg-white/10' : ''}`} onClick={() => setView('audit_trail')}>
          <i className="fa-solid fa-clipboard-list"></i>
          <span>Audit Trail</span>
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

export default AdminSidebar;
