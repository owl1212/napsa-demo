import React from 'react';

const EquityBookDashboard: React.FC = () => {
  const holdings = [
    { code: 'ZANACO', name: 'Zambia National Commercial Bank', price: 12.50, change: 1.25, value: 450000000, gain: 25000000, gainPct: 5.88 },
    { code: 'MTN', name: 'MTN Zambia', price: 8.75, change: -0.45, value: 380000000, gain: -15000000, gainPct: -3.79 },
    { code: 'AIRTEL', name: 'Airtel Zambia', price: 15.20, change: 0.80, value: 320000000, gain: 18000000, gainPct: 5.96 },
    { code: 'CEC', name: 'Copperbelt Energy Corp', price: 22.30, change: 2.10, value: 280000000, gain: 35000000, gainPct: 14.29 },
    { code: 'ZCCM', name: 'ZCCM Investments', price: 9.85, change: -0.15, value: 220000000, gain: -5000000, gainPct: -2.22 },
  ];

  const topHoldings = [
    { name: 'ZANACO', value: 450000000 },
    { name: 'MTN Zambia', value: 380000000 },
    { name: 'Airtel Zambia', value: 320000000 },
    { name: 'CEC', value: 280000000 },
    { name: 'ZCCM', value: 220000000 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Equity Book Dashboard</h2>

      {/* Summary Tile */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <span className="text-sm text-gray-600">Total Equity Value</span>
            <div className="text-2xl font-bold">ZMW 1.65B</div>
          </div>
          <div>
            <span className="text-sm text-gray-600">YTD Return</span>
            <div className="text-xl font-semibold text-green-600">+12.3%</div>
          </div>
          <div>
            <span className="text-sm text-gray-600">Portfolio P/E</span>
            <div className="text-xl font-semibold">15.4</div>
          </div>
          <div>
            <span className="text-sm text-gray-600">Dividend Yield</span>
            <div className="text-xl font-semibold">4.2%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Grid */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Holdings Performance</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Stock</th>
                  <th className="text-right p-2">Price</th>
                  <th className="text-right p-2">Change %</th>
                  <th className="text-right p-2">Value (ZMW)</th>
                  <th className="text-right p-2">Unrealized P&L</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="p-2">
                      <div>
                        <div className="font-semibold">{holding.code}</div>
                        <div className="text-xs text-gray-600">{holding.name}</div>
                      </div>
                    </td>
                    <td className="text-right p-2">{holding.price.toFixed(2)}</td>
                    <td className={`text-right p-2 ${holding.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {holding.change > 0 ? '+' : ''}{holding.change.toFixed(2)}%
                    </td>
                    <td className="text-right p-2">{(holding.value / 1000000).toFixed(0)}M</td>
                    <td className={`text-right p-2 ${holding.gain > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {holding.gain > 0 ? '+' : ''}{(holding.gain / 1000000).toFixed(0)}M
                      <br />
                      <span className="text-xs">({holding.gainPct > 0 ? '+' : ''}{holding.gainPct.toFixed(2)}%)</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Concentration Risk */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Concentration Risk</h3>
          <div className="mb-4">
            <span className="text-sm text-gray-600">% in Top 5 Holdings</span>
            <div className="text-2xl font-bold text-red-600">68.5%</div>
          </div>
          <div className="space-y-2">
            {topHoldings.map((holding, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span>{holding.name}</span>
                <span className="font-semibold">{(holding.value / 1000000).toFixed(0)}M</span>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2">
            <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Record Dividend
            </button>
            <button className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
              Import Share Prices
            </button>
            <button className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-500">
              Initiate Sale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquityBookDashboard;