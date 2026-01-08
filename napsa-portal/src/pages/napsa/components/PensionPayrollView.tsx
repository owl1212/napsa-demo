const PensionPayrollView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Pension Payroll</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Pension Payroll Management</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Active Pensioners</div>
          <div className="text-3xl font-bold text-text-dark">12,847</div>
          <div className="text-xs text-green-600 mt-2">+23 this month</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Monthly Payout</div>
          <div className="text-3xl font-bold text-text-dark">K 156M</div>
          <div className="text-xs text-accent-blue mt-2">Next run: 25th</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Pending Verifications</div>
          <div className="text-3xl font-bold text-text-dark">18</div>
          <div className="text-xs text-yellow-600 mt-2">Requires action</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Failed Payments</div>
          <div className="text-3xl font-bold text-text-dark">3</div>
          <div className="text-xs text-red-600 mt-2">Needs resolution</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="bg-accent-gold text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-play"></i> Run Payroll
        </button>
        <button className="bg-primary-navy text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-user-plus"></i> Add Pensioner
        </button>
        <button className="border border-gray-300 text-text-dark px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-file-lines"></i> Generate Report
        </button>
      </div>

      {/* Pensioner List */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-text-dark">Pensioner Registry</h2>
          <input
            type="text"
            placeholder="Search by SSN or name..."
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm w-64"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">SSN</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Name</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Pension Type</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Monthly Amount</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Status</th>
                <th className="pb-3 text-xs font-semibold text-text-gray uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="py-8 text-center text-gray-500">
                  No pensioners found. Use the search or add a new pensioner.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PensionPayrollView;