import React from 'react';
// import RecordContributionModal from './modals/RecordContributionModal';

const ContributionMgmtView: React.FC = () => {
  // Modal states - commented out until modal is implemented
  // const [showRecordModal, setShowRecordModal] = useState(false);

  // Mock data for pending validations
  const pendingValidations = [
    { batchId: 'BC-2024-0123', employer: 'Zambia Mining Corp', period: 'Dec 2024', employees: 245, amount: 1250000, status: 'Awaiting Review' },
    { batchId: 'BC-2024-0124', employer: 'National Breweries', period: 'Dec 2024', employees: 189, amount: 890000, status: 'Validation Failed' },
    { batchId: 'BC-2024-0125', employer: 'Lusaka City Council', period: 'Dec 2024', employees: 312, amount: 756000, status: 'Awaiting Review' },
    { batchId: 'BC-2024-0126', employer: 'Shoprite Zambia', period: 'Dec 2024', employees: 156, amount: 623000, status: 'Processing' },
    { batchId: 'BC-2024-0127', employer: 'Agro Supplies Co', period: 'Dec 2024', employees: 98, amount: 512000, status: 'Awaiting Review' },
    { batchId: 'BC-2024-0128', employer: 'Copperbelt Energy', period: 'Dec 2024', employees: 203, amount: 1450000, status: 'Validation Failed' },
    { batchId: 'BC-2024-0129', employer: 'MTN Zambia', period: 'Dec 2024', employees: 278, amount: 1890000, status: 'Awaiting Review' },
    { batchId: 'BC-2024-0130', employer: 'ZANACO Bank', period: 'Dec 2024', employees: 334, amount: 2340000, status: 'Processing' },
    { batchId: 'BC-2024-0131', employer: 'Airtel Zambia', period: 'Dec 2024', employees: 192, amount: 1120000, status: 'Awaiting Review' },
    { batchId: 'BC-2024-0132', employer: 'Zambeef Products', period: 'Dec 2024', employees: 145, amount: 789000, status: 'Validation Failed' },
    { batchId: 'BC-2024-0133', employer: 'First Quantum Minerals', period: 'Nov 2024', employees: 567, amount: 3450000, status: 'Awaiting Review' },
    { batchId: 'BC-2024-0134', employer: 'KCM Mining', period: 'Nov 2024', employees: 423, amount: 2780000, status: 'Processing' },
    { batchId: 'BC-2024-0135', employer: 'ZESCO Ltd', period: 'Nov 2024', employees: 389, amount: 2230000, status: 'Awaiting Review' },
    { batchId: 'BC-2024-0136', employer: 'Stanbic Bank', period: 'Nov 2024', employees: 298, amount: 1980000, status: 'Validation Failed' },
    { batchId: 'BC-2024-0137', employer: 'Investrust Bank', period: 'Nov 2024', employees: 167, amount: 945000, status: 'Awaiting Review' },
  ];

  // Mock data for contribution exceptions
  const contributionExceptions = [
    { id: 1, type: 'Invalid SSN', description: 'Invalid SSN in Batch #BC-2024-0123', employer: 'ABC Corporation Ltd', severity: 'High', dateReported: '2024-01-08' },
    { id: 2, type: 'Duplicate Record', description: 'Duplicate contribution record for Employee #12345', employer: 'Zambia Mining Corp', severity: 'Medium', dateReported: '2024-01-08' },
    { id: 3, type: 'Amount Mismatch', description: 'Employee contribution amount exceeds maximum allowed', employer: 'National Breweries', severity: 'High', dateReported: '2024-01-07' },
    { id: 4, type: 'Missing Employer Share', description: 'Employer contribution missing for 15 employees', employer: 'Lusaka City Council', severity: 'High', dateReported: '2024-01-07' },
    { id: 5, type: 'Invalid Period', description: 'Contribution period does not match payroll cycle', employer: 'Shoprite Zambia', severity: 'Medium', dateReported: '2024-01-06' },
    { id: 6, type: 'Negative Amount', description: 'Negative contribution amount detected', employer: 'Agro Supplies Co', severity: 'High', dateReported: '2024-01-06' },
    { id: 7, type: 'Inactive Member', description: 'Contribution for inactive member SSN #67890', employer: 'Copperbelt Energy', severity: 'Medium', dateReported: '2024-01-05' },
    { id: 8, type: 'Overpayment', description: 'Employer overpaid by K 50,000', employer: 'MTN Zambia', severity: 'Low', dateReported: '2024-01-05' },
    { id: 9, type: 'Late Submission', description: 'Batch submitted after deadline', employer: 'ZANACO Bank', severity: 'Medium', dateReported: '2024-01-04' },
    { id: 10, type: 'Invalid Bank Details', description: 'Bank account details do not match member record', employer: 'Airtel Zambia', severity: 'High', dateReported: '2024-01-04' },
    { id: 11, type: 'Missing Documentation', description: 'Supporting documents not attached', employer: 'Zambeef Products', severity: 'Medium', dateReported: '2024-01-03' },
    { id: 12, type: 'Currency Mismatch', description: 'Contribution in incorrect currency', employer: 'First Quantum Minerals', severity: 'High', dateReported: '2024-01-03' },
    { id: 13, type: 'Incomplete Record', description: 'Missing employee details in batch', employer: 'KCM Mining', severity: 'Medium', dateReported: '2024-01-02' },
    { id: 14, type: 'Duplicate SSN', description: 'SSN appears in multiple employer batches', employer: 'ZESCO Ltd', severity: 'High', dateReported: '2024-01-02' },
    { id: 15, type: 'Amount Below Minimum', description: 'Contribution below statutory minimum', employer: 'Stanbic Bank', severity: 'Low', dateReported: '2024-01-01' },
    { id: 16, type: 'Invalid Employer Code', description: 'Employer code not recognized', employer: 'Investrust Bank', severity: 'Medium', dateReported: '2024-01-01' },
    { id: 17, type: 'System Error', description: 'Technical error during processing', employer: 'Various', severity: 'High', dateReported: '2023-12-31' },
  ];

  // Mock data for arrears aging
  const arrearsAging = [
    { employer: 'Zambia Mining Corp', totalArrears: 1200000, days1_30: 200000, days31_60: 300000, days61_90: 400000, days90plus: 300000 },
    { employer: 'National Breweries', totalArrears: 890000, days1_30: 150000, days31_60: 250000, days61_90: 300000, days90plus: 190000 },
    { employer: 'Lusaka City Council', totalArrears: 756000, days1_30: 120000, days31_60: 180000, days61_90: 250000, days90plus: 206000 },
    { employer: 'Shoprite Zambia', totalArrears: 623000, days1_30: 100000, days31_60: 150000, days61_90: 200000, days90plus: 173000 },
    { employer: 'Agro Supplies Co', totalArrears: 512000, days1_30: 80000, days31_60: 120000, days61_90: 160000, days90plus: 152000 },
    { employer: 'Copperbelt Energy', totalArrears: 1450000, days1_30: 250000, days31_60: 350000, days61_90: 450000, days90plus: 400000 },
    { employer: 'MTN Zambia', totalArrears: 1890000, days1_30: 300000, days31_60: 400000, days61_90: 550000, days90plus: 640000 },
    { employer: 'ZANACO Bank', totalArrears: 2340000, days1_30: 400000, days31_60: 500000, days61_90: 700000, days90plus: 740000 },
  ];

  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Contribution Management</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Contribution Management</h1>

      {/* Contribution Cycle Health */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Contributions Received vs Expected</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">This Month</span>
            <span className="text-lg font-bold text-text-dark">K 89.2M / K 95.8M</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div className="bg-green-500 h-2 rounded-full w-[93%]"></div>
          </div>
          <div className="text-xs text-green-600">93.1% received (K 6.6M outstanding)</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Aging Analysis of Arrears</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>1-30 days</span>
              <span className="font-medium">K 2.1M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>31-60 days</span>
              <span className="font-medium">K 1.8M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>60+ days</span>
              <span className="font-medium text-red-600">K 2.7M</span>
            </div>
          </div>
          <div className="text-xs text-text-gray mt-2">Total arrears: K 6.6M</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Top 10 Sponsors with Missing Contributions</h3>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>Zambia Mining Corp</span>
              <span className="font-medium">K 1.2M</span>
            </div>
            <div className="flex justify-between">
              <span>National Breweries</span>
              <span className="font-medium">K 890K</span>
            </div>
            <div className="flex justify-between">
              <span>Lusaka City Council</span>
              <span className="font-medium">K 756K</span>
            </div>
            <div className="flex justify-between">
              <span>Shoprite Zambia</span>
              <span className="font-medium">K 623K</span>
            </div>
            <div className="flex justify-between">
              <span>Agro Supplies Co</span>
              <span className="font-medium">K 512K</span>
            </div>
          </div>
          <button className="text-accent-blue font-medium text-xs mt-2">View all →</button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Total This Month</div>
          <div className="text-3xl font-bold text-text-dark">K 89.2M</div>
          <div className="text-xs text-green-600 mt-2">+8.3% from last month</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Employers Submitted</div>
          <div className="text-3xl font-bold text-text-dark">1,847</div>
          <div className="text-xs text-accent-blue mt-2">Out of 2,124 total</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Pending Validation</div>
          <div className="text-3xl font-bold text-text-dark">124</div>
          <div className="text-xs text-yellow-600 mt-2">Requires review</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Exceptions</div>
          <div className="text-3xl font-bold text-text-dark">17</div>
          <div className="text-xs text-red-600 mt-2">Needs resolution</div>
        </div>
      </div>

      {/* Claims Processing Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Claims by Type & Status</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Retirement</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">12 Pending</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">8 Review</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">45 Paid</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Death</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">3 Pending</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">1 Review</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">12 Paid</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Withdrawal</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">8 Pending</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">5 Review</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">23 Paid</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Average Processing Time vs SLA</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Retirement</span>
              <div className="text-right">
                <div className="font-medium">14 days</div>
                <div className="text-xs text-green-600">SLA: 21 days</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Death</span>
              <div className="text-right">
                <div className="font-medium">7 days</div>
                <div className="text-xs text-green-600">SLA: 14 days</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Withdrawal</span>
              <div className="text-right">
                <div className="font-medium">10 days</div>
                <div className="text-xs text-yellow-600">SLA: 14 days</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Benefits Authorized for Payment</h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">K 12.8M</div>
            <div className="text-sm text-text-gray">Pending bank transfer</div>
          </div>
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex justify-between">
              <span>Retirement benefits</span>
              <span className="font-medium">K 8.5M</span>
            </div>
            <div className="flex justify-between">
              <span>Death benefits</span>
              <span className="font-medium">K 2.1M</span>
            </div>
            <div className="flex justify-between">
              <span>Withdrawal benefits</span>
              <span className="font-medium">K 2.2M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Data Integrity & Member Movement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Data Integrity Issues</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Members with incomplete profiles</span>
              <span className="font-medium text-red-600">1,247</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Missing beneficiaries</span>
              <span className="font-medium text-red-600">892</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Invalid contact information</span>
              <span className="font-medium text-yellow-600">456</span>
            </div>
          </div>
          <button className="text-accent-blue font-medium text-sm mt-4">Generate Report →</button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Member Movement (Last 24h)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">127</div>
              <div className="text-xs text-text-gray">Active → Retired</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">89</div>
              <div className="text-xs text-text-gray">New Activations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">23</div>
              <div className="text-xs text-text-gray">Deceased</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">45</div>
              <div className="text-xs text-text-gray">Status Changes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="bg-accent-gold text-white px-6 py-3 rounded-full font-medium flex items-center gap-2" onClick={() => {/* setShowRecordModal(true) */}}>
          <i className="fa-solid fa-plus"></i> Record Contribution
        </button>
        <button className="bg-primary-navy text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-upload"></i> Import Batch
        </button>
        <button className="border border-gray-300 text-text-dark px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-chart-bar"></i> View Analytics
        </button>
      </div>

      {/* Pending Validations Table */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-text-dark">Pending Validations</h2>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">124 Items</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Batch ID</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Employer</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Period</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Employees</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Amount</th>
                <th className="pb-3 text-xs font-semibold text-text-gray uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingValidations.map((validation, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 pr-4 font-medium">{validation.batchId}</td>
                  <td className="py-3 pr-4">{validation.employer}</td>
                  <td className="py-3 pr-4">{validation.period}</td>
                  <td className="py-3 pr-4">{validation.employees}</td>
                  <td className="py-3 pr-4 font-medium">K {(validation.amount / 1000).toFixed(0)}K</td>
                  <td className="py-3">
                    <div className="flex gap-2">
                      <button className="text-accent-blue font-medium text-sm hover:text-accent-blue-dark">Review</button>
                      <button className="text-green-600 font-medium text-sm hover:text-green-700">Approve</button>
                      <button className="text-red-600 font-medium text-sm hover:text-red-700">Reject</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Exceptions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-text-dark">Contribution Exceptions</h2>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">17 Items</span>
        </div>
        <div className="space-y-3">
          {contributionExceptions.map((exception) => (
            <div key={exception.id} className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-100">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  exception.severity === 'High' ? 'bg-red-100 text-red-600' :
                  exception.severity === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <i className="fa-solid fa-exclamation"></i>
                </div>
                <div>
                  <div className="font-medium text-sm">{exception.description}</div>
                  <div className="text-xs text-text-gray">{exception.employer} • {exception.dateReported}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  exception.severity === 'High' ? 'bg-red-100 text-red-800' :
                  exception.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {exception.severity}
                </span>
                <button className="text-accent-blue font-medium text-sm hover:text-accent-blue-dark">Review →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contribution Arrears Aging Table */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-text-dark">Contribution Arrears Aging</h2>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">8 Employers</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Employer</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Total Arrears</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">1-30 Days</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">31-60 Days</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">61-90 Days</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">90+ Days</th>
                <th className="pb-3 text-xs font-semibold text-text-gray uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {arrearsAging.map((arrear, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 pr-4 font-medium">{arrear.employer}</td>
                  <td className="py-3 pr-4 font-medium text-red-600">K {(arrear.totalArrears / 1000).toFixed(0)}K</td>
                  <td className="py-3 pr-4 text-yellow-600">K {(arrear.days1_30 / 1000).toFixed(0)}K</td>
                  <td className="py-3 pr-4 text-orange-600">K {(arrear.days31_60 / 1000).toFixed(0)}K</td>
                  <td className="py-3 pr-4 text-red-500">K {(arrear.days61_90 / 1000).toFixed(0)}K</td>
                  <td className="py-3 pr-4 text-red-700 font-medium">K {(arrear.days90plus / 1000).toFixed(0)}K</td>
                  <td className="py-3">
                    <div className="flex gap-2">
                      <button className="text-accent-blue font-medium text-sm hover:text-accent-blue-dark">Send Reminder</button>
                      <button className="text-red-600 font-medium text-sm hover:text-red-700">Legal Action</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Record Contribution Modal */}
      {/* <RecordContributionModal
        isOpen={showRecordModal}
        onClose={() => setShowRecordModal(false)}
        onSubmit={handleRecordContribution}
      /> */}

    </div>
  );
};

export default ContributionMgmtView;
