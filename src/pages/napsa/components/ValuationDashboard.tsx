import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, BarChart, Bar } from 'recharts';

const ValuationDashboard = () => {
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

  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations {'>'} Actuarial {'>'} Valuation Dashboard</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Valuation Dashboard</h1>

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
              <li> Declining support ratio (3.5:1)</li>
              <li> High sensitivity to discount rate</li>
              <li> Longevity experience above assumption</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium text-text-gray">Compliance</div>
            <div className="text-sm text-text-dark mt-1 space-y-1">
              <div className="flex items-center">
                <span className="text-green-600 mr-2"></span> PIA Report: SUBMITTED
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
              <div className="text-xs text-red-600"> Declining</div>
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
    </div>
  );
};

export default ValuationDashboard;
