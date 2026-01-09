import React from 'react';

const AdminDashboardLegacy: React.FC = () => {
  return (
    <div className="grid grid-cols-[260px_1fr] min-h-screen">
      {/* Sidebar */}
      <aside className="bg-white border-r border-border-color p-6 overflow-y-auto">
        <div className="text-xl font-bold text-primary-blue mb-8">LOLC Finance</div>

        <nav>
          <div className="py-2 px-4 mb-2 bg-primary-blue text-white rounded">Dashboard</div>

          <div className="mb-6">
            <div className="text-xs uppercase text-text-muted font-semibold mb-2">Onboarding</div>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">All Customers</a>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">Incomplete Profiles</a>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">Onboarding Validation</a>
          </div>

          <div className="mb-6">
            <div className="text-xs uppercase text-text-muted font-semibold mb-2">Loan Application</div>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">All Applications</a>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">Pending Applications <span className="bg-accent-red text-white text-xs px-2 py-1 rounded-full ml-2">12</span></a>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">Returned Applications</a>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">Approved Applications</a>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">Rejected Applications</a>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">Application Assignment</a>
          </div>

          <div className="mb-6">
            <div className="text-xs uppercase text-text-muted font-semibold mb-2">Account Application</div>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">Savings Account</a>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">Fixed Account</a>
          </div>

          <div className="mb-6">
            <div className="text-xs uppercase text-text-muted font-semibold mb-2">Product Management</div>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">Loan Products</a>
          </div>

          <div className="mb-6">
            <div className="text-xs uppercase text-text-muted font-semibold mb-2">Operations</div>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">FAU Confirmation</a>
          </div>

          <div className="mb-6">
            <div className="text-xs uppercase text-text-muted font-semibold mb-2">Referral Monitoring</div>
            <a href="#" className="block py-2 px-4 text-text-dark no-underline hover:bg-bg-dashboard">All Referrals</a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main>
        {/* Header */}
        <header className="h-16 bg-white border-b border-border-color px-6 flex justify-end items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-bg-dashboard rounded-full flex items-center justify-center text-primary-blue font-bold">PC</div>
            <span>Peter Chileshe (Admin)</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>

          {/* KPIs */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-md p-6 border shadow-sm">
              <div className="text-xs uppercase text-text-muted font-semibold mb-2">Active Users</div>
              <div className="text-3xl font-bold mb-1">12,450</div>
              <div className="text-sm text-success-green">▲ 12% vs last month</div>
            </div>
            <div className="bg-white rounded-md p-6 border shadow-sm">
              <div className="text-xs uppercase text-text-muted font-semibold mb-2">Pending Applications</div>
              <div className="text-3xl font-bold mb-1">48</div>
              <div className="text-sm text-accent-red">Needs Action</div>
            </div>
            <div className="bg-white rounded-md p-6 border shadow-sm">
              <div className="text-xs uppercase text-text-muted font-semibold mb-2">Disbursed This Month</div>
              <div className="text-3xl font-bold mb-1">K 5.2M</div>
              <div className="text-sm text-success-green">▲ 8% Target</div>
            </div>
            <div className="bg-white rounded-md p-6 border shadow-sm">
              <div className="text-xs uppercase text-text-muted font-semibold mb-2">Avg. Approval Time</div>
              <div className="text-3xl font-bold mb-1">4.2 Hrs</div>
              <div className="text-sm text-success-green">▼ 30% Improved</div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-md border shadow-sm">
            <div className="p-6 border-b border-border-color flex justify-between items-center">
              <h3 className="text-lg font-semibold">Recent Loan Applications</h3>
              <button className="bg-primary-blue text-white px-4 py-2 rounded text-sm">View All</button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border-color">
                  <th className="text-left p-4 text-text-muted text-xs uppercase font-semibold">Application ID</th>
                  <th className="text-left p-4 text-text-muted text-xs uppercase font-semibold">Applicant</th>
                  <th className="text-left p-4 text-text-muted text-xs uppercase font-semibold">Product</th>
                  <th className="text-left p-4 text-text-muted text-xs uppercase font-semibold">Amount</th>
                  <th className="text-left p-4 text-text-muted text-xs uppercase font-semibold">Date</th>
                  <th className="text-left p-4 text-text-muted text-xs uppercase font-semibold">Status</th>
                  <th className="text-left p-4 text-text-muted text-xs uppercase font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4"><a href="#" className="text-primary-blue font-semibold no-underline">LN-2025-001</a></td>
                  <td className="p-4">
                    <div>Mwase Simwase</div>
                    <div className="text-text-muted text-xs">NRC: 112233/11/1</div>
                  </td>
                  <td className="p-4">Salary Backed Loan</td>
                  <td className="p-4">K 25,000</td>
                  <td className="p-4">Oct 24, 2025</td>
                  <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Pending Review</span></td>
                  <td className="p-4"><a href="/loan-assessment" className="bg-primary-blue text-white px-3 py-1 rounded text-xs no-underline">Assess</a></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4"><a href="#" className="text-primary-blue font-semibold no-underline">LN-2025-002</a></td>
                  <td className="p-4">
                    <div>Chimuka Mutaka</div>
                    <div className="text-text-muted text-xs">NRC: 998877/22/1</div>
                  </td>
                  <td className="p-4">Auto Loan</td>
                  <td className="p-4">K 150,000</td>
                  <td className="p-4">Oct 24, 2025</td>
                  <td className="p-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Approved</span></td>
                  <td className="p-4"><a href="#" className="text-primary-blue font-semibold text-xs no-underline">View</a></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4"><a href="#" className="text-primary-blue font-semibold no-underline">LN-2025-003</a></td>
                  <td className="p-4">
                    <div>Faith Chulu</div>
                    <div className="text-text-muted text-xs">NRC: 445566/33/1</div>
                  </td>
                  <td className="p-4">Salary Backed Loan</td>
                  <td className="p-4">K 15,000</td>
                  <td className="p-4">Oct 23, 2025</td>
                  <td className="p-4"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">Rejected</span></td>
                  <td className="p-4"><a href="#" className="text-primary-blue font-semibold text-xs no-underline">View</a></td>
                </tr>
                <tr>
                  <td className="p-4"><a href="#" className="text-primary-blue font-semibold no-underline">LN-2025-004</a></td>
                  <td className="p-4">
                    <div>Samuel Mwale</div>
                    <div className="text-text-muted text-xs">NRC: 778899/44/1</div>
                  </td>
                  <td className="p-4">Personal Loan</td>
                  <td className="p-4">K 10,000</td>
                  <td className="p-4">Oct 23, 2025</td>
                  <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Pending Review</span></td>
                  <td className="p-4"><a href="#" className="bg-primary-blue text-white px-3 py-1 rounded text-xs no-underline">Assess</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardLegacy;