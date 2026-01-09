import React from 'react';

const DashboardView: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-dark mb-2">My Dashboard</h1>
        <p className="text-text-muted">Welcome to your pension account overview</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Member Summary Card */}
        <div className="bg-white rounded-md p-6 shadow-sm border">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Member Summary</h3>
              <div className="text-sm text-text-gray">
                Social Security Number <strong className="text-text-dark">113292218</strong> <i className="fa-regular fa-copy ml-1"></i>
              </div>
            </div>
            <button className="px-3 py-1 bg-accent-gold text-white rounded text-sm">
              <i className="fa-regular fa-eye mr-1"></i> Show
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-blue rounded flex items-center justify-center text-white">
                  <i className="fa-solid fa-landmark"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Formal Sector</h4>
                  <div className="text-lg font-bold">K XXX.XX</div>
                  <div className="text-xs text-text-gray">Contributions: 44</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">0</div>
                <div className="text-xs text-accent-blue cursor-pointer">Eligible Claim(s)</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-gold rounded flex items-center justify-center text-white">
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <div>
                <h4 className="font-semibold">Informal Sector</h4>
                <div className="text-lg font-bold">K XXX.XX</div>
                <div className="text-xs text-text-gray">Contributions: 0</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-transparent text-accent-gold rounded flex items-center justify-center">
                <i className="fa-solid fa-user-check"></i>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-accent-blue">KYC Status</h4>
                <div className="w-full h-2 bg-primary-navy rounded overflow-hidden mt-1">
                  <div className="w-3/10 h-full bg-accent-gold"></div>
                </div>
              </div>
              <i className="fa-solid fa-circle-info text-text-gray"></i>
            </div>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="bg-white rounded-md p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-6">Quick Actions</h3>

          <div className="space-y-3">
            <button className="w-full p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors text-left flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-layer-group text-blue-600 text-xl"></i>
              </div>
              <div>
                <div className="font-semibold text-text-dark">View Contributions</div>
                <div className="text-sm text-text-muted">Check your contribution history</div>
              </div>
            </button>

            <button className="w-full p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition-colors text-left flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-wallet text-green-600 text-xl"></i>
              </div>
              <div>
                <div className="font-semibold text-text-dark">Benefits</div>
                <div className="text-sm text-text-muted">View and manage your claims</div>
              </div>
            </button>

            <button className="w-full p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition-colors text-left flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-user-gear text-purple-600 text-xl"></i>
              </div>
              <div>
                <div className="font-semibold text-text-dark">Manage Account</div>
                <div className="text-sm text-text-muted">Update your KYC information</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;