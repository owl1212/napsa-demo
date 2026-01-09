const ContributionMgmtView = () => {
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
            <div className="bg-green-500 h-2 rounded-full" style={{width: '93%'}}></div>
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
        <button className="bg-accent-gold text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
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
              <tr>
                <td colSpan={6} className="py-8 text-center text-gray-500">
                  No pending validations at this time.
                </td>
              </tr>
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
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">
                <i className="fa-solid fa-exclamation"></i>
              </div>
              <div>
                <div className="font-medium text-sm">Invalid SSN in Batch #BC-2024-0123</div>
                <div className="text-xs text-text-gray">Employer: ABC Corporation Ltd</div>
              </div>
            </div>
            <button className="text-accent-blue font-medium text-sm">Review →</button>
          </div>
          <div className="text-center text-gray-500 text-sm py-4">
            No other exceptions found.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionMgmtView;
