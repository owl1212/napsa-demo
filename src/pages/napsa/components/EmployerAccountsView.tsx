import React, { useState } from 'react';

// Mock data for realistic prototyping
const mockEmployers = [
  {
    id: 'EMP-001234',
    name: 'Zambia Mining Corporation',
    tpin: '1000123456',
    industry: 'Mining',
    employees: 1247,
    activeEmployees: 1210,
    lastContribution: 'Dec 2025',
    totalContributions: 'K 2,847,650.00',
    status: 'Active',
    registrationDate: '2015-03-15',
    email: 'hr@zambianmining.co.zm',
    phone: '+260 211 234 567',
    address: 'Plot 123, Industrial Road, Lusaka',
    contactPerson: 'John Mwansa',
    arrears: 'K 0.00',
  },
  {
    id: 'EMP-002567',
    name: 'National Breweries Ltd',
    tpin: '1000234567',
    industry: 'Manufacturing',
    employees: 892,
    activeEmployees: 892,
    lastContribution: 'Dec 2025',
    totalContributions: 'K 1,956,780.00',
    status: 'Active',
    registrationDate: '2016-07-22',
    email: 'payroll@nationalbreweries.zm',
    phone: '+260 211 345 678',
    address: 'Plot 456, Cairo Road, Lusaka',
    contactPerson: 'Sarah Banda',
    arrears: 'K 0.00',
  },
  {
    id: 'EMP-003891',
    name: 'Agro Supplies Company',
    tpin: '1000345678',
    industry: 'Agriculture',
    employees: 456,
    activeEmployees: 421,
    lastContribution: 'Nov 2025',
    totalContributions: 'K 987,450.00',
    status: 'Suspended',
    registrationDate: '2018-01-10',
    email: 'accounts@agrosupplies.co.zm',
    phone: '+260 211 456 789',
    address: 'Plot 789, Great East Road, Lusaka',
    contactPerson: 'Peter Phiri',
    arrears: 'K 45,670.00',
  },
  {
    id: 'EMP-004512',
    name: 'Lusaka City Council',
    tpin: '1000456789',
    industry: 'Government',
    employees: 2134,
    activeEmployees: 2089,
    lastContribution: 'Dec 2025',
    totalContributions: 'K 5,234,890.00',
    status: 'Active',
    registrationDate: '2012-05-01',
    email: 'hr@lcc.gov.zm',
    phone: '+260 211 567 890',
    address: 'City Hall, Freedom Way, Lusaka',
    contactPerson: 'Grace Mulenga',
    arrears: 'K 0.00',
  },
  {
    id: 'EMP-005623',
    name: 'Tech Solutions Zambia',
    tpin: '1000567890',
    industry: 'Services',
    employees: 78,
    activeEmployees: 78,
    lastContribution: 'Dec 2025',
    totalContributions: 'K 234,560.00',
    status: 'Active',
    registrationDate: '2020-11-15',
    email: 'hr@techsolutions.zm',
    phone: '+260 211 678 901',
    address: 'Plot 234, Addis Ababa Drive, Lusaka',
    contactPerson: 'David Tembo',
    arrears: 'K 0.00',
  },
  {
    id: 'EMP-006734',
    name: 'Shoprite Zambia Ltd',
    tpin: '1000678901',
    industry: 'Retail',
    employees: 3456,
    activeEmployees: 3401,
    lastContribution: 'Dec 2025',
    totalContributions: 'K 8,765,432.00',
    status: 'Active',
    registrationDate: '2010-02-20',
    email: 'payroll@shoprite.zm',
    phone: '+260 211 789 012',
    address: 'Plot 567, Manda Hill, Lusaka',
    contactPerson: 'Mary Chishimba',
    arrears: 'K 0.00',
  },
  {
    id: 'EMP-007845',
    name: 'Zambeef Products PLC',
    tpin: '1000789012',
    industry: 'Agriculture',
    employees: 1567,
    activeEmployees: 1523,
    lastContribution: 'Dec 2025',
    totalContributions: 'K 3,456,789.00',
    status: 'Active',
    registrationDate: '2013-08-12',
    email: 'hr@zambeef.co.zm',
    phone: '+260 211 890 123',
    address: 'Plot 890, Kafue Road, Lusaka',
    contactPerson: 'James Nkhoma',
    arrears: 'K 0.00',
  },
  {
    id: 'EMP-008956',
    name: 'Maamba Collieries Limited',
    tpin: '1000890123',
    industry: 'Mining',
    employees: 987,
    activeEmployees: 956,
    lastContribution: 'Oct 2025',
    totalContributions: 'K 2,345,678.00',
    status: 'Ceased',
    registrationDate: '2014-06-30',
    email: 'payroll@maamba.co.zm',
    phone: '+260 213 901 234',
    address: 'Maamba, Southern Province',
    contactPerson: 'Isaac Mwale',
    arrears: 'K 123,450.00',
  },
];

const EmployerAccountsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [selectedEmployer, setSelectedEmployer] = useState<typeof mockEmployers[0] | null>(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter employers based on search and filters
  const filteredEmployers = mockEmployers.filter(emp => {
    const matchesSearch = searchTerm === '' || 
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.tpin.includes(searchTerm) ||
      emp.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === '' || emp.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesIndustry = industryFilter === '' || emp.industry.toLowerCase() === industryFilter.toLowerCase();
    
    return matchesSearch && matchesStatus && matchesIndustry;
  });

  // Pagination
  const totalPages = Math.ceil(filteredEmployers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEmployers = filteredEmployers.slice(startIndex, startIndex + itemsPerPage);

  // Stats calculations
  const totalEmployers = mockEmployers.length;
  const activeEmployers = mockEmployers.filter(e => e.status === 'Active').length;
  const suspendedEmployers = mockEmployers.filter(e => e.status === 'Suspended').length;
  const ceasedEmployers = mockEmployers.filter(e => e.status === 'Ceased').length;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-dark mb-2">Employer Accounts</h1>
        <p className="text-text-muted">Manage employer registrations and accounts</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-text-muted">Total Employers</div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-briefcase text-blue-600"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-text-dark">{totalEmployers}</div>
          <div className="text-xs text-text-muted mt-1">Registered accounts</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-text-muted">Active</div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-check-circle text-green-600"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-text-dark">{activeEmployers}</div>
          <div className="text-xs text-success-green mt-1">↑ 12 this month</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-text-muted">Suspended</div>
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-pause-circle text-yellow-600"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-text-dark">{suspendedEmployers}</div>
          <div className="text-xs text-text-muted mt-1">Pending resolution</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-text-muted">Ceased</div>
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-ban text-red-600"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-text-dark">{ceasedEmployers}</div>
          <div className="text-xs text-accent-red mt-1">Operations ended</div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <button 
            onClick={() => setShowRegisterModal(true)}
            className="px-4 py-2 bg-napsa-primary hover:bg-napsa-primary-dark text-white rounded-md transition-colors"
          >
            <i className="fa-solid fa-plus mr-2"></i>
            Register New Employer
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
            <i className="fa-solid fa-file-import mr-2"></i>
            Attach Existing Account
          </button>
          <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors">
            <i className="fa-solid fa-upload mr-2"></i>
            Bulk Upload
          </button>
          <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors ml-auto">
            <i className="fa-solid fa-download mr-2"></i>
            Export Data
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Search by employer name, TPIN, or registration number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
            />
          </div>
          <div>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
              aria-label="Filter by status"
            >
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
              <option value="ceased">Ceased</option>
            </select>
          </div>
          <div>
            <select 
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
              aria-label="Filter by industry"
            >
              <option value="">All Industries</option>
              <option value="mining">Mining</option>
              <option value="agriculture">Agriculture</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="services">Services</option>
              <option value="government">Government</option>
            </select>
          </div>
        </div>
        {(searchTerm || statusFilter || industryFilter) && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-text-muted">Active filters:</span>
            {searchTerm && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-2">
                Search: {searchTerm}
                <button onClick={() => setSearchTerm('')} className="hover:text-blue-900" aria-label="Clear search filter">
                  <i className="fa-solid fa-times"></i>
                </button>
              </span>
            )}
            {statusFilter && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center gap-2">
                Status: {statusFilter}
                <button onClick={() => setStatusFilter('')} className="hover:text-green-900" aria-label="Clear status filter">
                  <i className="fa-solid fa-times"></i>
                </button>
              </span>
            )}
            {industryFilter && (
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm flex items-center gap-2">
                Industry: {industryFilter}
                <button onClick={() => setIndustryFilter('')} className="hover:text-purple-900" aria-label="Clear industry filter">
                  <i className="fa-solid fa-times"></i>
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Employer List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-text-dark">Employer Registry</h2>
          <p className="text-sm text-text-muted mt-1">
            Showing {filteredEmployers.length} employer{filteredEmployers.length !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employer Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  TPIN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Industry
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employees
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Contribution
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedEmployers.length > 0 ? (
                paginatedEmployers.map((employer) => (
                  <tr key={employer.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{employer.name}</div>
                      <div className="text-sm text-gray-500">Registration: {employer.id}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{employer.tpin}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-800">
                        {employer.industry}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{employer.employees}</div>
                      <div className="text-xs text-gray-500">{employer.activeEmployees} active</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{employer.lastContribution}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        employer.status === 'Active' 
                          ? 'bg-green-100 text-green-800'
                          : employer.status === 'Suspended'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {employer.status}
                      </span>
                      {employer.arrears !== 'K 0.00' && (
                        <div className="text-xs text-red-600 mt-1">Arrears: {employer.arrears}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button 
                        onClick={() => setSelectedEmployer(employer)}
                        className="text-napsa-primary hover:text-napsa-primary-dark mr-3"
                        title="View Details"
                      >
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button 
                        className="text-blue-600 hover:text-blue-800 mr-3"
                        title="Edit"
                      >
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      {employer.status === 'Suspended' ? (
                        <button 
                          className="text-green-600 hover:text-green-800"
                          title="Activate"
                        >
                          <i className="fa-solid fa-check-circle"></i>
                        </button>
                      ) : employer.status === 'Active' ? (
                        <button 
                          className="text-red-600 hover:text-red-800"
                          title="Suspend"
                        >
                          <i className="fa-solid fa-ban"></i>
                        </button>
                      ) : null}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center">
                    <div className="text-gray-400">
                      <i className="fa-solid fa-inbox text-4xl mb-2"></i>
                      <p className="text-lg">No employers found</p>
                      <p className="text-sm">Try adjusting your search or filters</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {filteredEmployers.length > 0 && (
          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
              <span className="font-medium">{Math.min(startIndex + itemsPerPage, filteredEmployers.length)}</span> of{' '}
              <span className="font-medium">{filteredEmployers.length}</span> results
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    currentPage === page
                      ? 'bg-napsa-primary text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Employer Detail Modal */}
      {selectedEmployer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-text-dark">{selectedEmployer.name}</h2>
                <p className="text-sm text-text-muted mt-1">Registration: {selectedEmployer.id}</p>
              </div>
              <button 
                onClick={() => setSelectedEmployer(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
                aria-label="Close details"
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            
            <div className="p-6">
              {/* Status Badge */}
              <div className="mb-6">
                <span className={`px-4 py-2 text-sm font-semibold rounded-full ${
                  selectedEmployer.status === 'Active' 
                    ? 'bg-green-100 text-green-800'
                    : selectedEmployer.status === 'Suspended'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  <i className={`fa-solid ${
                    selectedEmployer.status === 'Active' 
                      ? 'fa-check-circle'
                      : selectedEmployer.status === 'Suspended'
                      ? 'fa-pause-circle'
                      : 'fa-ban'
                  } mr-2`}></i>
                  {selectedEmployer.status}
                </span>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-600 font-medium mb-1">Total Employees</div>
                  <div className="text-2xl font-bold text-blue-900">{selectedEmployer.employees}</div>
                  <div className="text-xs text-blue-600 mt-1">{selectedEmployer.activeEmployees} active</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm text-green-600 font-medium mb-1">Total Contributions</div>
                  <div className="text-2xl font-bold text-green-900">{selectedEmployer.totalContributions}</div>
                  <div className="text-xs text-green-600 mt-1">Lifetime</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-sm text-purple-600 font-medium mb-1">Last Contribution</div>
                  <div className="text-2xl font-bold text-purple-900">{selectedEmployer.lastContribution}</div>
                  <div className="text-xs text-purple-600 mt-1">Monthly</div>
                </div>
                <div className={`${selectedEmployer.arrears !== 'K 0.00' ? 'bg-red-50' : 'bg-gray-50'} rounded-lg p-4`}>
                  <div className={`text-sm ${selectedEmployer.arrears !== 'K 0.00' ? 'text-red-600' : 'text-gray-600'} font-medium mb-1`}>Arrears</div>
                  <div className={`text-2xl font-bold ${selectedEmployer.arrears !== 'K 0.00' ? 'text-red-900' : 'text-gray-900'}`}>
                    {selectedEmployer.arrears}
                  </div>
                  <div className={`text-xs ${selectedEmployer.arrears !== 'K 0.00' ? 'text-red-600' : 'text-gray-600'} mt-1`}>
                    {selectedEmployer.arrears !== 'K 0.00' ? 'Outstanding' : 'No arrears'}
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-text-dark mb-4">Company Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-text-muted">TPIN</label>
                      <div className="text-base text-text-dark">{selectedEmployer.tpin}</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-muted">Industry</label>
                      <div className="text-base text-text-dark">{selectedEmployer.industry}</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-muted">Registration Date</label>
                      <div className="text-base text-text-dark">
                        {new Date(selectedEmployer.registrationDate).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-muted">Address</label>
                      <div className="text-base text-text-dark">{selectedEmployer.address}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-dark mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-text-muted">Contact Person</label>
                      <div className="text-base text-text-dark">{selectedEmployer.contactPerson}</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-muted">Email</label>
                      <div className="text-base text-text-dark">{selectedEmployer.email}</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-muted">Phone</label>
                      <div className="text-base text-text-dark">{selectedEmployer.phone}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-3">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                  <i className="fa-solid fa-edit mr-2"></i>
                  Edit Information
                </button>
                <button className="px-4 py-2 bg-napsa-primary hover:bg-napsa-primary-dark text-white rounded-md transition-colors">
                  <i className="fa-solid fa-users mr-2"></i>
                  View Employees
                </button>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
                  <i className="fa-solid fa-money-bill mr-2"></i>
                  View Contributions
                </button>
                {selectedEmployer.status === 'Suspended' && (
                  <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors ml-auto">
                    <i className="fa-solid fa-check-circle mr-2"></i>
                    Activate Account
                  </button>
                )}
                {selectedEmployer.status === 'Active' && (
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors ml-auto">
                    <i className="fa-solid fa-ban mr-2"></i>
                    Suspend Account
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Register New Employer Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-text-dark">Register New Employer</h2>
                <p className="text-sm text-text-muted mt-1">Complete the form to register a new employer account</p>
              </div>
              <button 
                onClick={() => setShowRegisterModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
                aria-label="Close registration form"
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            
            <div className="p-6">
              <form className="space-y-6">
                {/* Company Information Section */}
                <div>
                  <h3 className="text-lg font-semibold text-text-dark mb-4">Company Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        TPIN <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
                        placeholder="1000123456"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Industry <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent" aria-label="Select industry">
                        <option value="">Select Industry</option>
                        <option value="mining">Mining</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                        <option value="services">Services</option>
                        <option value="government">Government</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Business Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
                        placeholder="Plot number, street, city"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div>
                  <h3 className="text-lg font-semibold text-text-dark mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Contact Person Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Position/Title <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
                        placeholder="e.g., HR Manager"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
                        placeholder="+260 211 234 567"
                      />
                    </div>
                  </div>
                </div>

                {/* Employee Information Section */}
                <div>
                  <h3 className="text-lg font-semibold text-text-dark mb-4">Employee Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Number of Employees <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="number" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Registration Date <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-napsa-primary focus:border-transparent"
                        placeholder="Select date"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setShowRegisterModal(false)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-napsa-primary hover:bg-napsa-primary-dark text-white rounded-md transition-colors"
                  >
                    <i className="fa-solid fa-check mr-2"></i>
                    Register Employer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployerAccountsView;
