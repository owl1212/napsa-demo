const ContributionMgmtView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Contribution Management</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Contribution Management</h1>

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