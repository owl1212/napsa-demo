const RealEstateView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Real Estate Management</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Real Estate Management</h1>

      {/* Portfolio Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Portfolio Value</h3>
          <div className="text-3xl font-bold text-text-dark mb-2">K 45.2M</div>
          <div className="text-sm text-text-gray mb-2">Carrying Value</div>
          <div className="text-sm text-green-600">+5.2% from acquisition cost (K 43.0M)</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Monthly Rental Income</h3>
          <div className="text-3xl font-bold text-text-dark mb-2">K 2.8M</div>
          <div className="text-sm text-text-gray mb-2">Current month</div>
          <div className="flex items-center text-sm">
            <span className="text-green-600 font-medium">+8.3%</span>
            <span className="text-text-gray ml-2">vs budget (K 2.6M)</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Occupancy Rate</h3>
          <div className="text-3xl font-bold text-text-dark mb-2">94.2%</div>
          <div className="text-sm text-text-gray mb-2">Overall portfolio</div>
          <div className="text-sm text-green-600">+2.1% from last quarter</div>
        </div>
      </div>

      {/* Operational Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Occupancy Dashboard</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-green-500"></div>
                <span className="text-sm">Lusaka Central Office</span>
              </div>
              <span className="text-sm font-medium">98% occupied (120/122 units)</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-yellow-500"></div>
                <span className="text-sm">Ndola Commercial Complex</span>
              </div>
              <span className="text-sm font-medium">87% occupied (52/60 units)</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-red-500"></div>
                <span className="text-sm">Kitwe Retail Plaza</span>
              </div>
              <span className="text-sm font-medium">76% occupied (38/50 units)</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-green-500"></div>
                <span className="text-sm">Livingstone Mall</span>
              </div>
              <span className="text-sm font-medium">95% occupied (95/100 units)</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Rent Collection Status</h3>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Current month collection</span>
              <span className="font-medium">K 2.8M / K 2.9M</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '97%'}}></div>
            </div>
            <div className="text-xs text-green-600 mt-1">97% collection rate</div>
          </div>

          <h4 className="text-sm font-medium mb-3">Current Rent Arrears</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>1-30 days</span>
              <span className="font-medium text-yellow-600">K 45,230</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>31-60 days</span>
              <span className="font-medium text-orange-600">K 28,450</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>61+ days</span>
              <span className="font-medium text-red-600">K 12,890</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t text-sm font-semibold">
            Total arrears: K 86,570
          </div>
        </div>
      </div>

      {/* Lease Management & Maintenance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Lease Expiry Schedule</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">Shoprite Lusaka (Unit 15-20)</div>
                <div className="text-xs text-text-gray">Lease expires: Feb 15, 2026</div>
              </div>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Critical</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">Game Stores Ndola</div>
                <div className="text-xs text-text-gray">Lease expires: Apr 30, 2026</div>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Review</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">Pick n Pay Kitwe</div>
                <div className="text-xs text-text-gray">Lease expires: Jun 12, 2026</div>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Review</span>
            </div>
          </div>
          <button className="text-accent-blue font-medium text-sm mt-4">View Full Schedule →</button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Maintenance & Capex</h3>
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-3">Open Work Orders</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>HVAC Repairs</span>
                <span className="font-medium">3 orders</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Electrical Maintenance</span>
                <span className="font-medium">5 orders</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Plumbing Issues</span>
                <span className="font-medium">2 orders</span>
              </div>
            </div>
          </div>

          <h4 className="text-sm font-medium mb-3">Capex Budget vs Actual (YTD)</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm mb-1">
              <span>Property Improvements</span>
              <span>K 1.2M / K 1.5M</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
            </div>
            <div className="text-xs text-green-600">20% under budget</div>
          </div>
        </div>
      </div>

      {/* Property Map Placeholder */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-sm font-semibold text-text-gray mb-4">Property Portfolio Map</h3>
        <div className="h-[300px] bg-gradient-to-br from-gray-50 to-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
          Interactive property map visualization
          <br />
          <span className="text-xs">Showing locations, occupancy status, and key metrics</span>
        </div>
      </div>
    </div>
  );
};

export default RealEstateView;