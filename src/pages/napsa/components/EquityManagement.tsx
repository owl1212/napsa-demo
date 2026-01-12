import React, { useState } from 'react';

const EquityManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('portfolio');

  const holdings = [
    {
      id: 'ZANACO',
      name: 'Zambia National Commercial Bank',
      sector: 'Financials',
      shares: 1000000,
      avgCost: 12.50,
      currentPrice: 14.25,
      marketValue: 14250000,
      unrealizedGain: 1750000,
      dividendYield: 4.2,
      peRatio: 8.5,
      marketCap: 'Large',
      lastUpdated: '2024-01-09'
    },
    {
      id: 'MTN',
      name: 'MTN Zambia',
      sector: 'Telecommunications',
      shares: 800000,
      avgCost: 8.75,
      currentPrice: 9.80,
      marketValue: 7840000,
      unrealizedGain: 840000,
      dividendYield: 5.1,
      peRatio: 12.3,
      marketCap: 'Large',
      lastUpdated: '2024-01-09'
    },
    {
      id: 'AIRTEL',
      name: 'Airtel Zambia',
      sector: 'Telecommunications',
      shares: 600000,
      avgCost: 15.20,
      currentPrice: 16.85,
      marketValue: 10110000,
      unrealizedGain: 990000,
      dividendYield: 3.8,
      peRatio: 15.2,
      marketCap: 'Large',
      lastUpdated: '2024-01-09'
    },
    {
      id: 'CEC',
      name: 'Copperbelt Energy Corporation',
      sector: 'Utilities',
      shares: 400000,
      avgCost: 22.30,
      currentPrice: 20.15,
      marketValue: 8060000,
      unrealizedGain: -860000,
      dividendYield: 2.9,
      peRatio: 10.8,
      marketCap: 'Mid',
      lastUpdated: '2024-01-09'
    },
    {
      id: 'ZCCM',
      name: 'ZCCM Investments Holdings',
      sector: 'Basic Materials',
      shares: 300000,
      avgCost: 9.85,
      currentPrice: 8.90,
      marketValue: 2670000,
      unrealizedGain: -285000,
      dividendYield: 1.2,
      peRatio: 6.7,
      marketCap: 'Mid',
      lastUpdated: '2024-01-09'
    }
  ];

  const totalPortfolioValue = holdings.reduce((sum, holding) => sum + holding.marketValue, 0);
  const totalUnrealizedGain = holdings.reduce((sum, holding) => sum + holding.unrealizedGain, 0);
  const totalDividendIncome = holdings.reduce((sum, holding) => sum + (holding.marketValue * holding.dividendYield / 100), 0);
  const averagePERatio = holdings.reduce((sum, holding) => sum + holding.peRatio, 0) / holdings.length;

  const sectorAllocation = holdings.reduce((acc, holding) => {
    acc[holding.sector] = (acc[holding.sector] || 0) + holding.marketValue;
    return acc;
  }, {} as Record<string, number>);

  const topPerformers = holdings
    .map(holding => ({
      ...holding,
      returnPct: ((holding.currentPrice - holding.avgCost) / holding.avgCost) * 100
    }))
    .sort((a, b) => b.returnPct - a.returnPct)
    .slice(0, 3);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Equity Management</h1>
        <p className="text-gray-600">Comprehensive equity portfolio management and trading</p>
      </div>

      {/* Portfolio Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500">Total Portfolio Value</h3>
          <p className="text-2xl font-bold text-gray-900">ZMW {(totalPortfolioValue / 1000000).toFixed(1)}M</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500">Unrealized P&L</h3>
          <p className={`text-2xl font-bold ${totalUnrealizedGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ZMW {(totalUnrealizedGain / 1000000).toFixed(1)}M
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500">Annual Dividend Income</h3>
          <p className="text-2xl font-bold text-blue-600">ZMW {(totalDividendIncome / 1000000).toFixed(1)}M</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500">Average P/E Ratio</h3>
          <p className="text-2xl font-bold text-purple-600">{averagePERatio.toFixed(1)}x</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'portfolio'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Portfolio Holdings
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'analytics'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Performance Analytics
            </button>
            <button
              onClick={() => setActiveTab('trading')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'trading'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Trading
            </button>
            <button
              onClick={() => setActiveTab('dividends')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'dividends'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Dividend Management
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'portfolio' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Equity Holdings</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add New Holding
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Stock Details</th>
                      <th className="text-right p-3">Shares</th>
                      <th className="text-right p-3">Avg Cost</th>
                      <th className="text-right p-3">Current Price</th>
                      <th className="text-right p-3">Market Value</th>
                      <th className="text-right p-3">Unrealized P&L</th>
                      <th className="text-center p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((holding) => (
                      <tr key={holding.id} className="border-b hover:bg-gray-50">
                        <td className="p-3">
                          <div>
                            <div className="font-semibold">{holding.name}</div>
                            <div className="text-xs text-gray-600">Code: {holding.id} | Sector: {holding.sector}</div>
                            <div className="text-xs text-gray-600">P/E: {holding.peRatio}x | Yield: {holding.dividendYield}%</div>
                          </div>
                        </td>
                        <td className="text-right p-3">{holding.shares.toLocaleString()}</td>
                        <td className="text-right p-3">ZMW {holding.avgCost.toFixed(2)}</td>
                        <td className="text-right p-3 font-semibold">ZMW {holding.currentPrice.toFixed(2)}</td>
                        <td className="text-right p-3 font-semibold">ZMW {(holding.marketValue / 1000000).toFixed(1)}M</td>
                        <td className={`text-right p-3 font-semibold ${
                          holding.unrealizedGain >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          ZMW {(holding.unrealizedGain / 1000000).toFixed(1)}M
                        </td>
                        <td className="text-center p-3">
                          <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
                          <button className="text-green-600 hover:text-green-800 mr-2">Buy</button>
                          <button className="text-red-600 hover:text-red-800">Sell</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Performance Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Sector Allocation</h3>
                  <div className="space-y-2">
                    {Object.entries(sectorAllocation).map(([sector, value]) => (
                      <div key={sector} className="flex justify-between">
                        <span>{sector}</span>
                        <span className="font-semibold">
                          {((value / totalPortfolioValue) * 100).toFixed(1)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Top Performers</h3>
                  <div className="space-y-2">
                    {topPerformers.map((stock, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>{stock.name}</span>
                        <span className={`font-semibold ${
                          stock.returnPct >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stock.returnPct >= 0 ? '+' : ''}{stock.returnPct.toFixed(1)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Valuation Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Average P/E</span>
                      <span className="font-semibold">{averagePERatio.toFixed(1)}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Dividend Yield</span>
                      <span className="font-semibold">3.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Portfolio Beta</span>
                      <span className="font-semibold">1.05</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Risk Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Volatility (30-day)</span>
                      <span className="font-semibold text-yellow-600">12.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Max Drawdown</span>
                      <span className="font-semibold text-red-600">-8.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sharpe Ratio</span>
                      <span className="font-semibold">1.45</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Market Cap Distribution</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Large Cap</span>
                      <span className="font-semibold">60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mid Cap</span>
                      <span className="font-semibold">40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Small Cap</span>
                      <span className="font-semibold">0%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'trading' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Equity Trading</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Buy Stocks</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Stock Selection</label>
                      <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                        <option>Select a stock...</option>
                        <option>ZANACO - Zambia National Commercial Bank</option>
                        <option>MTN - MTN Zambia</option>
                        <option>AIRTEL - Airtel Zambia</option>
                        <option>CEC - Copperbelt Energy Corporation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Number of Shares</label>
                      <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="10000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Price per Share (ZMW)</label>
                      <input type="number" step="0.01" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="14.25" />
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="marketOrder" className="mr-2" />
                      <label htmlFor="marketOrder" className="text-sm">Market Order (execute at best available price)</label>
                    </div>
                    <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                      Place Buy Order
                    </button>
                  </div>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Sell Stocks</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Select Holding</label>
                      <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                        <option>Select holding...</option>
                        {holdings.map(holding => (
                          <option key={holding.id}>{holding.name} ({holding.shares.toLocaleString()} shares)</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Shares to Sell</label>
                      <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="50000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Sell Price (ZMW)</label>
                      <input type="number" step="0.01" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="14.25" />
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="marketOrderSell" className="mr-2" />
                      <label htmlFor="marketOrderSell" className="text-sm">Market Order (execute at best available price)</label>
                    </div>
                    <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                      Place Sell Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Order Book & Recent Transactions</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Date/Time</th>
                        <th className="text-left p-2">Stock</th>
                        <th className="text-center p-2">Type</th>
                        <th className="text-right p-2">Shares</th>
                        <th className="text-right p-2">Price</th>
                        <th className="text-right p-2">Total Value</th>
                        <th className="text-center p-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">2024-01-09 14:30</td>
                        <td className="p-2">ZANACO</td>
                        <td className="text-center p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">BUY</span></td>
                        <td className="text-right p-2">50,000</td>
                        <td className="text-right p-2">14.25</td>
                        <td className="text-right p-2">ZMW 712,500</td>
                        <td className="text-center p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Executed</span></td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">2024-01-09 11:15</td>
                        <td className="p-2">MTN Zambia</td>
                        <td className="text-center p-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">SELL</span></td>
                        <td className="text-right p-2">25,000</td>
                        <td className="text-right p-2">9.80</td>
                        <td className="text-right p-2">ZMW 245,000</td>
                        <td className="text-center p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span></td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">2024-01-08 16:45</td>
                        <td className="p-2">Airtel Zambia</td>
                        <td className="text-center p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">BUY</span></td>
                        <td className="text-right p-2">30,000</td>
                        <td className="text-right p-2">16.85</td>
                        <td className="text-right p-2">ZMW 505,500</td>
                        <td className="text-center p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Executed</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dividends' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Dividend Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Upcoming Dividends</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <div>
                        <div className="font-medium">ZANACO</div>
                        <div className="text-sm text-gray-600">Ex-dividend: Jan 15, 2024</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">ZMW 0.60</div>
                        <div className="text-sm text-gray-600">per share</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <div>
                        <div className="font-medium">MTN Zambia</div>
                        <div className="text-sm text-gray-600">Ex-dividend: Jan 22, 2024</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">ZMW 0.50</div>
                        <div className="text-sm text-gray-600">per share</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Dividend History</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Total YTD Dividends</span>
                      <span className="font-semibold text-green-600">ZMW 2.1M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dividend Yield</span>
                      <span className="font-semibold">3.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reinvestment Rate</span>
                      <span className="font-semibold">85%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold mb-3">Dividend Reinvestment Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Default Action</label>
                    <select className="block w-full border-gray-300 rounded-md shadow-sm">
                      <option>Reinvest Automatically</option>
                      <option>Deposit to Cash Account</option>
                      <option>Manual Decision</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tax Withholding</label>
                    <select className="block w-full border-gray-300 rounded-md shadow-sm">
                      <option>Automatic (15%)</option>
                      <option>Manual Entry</option>
                      <option>No Withholding</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                      Update Preferences
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EquityManagement;