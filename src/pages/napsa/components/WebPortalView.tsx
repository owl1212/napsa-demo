const WebPortalView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Portal Services &gt; Web Portal Management</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Web Portal Services</h1>

      {/* Portal Engagement */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Daily Active Users (DAU)</h3>
          <div className="text-3xl font-bold text-text-dark mb-2">1,247</div>
          <div className="text-sm text-text-gray mb-2">Currently online</div>
          <div className="flex items-center text-sm">
            <span className="text-green-600 font-medium">+12%</span>
            <span className="text-text-gray ml-2">vs yesterday</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Weekly Active Users (WAU)</h3>
          <div className="text-3xl font-bold text-text-dark mb-2">8,934</div>
          <div className="text-sm text-text-gray mb-2">Last 7 days</div>
          <div className="flex items-center text-sm">
            <span className="text-green-600 font-medium">+8%</span>
            <span className="text-text-gray ml-2">vs last week</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Peak Usage Times</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Lunch hours (12-2 PM)</span>
              <span className="font-medium">2,145 users</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Evening (5-7 PM)</span>
              <span className="font-medium">1,892 users</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Business hours (9-5 PM)</span>
              <span className="font-medium">Avg 1,450 users</span>
            </div>
          </div>
        </div>
      </div>

      {/* Most Used Features */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h3 className="text-sm font-semibold text-text-gray mb-4">Most Used Features</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">45.2%</div>
            <div className="text-sm text-text-gray">Benefit Estimator</div>
            <div className="text-xs text-green-600 mt-1">+5% from last month</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">32.8%</div>
            <div className="text-sm text-text-gray">Statement Download</div>
            <div className="text-xs text-green-600 mt-1">+12% from last month</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">22.0%</div>
            <div className="text-sm text-text-gray">Update Details</div>
            <div className="text-xs text-yellow-600 mt-1">+2% from last month</div>
          </div>
        </div>
      </div>

      {/* Service Request Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Online Service Requests</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Beneficiary Changes</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">234</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Document Uploads</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">156</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">In Review</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">General Inquiries</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">89</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Resolved</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <span className="font-semibold">Total requests today: </span>
            <span>479</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Average Resolution Time</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Beneficiary Changes</span>
              <span className="font-medium">2.3 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Document Uploads</span>
              <span className="font-medium">1.8 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">General Inquiries</span>
              <span className="font-medium">0.5 days</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <div className="text-sm text-green-800">
              <strong>SLA Compliance:</strong> 94% of requests resolved within target timeframes
            </div>
          </div>
        </div>
      </div>

      {/* Communication Effectiveness */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h3 className="text-sm font-semibold text-text-gray mb-4">Communication Effectiveness</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium mb-3">Statement Delivery Success</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Email delivery rate</span>
                <span className="font-medium text-green-600">97.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Bounce rate</span>
                <span className="font-medium text-red-600">2.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Open rate</span>
                <span className="font-medium text-blue-600">68.5%</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">System Load Planning</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Concurrent users capacity</span>
                <span className="font-medium">5,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Current peak load</span>
                <span className="font-medium text-yellow-600">2,145</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">System utilization</span>
                <span className="font-medium text-green-600">43%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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