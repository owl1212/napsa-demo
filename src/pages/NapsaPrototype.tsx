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
import RealEstateView from './napsa/components/RealEstateView';
import ActuarialView from './napsa/components/ActuarialView';
import PensionOperationsCommandCenter from './napsa/components/PensionOperationsCommandCenter';
import InvestmentPortfolioCommandCenter from './napsa/components/InvestmentPortfolioCommandCenter';
import EquityBookDashboard from './napsa/components/EquityBookDashboard';
import FixedIncomeDashboard from './napsa/components/FixedIncomeDashboard';
import RealEstateAlternativesDashboard from './napsa/components/RealEstateAlternativesDashboard';
import BondManagement from './napsa/components/BondManagement';
import EquityManagement from './napsa/components/EquityManagement';
import PlaceholderView from './napsa/components/PlaceholderView';

const NapsaPrototype: React.FC = () => {
  const { user } = useAuth();
  
  // Set default view based on role
  const getDefaultView = (role: string | null) => {
    switch (role) {
      case 'ADMIN': return 'admin_dashboard';
      case 'REAL_ESTATE': return 'real_estate';
      case 'ACTUARIAL': return 'actuarial';
      case 'FINANCE': return 'accounting';
      case 'INVESTMENT': return 'investment_portfolio';
      case 'OPERATIONS': return 'pension_operations';
      case 'MEMBER_SERVICES': return 'web_portal';
      default: return 'dashboard';
    }
  };
  
  const defaultView = getDefaultView(user?.role || null);
  const [view, setView] = useState(defaultView);

  // Reset to default view when role changes
  useEffect(() => {
    setView(getDefaultView(user?.role || null));
  }, [user?.role]);

  // Determine sidebar type based on role
  const adminRoles = ['ADMIN', 'REAL_ESTATE', 'ACTUARIAL', 'FINANCE', 'INVESTMENT', 'OPERATIONS', 'MEMBER_SERVICES'];
  const isAdmin = user && adminRoles.includes(user.role || '');

  const renderView = () => {
    if (user && adminRoles.includes(user.role || '')) {
      switch (view) {
        case 'admin_dashboard': return <AdminDashboardView />;
        case 'accounting': return <AccountingView view={view} />;
        case 'general_ledger': return <AccountingView view={view} />;
        case 'cash_banking': return <AccountingView view={view} />;
        case 'payables': return <AccountingView view={view} />;
        case 'receivables': return <AccountingView view={view} />;
        case 'budgeting': return <AccountingView view={view} />;
        case 'fixed_assets': return <AccountingView view={view} />;
        case 'financial_reports': return <AccountingView view={view} />;
        case 'fund_mgmt': return <FundMgmtView />;
        case 'pension_payroll': return <PensionPayrollView />;
        case 'member_admin': return <MemberAdminView />;
        case 'contribution_mgmt': return <ContributionMgmtView />;
        case 'contributions': return <ContributionsView />;
        case 'benefits': return <BenefitsView />;
        case 'kyc': return <KYCView />;
        case 'web_portal': return <WebPortalView />;
        case 'employer_accounts': return <EmployerAccountsView />;
        case 'audit_trail': return <AuditTrailView />;
        case 'real_estate': return <RealEstateView />;
        case 'actuarial': return <ActuarialView />;
        case 'pension_operations': return <PensionOperationsCommandCenter />;
        case 'investment_portfolio': return <InvestmentPortfolioCommandCenter />;
        case 'equity_book': return <EquityBookDashboard />;
        case 'fixed_income': return <FixedIncomeDashboard />;
        case 'real_estate_alt': return <RealEstateAlternativesDashboard />;
        case 'bond_management': return <BondManagement />;
        case 'equity_management': return <EquityManagement />;
        case 'compliance_audit': return <PlaceholderView title="Compliance & Audit" description="Comprehensive compliance monitoring and audit management system for regulatory adherence and internal controls." />;
        case 'risk_management': return <PlaceholderView title="Risk Management" description="Advanced risk assessment and management tools for pension fund operations and investment strategies." />;
        case 'regulatory_reporting': return <PlaceholderView title="Regulatory Reporting" description="Automated regulatory reporting system ensuring timely and accurate submissions to pension authorities." />;
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
        <AdminSidebar currentView={view} setView={setView} userRole={user?.role} />
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