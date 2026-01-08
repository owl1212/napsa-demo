import React from 'react';

const DashboardView: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6 text-sm text-text-gray">Dashboard</div>

      <div className="grid grid-cols-2 gap-6">
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

        {/* Employer Accounts Summary */}
        <div className="bg-white rounded-md p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-6">Employer Accounts Summary</h3>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold">0</h3>
              <span className="text-sm text-text-gray">Total</span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">0</h3>
              <span className="text-sm text-text-gray">Active</span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">0</h3>
              <span className="text-sm text-text-gray">Suspended</span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">0</h3>
              <span className="text-sm text-text-gray">Ceased</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 cursor-pointer text-accent-blue">
              <i className="fa-regular fa-pen-to-square"></i>
              <span>Register an Employer Account</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer text-accent-blue">
              <i className="fa-solid fa-folder-plus"></i>
              <span>Attach Existing Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;