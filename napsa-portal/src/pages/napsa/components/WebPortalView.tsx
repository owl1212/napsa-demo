const WebPortalView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Portal Services &gt; Web Portal Management</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Web Portal Services</h1>

      {/* Service Status Overview */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-3">
            <div className="text-sm text-text-gray">Portal Status</div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-2xl font-bold text-text-dark">Online</div>
          <div className="text-xs text-green-600 mt-2">99.8% uptime</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Active Users</div>
          <div className="text-3xl font-bold text-text-dark">1,247</div>
          <div className="text-xs text-accent-blue mt-2">Currently online</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Requests Today</div>
          <div className="text-3xl font-bold text-text-dark">24.8K</div>
          <div className="text-xs text-green-600 mt-2">+12% from yesterday</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Response Time</div>
          <div className="text-3xl font-bold text-text-dark">342ms</div>
          <div className="text-xs text-green-600 mt-2">Within target</div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-text-dark mb-4">Available Services</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <i className="fa-solid fa-user-circle"></i>
                </div>
                <h3 className="font-semibold text-text-dark">Member Login</h3>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <p className="text-xs text-text-gray mb-3">Active users can access their accounts</p>
            <div className="text-sm text-accent-blue font-medium cursor-pointer">Configure →</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                  <i className="fa-solid fa-building"></i>
                </div>
                <h3 className="font-semibold text-text-dark">Employer Portal</h3>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <p className="text-xs text-text-gray mb-3">Employer contribution submissions</p>
            <div className="text-sm text-accent-blue font-medium cursor-pointer">Configure →</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <i className="fa-solid fa-file-alt"></i>
                </div>
                <h3 className="font-semibold text-text-dark">Online Claims</h3>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <p className="text-xs text-text-gray mb-3">Submit and track benefit claims</p>
            <div className="text-sm text-accent-blue font-medium cursor-pointer">Configure →</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                  <i className="fa-solid fa-file-invoice"></i>
                </div>
                <h3 className="font-semibold text-text-dark">Statements</h3>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <p className="text-xs text-text-gray mb-3">Download contribution statements</p>
            <div className="text-sm text-accent-blue font-medium cursor-pointer">Configure →</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                  <i className="fa-solid fa-calculator"></i>
                </div>
                <h3 className="font-semibold text-text-dark">Benefit Calculator</h3>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <p className="text-xs text-text-gray mb-3">Estimate retirement benefits</p>
            <div className="text-sm text-accent-blue font-medium cursor-pointer">Configure →</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <h3 className="font-semibold text-text-dark">Support Tickets</h3>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <p className="text-xs text-text-gray mb-3">Submit and track support requests</p>
            <div className="text-sm text-accent-blue font-medium cursor-pointer">Configure →</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="bg-accent-gold text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-chart-line"></i> View Analytics
        </button>
        <button className="bg-primary-navy text-white px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-cog"></i> System Settings
        </button>
        <button className="border border-gray-300 text-text-dark px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <i className="fa-solid fa-bell"></i> Announcements
        </button>
      </div>
    </div>
  );
};

export default WebPortalView;