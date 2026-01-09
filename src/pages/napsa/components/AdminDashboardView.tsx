import React from 'react';

const AdminDashboardView: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-dark mb-2">Admin Dashboard</h1>
        <p className="text-text-muted">System overview and operational metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-text-muted">Total Members</div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-users text-blue-600"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-text-dark mb-1">248,592</div>
          <div className="flex items-center text-sm">
            <span className="text-green-600 font-medium">
              <i className="fa-solid fa-arrow-up mr-1"></i>
              2.3%
            </span>
            <span className="text-text-muted ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-text-muted">Monthly Contributions</div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-hand-holding-dollar text-green-600"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-text-dark mb-1">K 89.2M</div>
          <div className="flex items-center text-sm">
            <span className="text-green-600 font-medium">
              <i className="fa-solid fa-arrow-up mr-1"></i>
              5.7%
            </span>
            <span className="text-text-muted ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-text-muted">Active Pensioners</div>
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-money-check-dollar text-purple-600"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-text-dark mb-1">12,847</div>
          <div className="flex items-center text-sm">
            <span className="text-green-600 font-medium">
              <i className="fa-solid fa-arrow-up mr-1"></i>
              1.2%
            </span>
            <span className="text-text-muted ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-text-muted">Total Assets (AUM)</div>
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-chart-pie text-yellow-600"></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-text-dark mb-1">K 2.8B</div>
          <div className="flex items-center text-sm">
            <span className="text-green-600 font-medium">
              <i className="fa-solid fa-arrow-up mr-1"></i>
              8.4%
            </span>
            <span className="text-text-muted ml-2">YTD return</span>
          </div>
        </div>
      </div>

      {/* Pending Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-text-dark">Pending Operations</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-clock text-orange-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">Pending Payments</div>
                    <div className="text-sm text-text-muted">Accounting</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-orange-600">24</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-user-check text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">KYC Reviews</div>
                    <div className="text-sm text-text-muted">Member Admin</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600">1,827</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-file-invoice text-purple-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">Contribution Validations</div>
                    <div className="text-sm text-text-muted">Contribution Mgmt</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-purple-600">124</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-triangle-exclamation text-red-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">Exceptions</div>
                    <div className="text-sm text-text-muted">Various</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-red-600">17</div>
              </div>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-text-dark">System Health</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-globe text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">Portal Status</div>
                    <div className="text-sm text-text-muted">Web Portal Services</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-green-600">99.8%</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-users text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">Active Users</div>
                    <div className="text-sm text-text-muted">Currently Online</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-blue-600">1,247</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-chart-line text-purple-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">Daily Requests</div>
                    <div className="text-sm text-text-muted">API Calls</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-purple-600">24.8K</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-gauge-high text-yellow-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">Avg Response Time</div>
                    <div className="text-sm text-text-muted">System Performance</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-yellow-600">142ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-text-dark">Quick Actions</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors text-left">
              <i className="fa-solid fa-calculator text-blue-600 text-2xl mb-2"></i>
              <div className="font-semibold text-text-dark">Accounting</div>
              <div className="text-sm text-text-muted">Manage payments</div>
            </button>
            <button className="p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition-colors text-left">
              <i className="fa-solid fa-hand-holding-dollar text-purple-600 text-2xl mb-2"></i>
              <div className="font-semibold text-text-dark">Contributions</div>
              <div className="text-sm text-text-muted">Process submissions</div>
            </button>
            <button className="p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition-colors text-left">
              <i className="fa-solid fa-users-gear text-green-600 text-2xl mb-2"></i>
              <div className="font-semibold text-text-dark">Member Admin</div>
              <div className="text-sm text-text-muted">Manage members</div>
            </button>
            <button className="p-4 border-2 border-yellow-200 rounded-lg hover:bg-yellow-50 transition-colors text-left">
              <i className="fa-solid fa-chart-pie text-yellow-600 text-2xl mb-2"></i>
              <div className="font-semibold text-text-dark">Fund Mgmt</div>
              <div className="text-sm text-text-muted">View portfolio</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardView;
