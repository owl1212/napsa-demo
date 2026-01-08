import React, { useState } from 'react';

interface AuditEntry {
  id: string;
  timestamp: string;
  user: string;
  userRole: string;
  action: string;
  module: string;
  details: string;
  ipAddress: string;
  status: 'success' | 'failed' | 'warning';
  severity: 'info' | 'warning' | 'critical';
}

const AuditTrailView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<AuditEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDetailsModal = (entry: AuditEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEntry(null), 300);
  };

  // Mock audit data
  const auditEntries: AuditEntry[] = [
    {
      id: 'AUD-001234',
      timestamp: '2026-01-08 14:32:15',
      user: 'Admin User',
      userRole: 'System Administrator',
      action: 'Updated Member Record',
      module: 'Member Admin',
      details: 'Modified KYC status for member SSN: 113292218',
      ipAddress: '192.168.1.45',
      status: 'success',
      severity: 'info'
    },
    {
      id: 'AUD-001233',
      timestamp: '2026-01-08 14:28:42',
      user: 'Admin User',
      userRole: 'System Administrator',
      action: 'Processed Payment',
      module: 'Accounting',
      details: 'Approved pension payment batch #2401-089 totaling K 245,000',
      ipAddress: '192.168.1.45',
      status: 'success',
      severity: 'critical'
    },
    {
      id: 'AUD-001232',
      timestamp: '2026-01-08 14:15:23',
      user: 'Finance Manager',
      userRole: 'Finance Administrator',
      action: 'Failed Login Attempt',
      module: 'Authentication',
      details: 'Invalid credentials provided for user: finance@napsa.com',
      ipAddress: '192.168.1.78',
      status: 'failed',
      severity: 'warning'
    },
    {
      id: 'AUD-001231',
      timestamp: '2026-01-08 13:55:12',
      user: 'Admin User',
      userRole: 'System Administrator',
      action: 'Validated Contributions',
      module: 'Contribution Mgmt',
      details: 'Validated 45 employer contributions for December 2025',
      ipAddress: '192.168.1.45',
      status: 'success',
      severity: 'info'
    },
    {
      id: 'AUD-001230',
      timestamp: '2026-01-08 13:42:08',
      user: 'Operations Manager',
      userRole: 'Operations Administrator',
      action: 'Suspended Employer Account',
      module: 'Employer Management',
      details: 'Suspended employer TPIN: 1000345678 due to non-compliance',
      ipAddress: '192.168.1.92',
      status: 'success',
      severity: 'critical'
    },
    {
      id: 'AUD-001229',
      timestamp: '2026-01-08 13:30:45',
      user: 'Admin User',
      userRole: 'System Administrator',
      action: 'Exported Data',
      module: 'Member Admin',
      details: 'Exported 5,000 member records to CSV format',
      ipAddress: '192.168.1.45',
      status: 'success',
      severity: 'warning'
    },
    {
      id: 'AUD-001228',
      timestamp: '2026-01-08 12:18:33',
      user: 'System Administrator',
      userRole: 'System Administrator',
      action: 'Configuration Change',
      module: 'Web Portal Services',
      details: 'Updated portal maintenance schedule for January 15, 2026',
      ipAddress: '192.168.1.10',
      status: 'success',
      severity: 'warning'
    },
    {
      id: 'AUD-001227',
      timestamp: '2026-01-08 11:52:19',
      user: 'Admin User',
      userRole: 'System Administrator',
      action: 'Bulk Upload',
      module: 'Contribution Mgmt',
      details: 'Uploaded contribution file: contributions_dec2025.xlsx (124 records)',
      ipAddress: '192.168.1.45',
      status: 'success',
      severity: 'info'
    },
    {
      id: 'AUD-001226',
      timestamp: '2026-01-08 11:20:05',
      user: 'Payroll Admin',
      userRole: 'Payroll Administrator',
      action: 'Pension Payroll Run',
      module: 'Pension Payroll',
      details: 'Executed monthly pension payroll for 12,847 pensioners',
      ipAddress: '192.168.1.67',
      status: 'success',
      severity: 'critical'
    },
    {
      id: 'AUD-001225',
      timestamp: '2026-01-08 10:45:22',
      user: 'Admin User',
      userRole: 'System Administrator',
      action: 'Database Backup',
      module: 'System',
      details: 'Initiated scheduled database backup - completed successfully',
      ipAddress: '192.168.1.45',
      status: 'success',
      severity: 'info'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'info': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <i className="fa-solid fa-check-circle text-green-600"></i>;
      case 'failed': return <i className="fa-solid fa-times-circle text-red-600"></i>;
      case 'warning': return <i className="fa-solid fa-exclamation-triangle text-yellow-600"></i>;
      default: return <i className="fa-solid fa-circle text-gray-600"></i>;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-dark mb-2">Audit Trail</h1>
        <p className="text-text-muted">Complete system activity log and user action tracking</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-text-muted">Total Events Today</div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-list-check text-blue-600"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-text-dark">347</div>
          <div className="text-sm text-green-600 mt-1">
            <i className="fa-solid fa-arrow-up mr-1"></i>
            12% from yesterday
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-text-muted">Critical Actions</div>
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-shield-halved text-red-600"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-text-dark">28</div>
          <div className="text-sm text-red-600 mt-1">
            <i className="fa-solid fa-arrow-up mr-1"></i>
            5 in last hour
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-text-muted">Failed Operations</div>
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-triangle-exclamation text-yellow-600"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-text-dark">3</div>
          <div className="text-sm text-yellow-600 mt-1">
            Requires attention
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-text-muted">Active Users</div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-users text-green-600"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-text-dark">12</div>
          <div className="text-sm text-green-600 mt-1">
            Currently online
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-bold text-text-dark mb-4">Filters & Search</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input
              type="text"
              placeholder="Search by user, action, or details..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Module</label>
            <select 
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
            >
              <option value="">All Modules</option>
              <option value="accounting">Accounting</option>
              <option value="member_admin">Member Admin</option>
              <option value="contribution_mgmt">Contribution Mgmt</option>
              <option value="pension_payroll">Pension Payroll</option>
              <option value="employer_mgmt">Employer Management</option>
              <option value="fund_mgmt">Fund Management</option>
              <option value="web_portal">Web Portal Services</option>
              <option value="authentication">Authentication</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>
            <select 
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
            >
              <option value="">All Severities</option>
              <option value="info">Info</option>
              <option value="warning">Warning</option>
              <option value="critical">Critical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date From</label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date To</label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button className="px-4 py-2 bg-napsa-primary hover:bg-napsa-primary-dark text-white rounded-md transition-colors">
            <i className="fa-solid fa-search mr-2"></i>
            Apply Filters
          </button>
          <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors">
            <i className="fa-solid fa-rotate-right mr-2"></i>
            Reset
          </button>
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors ml-auto">
            <i className="fa-solid fa-download mr-2"></i>
            Export to CSV
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
            <i className="fa-solid fa-file-pdf mr-2"></i>
            Export to PDF
          </button>
        </div>
      </div>

      {/* Audit Log Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-text-dark">Audit Log Entries</h2>
            <div className="text-sm text-gray-600">
              Showing {auditEntries.length} of 2,847 entries
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <table className="w-full table-fixed">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-36">
                  Timestamp
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-40">
                  User
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-48">
                  Action
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-36">
                  Module
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                  Severity
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-20">
                  Status
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-20">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {auditEntries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="text-xs font-medium text-gray-900">{entry.timestamp.split(' ')[1]}</div>
                    <div className="text-xs text-gray-500">{entry.timestamp.split(' ')[0]}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-medium text-gray-900 truncate">{entry.user}</div>
                    <div className="text-xs text-gray-500 truncate">{entry.userRole}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-medium text-gray-900 truncate">{entry.action}</div>
                    <div className="text-xs text-gray-500">{entry.id}</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800 inline-block truncate max-w-full">
                      {entry.module}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900 truncate" title={entry.details}>
                      {entry.details}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(entry.severity)}`}>
                      {entry.severity.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    {getStatusIcon(entry.status)}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button 
                      onClick={() => openDetailsModal(entry)}
                      className="text-napsa-primary hover:text-napsa-primary-dark transition-colors"
                      title="View Details"
                    >
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">2,847</span> results
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-napsa-primary text-white rounded-md text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">...</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">285</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-lg font-bold text-text-dark mb-4">Recent Activity Timeline</h2>
        <div className="space-y-4">
          {auditEntries.slice(0, 5).map((entry, index) => (
            <div key={entry.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  entry.severity === 'critical' ? 'bg-red-100' :
                  entry.severity === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  <i className={`fa-solid ${
                    entry.severity === 'critical' ? 'fa-exclamation text-red-600' :
                    entry.severity === 'warning' ? 'fa-exclamation-triangle text-yellow-600' :
                    'fa-info text-blue-600'
                  }`}></i>
                </div>
                {index < 4 && <div className="w-0.5 flex-1 bg-gray-200 mt-2"></div>}
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900">{entry.action}</h3>
                  <span className="text-xs text-gray-500">{entry.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{entry.details}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span><i className="fa-solid fa-user mr-1"></i>{entry.user}</span>
                  <span><i className="fa-solid fa-cube mr-1"></i>{entry.module}</span>
                  <span><i className="fa-solid fa-network-wired mr-1"></i>{entry.ipAddress}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {isModalOpen && selectedEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-napsa-primary to-napsa-secondary p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Audit Entry Details</h2>
                  <p className="text-sm opacity-90">Complete information for audit ID: {selectedEntry.id}</p>
                </div>
                <button 
                  onClick={closeDetailsModal}
                  className="text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                  title="Close"
                >
                  <i className="fa-solid fa-times text-xl"></i>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
              {/* Status Banner */}
              <div className={`mb-6 p-4 rounded-lg border-l-4 ${
                selectedEntry.severity === 'critical' ? 'bg-red-50 border-red-500' :
                selectedEntry.severity === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                'bg-blue-50 border-blue-500'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">
                    {selectedEntry.severity === 'critical' ? '🚨' :
                     selectedEntry.severity === 'warning' ? '⚠️' : 'ℹ️'}
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-gray-900">{selectedEntry.action}</div>
                    <div className="text-sm text-gray-600">{selectedEntry.module}</div>
                  </div>
                  <div className="ml-auto">
                    {getStatusIcon(selectedEntry.status)}
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                    Timestamp
                  </label>
                  <div className="text-sm font-medium text-gray-900 bg-gray-50 p-3 rounded-md">
                    <i className="fa-solid fa-clock mr-2 text-gray-400"></i>
                    {selectedEntry.timestamp}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                    Audit ID
                  </label>
                  <div className="text-sm font-medium text-gray-900 bg-gray-50 p-3 rounded-md">
                    <i className="fa-solid fa-hashtag mr-2 text-gray-400"></i>
                    {selectedEntry.id}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                    User
                  </label>
                  <div className="text-sm font-medium text-gray-900 bg-gray-50 p-3 rounded-md">
                    <i className="fa-solid fa-user mr-2 text-gray-400"></i>
                    {selectedEntry.user}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                    User Role
                  </label>
                  <div className="text-sm font-medium text-gray-900 bg-gray-50 p-3 rounded-md">
                    <i className="fa-solid fa-user-tag mr-2 text-gray-400"></i>
                    {selectedEntry.userRole}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                    IP Address
                  </label>
                  <div className="text-sm font-medium text-gray-900 bg-gray-50 p-3 rounded-md">
                    <i className="fa-solid fa-network-wired mr-2 text-gray-400"></i>
                    {selectedEntry.ipAddress}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                    Module
                  </label>
                  <div className="text-sm font-medium text-gray-900 bg-gray-50 p-3 rounded-md">
                    <i className="fa-solid fa-cube mr-2 text-gray-400"></i>
                    {selectedEntry.module}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                    Severity Level
                  </label>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getSeverityColor(selectedEntry.severity)}`}>
                      {selectedEntry.severity.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                    Status
                  </label>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      selectedEntry.status === 'success' ? 'bg-green-100 text-green-800' :
                      selectedEntry.status === 'failed' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {selectedEntry.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Full Details */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                  Action Details
                </label>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm text-gray-900 leading-relaxed">{selectedEntry.details}</p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-info-circle text-blue-600 mt-1"></i>
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1">Audit Trail Information</p>
                    <p>This audit entry has been recorded in the system logs and is part of the permanent audit trail. All entries are immutable and retained according to regulatory compliance requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
              <button 
                onClick={closeDetailsModal}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors"
              >
                <i className="fa-solid fa-times mr-2"></i>
                Close
              </button>
              <button className="px-4 py-2 bg-napsa-primary hover:bg-napsa-primary-dark text-white rounded-md transition-colors">
                <i className="fa-solid fa-download mr-2"></i>
                Export Entry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditTrailView;
