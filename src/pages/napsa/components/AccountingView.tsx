import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Droplets, TrendingUp, Shield, Receipt } from 'lucide-react';
import JournalEntryModal from './modals/JournalEntryModal';

// Demo version - simplified for showcase
const AccountingView = ({ view }: { view: string }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [showJournalModal, setShowJournalModal] = useState(false);
  const [notification, setNotification] = useState('');

  const handleAction = (action: string) => {
    setNotification(`${action} initiated successfully!`);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleJournalEntrySubmit = (entry: any) => {
    // In a real app, this would send to API
    console.log('Journal Entry Submitted:', entry);
    setNotification(`Journal entry posted successfully! Reference: ${entry.reference}`);
    setTimeout(() => setNotification(''), 3000);
  };

  const openModal = (type: string) => {
    if (type === 'journal') {
      setShowJournalModal(true);
    } else {
      setModalType(type);
      setShowModal(true);
    }
  };

  const getTitle = (view: string) => {
    switch (view) {
      case 'accounting': return 'Finance, Treasury & Accounting Command Center';
      case 'general_ledger': return 'General Ledger Management';
      case 'cash_banking': return 'Cash & Banking Operations';
      case 'payables': return 'Accounts Payable Management';
      case 'receivables': return 'Accounts Receivable Management';
      case 'budgeting': return 'Budgeting & Forecasting';
      case 'fixed_assets': return 'Fixed Assets Management';
      case 'financial_reports': return 'Financial Reporting Center';
      default: return 'Accounting Dashboard';
    }
  };
  // Mock data for demo
  const cashAccounts = [
    { name: 'Zanaco Main', bank: 'Zanaco', ledger: 45200000, cleared: 45000000, difference: -200000 },
    { name: 'Stanbic Ops', bank: 'Stanbic', ledger: 28700000, cleared: 28700000, difference: 0 },
    { name: 'FNB Reserve', bank: 'FNB', ledger: 12100000, cleared: 12000000, difference: -100000 },
  ];

  const cashFlowData = [
    { period: 'Starting Cash', amount: 86000000 },
    { period: 'Inflows', amount: 12300000 },
    { period: 'Outflows', amount: -3200000 },
    { period: 'Ending Cash', amount: 95100000 },
  ];

  const budgetData = [
    { dept: 'IT', budgeted: 2500000, actual: 2100000 },
    { dept: 'Ops', budgeted: 8000000, actual: 8700000 },
    { dept: 'HR', budgeted: 2000000, actual: 1800000 },
  ];

  const commitmentData = [
    { name: 'Spent', value: 60, color: '#10B981' },
    { name: 'Committed', value: 25, color: '#F59E0B' },
    { name: 'Available', value: 15, color: '#EF4444' },
  ];

  const receivablesData = [
    { bucket: 'Current', amount: 2100000 },
    { bucket: '31-60', amount: 890000 },
    { bucket: '61-90', amount: 456000 },
    { bucket: '90+', amount: 234000 },
  ];

  const payablesData = [
    { bucket: 'Current', amount: 1800000 },
    { bucket: '31-60', amount: 723000 },
    { bucket: '61-90', amount: 345000 },
    { bucket: '90+', amount: 167000 },
  ];

  const renderContent = () => {
    switch (view) {
      case 'accounting':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-sm text-gray-600 mb-2">Total Assets</div>
                <div className="text-2xl font-bold text-blue-600">K 2.8B</div>
                <div className="text-xs text-green-600 mt-2">+5.2% from last month</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-sm text-gray-600 mb-2">Total Liabilities</div>
                <div className="text-2xl font-bold text-red-600">K 1.2B</div>
                <div className="text-xs text-red-600 mt-2">-2.1% from last month</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-sm text-gray-600 mb-2">Net Assets</div>
                <div className="text-2xl font-bold text-green-600">K 1.6B</div>
                <div className="text-xs text-green-600 mt-2">+8.3% from last month</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-sm text-gray-600 mb-2">Cash Position</div>
                <div className="text-2xl font-bold text-blue-600">K 86M</div>
                <div className="text-xs text-yellow-600 mt-2">Above buffer</div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4">Key Financial Ratios</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Current Ratio</span>
                    <span className="font-medium">2.34</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Debt-to-Equity</span>
                    <span className="font-medium">0.75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Return on Assets</span>
                    <span className="font-medium">7.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Liquidity Ratio</span>
                    <span className="font-medium">1.85</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4">Recent Accounting Activities</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <div className="text-sm font-medium">Month-end closing completed</div>
                      <div className="text-xs text-gray-600">January 2026 - All accounts reconciled</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <div className="text-sm font-medium">Journal entries posted</div>
                      <div className="text-xs text-gray-600">47 entries processed today</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <div className="text-sm font-medium">Bank reconciliation pending</div>
                      <div className="text-xs text-gray-600">3 accounts require attention</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button onClick={() => openModal('journal')} className="p-4 border border-border-color rounded-lg hover:bg-accent-gold hover:border-accent-gold hover:text-primary-navy text-center transition-colors">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-sm font-medium">New Journal Entry</div>
                </button>
                <button onClick={() => openModal('payment')} className="p-4 border border-border-color rounded-lg hover:bg-accent-gold hover:border-accent-gold hover:text-primary-navy text-center transition-colors">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="text-sm font-medium">Process Payment</div>
                </button>
                <button onClick={() => openModal('reconcile')} className="p-4 border border-border-color rounded-lg hover:bg-accent-gold hover:border-accent-gold hover:text-primary-navy text-center transition-colors">
                  <div className="text-2xl mb-2">📈</div>
                  <div className="text-sm font-medium">Bank Reconciliation</div>
                </button>
                <button onClick={() => openModal('report')} className="p-4 border border-border-color rounded-lg hover:bg-accent-gold hover:border-accent-gold hover:text-primary-navy text-center transition-colors">
                  <div className="text-2xl mb-2">📋</div>
                  <div className="text-sm font-medium">Generate Report</div>
                </button>
              </div>
            </div>
          </div>
        );
      case 'general_ledger':
        return (
          <div className="space-y-6">
            <div className="flex gap-4 mb-6">
              <button onClick={() => openModal('journal')} className="bg-primary-navy text-white px-6 py-2 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors">
                + New Journal Entry
              </button>
              <button onClick={() => openModal('account')} className="bg-accent-blue text-white px-6 py-2 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors">
                + Create Account
              </button>
              <button onClick={() => handleAction('Trial Balance report generated successfully')} className="border border-border-color px-6 py-2 rounded-lg hover:bg-bg-gray transition-colors">
                Generate Trial Balance
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Ledger Accounts Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1,247</div>
                  <div className="text-sm text-gray-600">Active Accounts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">K 2.8B</div>
                  <div className="text-sm text-gray-600">Total Assets</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">K 1.2B</div>
                  <div className="text-sm text-gray-600">Total Liabilities</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Recent Journal Entries</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-2">Date</th>
                    <th className="text-left pb-2">Description</th>
                    <th className="text-right pb-2">Debit</th>
                    <th className="text-right pb-2">Credit</th>
                    <th className="text-right pb-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td>2026-01-08</td>
                    <td>Contribution Received</td>
                    <td className="text-right">K 150,000</td>
                    <td></td>
                    <td className="text-right">
                      <button onClick={() => handleAction('Journal entry for Contribution Received opened for editing')} className="text-accent-blue text-xs mr-2 hover:underline">Edit</button>
                      <button onClick={() => handleAction('Reversing journal entry created for K 150,000 contribution')} className="text-accent-red text-xs hover:underline">Reverse</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td>2026-01-08</td>
                    <td>Investment Income</td>
                    <td></td>
                    <td className="text-right">K 75,000</td>
                    <td className="text-right">
                      <button onClick={() => handleAction('Journal entry for Investment Income opened for editing')} className="text-accent-blue text-xs mr-2 hover:underline">Edit</button>
                      <button onClick={() => handleAction('Reversing journal entry created for K 75,000 investment income')} className="text-accent-red text-xs hover:underline">Reverse</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td>2026-01-07</td>
                    <td>Benefit Payment</td>
                    <td></td>
                    <td className="text-right">K 200,000</td>
                    <td className="text-right">
                      <button onClick={() => handleAction('Journal entry for Benefit Payment opened for editing')} className="text-accent-blue text-xs mr-2 hover:underline">Edit</button>
                      <button onClick={() => handleAction('Reversing journal entry created for K 200,000 benefit payment')} className="text-accent-red text-xs hover:underline">Reverse</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'cash_banking':
        return (
          <div className="space-y-6">
            <div className="flex gap-4 mb-6">
              <button onClick={() => openModal('transfer')} className="bg-primary-navy text-white px-6 py-2 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors">
                + New Transfer
              </button>
              <button onClick={() => openModal('deposit')} className="bg-accent-blue text-white px-6 py-2 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors">
                Record Deposit
              </button>
              <button onClick={() => openModal('withdrawal')} className="border border-border-color px-6 py-2 rounded-lg hover:bg-bg-gray transition-colors">
                Record Withdrawal
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Bank Account Balances</h2>
              <div className="space-y-4">
                {cashAccounts.map((acc, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                    <div>
                      <div className="font-medium">{acc.name}</div>
                      <div className="text-sm text-gray-600">{acc.bank}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">K {(acc.ledger / 1000000).toFixed(1)}M</div>
                      <div className="flex gap-2 mt-1">
                        <button onClick={() => openModal('reconcile')} className="text-sm text-accent-blue hover:underline">Reconcile</button>
                        <button onClick={() => handleAction(`${acc.name} statement downloaded for current month`)} className="text-sm text-accent-gold hover:underline">Download</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Cash Flow Projections</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={cashFlowData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      case 'payables':
        return (
          <div className="space-y-6">
            <div className="flex gap-4 mb-6">
              <button onClick={() => openModal('payment')} className="bg-primary-navy text-white px-6 py-2 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors">
                + New Payment Voucher
              </button>
              <button onClick={() => openModal('vendor')} className="bg-accent-blue text-white px-6 py-2 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors">
                + Add Vendor
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Accounts Payable Aging</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={payablesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="bucket" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Pending Payments</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded hover:bg-yellow-100 transition-colors">
                  <div>
                    <div className="font-medium">PV-2026-00125</div>
                    <div className="text-sm text-gray-600">Consulting Services - K 89,450</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Awaiting Approval</span>
                    <button onClick={() => handleAction('PV-2026-00125 approved for K 89,450 payment to consultant')} className="text-xs bg-accent-blue text-white px-3 py-1 rounded hover:bg-primary-navy transition-colors">Approve</button>
                    <button onClick={() => handleAction('PV-2026-00125 rejected and returned to originator for revision')} className="text-xs bg-accent-red text-white px-3 py-1 rounded hover:bg-red-700 transition-colors">Reject</button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded hover:bg-blue-100 transition-colors">
                  <div>
                    <div className="font-medium">PV-2026-00126</div>
                    <div className="text-sm text-gray-600">Office Supplies - K 45,670</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Approved</span>
                    <button onClick={() => handleAction('PV-2026-00126 processed - K 45,670 paid to supplier')} className="text-xs bg-accent-gold text-primary-navy px-3 py-1 rounded hover:bg-primary-navy hover:text-white transition-colors">Process</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'receivables':
        return (
          <div className="space-y-6">
            <div className="flex gap-4 mb-6">
              <button onClick={() => openModal('invoice')} className="bg-primary-navy text-white px-6 py-2 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors">
                + New Invoice
              </button>
              <button onClick={() => handleAction('Reminder letters sent to all employers with 60+ days outstanding balances')} className="bg-accent-gold text-primary-navy px-6 py-2 rounded-lg hover:bg-primary-navy hover:text-white transition-colors">
                Send Reminders
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Accounts Receivable Aging</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={receivablesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="bucket" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#F59E0B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Outstanding Invoices</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded hover:bg-red-100 transition-colors">
                  <div>
                    <div className="font-medium">Employer ABC Ltd</div>
                    <div className="text-sm text-gray-600">Contribution Arrears - K 234,000</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">90+ days</span>
                    <button onClick={() => handleAction('Legal action initiated against Employer ABC Ltd for K 234,000 arrears')} className="text-xs bg-accent-red text-white px-3 py-1 rounded hover:bg-red-700 transition-colors">Legal Action</button>
                    <button onClick={() => handleAction('Final demand notice sent to Employer ABC Ltd')} className="text-xs bg-accent-gold text-primary-navy px-3 py-1 rounded hover:bg-primary-navy hover:text-white transition-colors">Send Reminder</button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded hover:bg-yellow-100 transition-colors">
                  <div>
                    <div className="font-medium">XYZ Corporation</div>
                    <div className="text-sm text-gray-600">Contribution Arrears - K 456,000</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">61-90 days</span>
                    <button onClick={() => handleAction('6-month payment plan created for XYZ Corporation - K 456,000')} className="text-xs bg-accent-blue text-white px-3 py-1 rounded hover:bg-primary-navy transition-colors">Payment Plan</button>
                    <button onClick={() => handleAction('Payment reminder sent to XYZ Corporation')} className="text-xs bg-accent-gold text-primary-navy px-3 py-1 rounded hover:bg-primary-navy hover:text-white transition-colors">Send Reminder</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'budgeting':
        return (
          <div className="space-y-6">
            <div className="flex gap-4 mb-6">
              <button onClick={() => openModal('budget')} className="bg-primary-navy text-white px-6 py-2 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors">
                + Create Budget
              </button>
              <button onClick={() => openModal('forecast')} className="bg-accent-blue text-white px-6 py-2 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors">
                Generate Forecast
              </button>
              <button onClick={() => handleAction('Budget revision workflow initiated for fiscal year 2026')} className="border border-border-color px-6 py-2 rounded-lg hover:bg-bg-gray transition-colors">
                Revise Budget
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Budget vs Actual Performance</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={budgetData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dept" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="budgeted" fill="#E5E7EB" />
                  <Bar dataKey="actual" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Budget Alerts</h2>
              <div className="space-y-2">
                <div className="p-3 bg-red-50 border-l-4 border-red-500">
                  <div className="font-medium text-red-800">Operations Department</div>
                  <div className="text-sm text-red-600">9% over budget - Action required</div>
                </div>
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                  <div className="font-medium text-yellow-800">IT Department</div>
                  <div className="text-sm text-yellow-600">84% utilization - Monitor closely</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'fixed_assets':
        return (
          <div className="space-y-6">
            <div className="flex gap-4 mb-6">
              <button onClick={() => openModal('asset')} className="bg-primary-navy text-white px-6 py-2 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors">
                + Register Asset
              </button>
              <button onClick={() => openModal('disposal')} className="bg-accent-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Asset Disposal
              </button>
              <button onClick={() => openModal('revaluation')} className="border border-border-color px-6 py-2 rounded-lg hover:bg-bg-gray transition-colors">
                Schedule Revaluation
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Asset Portfolio Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">125</div>
                  <div className="text-sm text-gray-600">Total Assets</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">K 282M</div>
                  <div className="text-sm text-gray-600">Net Book Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">K 5.2M</div>
                  <div className="text-sm text-gray-600">Monthly Depreciation</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Assets Requiring Attention</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded hover:bg-yellow-100 transition-colors">
                  <div>
                    <div className="font-medium">Property Portfolio</div>
                    <div className="text-sm text-gray-600">Due for revaluation</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Q2 2026</span>
                    <button onClick={() => handleAction('Property Portfolio revaluation scheduled for April 2026')} className="text-xs bg-accent-blue text-white px-3 py-1 rounded hover:bg-primary-navy transition-colors">Schedule</button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded hover:bg-red-100 transition-colors">
                  <div>
                    <div className="font-medium">IT Infrastructure</div>
                    <div className="text-sm text-gray-600">Insurance renewal due</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Overdue</span>
                    <button onClick={() => handleAction('IT Infrastructure insurance policy renewed for 12 months')} className="text-xs bg-accent-red text-white px-3 py-1 rounded hover:bg-red-700 transition-colors">Renew Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'financial_reports':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Available Reports</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onClick={() => handleAction('Balance Sheet generated for Dec 31, 2025 - Total Assets: K 2.8B')} className="p-4 border border-border-color rounded-lg hover:bg-accent-gold hover:border-accent-gold text-left transition-colors">
                  <div className="font-medium">Balance Sheet</div>
                  <div className="text-sm text-gray-600">As of December 31, 2025</div>
                  <div className="text-xs text-accent-blue mt-2">Click to generate</div>
                </button>
                <button onClick={() => handleAction('Income Statement generated for Q4 2025 - Net Income: K 125M')} className="p-4 border border-border-color rounded-lg hover:bg-accent-gold hover:border-accent-gold text-left transition-colors">
                  <div className="font-medium">Income Statement</div>
                  <div className="text-sm text-gray-600">Q4 2025</div>
                  <div className="text-xs text-accent-blue mt-2">Click to generate</div>
                </button>
                <button onClick={() => handleAction('Cash Flow Statement generated - Operating Activities: K 86M')} className="p-4 border border-border-color rounded-lg hover:bg-accent-gold hover:border-accent-gold text-left transition-colors">
                  <div className="font-medium">Cash Flow Statement</div>
                  <div className="text-sm text-gray-600">Monthly Report</div>
                  <div className="text-xs text-accent-blue mt-2">Click to generate</div>
                </button>
                <button onClick={() => handleAction('Budget Variance Report generated - 3 departments flagged')} className="p-4 border border-border-color rounded-lg hover:bg-accent-gold hover:border-accent-gold text-left transition-colors">
                  <div className="font-medium">Budget Variance Report</div>
                  <div className="text-sm text-gray-600">YTD Analysis</div>
                  <div className="text-xs text-accent-blue mt-2">Click to generate</div>
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Recent Reports Generated</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <div>
                    <div className="font-medium">Monthly Financial Report</div>
                    <div className="text-sm text-gray-600">Generated on Jan 5, 2026</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleAction('Monthly Financial Report downloaded as PDF')} className="text-sm text-accent-blue hover:underline">Download</button>
                    <button onClick={() => handleAction('Monthly Financial Report shared with Finance Committee')} className="text-sm text-accent-gold hover:underline">Share</button>
                    <button onClick={() => handleAction('Monthly Financial Report sent to printer')} className="text-sm text-text-gray hover:underline">Print</button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <div>
                    <div className="font-medium">Budget Performance Q4</div>
                    <div className="text-sm text-gray-600">Generated on Dec 31, 2025</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleAction('Budget Performance Q4 downloaded as Excel')} className="text-sm text-accent-blue hover:underline">Download</button>
                    <button onClick={() => handleAction('Budget Performance Q4 shared with Department Heads')} className="text-sm text-accent-gold hover:underline">Share</button>
                    <button onClick={() => handleAction('Budget Performance Q4 sent to printer')} className="text-sm text-text-gray hover:underline">Print</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="text-center py-8">Select a finance module from the sidebar.</div>;
    }
  };

  const renderModal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
          <h3 className="text-lg font-semibold mb-4">{modalType === 'journal' ? 'New Journal Entry' : modalType === 'payment' ? 'Process Payment' : modalType === 'reconcile' ? 'Bank Reconciliation' : modalType === 'report' ? 'Generate Report' : modalType === 'transfer' ? 'New Transfer' : modalType === 'deposit' ? 'Record Deposit' : modalType === 'withdrawal' ? 'Record Withdrawal' : modalType === 'vendor' ? 'Add Vendor' : modalType === 'invoice' ? 'New Invoice' : modalType === 'budget' ? 'Create Budget' : modalType === 'forecast' ? 'Generate Forecast' : modalType === 'asset' ? 'Register Asset' : modalType === 'disposal' ? 'Asset Disposal' : modalType === 'revaluation' ? 'Schedule Revaluation' : modalType === 'account' ? 'Create Account' : 'Action'}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter description" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Amount</label>
              <input type="text" className="w-full border rounded px-3 py-2" placeholder="K 0.00" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input type="date" className="w-full border rounded px-3 py-2" />
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={() => { handleAction(`${modalType.charAt(0).toUpperCase() + modalType.slice(1)} transaction recorded successfully`); setShowModal(false); }} className="flex-1 bg-primary-navy text-white py-2 rounded hover:bg-accent-gold hover:text-primary-navy transition-colors">Submit</button>
              <button onClick={() => setShowModal(false)} className="flex-1 border border-border-color py-2 rounded hover:bg-bg-gray transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 max-w-7xl w-full">
      {notification && (
        <div className="fixed top-4 right-4 bg-accent-gold text-primary-navy px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in font-semibold">
          ✓ {notification}
        </div>
      )}  
      <div className="text-xs text-text-gray mb-6">Operations &gt; Accounting</div>
      <h1 className="text-2xl font-bold text-text-dark mb-8">{getTitle(view)}</h1>
      {renderContent()}
      {renderModal()}
      <JournalEntryModal
        isOpen={showJournalModal}
        onClose={() => setShowJournalModal(false)}
        onSubmit={handleJournalEntrySubmit}
      />
    </div>
  );
};

export default AccountingView;