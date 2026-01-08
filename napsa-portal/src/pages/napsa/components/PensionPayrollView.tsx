import { useState, useMemo } from 'react';

// Types
interface Pensioner {
  id: string;
  ssn: string;
  firstName: string;
  lastName: string;
  nrc: string;
  dateOfBirth: string;
  pensionType: 'Normal Retirement' | 'Early Retirement' | 'Disability' | 'Survivor' | 'Partial Disability';
  monthlyAmount: number;
  startDate: string;
  status: 'Active' | 'Suspended' | 'Pending Verification' | 'Payment Failed';
  bankName: string;
  accountNumber: string;
  lastPaymentDate?: string;
  phone: string;
  email?: string;
}

interface PayrollRun {
  date: string;
  totalPensioners: number;
  totalAmount: number;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Failed';
}

// Mock Data
const generateMockPensioners = (): Pensioner[] => {
  const firstNames = ['John', 'Mary', 'Joseph', 'Grace', 'Patrick', 'Lucy', 'Samuel', 'Joyce', 'David', 'Ruth', 'Michael', 'Sarah', 'Peter', 'Elizabeth', 'James', 'Margaret', 'Daniel', 'Catherine', 'Richard', 'Agnes'];
  const lastNames = ['Mwamba', 'Banda', 'Phiri', 'Mulenga', 'Zulu', 'Tembo', 'Chirwa', 'Ng\'ombe', 'Lungu', 'Simukonda', 'Kambole', 'Mutale', 'Chanda', 'Sakala', 'Hamukoma'];
  const pensionTypes: Pensioner['pensionType'][] = ['Normal Retirement', 'Early Retirement', 'Disability', 'Survivor', 'Partial Disability'];
  const statuses: Pensioner['status'][] = ['Active', 'Active', 'Active', 'Active', 'Active', 'Active', 'Suspended', 'Pending Verification', 'Payment Failed'];
  const banks = ['Zanaco', 'Stanbic Bank', 'First National Bank', 'Atlas Mara Bank', 'Indo-Zambia Bank', 'Finance Bank'];

  return Array.from({ length: 45 }, (_, i) => {
    const firstName = firstNames[i % firstNames.length];
    const lastName = lastNames[Math.floor(i / firstNames.length) % lastNames.length];
    const status = statuses[i % statuses.length];
    
    return {
      id: `PEN-${String(i + 1).padStart(5, '0')}`,
      ssn: `${100000 + i}${Math.floor(Math.random() * 10)}`,
      firstName,
      lastName,
      nrc: `${Math.floor(Math.random() * 999999).toString().padStart(6, '0')}/${Math.floor(Math.random() * 99).toString().padStart(2, '0')}/${Math.floor(Math.random() * 9) + 1}`,
      dateOfBirth: new Date(1940 + Math.floor(Math.random() * 25), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      pensionType: pensionTypes[i % pensionTypes.length],
      monthlyAmount: Math.floor(Math.random() * 8000) + 2500,
      startDate: new Date(2010 + Math.floor(Math.random() * 14), Math.floor(Math.random() * 12), 1).toISOString().split('T')[0],
      status,
      bankName: banks[i % banks.length],
      accountNumber: `${Math.floor(Math.random() * 900000000) + 100000000}`,
      lastPaymentDate: status === 'Active' ? new Date(2026, 0, 1).toISOString().split('T')[0] : undefined,
      phone: `+260${Math.floor(Math.random() * 900000000) + 100000000}`,
      email: i % 3 === 0 ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com` : undefined,
    };
  });
};

const PensionPayrollView = () => {
  const [pensioners, setPensioners] = useState<Pensioner[]>(generateMockPensioners());
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [pensionTypeFilter, setPensionTypeFilter] = useState<string>('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRunPayrollModal, setShowRunPayrollModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPensioner, setSelectedPensioner] = useState<Pensioner | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<keyof Pensioner>('lastName');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const itemsPerPage = 10;

  // Form state for adding/editing pensioners
  const [formData, setFormData] = useState<Partial<Pensioner>>({
    firstName: '',
    lastName: '',
    ssn: '',
    nrc: '',
    dateOfBirth: '',
    pensionType: 'Normal Retirement',
    monthlyAmount: 0,
    startDate: '',
    status: 'Pending Verification',
    bankName: '',
    accountNumber: '',
    phone: '',
    email: '',
  });

  // Calculate statistics
  const stats = useMemo(() => {
    const activePensioners = pensioners.filter(p => p.status === 'Active').length;
    const monthlyPayout = pensioners
      .filter(p => p.status === 'Active')
      .reduce((sum, p) => sum + p.monthlyAmount, 0);
    const pendingVerifications = pensioners.filter(p => p.status === 'Pending Verification').length;
    const failedPayments = pensioners.filter(p => p.status === 'Payment Failed').length;

    return {
      activePensioners,
      monthlyPayout,
      pendingVerifications,
      failedPayments,
    };
  }, [pensioners]);

  // Filtered and sorted pensioners
  const filteredPensioners = useMemo(() => {
    let filtered = pensioners.filter(p => {
      const matchesSearch = searchTerm === '' || 
        p.ssn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        `${p.firstName} ${p.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.nrc.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
      const matchesPensionType = pensionTypeFilter === 'All' || p.pensionType === pensionTypeFilter;
      
      return matchesSearch && matchesStatus && matchesPensionType;
    });

    // Sort
    filtered.sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortDirection === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }
      
      return 0;
    });

    return filtered;
  }, [pensioners, searchTerm, statusFilter, pensionTypeFilter, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredPensioners.length / itemsPerPage);
  const paginatedPensioners = filteredPensioners.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleSort = (field: keyof Pensioner) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleAddPensioner = () => {
    const newPensioner: Pensioner = {
      ...formData as Pensioner,
      id: `PEN-${String(pensioners.length + 1).padStart(5, '0')}`,
    };
    setPensioners([...pensioners, newPensioner]);
    setShowAddModal(false);
    resetForm();
  };

  const handleEditPensioner = () => {
    if (!selectedPensioner) return;
    
    setPensioners(pensioners.map(p => 
      p.id === selectedPensioner.id ? { ...selectedPensioner, ...formData } : p
    ));
    setShowEditModal(false);
    setSelectedPensioner(null);
    resetForm();
  };

  const handleStatusChange = (pensionerId: string, newStatus: Pensioner['status']) => {
    setPensioners(pensioners.map(p =>
      p.id === pensionerId ? { ...p, status: newStatus } : p
    ));
  };

  const handleRunPayroll = () => {
    // Simulate payroll run
    const activePensioners = pensioners.filter(p => p.status === 'Active');
    const today = new Date().toISOString().split('T')[0];
    
    setPensioners(pensioners.map(p => 
      p.status === 'Active' ? { ...p, lastPaymentDate: today } : p
    ));
    
    setShowRunPayrollModal(false);
    alert(`Payroll processed successfully!\n${activePensioners.length} payments initiated\nTotal amount: K ${stats.monthlyPayout.toLocaleString()}`);
  };

  const handleViewPensioner = (pensioner: Pensioner) => {
    setSelectedPensioner(pensioner);
    setShowViewModal(true);
  };

  const handleEditClick = (pensioner: Pensioner) => {
    setSelectedPensioner(pensioner);
    setFormData(pensioner);
    setShowEditModal(true);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      ssn: '',
      nrc: '',
      dateOfBirth: '',
      pensionType: 'Normal Retirement',
      monthlyAmount: 0,
      startDate: '',
      status: 'Pending Verification',
      bankName: '',
      accountNumber: '',
      phone: '',
      email: '',
    });
  };

  const getStatusBadgeColor = (status: Pensioner['status']) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Suspended': return 'bg-gray-100 text-gray-800';
      case 'Pending Verification': return 'bg-yellow-100 text-yellow-800';
      case 'Payment Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Pension Payroll</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Pension Payroll Management</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Active Pensioners</div>
          <div className="text-3xl font-bold text-text-dark">{stats.activePensioners.toLocaleString()}</div>
          <div className="text-xs text-green-600 mt-2">+23 this month</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Monthly Payout</div>
          <div className="text-3xl font-bold text-text-dark">K {(stats.monthlyPayout / 1000000).toFixed(1)}M</div>
          <div className="text-xs text-accent-blue mt-2">Next run: 25th</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Pending Verifications</div>
          <div className="text-3xl font-bold text-text-dark">{stats.pendingVerifications}</div>
          <div className="text-xs text-yellow-600 mt-2">Requires action</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Failed Payments</div>
          <div className="text-3xl font-bold text-text-dark">{stats.failedPayments}</div>
          <div className="text-xs text-red-600 mt-2">Needs resolution</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setShowRunPayrollModal(true)}
          className="bg-accent-gold text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all"
        >
          <i className="fa-solid fa-play"></i> Run Payroll
        </button>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-primary-navy text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all"
        >
          <i className="fa-solid fa-user-plus"></i> Add Pensioner
        </button>
        <button className="border border-gray-300 text-text-dark px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-50 transition-all">
          <i className="fa-solid fa-file-lines"></i> Generate Report
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Search by SSN, name, or NRC..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Suspended">Suspended</option>
              <option value="Pending Verification">Pending Verification</option>
              <option value="Payment Failed">Payment Failed</option>
            </select>
          </div>
          <div>
            <select
              value={pensionTypeFilter}
              onChange={(e) => setPensionTypeFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="All">All Pension Types</option>
              <option value="Normal Retirement">Normal Retirement</option>
              <option value="Early Retirement">Early Retirement</option>
              <option value="Disability">Disability</option>
              <option value="Survivor">Survivor</option>
              <option value="Partial Disability">Partial Disability</option>
            </select>
          </div>
        </div>
      </div>

      {/* Pensioner List */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-text-dark">
            Pensioner Registry ({filteredPensioners.length} records)
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th 
                  className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase cursor-pointer hover:text-text-dark"
                  onClick={() => handleSort('ssn')}
                >
                  SSN {sortField === 'ssn' && (sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th 
                  className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase cursor-pointer hover:text-text-dark"
                  onClick={() => handleSort('lastName')}
                >
                  Name {sortField === 'lastName' && (sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th 
                  className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase cursor-pointer hover:text-text-dark"
                  onClick={() => handleSort('pensionType')}
                >
                  Pension Type {sortField === 'pensionType' && (sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th 
                  className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase cursor-pointer hover:text-text-dark"
                  onClick={() => handleSort('monthlyAmount')}
                >
                  Monthly Amount {sortField === 'monthlyAmount' && (sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th 
                  className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase cursor-pointer hover:text-text-dark"
                  onClick={() => handleSort('status')}
                >
                  Status {sortField === 'status' && (sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th className="pb-3 text-xs font-semibold text-text-gray uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPensioners.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-gray-500">
                    No pensioners found matching your criteria.
                  </td>
                </tr>
              ) : (
                paginatedPensioners.map((pensioner) => (
                  <tr key={pensioner.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 pr-4 font-mono text-xs">{pensioner.ssn}</td>
                    <td className="py-3 pr-4">
                      <div className="font-medium">{pensioner.firstName} {pensioner.lastName}</div>
                      <div className="text-xs text-gray-500">{pensioner.nrc}</div>
                    </td>
                    <td className="py-3 pr-4">{pensioner.pensionType}</td>
                    <td className="py-3 pr-4 font-semibold">K {pensioner.monthlyAmount.toLocaleString()}</td>
                    <td className="py-3 pr-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(pensioner.status)}`}>
                        {pensioner.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewPensioner(pensioner)}
                          className="text-accent-blue hover:text-blue-700 text-xs"
                          title="View Details"
                        >
                          <i className="fa-solid fa-eye"></i>
                        </button>
                        <button
                          onClick={() => handleEditClick(pensioner)}
                          className="text-green-600 hover:text-green-700 text-xs"
                          title="Edit"
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        {pensioner.status === 'Active' && (
                          <button
                            onClick={() => handleStatusChange(pensioner.id, 'Suspended')}
                            className="text-yellow-600 hover:text-yellow-700 text-xs"
                            title="Suspend"
                          >
                            <i className="fa-solid fa-pause"></i>
                          </button>
                        )}
                        {pensioner.status === 'Suspended' && (
                          <button
                            onClick={() => handleStatusChange(pensioner.id, 'Active')}
                            className="text-green-600 hover:text-green-700 text-xs"
                            title="Activate"
                          >
                            <i className="fa-solid fa-play"></i>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredPensioners.length)} of {filteredPensioners.length} entries
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-1 border rounded text-sm ${
                      currentPage === pageNum
                        ? 'bg-accent-gold text-white border-accent-gold'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add Pensioner Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-text-dark">Add New Pensioner</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">SSN *</label>
                  <input
                    type="text"
                    value={formData.ssn}
                    onChange={(e) => setFormData({ ...formData, ssn: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">NRC *</label>
                  <input
                    type="text"
                    value={formData.nrc}
                    onChange={(e) => setFormData({ ...formData, nrc: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pension Type *</label>
                  <select
                    value={formData.pensionType}
                    onChange={(e) => setFormData({ ...formData, pensionType: e.target.value as Pensioner['pensionType'] })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="Normal Retirement">Normal Retirement</option>
                    <option value="Early Retirement">Early Retirement</option>
                    <option value="Disability">Disability</option>
                    <option value="Survivor">Survivor</option>
                    <option value="Partial Disability">Partial Disability</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Amount (K) *</label>
                  <input
                    type="number"
                    value={formData.monthlyAmount}
                    onChange={(e) => setFormData({ ...formData, monthlyAmount: parseFloat(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name *</label>
                  <input
                    type="text"
                    value={formData.bankName}
                    onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Number *</label>
                  <input
                    type="text"
                    value={formData.accountNumber}
                    onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  resetForm();
                }}
                className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddPensioner}
                className="px-6 py-2 bg-accent-gold text-white rounded-lg text-sm font-medium hover:bg-opacity-90"
              >
                Add Pensioner
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Pensioner Modal */}
      {showEditModal && selectedPensioner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-text-dark">Edit Pensioner</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Amount (K) *</label>
                  <input
                    type="number"
                    value={formData.monthlyAmount}
                    onChange={(e) => setFormData({ ...formData, monthlyAmount: parseFloat(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name *</label>
                  <input
                    type="text"
                    value={formData.bankName}
                    onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Number *</label>
                  <input
                    type="text"
                    value={formData.accountNumber}
                    onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as Pensioner['status'] })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="Active">Active</option>
                    <option value="Suspended">Suspended</option>
                    <option value="Pending Verification">Pending Verification</option>
                    <option value="Payment Failed">Payment Failed</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedPensioner(null);
                  resetForm();
                }}
                className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleEditPensioner}
                className="px-6 py-2 bg-accent-gold text-white rounded-lg text-sm font-medium hover:bg-opacity-90"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Pensioner Modal */}
      {showViewModal && selectedPensioner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-text-dark">Pensioner Details</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Pensioner ID</div>
                  <div className="font-medium">{selectedPensioner.id}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Status</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(selectedPensioner.status)}`}>
                    {selectedPensioner.status}
                  </span>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Full Name</div>
                  <div className="font-medium">{selectedPensioner.firstName} {selectedPensioner.lastName}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">SSN</div>
                  <div className="font-mono">{selectedPensioner.ssn}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">NRC</div>
                  <div>{selectedPensioner.nrc}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Date of Birth</div>
                  <div>{selectedPensioner.dateOfBirth}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Phone</div>
                  <div>{selectedPensioner.phone}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Email</div>
                  <div>{selectedPensioner.email || 'N/A'}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Pension Type</div>
                  <div className="font-medium">{selectedPensioner.pensionType}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Monthly Amount</div>
                  <div className="font-bold text-lg">K {selectedPensioner.monthlyAmount.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Start Date</div>
                  <div>{selectedPensioner.startDate}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Last Payment</div>
                  <div>{selectedPensioner.lastPaymentDate || 'N/A'}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Bank Name</div>
                  <div>{selectedPensioner.bankName}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Account Number</div>
                  <div className="font-mono">{selectedPensioner.accountNumber}</div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowViewModal(false);
                  setSelectedPensioner(null);
                }}
                className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowViewModal(false);
                  handleEditClick(selectedPensioner);
                }}
                className="px-6 py-2 bg-accent-gold text-white rounded-lg text-sm font-medium hover:bg-opacity-90"
              >
                Edit Pensioner
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Run Payroll Modal */}
      {showRunPayrollModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-text-dark">Run Payroll</h2>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-info-circle text-blue-600 mt-1"></i>
                  <div>
                    <div className="font-medium text-blue-900 mb-1">Payroll Summary</div>
                    <div className="text-sm text-blue-800">
                      <div>Active Pensioners: {stats.activePensioners.toLocaleString()}</div>
                      <div>Total Payout: K {stats.monthlyPayout.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Date</label>
                <input
                  type="date"
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-exclamation-triangle text-yellow-600 mt-1"></i>
                  <div className="text-sm text-yellow-800">
                    This action will initiate payment processing for all active pensioners. Please ensure all details are correct before proceeding.
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowRunPayrollModal(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleRunPayroll}
                className="px-6 py-2 bg-accent-gold text-white rounded-lg text-sm font-medium hover:bg-opacity-90"
              >
                Confirm & Run Payroll
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PensionPayrollView;