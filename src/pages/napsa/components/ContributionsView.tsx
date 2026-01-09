import { useState } from 'react';

const ContributionsView = () => {
  const [activeTab, setActiveTab] = useState('formal');

  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Home &gt; Member &gt; Contributions</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Contribution History</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <i className="fa-solid fa-landmark"></i>
            </div>
            <h3 className="text-sm font-semibold text-text-gray">Formal Sector Total</h3>
          </div>
          <div className="text-2xl font-bold text-text-dark mb-1">K 19,972.42</div>
          <div className="text-xs text-text-gray">44 Contributions</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <h3 className="text-sm font-semibold text-text-gray">Informal Sector Total</h3>
          </div>
          <div className="text-2xl font-bold text-text-dark mb-1">K 0.00</div>
          <div className="text-xs text-text-gray">0 Contributions</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-center">
          <button className="bg-accent-gold text-white px-8 py-3 rounded-full font-medium text-sm">
            <i className="fa-solid fa-check-circle mr-2"></i> Verify Contributions
          </button>
        </div>
      </div>

      {/* Contributions Table */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        {/* Tabs */}
        <div className="flex gap-4 border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('formal')}
            className={`pb-3 px-4 font-medium text-sm ${
              activeTab === 'formal'
                ? 'text-accent-blue border-b-2 border-accent-blue'
                : 'text-gray-500'
            }`}
          >
            Formal Sector
          </button>
          <button
            onClick={() => setActiveTab('informal')}
            className={`pb-3 px-4 font-medium text-sm ${
              activeTab === 'informal'
                ? 'text-accent-blue border-b-2 border-accent-blue'
                : 'text-gray-500'
            }`}
          >
            Informal Sector
          </button>
        </div>

        {/* Date Filters */}
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-text-dark hover:bg-gray-50">
            <i className="fa-regular fa-calendar mr-2"></i> Start Date
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-text-dark hover:bg-gray-50">
            <i className="fa-regular fa-calendar mr-2"></i> End Date
          </button>
          <button className="px-4 py-2 bg-accent-blue text-white rounded-lg text-sm font-medium">
            View All
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Period</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Employer</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Gross Salary</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Employee</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Employer</th>
                <th className="pb-3 pr-4 text-xs font-semibold text-text-gray uppercase">Total</th>
                <th className="pb-3 text-xs font-semibold text-text-gray uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">
                  No contribution records found for the selected period.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContributionsView;