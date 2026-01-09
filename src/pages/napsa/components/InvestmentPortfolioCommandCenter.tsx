import React from 'react';

const InvestmentPortfolioCommandCenter: React.FC = () => {
  // Mock data for demo
  const totalFundValue = 12500000000; // ZMW 12.5 Billion
  const ytdReturn = 8.45;
  const benchmarkReturn = 6.20;
  const incomeYTD = 450000000; // ZMW 450 Million

  const performanceAttribution = [
    { asset: 'Equity', contribution: 4.2 },
    { asset: 'Govt Bonds', contribution: 2.1 },
    { asset: 'Corp Bonds', contribution: 1.5 },
    { asset: 'Real Estate', contribution: 0.8 },
    { asset: 'Cash', contribution: -0.15 },
  ];

  const strategicAllocation = {
    target: { equity: 40, bonds: 35, property: 15, cash: 10 },
    actual: { equity: 42, bonds: 33, property: 16, cash: 9 },
  };

  const liquidity = {
    available: 1250000000, // ZMW 1.25 Billion
    outflows30: 750000000, // ZMW 750 Million
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* GLOBAL HEADER */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <div>
              <span className="text-sm text-gray-600">LuSE All-Share Index</span>
              <div className="text-lg font-bold">+1.23%</div>
            </div>
            <div>
              <span className="text-sm text-gray-600">10-Year Bond Yield</span>
              <div className="text-lg font-bold">12.45%</div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Today's Fund Change</span>
              <div className="text-lg font-bold text-green-600">+ZMW 45.2M</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-red-600 font-semibold">ALERT: T-Bill Maturity Tomorrow (ZMW 50M)</div>
            <div className="text-sm text-amber-600">Limit Breach: Corp Bond Exposure</div>
          </div>
        </div>
      </div>

      {/* A. PORTFOLIO AT-A-GLANCE & STRATEGIC OVERVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* 1. Total Fund Snapshot */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Total Fund Snapshot</h3>
          <div className="space-y-4">
            <div>
              <span className="text-sm text-gray-600">Market Value</span>
              <div className="text-2xl font-bold">ZMW {(totalFundValue / 1000000000).toFixed(1)}B</div>
            </div>
            <div>
              <span className="text-sm text-gray-600">YTD Return</span>
              <div className="text-xl font-semibold text-green-600">+{ytdReturn}% (vs {benchmarkReturn}%)</div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Income YTD</span>
              <div className="text-xl font-semibold">ZMW {(incomeYTD / 1000000).toFixed(0)}M</div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Performance Attribution</h4>
            <div className="space-y-1">
              {performanceAttribution.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <span>{item.asset}</span>
                  <span className={item.contribution > 0 ? 'text-green-600' : 'text-red-600'}>
                    {item.contribution > 0 ? '+' : ''}{item.contribution}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Strategic Asset Allocation */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Strategic Asset Allocation</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Target vs Actual</h4>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <span className="text-sm text-gray-600">Equity</span>
                  <div className="flex justify-between">
                    <span>Target: {strategicAllocation.target.equity}%</span>
                    <span className={Math.abs(strategicAllocation.actual.equity - strategicAllocation.target.equity) > 3 ? 'text-amber-600' : 'text-green-600'}>
                      Actual: {strategicAllocation.actual.equity}%
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Bonds</span>
                  <div className="flex justify-between">
                    <span>Target: {strategicAllocation.target.bonds}%</span>
                    <span className={Math.abs(strategicAllocation.actual.bonds - strategicAllocation.target.bonds) > 3 ? 'text-amber-600' : 'text-green-600'}>
                      Actual: {strategicAllocation.actual.bonds}%
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Property</span>
                  <div className="flex justify-between">
                    <span>Target: {strategicAllocation.target.property}%</span>
                    <span className={Math.abs(strategicAllocation.actual.property - strategicAllocation.target.property) > 3 ? 'text-amber-600' : 'text-green-600'}>
                      Actual: {strategicAllocation.actual.property}%
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Cash</span>
                  <div className="flex justify-between">
                    <span>Target: {strategicAllocation.target.cash}%</span>
                    <span className={Math.abs(strategicAllocation.actual.cash - strategicAllocation.target.cash) > 3 ? 'text-amber-600' : 'text-green-600'}>
                      Actual: {strategicAllocation.actual.cash}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Liquidity Monitor */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Liquidity & Cash Buffer</h3>
          <div className="space-y-4">
            <div>
              <span className="text-sm text-gray-600">Available for Deployment</span>
              <div className="text-xl font-bold">ZMW {(liquidity.available / 1000000000).toFixed(2)}B</div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Upcoming Outflows (30 days)</span>
              <div className="text-xl font-bold text-red-600">ZMW {(liquidity.outflows30 / 1000000000).toFixed(2)}B</div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Net Liquidity Position</span>
              <div className="text-xl font-bold text-green-600">
                ZMW {((liquidity.available - liquidity.outflows30) / 1000000000).toFixed(2)}B
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* B. ASSET CLASS DEEP DIVE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Equity Book Dashboard */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Equity Book</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-600">Total Value</span>
                <div className="text-lg font-bold">ZMW 5.2B</div>
              </div>
              <div>
                <span className="text-sm text-gray-600">YTD Return</span>
                <div className="text-lg font-bold text-green-600">+12.3%</div>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-600">P/E Ratio</span>
              <div className="text-lg font-bold">15.4</div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Dividend Yield</span>
              <div className="text-lg font-bold">4.2%</div>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Top Holdings</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>ZANACO</span>
                <span>ZMW 450M</span>
              </div>
              <div className="flex justify-between">
                <span>MTN ZAMBIA</span>
                <span>ZMW 380M</span>
              </div>
              <div className="flex justify-between">
                <span>AIRTEL ZAMBIA</span>
                <span>ZMW 320M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Income Dashboard */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Fixed Income</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-600">Total Value</span>
                <div className="text-lg font-bold">ZMW 4.1B</div>
              </div>
              <div>
                <span className="text-sm text-gray-600">Avg Yield</span>
                <div className="text-lg font-bold">11.8%</div>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Avg Duration</span>
              <div className="text-lg font-bold">4.2 years</div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Credit Rating</span>
              <div className="text-lg font-bold">BBB+</div>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Upcoming Maturities</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-red-600">
                <span>T-Bill #12345</span>
                <span>Tomorrow - ZMW 50M</span>
              </div>
              <div className="flex justify-between">
                <span>Govt Bond ZM001</span>
                <span>15 days - ZMW 120M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real Estate & Alternatives */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Real Estate & Alternatives</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-600">Total Value</span>
                <div className="text-lg font-bold">ZMW 1.9B</div>
              </div>
              <div>
                <span className="text-sm text-gray-600">Avg Yield</span>
                <div className="text-lg font-bold">8.5%</div>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Occupancy Rate</span>
              <div className="text-lg font-bold">92%</div>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Private Equity</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Fund A</span>
                <span>DPI: 1.2x</span>
              </div>
              <div className="flex justify-between">
                <span>Fund B</span>
                <span>DPI: 0.8x</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* C. EXECUTION & COMPLIANCE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Investment Action Pipeline</h3>
          <div className="space-y-2">
            <div className="p-3 bg-blue-50 rounded">
              <div className="font-semibold">Proposal: New Equity Investment</div>
              <div className="text-sm text-gray-600">Stage: Due Diligence - Assigned to John Doe</div>
            </div>
            <div className="p-3 bg-yellow-50 rounded">
              <div className="font-semibold">Bond Purchase</div>
              <div className="text-sm text-gray-600">Stage: Investment Committee - ZMW 200M</div>
            </div>
            <div className="p-3 bg-green-50 rounded">
              <div className="font-semibold">Property Acquisition</div>
              <div className="text-sm text-gray-600">Stage: Execution - Closing next week</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Compliance & Limits</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-green-50 rounded">
              <span>Single Issuer Exposure</span>
              <span className="text-green-600">4.5% / 5% ✓</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
              <span>Real Estate Allocation</span>
              <span className="text-yellow-600">16% / 15% ⚠</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-red-50 rounded">
              <span>Min Credit Rating (Corp Bonds)</span>
              <span className="text-red-600">1 holding below BBB- ✗</span>
            </div>
          </div>
        </div>
      </div>

      {/* D. RISK ANALYTICS & REPORTING */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Risk Exposure</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Sector Exposure</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Financials</span>
                  <span>35%</span>
                </div>
                <div className="flex justify-between">
                  <span>Telecom</span>
                  <span>25%</span>
                </div>
                <div className="flex justify-between">
                  <span>Consumer</span>
                  <span>20%</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Currency Exposure</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>ZMW</span>
                  <span>85%</span>
                </div>
                <div className="flex justify-between">
                  <span>USD</span>
                  <span>12%</span>
                </div>
                <div className="flex justify-between">
                  <span>GBP</span>
                  <span>3%</span>
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Portfolio Duration</span>
              <div className="text-lg font-bold">4.8 years</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">One-Click Reports</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600">
              Quarterly Investment Report
            </button>
            <button className="p-3 bg-green-500 text-white rounded hover:bg-green-600">
              Portfolio Valuation Export
            </button>
            <button className="p-3 bg-purple-500 text-white rounded hover:bg-purple-600">
              Equity Movement Report
            </button>
            <button className="p-3 bg-orange-500 text-white rounded hover:bg-orange-600">
              What-If Scenario Tool
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPortfolioCommandCenter;