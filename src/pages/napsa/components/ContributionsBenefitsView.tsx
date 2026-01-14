import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ContributionsBenefitsView = () => {
  // Additional mock data for new sections
  const contributionsData = [
    { month: 'Jan', employer: 45, employee: 35, total: 80 },
    { month: 'Feb', employer: 48, employee: 37, total: 85 },
    { month: 'Mar', employer: 46, employee: 36, total: 82 },
    { month: 'Apr', employer: 50, employee: 38, total: 88 },
    { month: 'May', employer: 47, employee: 36, total: 83 },
    { month: 'Jun', employer: 49, employee: 37, total: 86 },
  ];

  const benefitPaymentsData = [
    { category: 'Pensions', amount: 25.5, count: 1250 },
    { category: 'Lump Sums', amount: 12.3, count: 85 },
    { category: 'Death Benefits', amount: 3.2, count: 42 },
    { category: 'Disability', amount: 1.8, count: 23 },
  ];

  const valuationDetailsData = [
    { component: 'Active Members', liability: 850, percentage: 46 },
    { component: 'Deferred Members', liability: 320, percentage: 17 },
    { component: 'Pensioners', liability: 680, percentage: 37 },
  ];

  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations {'>'} Actuarial {'>'} Contributions & Benefits</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Contributions & Benefits Analysis</h1>

      {/* F. CONTRIBUTIONS & CASH FLOW ANALYSIS */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-dark mb-4">F. CONTRIBUTIONS & CASH FLOW ANALYSIS</h3>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-sm font-semibold text-text-gray mb-4">Monthly Contribution Trends</h4>
          <BarChart width={800} height={300} data={contributionsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="employer" stackId="a" fill="#3b82f6" name="Employer (ZMW M)" />
            <Bar dataKey="employee" stackId="a" fill="#10b981" name="Employee (ZMW M)" />
          </BarChart>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600">ZMW 285M</div>
              <div className="text-sm text-blue-700">6-Month Employer</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-600">ZMW 219M</div>
              <div className="text-sm text-green-700">6-Month Employee</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-purple-600">ZMW 504M</div>
              <div className="text-sm text-purple-700">Total Contributions</div>
            </div>
            <div className="text-center p-3 bg-yellow-50 rounded-lg">
              <div className="text-lg font-bold text-yellow-600">84%</div>
              <div className="text-sm text-yellow-700">Collection Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* G. BENEFIT PAYMENTS MONITORING */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-dark mb-4">G. BENEFIT PAYMENTS MONITORING</h3>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-sm font-semibold text-text-gray mb-4">Monthly Benefit Payments by Category</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <BarChart width={350} height={250} data={benefitPaymentsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#ef4444" />
              </BarChart>
            </div>
            <div className="space-y-4">
              {benefitPaymentsData.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <div className="font-medium text-text-dark">{item.category}</div>
                    <div className="text-sm text-text-gray">{item.count} beneficiaries</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-text-dark">ZMW {item.amount}M</div>
                    <div className="text-sm text-text-gray">per month</div>
                  </div>
                </div>
              ))}
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-text-dark">Total Monthly Payments</div>
                <div className="text-xl font-bold text-red-600">ZMW 42.8M</div>
                <div className="text-sm text-text-gray">2,400 beneficiaries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* H. ACTUARIAL VALUATION BREAKDOWN */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-dark mb-4">H. ACTUARIAL VALUATION BREAKDOWN</h3>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-sm font-semibold text-text-gray mb-4">Liability Components</h4>
          <div className="space-y-4">
            {valuationDetailsData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="font-medium text-text-dark">{item.component}</div>
                  <div className="text-sm text-text-gray">Liability portion</div>
                </div>
                <div className="text-right mr-4">
                  <div className="font-bold text-text-dark">ZMW {item.liability}M</div>
                  <div className="text-sm text-text-gray">{item.percentage}% of total</div>
                </div>
                <div className="w-24">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-500 h-3 rounded-full"
                      style={{width: `${item.percentage}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="text-sm font-medium text-blue-800 mb-2">Valuation Summary</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-blue-600">ZMW 1.85B</div>
                <div className="text-sm text-blue-700">Total Liabilities</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-600">ZMW 1.68B</div>
                <div className="text-sm text-blue-700">Total Assets</div>
              </div>
              <div>
                <div className="text-lg font-bold text-yellow-600">90.8%</div>
                <div className="text-sm text-yellow-700">Funding Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionsBenefitsView;