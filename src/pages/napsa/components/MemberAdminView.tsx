import { useState } from 'react';

const MemberAdminView = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Member Administration</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Member Administration</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Total Members</div>
          <div className="text-3xl font-bold text-text-dark">248,592</div>
          <div className="text-xs text-green-600 mt-2">+1,234 this month</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Active Members</div>
          <div className="text-3xl font-bold text-text-dark">186,445</div>
          <div className="text-xs text-accent-blue mt-2">74.9% of total</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">Pending KYC</div>
          <div className="text-3xl font-bold text-text-dark">1,827</div>
          <div className="text-xs text-yellow-600 mt-2">Requires review</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-text-gray mb-2">New Registrations</div>
          <div className="text-3xl font-bold text-text-dark">89</div>
          <div className="text-xs text-accent-blue mt-2">Last 7 days</div>
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
              placeholder="Search by SSN, Name, NRC, or Phone Number..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <button className="bg-accent-gold text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
            <i className="fa-solid fa-search"></i> Search
          </button>
        </div>

        <div className="flex gap-3">
          <button className="bg-primary-navy text-white px-5 py-2 rounded-full font-medium text-sm flex items-center gap-2">
            <i className="fa-solid fa-user-plus"></i> New Member
          </button>
          <button className="border border-gray-300 text-text-dark px-5 py-2 rounded-full font-medium text-sm flex items-center gap-2">
            <i className="fa-solid fa-upload"></i> Bulk Upload
          </button>
          <button className="border border-gray-300 text-text-dark px-5 py-2 rounded-full font-medium text-sm flex items-center gap-2">
            <i className="fa-solid fa-file-export"></i> Export Data
          </button>
        </div>
      </div>

      {/* Member List/Results */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-text-dark mb-6">Member Registry</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">SSN</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Name</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">NRC</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Phone</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">KYC Status</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Status</th>
                <th className="pb-3 text-xs font-semibold text-text-gray uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">
                  Enter search criteria to find members.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberAdminView;