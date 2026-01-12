import { useState } from 'react';

const ContributionsView = () => {
  const [activeTab, setActiveTab] = useState('formal');

  // Mock data for formal sector contributions
  const formalContributions = [
    { period: 'Dec 2024', employer: 'Zambia Mining Corp', grossSalary: 8500.00, employeeContrib: 425.00, employerContrib: 637.50, total: 1062.50, status: 'Paid' },
    { period: 'Nov 2024', employer: 'Zambia Mining Corp', grossSalary: 8500.00, employeeContrib: 425.00, employerContrib: 637.50, total: 1062.50, status: 'Paid' },
    { period: 'Oct 2024', employer: 'Zambia Mining Corp', grossSalary: 8200.00, employeeContrib: 410.00, employerContrib: 615.00, total: 1025.00, status: 'Paid' },
    { period: 'Sep 2024', employer: 'Zambia Mining Corp', grossSalary: 8200.00, employeeContrib: 410.00, employerContrib: 615.00, total: 1025.00, status: 'Paid' },
    { period: 'Aug 2024', employer: 'Zambia Mining Corp', grossSalary: 8000.00, employeeContrib: 400.00, employerContrib: 600.00, total: 1000.00, status: 'Paid' },
    { period: 'Jul 2024', employer: 'Zambia Mining Corp', grossSalary: 8000.00, employeeContrib: 400.00, employerContrib: 600.00, total: 1000.00, status: 'Paid' },
    { period: 'Jun 2024', employer: 'Zambia Mining Corp', grossSalary: 7800.00, employeeContrib: 390.00, employerContrib: 585.00, total: 975.00, status: 'Paid' },
    { period: 'May 2024', employer: 'Zambia Mining Corp', grossSalary: 7800.00, employeeContrib: 390.00, employerContrib: 585.00, total: 975.00, status: 'Paid' },
    { period: 'Apr 2024', employer: 'Zambia Mining Corp', grossSalary: 7500.00, employeeContrib: 375.00, employerContrib: 562.50, total: 937.50, status: 'Paid' },
    { period: 'Mar 2024', employer: 'Zambia Mining Corp', grossSalary: 7500.00, employeeContrib: 375.00, employerContrib: 562.50, total: 937.50, status: 'Paid' },
    { period: 'Feb 2024', employer: 'Zambia Mining Corp', grossSalary: 7200.00, employeeContrib: 360.00, employerContrib: 540.00, total: 900.00, status: 'Paid' },
    { period: 'Jan 2024', employer: 'Zambia Mining Corp', grossSalary: 7200.00, employeeContrib: 360.00, employerContrib: 540.00, total: 900.00, status: 'Paid' },
    { period: 'Dec 2023', employer: 'Zambia Mining Corp', grossSalary: 7000.00, employeeContrib: 350.00, employerContrib: 525.00, total: 875.00, status: 'Paid' },
    { period: 'Nov 2023', employer: 'Zambia Mining Corp', grossSalary: 7000.00, employeeContrib: 350.00, employerContrib: 525.00, total: 875.00, status: 'Paid' },
    { period: 'Oct 2023', employer: 'Zambia Mining Corp', grossSalary: 6800.00, employeeContrib: 340.00, employerContrib: 510.00, total: 850.00, status: 'Paid' },
    { period: 'Sep 2023', employer: 'Zambia Mining Corp', grossSalary: 6800.00, employeeContrib: 340.00, employerContrib: 510.00, total: 850.00, status: 'Paid' },
    { period: 'Aug 2023', employer: 'Zambia Mining Corp', grossSalary: 6500.00, employeeContrib: 325.00, employerContrib: 487.50, total: 812.50, status: 'Paid' },
    { period: 'Jul 2023', employer: 'Zambia Mining Corp', grossSalary: 6500.00, employeeContrib: 325.00, employerContrib: 487.50, total: 812.50, status: 'Paid' },
    { period: 'Jun 2023', employer: 'Zambia Mining Corp', grossSalary: 6200.00, employeeContrib: 310.00, employerContrib: 465.00, total: 775.00, status: 'Paid' },
    { period: 'May 2023', employer: 'Zambia Mining Corp', grossSalary: 6200.00, employeeContrib: 310.00, employerContrib: 465.00, total: 775.00, status: 'Paid' },
    { period: 'Apr 2023', employer: 'Zambia Mining Corp', grossSalary: 6000.00, employeeContrib: 300.00, employerContrib: 450.00, total: 750.00, status: 'Paid' },
    { period: 'Mar 2023', employer: 'Zambia Mining Corp', grossSalary: 6000.00, employeeContrib: 300.00, employerContrib: 450.00, total: 750.00, status: 'Paid' },
    { period: 'Feb 2023', employer: 'Zambia Mining Corp', grossSalary: 5800.00, employeeContrib: 290.00, employerContrib: 435.00, total: 725.00, status: 'Paid' },
    { period: 'Jan 2023', employer: 'Zambia Mining Corp', grossSalary: 5800.00, employeeContrib: 290.00, employerContrib: 435.00, total: 725.00, status: 'Paid' },
    { period: 'Dec 2022', employer: 'Zambia Mining Corp', grossSalary: 5500.00, employeeContrib: 275.00, employerContrib: 412.50, total: 687.50, status: 'Paid' },
    { period: 'Nov 2022', employer: 'Zambia Mining Corp', grossSalary: 5500.00, employeeContrib: 275.00, employerContrib: 412.50, total: 687.50, status: 'Paid' },
    { period: 'Oct 2022', employer: 'Zambia Mining Corp', grossSalary: 5200.00, employeeContrib: 260.00, employerContrib: 390.00, total: 650.00, status: 'Paid' },
    { period: 'Sep 2022', employer: 'Zambia Mining Corp', grossSalary: 5200.00, employeeContrib: 260.00, employerContrib: 390.00, total: 650.00, status: 'Paid' },
    { period: 'Aug 2022', employer: 'Zambia Mining Corp', grossSalary: 5000.00, employeeContrib: 250.00, employerContrib: 375.00, total: 625.00, status: 'Paid' },
    { period: 'Jul 2022', employer: 'Zambia Mining Corp', grossSalary: 5000.00, employeeContrib: 250.00, employerContrib: 375.00, total: 625.00, status: 'Paid' },
    { period: 'Jun 2022', employer: 'Zambia Mining Corp', grossSalary: 4800.00, employeeContrib: 240.00, employerContrib: 360.00, total: 600.00, status: 'Paid' },
    { period: 'May 2022', employer: 'Zambia Mining Corp', grossSalary: 4800.00, employeeContrib: 240.00, employerContrib: 360.00, total: 600.00, status: 'Paid' },
    { period: 'Apr 2022', employer: 'Zambia Mining Corp', grossSalary: 4500.00, employeeContrib: 225.00, employerContrib: 337.50, total: 562.50, status: 'Paid' },
    { period: 'Mar 2022', employer: 'Zambia Mining Corp', grossSalary: 4500.00, employeeContrib: 225.00, employerContrib: 337.50, total: 562.50, status: 'Paid' },
    { period: 'Feb 2022', employer: 'Zambia Mining Corp', grossSalary: 4200.00, employeeContrib: 210.00, employerContrib: 315.00, total: 525.00, status: 'Paid' },
    { period: 'Jan 2022', employer: 'Zambia Mining Corp', grossSalary: 4200.00, employeeContrib: 210.00, employerContrib: 315.00, total: 525.00, status: 'Paid' },
    { period: 'Dec 2021', employer: 'Zambia Mining Corp', grossSalary: 4000.00, employeeContrib: 200.00, employerContrib: 300.00, total: 500.00, status: 'Paid' },
    { period: 'Nov 2021', employer: 'Zambia Mining Corp', grossSalary: 4000.00, employeeContrib: 200.00, employerContrib: 300.00, total: 500.00, status: 'Paid' },
    { period: 'Oct 2021', employer: 'Zambia Mining Corp', grossSalary: 3800.00, employeeContrib: 190.00, employerContrib: 285.00, total: 475.00, status: 'Paid' },
    { period: 'Sep 2021', employer: 'Zambia Mining Corp', grossSalary: 3800.00, employeeContrib: 190.00, employerContrib: 285.00, total: 475.00, status: 'Paid' },
    { period: 'Aug 2021', employer: 'Zambia Mining Corp', grossSalary: 3500.00, employeeContrib: 175.00, employerContrib: 262.50, total: 437.50, status: 'Paid' },
    { period: 'Jul 2021', employer: 'Zambia Mining Corp', grossSalary: 3500.00, employeeContrib: 175.00, employerContrib: 262.50, total: 437.50, status: 'Paid' },
    { period: 'Jun 2021', employer: 'Zambia Mining Corp', grossSalary: 3200.00, employeeContrib: 160.00, employerContrib: 240.00, total: 400.00, status: 'Paid' },
    { period: 'May 2021', employer: 'Zambia Mining Corp', grossSalary: 3200.00, employeeContrib: 160.00, employerContrib: 240.00, total: 400.00, status: 'Paid' },
  ];

  // Mock data for informal sector contributions
  const informalContributions = [
    { period: 'Dec 2024', employer: 'Self-Employed', grossSalary: 2500.00, employeeContrib: 125.00, employerContrib: 0.00, total: 125.00, status: 'Paid' },
    { period: 'Nov 2024', employer: 'Self-Employed', grossSalary: 2400.00, employeeContrib: 120.00, employerContrib: 0.00, total: 120.00, status: 'Paid' },
    { period: 'Oct 2024', employer: 'Self-Employed', grossSalary: 2300.00, employeeContrib: 115.00, employerContrib: 0.00, total: 115.00, status: 'Paid' },
    { period: 'Sep 2024', employer: 'Self-Employed', grossSalary: 2200.00, employeeContrib: 110.00, employerContrib: 0.00, total: 110.00, status: 'Paid' },
    { period: 'Aug 2024', employer: 'Self-Employed', grossSalary: 2100.00, employeeContrib: 105.00, employerContrib: 0.00, total: 105.00, status: 'Paid' },
  ];

  // Calculate totals
  const formalTotal = formalContributions.reduce((sum: number, contrib: any) => sum + contrib.total, 0);
  const formalCount = formalContributions.length;
  const informalTotal = informalContributions.reduce((sum: number, contrib: any) => sum + contrib.total, 0);
  const informalCount = informalContributions.length;

  // Current contributions based on active tab
  const currentContributions = activeTab === 'formal' ? formalContributions : informalContributions;

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
          <div className="text-2xl font-bold text-text-dark mb-1">K {formalTotal.toFixed(2)}</div>
          <div className="text-xs text-text-gray">{formalCount} Contributions</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <h3 className="text-sm font-semibold text-text-gray">Informal Sector Total</h3>
          </div>
          <div className="text-2xl font-bold text-text-dark mb-1">K {informalTotal.toFixed(2)}</div>
          <div className="text-xs text-text-gray">{informalCount} Contributions</div>
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
              {currentContributions.length > 0 ? (
                currentContributions.map((contribution, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 pr-4">{contribution.period}</td>
                    <td className="py-3 pr-4">{contribution.employer}</td>
                    <td className="py-3 pr-4">K {contribution.grossSalary.toFixed(2)}</td>
                    <td className="py-3 pr-4">K {contribution.employeeContrib.toFixed(2)}</td>
                    <td className="py-3 pr-4">K {contribution.employerContrib.toFixed(2)}</td>
                    <td className="py-3 pr-4 font-medium">K {contribution.total.toFixed(2)}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        contribution.status === 'Paid' ? 'bg-green-100 text-green-800' :
                        contribution.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {contribution.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-gray-500">
                    No contribution records found for the selected period.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContributionsView;