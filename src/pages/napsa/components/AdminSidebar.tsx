import React from 'react';
import { UserRole } from '../../../contexts/AuthContext';

interface AdminSidebarProps {
  currentView: string;
  setView: (view: string) => void;
  userRole?: UserRole;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ currentView, setView, userRole }) => {
  // Define role-specific menu items
  const getMenuItems = (role?: UserRole) => {
    const allItems = [
      { id: 'admin_dashboard', label: 'Dashboard', icon: 'fa-table-columns', section: 'MAIN' },
      { id: 'pension_operations', label: 'Operations Command Center', icon: 'fa-tachometer-alt', section: 'MAIN' },
      { id: 'accounting', label: 'Accounting Command Center', icon: 'fa-calculator', section: 'OPERATIONS' },
      { id: 'general_ledger', label: 'General Ledger', icon: 'fa-book', section: 'OPERATIONS' },
      { id: 'cash_banking', label: 'Cash & Banking', icon: 'fa-money-bill-wave', section: 'OPERATIONS' },
      { id: 'payables', label: 'Payables Management', icon: 'fa-credit-card', section: 'OPERATIONS' },
      { id: 'receivables', label: 'Receivables Management', icon: 'fa-receipt', section: 'OPERATIONS' },
      { id: 'budgeting', label: 'Budgeting & Forecasting', icon: 'fa-chart-line', section: 'OPERATIONS' },
      { id: 'fixed_assets', label: 'Fixed Assets', icon: 'fa-building', section: 'OPERATIONS' },
      { id: 'financial_reports', label: 'Financial Reports', icon: 'fa-file-alt', section: 'OPERATIONS' },
      { id: 'fund_mgmt', label: 'Fund Management', icon: 'fa-chart-pie', section: 'OPERATIONS' },
      { id: 'stakeholder_mgmt', label: 'Stakeholder Management', icon: 'fa-users', section: 'OPERATIONS' },
      { id: 'investment_portfolio', label: 'Investment Portfolio Reports', icon: 'fa-chart-line', section: 'INVESTMENTS' },
      { id: 'equity_book', label: 'Equity Book Dashboard', icon: 'fa-chart-bar', section: 'INVESTMENTS' },
      { id: 'fixed_income', label: 'Fixed Income Dashboard', icon: 'fa-coins', section: 'INVESTMENTS' },
      { id: 'equity_management', label: 'Equity Management', icon: 'fa-chart-line', section: 'INVESTMENTS' },
      { id: 'bond_management', label: 'Bond Management', icon: 'fa-coins', section: 'INVESTMENTS' },
      // { id: 'real_estate_alt', label: 'Real Estate Alternatives', icon: 'fa-city', section: 'INVESTMENTS' },
      { id: 'pension_payroll', label: 'Pension Payroll', icon: 'fa-money-check-dollar', section: 'OPERATIONS' },
      { id: 'member_admin', label: 'Member Admin', icon: 'fa-users-gear', section: 'OPERATIONS' },
      { id: 'contribution_mgmt', label: 'Contribution Mgmt', icon: 'fa-hand-holding-dollar', section: 'OPERATIONS' },
      { id: 'contributions', label: 'Member Contributions', icon: 'fa-file-invoice-dollar', section: 'OPERATIONS' },
      { id: 'benefits', label: 'Benefits Management', icon: 'fa-gift', section: 'OPERATIONS' },
      { id: 'kyc', label: 'KYC Management', icon: 'fa-user-check', section: 'OPERATIONS' },
      { id: 'real_estate', label: 'Real Estate', icon: 'fa-building', section: 'OPERATIONS' },
      { id: 'property_management', label: 'Property Management', icon: 'fa-home', section: 'OPERATIONS' },
      // { id: 'lease_management', label: 'Lease Management', icon: 'fa-file-contract', section: 'OPERATIONS' },
      // { id: 'maintenance', label: 'Maintenance', icon: 'fa-tools', section: 'OPERATIONS' },
      { id: 'actuarial', label: 'Actuarial & Sustainability', icon: 'fa-chart-line', section: 'ANALYTICS' },
      { id: 'actuarial_valuation', label: 'Valuation Dashboard', icon: 'fa-calculator', section: 'ANALYTICS' },
      { id: 'actuarial_risk', label: 'Risk Analysis', icon: 'fa-exclamation-triangle', section: 'ANALYTICS' },
      { id: 'actuarial_contributions', label: 'Contributions & Benefits', icon: 'fa-hand-holding-dollar', section: 'ANALYTICS' },
      { id: 'actuarial_compliance', label: 'Data & Compliance', icon: 'fa-clipboard-check', section: 'ANALYTICS' },
      { id: 'web_portal', label: 'Web Portal Services', icon: 'fa-globe', section: 'SYSTEM' },
      { id: 'audit_trail', label: 'Audit Trail', icon: 'fa-clipboard-list', section: 'SYSTEM' },
    ];

    switch (role) {
      case 'ADMIN':
        return allItems; // Admin sees everything.
      case 'REAL_ESTATE':
        return allItems.filter(item => item.id === 'admin_dashboard' || item.id === 'real_estate' || item.id === 'property_management' || item.id === 'lease_management' || item.id === 'maintenance');
      case 'ACTUARIAL':
        return allItems.filter(item => item.id === 'admin_dashboard' || item.id === 'actuarial' || item.id === 'actuarial_valuation' || item.id === 'actuarial_risk' || item.id === 'actuarial_contributions' || item.id === 'actuarial_compliance');
      case 'FINANCE':
        return allItems.filter(item => 
          item.id !== 'admin_dashboard' &&
          item.id !== 'pension_operations' &&
          (item.id === 'accounting' || 
          item.id === 'general_ledger' || 
          item.id === 'cash_banking' || 
          item.id === 'payables' || 
          item.id === 'receivables' || 
          item.id === 'budgeting' || 
          item.id === 'fixed_assets' || 
          item.id === 'financial_reports')
        );
      case 'INVESTMENT':
        return allItems.filter(item => item.id === 'admin_dashboard' || item.id === 'fund_mgmt' || item.id === 'stakeholder_mgmt' || item.id === 'investment_portfolio' || item.id === 'equity_book' || item.id === 'fixed_income' || item.id === 'real_estate_alt' || item.id === 'bond_management' || item.id === 'equity_management');
      case 'OPERATIONS':
        return allItems.filter(item => item.id === 'admin_dashboard' || item.id === 'pension_operations' || item.id === 'contribution_mgmt' || item.id === 'contributions' || item.id === 'benefits' || item.id === 'kyc' || item.id === 'member_admin' || item.id === 'pension_payroll');
      case 'MEMBER_SERVICES':
        return allItems.filter(item => item.id === 'admin_dashboard' || item.id === 'web_portal');
      default:
        return [allItems[0]]; // Default to dashboard only
    }
  };

  const menuItems = getMenuItems(userRole);

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
        {(() => {
          const sections = ['MAIN', 'OPERATIONS', 'INVESTMENTS', 'ANALYTICS', 'SYSTEM'];
          return sections.map(section => {
            const sectionItems = menuItems.filter(item => item.section === section);
            if (sectionItems.length === 0) return null;
            
            return (
              <React.Fragment key={section}>
                {section !== 'MAIN' && (
                  <div className="text-xs uppercase text-white/70 font-semibold mb-2 mt-4">
                    {section}
                  </div>
                )}
                {sectionItems.map(item => (
                  <div
                    key={item.id}
                    className={`p-3 mb-2 rounded cursor-pointer flex items-center gap-3 ${
                      currentView === item.id ? 'bg-white/10' : ''
                    }`}
                    onClick={() => setView(item.id)}
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                    <span>{item.label}</span>
                  </div>
                ))}
              </React.Fragment>
            );
          });
        })()}
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
