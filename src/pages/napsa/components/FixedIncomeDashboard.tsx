import React from 'react';

const FixedIncomeDashboard: React.FC = () => {
  const holdings = [
    { isin: 'ZM001', name: 'Government Bond 2025', coupon: 12.5, maturity: '2025-06-15', accrued: 125000, value: 500000000 },
    { isin: 'ZM002', name: 'Government Bond 2027', coupon: 11.8, maturity: '2027-03-20', accrued: 98000, value: 450000000 },
    { isin: 'TB001', name: 'T-Bill 91-Day', coupon: 0, maturity: '2024-01-10', accrued: 0, value: 100000000 },
    { isin: 'CB001', name: 'ZANACO Corporate Bond', coupon: 13.2, maturity: '2026-09-30', accrued: 156000, value: 200000000 },
    { isin: 'CB002', name: 'CEC Corporate Bond', coupon: 14.1, maturity: '2025-12-15', accrued: 134000, value: 150000000 },
  ];

  const yieldCurve = [
    { maturity: '3M', yield: 10.5 },
    { maturity: '6M', yield: 11.2 },
    { maturity: '1Y', yield: 11.8 },
    { maturity: '2Y', yield: 12.1 },
    { maturity: '5Y', yield: 12.8 },
    { maturity: '10Y', yield: 13.2 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Fixed Income Dashboard</h2>

      {/* Summary Tile */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <span className="text-sm text-gray-600">Total Fixed Income Value</span>
            <div className="text-2xl font-bold">ZMW 1.4B</div>
          </div>
          <div>
            <span className="text-sm text-gray-600">Average Portfolio Yield</span>
            <div className="text-xl font-semibold">12.1%</div>
          </div>
          <div>
            <span className="text-sm text-gray-600">Average Duration</span>
            <div className="text-xl font-semibold">4.2 years</div>
          </div>
          <div>
            <span className="text-sm text-gray-600">Credit Rating (Avg)</span>
            <div className="text-xl font-semibold">BBB+</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Holdings & Income Calendar */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Holdings & Maturity Calendar</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Security</th>
                  <th className="text-right p-2">Coupon</th>
                  <th className="text-left p-2">Maturity</th>
                  <th className="text-right p-2">Accrued</th>
                  <th className="text-right p-2">Value (ZMW)</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding, idx) => (
                  <tr key={idx} className={`border-b hover:bg-gray-50 ${new Date(holding.maturity) < new Date(Date.now() + 30*24*60*60*1000) ? 'bg-yellow-50' : ''}`}>
                    <td className="p-2">
                      <div>
                        <div className="font-semibold">{holding.isin}</div>
                        <div className="text-xs text-gray-600">{holding.name}</div>
                      </div>
                    </td>
                    <td className="text-right p-2">{holding.coupon.toFixed(1)}%</td>
                    <td className="p-2">{holding.maturity}</td>
                    <td className="text-right p-2">{holding.accrued.toLocaleString()}</td>
                    <td className="text-right p-2">{(holding.value / 1000000).toFixed(0)}M</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded">
            <div className="text-sm">
              <span className="font-semibold">Daily Interest Accrual:</span> ZMW 45,230
            </div>
          </div>
        </div>

        {/* Yield Curve */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Yield Curve & Analytics</h3>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Portfolio Yield Profile</h4>
            <div className="space-y-2">
              {yieldCurve.map((point, idx) => (
                <div key={idx} className="flex justify-between">
                  <span>{point.maturity}</span>
                  <span className="font-semibold">{point.yield.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Key Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Weighted Avg YTM</span>
                <span className="font-semibold">12.1%</span>
              </div>
              <div className="flex justify-between">
                <span>Modified Duration</span>
                <span className="font-semibold">4.2 years</span>
              </div>
              <div className="flex justify-between">
                <span>Convexity</span>
                <span className="font-semibold">18.5</span>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Record Bond Purchase
            </button>
            <button className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
              Process Maturity
            </button>
            <button className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              Generate Yield Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedIncomeDashboard;