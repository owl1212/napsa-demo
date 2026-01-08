const AccountingView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Accounting</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Accounting & Finance</h1>

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