import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import AdminSidebar from './napsa/components/AdminSidebar';
import EmployeeSidebar from './napsa/components/EmployeeSidebar';
import Header from './napsa/components/Header';
import DashboardView from './napsa/components/DashboardView';
import AdminDashboardView from './napsa/components/AdminDashboardView';
import AccountingView from './napsa/components/AccountingView';
import FundMgmtView from './napsa/components/FundMgmtView';
import PensionPayrollView from './napsa/components/PensionPayrollView';
import MemberAdminView from './napsa/components/MemberAdminView';
import ContributionMgmtView from './napsa/components/ContributionMgmtView';
import WebPortalView from './napsa/components/WebPortalView';
import MemberHomeView from './napsa/components/MemberHomeView';
import BenefitsView from './napsa/components/BenefitsView';
import ContributionsView from './napsa/components/ContributionsView';
import KYCView from './napsa/components/KYCView';
import EmployerAccountsView from './napsa/components/EmployerAccountsView';
import AuditTrailView from './napsa/components/AuditTrailView';

const NapsaPrototype: React.FC = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'ADMIN';
  
  // Set default view based on role
  const defaultView = isAdmin ? 'admin_dashboard' : 'dashboard';
  const [view, setView] = useState(defaultView);

  // Reset to default view when role changes
  useEffect(() => {
    setView(defaultView);
  }, [user?.role]);

  const renderView = () => {
    // Admin views
    if (isAdmin) {
      switch (view) {
        case 'admin_dashboard': return <AdminDashboardView />;
        case 'accounting': return <AccountingView />;
        case 'fund_mgmt': return <FundMgmtView />;
        case 'pension_payroll': return <PensionPayrollView />;
        case 'member_admin': return <MemberAdminView />;
        case 'contribution_mgmt': return <ContributionMgmtView />;
        case 'web_portal': return <WebPortalView />;
        case 'employer_accounts': return <EmployerAccountsView />;
        case 'audit_trail': return <AuditTrailView />;
        default: return <AdminDashboardView />;
      }
    }
    
    // Employee views
    switch (view) {
      case 'dashboard': return <DashboardView />;
      case 'member_home': return <MemberHomeView />;
      case 'benefits': return <BenefitsView />;
      case 'contributions': return <ContributionsView />;
      case 'kyc': return <KYCView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-bg-gray text-text-dark">
      {isAdmin ? (
        <AdminSidebar currentView={view} setView={setView} />
      ) : (
        <EmployeeSidebar currentView={view} setView={setView} />
      )}
      <div className="flex-1 ml-64">
        <Header />
        {renderView()}
      </div>
    </div>
  );
};

export default NapsaPrototype;