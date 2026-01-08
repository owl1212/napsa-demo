const AccountingView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Accounting</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Accounting & Finance</h1>

      {/* Liquidity & Cash Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Daily Cash Position</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Zanaco Main Account</span>
              <span className="font-medium">K 45.2M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Stanbic Operations</span>
              <span className="font-medium">K 28.7M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">First National Reserve</span>
              <span className="font-medium">K 12.1M</span>
            </div>
            <div className="flex justify-between items-center border-t pt-2">
              <span className="text-sm font-semibold">Total Cash Position</span>
              <span className="font-bold text-lg">K 86.0M</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Projected Cash Flow</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Next 30 days</span>
              <span className="font-medium text-green-600">+K 12.3M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Next 60 days</span>
              <span className="font-medium text-green-600">+K 8.7M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Next 90 days</span>
              <span className="font-medium text-yellow-600">-K 3.2M</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-text-gray">
            Factoring in benefit payments, investment income, and contributions
          </div>
        </div>
      </div>

      {/* Pending Payments & Budget Control */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Pending Payment Vouchers</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">PV-2026-00123</div>
                <div className="text-xs text-text-gray">Office Supplies - K 45,670</div>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Awaiting CFO</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">PV-2026-00124</div>
                <div className="text-xs text-text-gray">IT Equipment - K 125,000</div>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Awaiting CEO</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">PV-2026-00125</div>
                <div className="text-xs text-text-gray">Consulting Services - K 89,450</div>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Awaiting Approval</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-2xl font-bold text-yellow-600">24</span>
            <span className="text-sm text-text-gray ml-2">Total pending vouchers</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Budget Control (YTD)</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>IT Department</span>
                <span>K 2.1M / K 2.5M</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '84%'}}></div>
              </div>
              <div className="text-xs text-green-600 mt-1">16% under budget</div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Operations</span>
                <span>K 8.7M / K 8.0M</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{width: '109%'}}></div>
              </div>
              <div className="text-xs text-red-600 mt-1">9% over budget</div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Human Resources</span>
                <span>K 1.8M / K 2.0M</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
              <div className="text-xs text-yellow-600 mt-1">10% under budget</div>
            </div>
          </div>
        </div>
      </div>

      {/* Accounts Status & GL Integrity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Accounts Receivable Aging</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Current</span>
              <span className="font-medium">K 2.1M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>31-60 days</span>
              <span className="font-medium text-yellow-600">K 890K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>61-90 days</span>
              <span className="font-medium text-red-600">K 456K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>90+ days</span>
              <span className="font-medium text-red-600">K 234K</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t text-sm font-semibold">
            Total AR: K 3.68M
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Accounts Payable Aging</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Current</span>
              <span className="font-medium">K 1.8M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>31-60 days</span>
              <span className="font-medium text-yellow-600">K 723K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>61-90 days</span>
              <span className="font-medium text-red-600">K 345K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>90+ days</span>
              <span className="font-medium text-red-600">K 167K</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t text-sm font-semibold">
            Total AP: K 3.035M
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">General Ledger Integrity</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Unreconciled Cash Book items</span>
              <span className="font-medium text-red-600">7</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Unposted Journal Vouchers</span>
              <span className="font-medium text-yellow-600">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Outstanding Bank Reconciliations</span>
              <span className="font-medium text-yellow-600">2</span>
            </div>
          </div>
          <button className="text-accent-blue font-medium text-sm mt-4">Review Issues →</button>
        </div>
      </div>

      {/* Fixed Assets */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h3 className="text-sm font-semibold text-text-gray mb-4">Fixed Assets Management</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium mb-3">Depreciation Schedule (Current Period)</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Buildings & Land</span>
                <span className="font-medium">K 125,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>IT Equipment</span>
                <span className="font-medium">K 89,450</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Vehicles</span>
                <span className="font-medium">K 67,890</span>
              </div>
              <div className="flex justify-between text-sm border-t pt-2">
                <span className="font-semibold">Total Depreciation</span>
                <span className="font-bold">K 282,340</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-3">Assets Due for Revaluation</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Property Portfolio</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Due Q2 2026</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Investment Properties</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Due Q3 2026</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>IT Infrastructure</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Up to date</span>
              </div>
            </div>
            <button className="text-accent-blue font-medium text-sm mt-4">Schedule Revaluation →</button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Pending Payments</div>
          <div className="text-3xl font-bold text-text-dark">24</div>
          <div className="text-xs text-accent-blue mt-2 cursor-pointer">View Details →</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Processed Today</div>
          <div className="text-3xl font-bold text-text-dark">K 1.2M</div>
          <div className="text-xs text-green-600 mt-2">+12% from yesterday</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Reconciliation Items</div>
          <div className="text-3xl font-bold text-text-dark">7</div>
          <div className="text-xs text-yellow-600 mt-2">Requires attention</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Month-to-Date</div>
          <div className="text-3xl font-bold text-text-dark">K 45M</div>
          <div className="text-xs text-accent-blue mt-2">View Report →</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="bg-accent-gold text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-plus"></i> New Payment
        </button>
        <button className="bg-primary-navy text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-file-invoice"></i> Generate Report
        </button>
        <button className="border border-gray-300 text-text-dark px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-download"></i> Export Data
        </button>
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-text-dark mb-6">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Transaction ID</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Date</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Type</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Amount</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Status</th>
                <th className="pb-3 text-xs font-semibold text-text-gray uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="py-8 text-center text-gray-500">
                  No recent transactions to display.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountingView;