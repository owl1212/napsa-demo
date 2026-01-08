import React, { useState } from 'react';
import Sidebar from './napsa/components/Sidebar';
import Header from './napsa/components/Header';
import DashboardView from './napsa/components/DashboardView';
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

const NapsaPrototype: React.FC = () => {
  const [view, setView] = useState('dashboard');

  const renderView = () => {
    switch (view) {
      case 'dashboard': return <DashboardView />;
      case 'accounting': return <AccountingView />;
      case 'fund_mgmt': return <FundMgmtView />;
      case 'pension_payroll': return <PensionPayrollView />;
      case 'member_admin': return <MemberAdminView />;
      case 'contribution_mgmt': return <ContributionMgmtView />;
      case 'web_portal': return <WebPortalView />;
      case 'member_home': return <MemberHomeView />;
      case 'benefits': return <BenefitsView />;
      case 'contributions': return <ContributionsView />;
      case 'kyc': return <KYCView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-bg-gray text-text-dark">
      <Sidebar currentView={view} setView={setView} />
      <div className="flex-1 ml-64">
        <Header />
        {renderView()}
      </div>
    </div>
  );
};

export default NapsaPrototype;