import { useState } from 'react';

const StakeholderMgmtView = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Stakeholder Management</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Stakeholder Management</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Total Stakeholders</div>
          <div className="text-3xl font-bold text-text-dark">156</div>
          <div className="text-xs text-green-600 mt-2">+5 this month</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Active Stakeholders</div>
          <div className="text-3xl font-bold text-text-dark">142</div>
          <div className="text-xs text-accent-blue mt-2">91.0% of total</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Pending Approvals</div>
          <div className="text-3xl font-bold text-text-dark">8</div>
          <div className="text-xs text-yellow-600 mt-2">Requires review</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">New Additions</div>
          <div className="text-3xl font-bold text-text-dark">12</div>
          <div className="text-xs text-accent-blue mt-2">Last 30 days</div>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Name, Role, Email, or Phone Number..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <button className="bg-accent-gold text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
            <i className="fa-solid fa-search"></i> Search
          </button>
        </div>

        <div className="flex gap-3">
          <button className="bg-primary-navy text-white px-5 py-2 rounded-full font-medium text-sm flex items-center gap-2">
            <i className="fa-solid fa-user-plus"></i> New Stakeholder
          </button>
          <button className="border border-gray-300 text-text-dark px-5 py-2 rounded-full font-medium text-sm flex items-center gap-2">
            <i className="fa-solid fa-upload"></i> Bulk Upload
          </button>
          <button className="border border-gray-300 text-text-dark px-5 py-2 rounded-full font-medium text-sm flex items-center gap-2">
            <i className="fa-solid fa-file-export"></i> Export Data
          </button>
        </div>
      </div>

      {/* Stakeholder List/Results */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-text-dark mb-6">Stakeholder Registry</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Name</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Role</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Email</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Phone</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Status</th>
                <th className="pb-3 text-xs font-semibold text-text-gray uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 text-text-dark font-medium">John Doe</td>
                <td className="py-3 pr-4 text-text-gray">Investor</td>
                <td className="py-3 pr-4 text-text-gray">john.doe@investcorp.com</td>
                <td className="py-3 pr-4 text-text-gray">+260 955 123 456</td>
                <td className="py-3 pr-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Active</span>
                </td>
                <td className="py-3">
                  <button className="text-accent-blue hover:text-blue-700 text-sm">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 text-text-dark font-medium">Jane Smith</td>
                <td className="py-3 pr-4 text-text-gray">Fund Advisor</td>
                <td className="py-3 pr-4 text-text-gray">jane.smith@advisory.com</td>
                <td className="py-3 pr-4 text-text-gray">+260 977 234 567</td>
                <td className="py-3 pr-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Active</span>
                </td>
                <td className="py-3">
                  <button className="text-accent-blue hover:text-blue-700 text-sm">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 text-text-dark font-medium">Michael Johnson</td>
                <td className="py-3 pr-4 text-text-gray">Regulator</td>
                <td className="py-3 pr-4 text-text-gray">michael.johnson@pensions.gov.zm</td>
                <td className="py-3 pr-4 text-text-gray">+260 211 345 678</td>
                <td className="py-3 pr-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Pending</span>
                </td>
                <td className="py-3">
                  <button className="text-accent-blue hover:text-blue-700 text-sm">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 text-text-dark font-medium">Sarah Williams</td>
                <td className="py-3 pr-4 text-text-gray">Partner</td>
                <td className="py-3 pr-4 text-text-gray">sarah.williams@partnerfirm.com</td>
                <td className="py-3 pr-4 text-text-gray">+260 966 456 789</td>
                <td className="py-3 pr-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Active</span>
                </td>
                <td className="py-3">
                  <button className="text-accent-blue hover:text-blue-700 text-sm">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-text-dark font-medium">David Brown</td>
                <td className="py-3 pr-4 text-text-gray">Auditor</td>
                <td className="py-3 pr-4 text-text-gray">david.brown@auditco.com</td>
                <td className="py-3 pr-4 text-text-gray">+260 955 567 890</td>
                <td className="py-3 pr-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Active</span>
                </td>
                <td className="py-3">
                  <button className="text-accent-blue hover:text-blue-700 text-sm">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StakeholderMgmtView;