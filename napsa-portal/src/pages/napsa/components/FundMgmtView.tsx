const FundMgmtView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Fund Management</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Fund Management</h1>

      {/* Fund Overview */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Total Assets Under Management</div>
          <div className="text-3xl font-bold text-text-dark">K 2.8B</div>
          <div className="text-xs text-green-600 mt-2">+5.2% YTD</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Portfolio Return</div>
          <div className="text-3xl font-bold text-text-dark">8.4%</div>
          <div className="text-xs text-green-600 mt-2">Above benchmark</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Active Investments</div>
          <div className="text-3xl font-bold text-text-dark">156</div>
          <div className="text-xs text-accent-blue mt-2 cursor-pointer">View Portfolio →</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Pending Approvals</div>
          <div className="text-3xl font-bold text-text-dark">3</div>
          <div className="text-xs text-yellow-600 mt-2">Requires review</div>
        </div>
      </div>

      {/* Asset Allocation */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h2 className="text-lg font-semibold text-text-dark mb-6">Asset Allocation</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">35%</div>
            <div className="text-xs text-text-gray mt-1">Equities</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">25%</div>
            <div className="text-xs text-text-gray mt-1">Fixed Income</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">20%</div>
            <div className="text-xs text-text-gray mt-1">Real Estate</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">15%</div>
            <div className="text-xs text-text-gray mt-1">Alternatives</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-600">5%</div>
            <div className="text-xs text-text-gray mt-1">Cash</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="bg-accent-gold text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-chart-line"></i> Performance Report
        </button>
        <button className="bg-primary-navy text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-plus"></i> New Investment
        </button>
        <button className="border border-gray-300 text-text-dark px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-file-export"></i> Export Portfolio
        </button>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-text-dark mb-6">Recent Fund Activities</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">
                <i className="fa-solid fa-arrow-trend-up"></i>
              </div>
              <div>
                <div className="font-medium text-sm">Equity Purchase - Mining Sector</div>
                <div className="text-xs text-text-gray">2 hours ago</div>
              </div>
            </div>
            <div className="font-bold">K 50M</div>
          </div>
          <div className="text-center text-gray-500 text-sm py-4">
            No other recent activities.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundMgmtView;