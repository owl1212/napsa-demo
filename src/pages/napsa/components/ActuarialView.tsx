import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

const ActuarialView = () => {
  // State for sensitivity calculator
  const [discountRate, setDiscountRate] = useState(5.0);
  const [salaryGrowth, setSalaryGrowth] = useState(4.5);

  // Mock data for charts
  const fundingTrendData = [
    { year: '2020', fundingRatio: 90, assets: 1.45, liabilities: 1.61 },
    { year: '2021', fundingRatio: 92, assets: 1.52, liabilities: 1.65 },
    { year: '2022', fundingRatio: 91, assets: 1.58, liabilities: 1.73 },
    { year: '2023', fundingRatio: 90, assets: 1.62, liabilities: 1.80 },
    { year: '2024', fundingRatio: 90.8, assets: 1.68, liabilities: 1.85 },
  ];

  const supportRatioData = [
    { year: '2020', active: 100, retiree: 26 },
    { year: '2021', active: 98, retiree: 28 },
    { year: '2022', active: 95, retiree: 30 },
    { year: '2023', active: 92, retiree: 32 },
    { year: '2024', active: 90, retiree: 34 },
  ];

  const longevityData = [
    { category: 'Expected Deaths', value: 42 },
    { category: 'Actual Deaths', value: 40 },
  ];

  // Additional mock data for new sections
  const assetAllocationData = [
    { name: 'Equities', value: 45, color: '#10b981' },
    { name: 'Fixed Income', value: 30, color: '#3b82f6' },
    { name: 'Real Estate', value: 15, color: '#f59e0b' },
    { name: 'Alternatives', value: 10, color: '#ef4444' },
  ];

  const performanceData = [
    { month: 'Jan', portfolio: 2.1, benchmark: 1.8 },
    { month: 'Feb', portfolio: 1.9, benchmark: 2.2 },
    { month: 'Mar', portfolio: 2.5, benchmark: 2.0 },
    { month: 'Apr', portfolio: 1.8, benchmark: 1.5 },
    { month: 'May', portfolio: 2.2, benchmark: 2.1 },
    { month: 'Jun', portfolio: 2.0, benchmark: 1.9 },
  ];

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

  // Calculate sensitivity results
  const baseLiabilities = 1.85;
  const baseFundingRatio = 90.8;
  const discountImpact = (5.0 - discountRate) * 0.37; // Rough estimate
  const salaryImpact = (salaryGrowth - 4.5) * 0.05; // Rough estimate
  const newLiabilities = baseLiabilities + discountImpact + salaryImpact;
  const newFundingRatio = (1.68 / newLiabilities) * 100;

  const handleScenario = (scenario: string) => {
    if (scenario === 'market') {
      setDiscountRate(5.0);
      setSalaryGrowth(4.5);
      // Simulate market shock: assets -20%, but since it's demo, just show result
    } else if (scenario === 'longevity') {
      setDiscountRate(5.0);
      setSalaryGrowth(4.5);
      // Simulate longevity shock
    }
  };

  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Actuarial & Scheme Sustainability</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Actuarial Dashboard</h1>

      {/* RISK BRIEFING HEADER */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-text-dark">RISK BRIEFING</h2>
          <div className="text-sm text-text-gray">
            <i className="fa-solid fa-clock mr-1"></i>
            47 days to next valuation
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <div className="text-sm font-medium text-text-gray">Top Risks</div>
            <ul className="text-sm text-text-dark mt-1 space-y-1">
              <li>• Declining support ratio (3.5:1)</li>
              <li>• High sensitivity to discount rate</li>
              <li>• Longevity experience above assumption</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium text-text-gray">Compliance</div>
            <div className="text-sm text-text-dark mt-1 space-y-1">
              <div className="flex items-center">
                <span className="text-green-600 mr-2">✓</span> PIA Report: SUBMITTED
              </div>
              <div className="flex items-center">
                <span className="text-orange-600 mr-2">!</span> Board Report: DUE 30 Apr
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <button className="bg-accent-gold text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-yellow-600 transition-colors">
              <i className="fa-solid fa-download mr-2"></i> GENERATE PIA REPORT DATA
            </button>
          </div>
        </div>
      </div>

      {/* A. VALUATION CORE METRICS */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-dark mb-4">A. VALUATION CORE METRICS</h3>
        
        {/* 1. Funding Health at a Glance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Liabilities</h4>
            <div className="text-3xl font-bold text-text-dark mb-2">ZMW 1.85B</div>
            <div className="text-sm text-text-gray">Latest valuation</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Assets</h4>
            <div className="text-3xl font-bold text-text-dark mb-2">ZMW 1.68B</div>
            <div className="text-sm text-text-gray">Live from investments</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Funding Ratio</h4>
            <div className="text-3xl font-bold text-yellow-600 mb-2">90.8%</div>
            <div className="text-sm text-yellow-700 font-medium">AMBER WATCH</div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-yellow-500 h-3 rounded-full" style={{width: '90.8%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 5-Year Funding Trend */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-sm font-semibold text-text-gray mb-4">5-Year Funding Trend</h4>
          <LineChart width={800} height={300} data={fundingTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="fundingRatio" stroke="#f59e0b" strokeWidth={2} name="Funding Ratio (%)" />
            <Line type="monotone" dataKey="assets" stroke="#10b981" strokeWidth={2} name="Assets (B ZMW)" />
            <Line type="monotone" dataKey="liabilities" stroke="#ef4444" strokeWidth={2} name="Liabilities (B ZMW)" />
          </LineChart>
          <div className="mt-4 text-xs text-text-gray">
            <i className="fa-solid fa-info-circle mr-1"></i>
            Q3 2022: Contribution increase implemented
          </div>
        </div>
      </div>

      {/* B. SUPPORT RATIO ANALYSIS */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-dark mb-4">B. SUPPORT RATIO ANALYSIS</h3>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-sm font-semibold text-text-gray mb-4">Active to Retiree Ratio Trends</h4>
          <AreaChart width={800} height={300} data={supportRatioData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="active" stackId="1" stroke="#3b82f6" fill="#3b82f6" name="Active Members" />
            <Area type="monotone" dataKey="retiree" stackId="1" stroke="#ef4444" fill="#ef4444" name="Retirees" />
          </AreaChart>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">3.5:1</div>
              <div className="text-sm text-text-gray">Current Ratio</div>
              <div className="text-xs text-red-600">▼ Declining</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-text-dark">41.2</div>
              <div className="text-sm text-text-gray">Avg Active Age</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-text-dark">58.7</div>
              <div className="text-sm text-text-gray">Avg Retirement Age</div>
            </div>
          </div>
        </div>
      </div>

      {/* C. LONGEVITY RISK MONITORING */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-dark mb-4">C. LONGEVITY RISK MONITORING</h3>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-sm font-semibold text-text-gray mb-4">Mortality Experience vs Assumptions</h4>
          <BarChart width={600} height={300} data={longevityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#10b981" />
          </BarChart>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-sm font-medium text-green-800 mb-2">Positive Impact</div>
              <div className="text-lg font-bold text-green-600">+1.2 years</div>
              <div className="text-sm text-green-700">Longer life expectancy than assumed</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-sm font-medium text-blue-800 mb-2">Liability Impact</div>
              <div className="text-lg font-bold text-blue-600">+ZMW 45M</div>
              <div className="text-sm text-blue-700">Additional pension payments</div>
            </div>
          </div>
        </div>
      </div>

      {/* D. ASSUMPTION SENSITIVITY CALCULATOR */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-dark mb-4">D. ASSUMPTION SENSITIVITY CALCULATOR</h3>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-sm font-semibold text-text-gray mb-4">Live Sensitivity Calculator</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-gray mb-2">
                  Discount Rate: {discountRate.toFixed(1)}%
                </label>
                <input
                  type="range"
                  min="3.0"
                  max="7.0"
                  step="0.1"
                  value={discountRate}
                  onChange={(e) => setDiscountRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-text-gray mt-1">
                  <span>3.0%</span>
                  <span>7.0%</span>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-gray mb-2">
                  Salary Growth: {salaryGrowth.toFixed(1)}%
                </label>
                <input
                  type="range"
                  min="3.0"
                  max="6.0"
                  step="0.1"
                  value={salaryGrowth}
                  onChange={(e) => setSalaryGrowth(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-text-gray mt-1">
                  <span>3.0%</span>
                  <span>6.0%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-text-gray mb-2">Instant Results</div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Liabilities Increase:</span>
                    <span className="font-medium text-red-600">+ZMW {(newLiabilities - baseLiabilities).toFixed(3)}B (+{((newLiabilities - baseLiabilities) / baseLiabilities * 100).toFixed(1)}%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">New Funding Ratio:</span>
                    <span className={`font-medium ${newFundingRatio < 85 ? 'text-red-600' : newFundingRatio < 90 ? 'text-yellow-600' : 'text-green-600'}`}>
                      {newFundingRatio.toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Required Contribution Increase:</span>
                    <span className="font-medium text-red-600">+{((baseLiabilities / baseFundingRatio * 100 - baseLiabilities / newFundingRatio * 100) / (baseLiabilities / newFundingRatio * 100) * 100).toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* E. STRESS TESTING SCENARIOS */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-dark mb-4">E. STRESS TESTING SCENARIOS</h3>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-sm font-semibold text-text-gray mb-4">Quick Scenario Analysis</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => handleScenario('market')}
              className="p-4 border border-red-200 bg-red-50 rounded-lg text-left hover:bg-red-100 transition-colors"
            >
              <div className="font-medium text-red-800">Market Crash Scenario</div>
              <div className="text-sm text-red-600">Assets -20%, Interest rates +2%</div>
              <div className="text-lg font-bold text-red-800 mt-1">Funding = 72.6%</div>
              <div className="text-xs text-red-600">Recovery: 5-7 years</div>
            </button>
            <button
              onClick={() => handleScenario('longevity')}
              className="p-4 border border-orange-200 bg-orange-50 rounded-lg text-left hover:bg-orange-100 transition-colors"
            >
              <div className="font-medium text-orange-800">Longevity Shock</div>
              <div className="text-sm text-orange-600">Life expectancy +2 years</div>
              <div className="text-lg font-bold text-orange-800 mt-1">Liabilities = +ZMW 92M</div>
              <div className="text-xs text-orange-600">Permanent increase</div>
            </button>
            <button
              onClick={() => handleScenario('inflation')}
              className="p-4 border border-purple-200 bg-purple-50 rounded-lg text-left hover:bg-purple-100 transition-colors"
            >
              <div className="font-medium text-purple-800">Inflation Surge</div>
              <div className="text-sm text-purple-600">Inflation +5%, Wages +3%</div>
              <div className="text-lg font-bold text-purple-800 mt-1">Liabilities = +ZMW 156M</div>
              <div className="text-xs text-purple-600">Indexation impact</div>
            </button>
            <button
              onClick={() => handleScenario('pandemic')}
              className="p-4 border border-blue-200 bg-blue-50 rounded-lg text-left hover:bg-blue-100 transition-colors"
            >
              <div className="font-medium text-blue-800">Pandemic Impact</div>
              <div className="text-sm text-blue-600">Mortality +15%, Contributions -10%</div>
              <div className="text-lg font-bold text-blue-800 mt-1">Funding = 85.2%</div>
              <div className="text-xs text-blue-600">Recovery: 3-5 years</div>
            </button>
          </div>
        </div>
      </div>

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

      {/* D. DATA QUALITY & WORKFLOW */}
      <div>
        <h3 className="text-lg font-semibold text-text-dark mb-4">D. DATA QUALITY & WORKFLOW</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1. Extract Status Monitor */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Extract Status Monitor</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Last Extract:</span>
                <span className="text-sm font-medium">15 Mar 2024, 14:30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Status:</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">UNDER REVIEW</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Portal:</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">CLOSED</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Next Valuation:</span>
                <span className="text-sm font-medium">47 days (31 May 2024)</span>
              </div>
            </div>
          </div>

          {/* 2. Critical Data Flags */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Critical Data Flags</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-red-600">
                  <i className="fa-solid fa-exclamation-triangle mr-1"></i>
                  CRITICAL: 15 members
                </span>
                <span className="text-xs text-red-600">retirement date &lt; join date</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-yellow-600">
                  <i className="fa-solid fa-exclamation-triangle mr-1"></i>
                  WARNING: 200 actives
                </span>
                <span className="text-xs text-yellow-600">zero contributions (12mo)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600">
                  <i className="fa-solid fa-check-circle mr-1"></i>
                  CLEAN: Member/beneficiary alignment
                </span>
                <span className="text-xs text-green-600">99.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* E. INVESTMENT PORTFOLIO ANALYSIS */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-dark mb-4">E. INVESTMENT PORTFOLIO ANALYSIS</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Asset Allocation */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Asset Allocation</h4>
            <PieChart width={300} height={250}>
              <Pie
                data={assetAllocationData}
                cx={150}
                cy={125}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }: any) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
              >
                {assetAllocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div className="mt-4 text-sm text-text-gray">
              Total Portfolio Value: ZMW 1.68B
            </div>
          </div>

          {/* Performance vs Benchmark */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">6-Month Performance vs Benchmark</h4>
            <LineChart width={350} height={250} data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="portfolio" stroke="#10b981" strokeWidth={2} name="Portfolio Return (%)" />
              <Line type="monotone" dataKey="benchmark" stroke="#6b7280" strokeWidth={2} name="Benchmark (%)" />
            </LineChart>
            <div className="mt-4 flex justify-between text-sm">
              <span>YTD Return:</span>
              <span className="font-medium text-green-600">12.5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>vs Benchmark:</span>
              <span className="font-medium text-green-600">+0.8%</span>
            </div>
          </div>
        </div>
      </div>

      {/* F. COMPLIANCE & GOVERNANCE DASHBOARD */}
      <div>
        <h3 className="text-lg font-semibold text-text-dark mb-4">F. COMPLIANCE & GOVERNANCE DASHBOARD</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Regulatory Filings */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Regulatory Filings Status</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Annual Report 2024</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Filed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">PIA Compliance Report</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">In Review</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Audit Report Q4</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Overdue</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Board Minutes</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Approved</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-accent-gold text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-yellow-600 transition-colors">
              <i className="fa-solid fa-upload mr-2"></i> Upload Document
            </button>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Upcoming Deadlines</h4>
            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-400 bg-red-50 rounded">
                <div className="text-sm font-medium text-red-800">Board Meeting</div>
                <div className="text-xs text-red-600">March 15, 2024 - 2 days</div>
                <div className="text-xs text-red-600">Agenda: Valuation Review</div>
              </div>
              <div className="p-3 border-l-4 border-yellow-400 bg-yellow-50 rounded">
                <div className="text-sm font-medium text-yellow-800">PIA Report Submission</div>
                <div className="text-xs text-yellow-600">March 31, 2024 - 16 days</div>
                <div className="text-xs text-yellow-600">Annual compliance filing</div>
              </div>
              <div className="p-3 border-l-4 border-blue-400 bg-blue-50 rounded">
                <div className="text-sm font-medium text-blue-800">Risk Assessment</div>
                <div className="text-xs text-blue-600">April 30, 2024 - 46 days</div>
                <div className="text-xs text-blue-600">Quarterly review</div>
              </div>
            </div>
          </div>

          {/* Risk Register Updates */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Risk Register Summary</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm">High Risk Items</span>
                </div>
                <span className="text-lg font-bold text-red-600">3</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-sm">Medium Risk Items</span>
                </div>
                <span className="text-lg font-bold text-yellow-600">7</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Low Risk Items</span>
                </div>
                <span className="text-lg font-bold text-green-600">12</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium text-text-gray mb-1">Latest Update</div>
              <div className="text-xs text-text-gray">
                Investment risk assessment updated - March 10, 2024
              </div>
            </div>
            <button className="mt-4 w-full border border-gray-300 text-text-dark px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors">
              <i className="fa-solid fa-eye mr-2"></i> View Full Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActuarialView;