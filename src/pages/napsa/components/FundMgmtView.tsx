import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface Fund {
  name: string;
  unitPrice: number;
  fundBalance: number;
  marketValue: number;
}

interface USDFund {
  name: string;
  unitPrice: number;
  fundBalance: number;
  marketValue: number;
}

interface LegendItem {
  color: string;
  label: string;
}

const FundMgmtView: React.FC = () => {
  // Fund data
  const funds: Fund[] = [
    { name: 'Property Investment', unitPrice: 2.145670, fundBalance: 3247892.15, marketValue: 6970458.32 },
    { name: 'Equity Investment', unitPrice: 4.587234, fundBalance: 4156234.78, marketValue: 19062847.56 },
    { name: 'Bonds & Securities Investment', unitPrice: 1.923456, fundBalance: 5892456.42, marketValue: 11335891.27 },
    { name: 'Fixed Term', unitPrice: 1.234567, fundBalance: 2145678.90, marketValue: 2647259.14 },
    { name: 'Call Deposits Investment', unitPrice: 1.087654, fundBalance: 1523456.78, marketValue: 1655432.18 },
    { name: 'Collective Investments', unitPrice: 3.456789, fundBalance: 2678945.32, marketValue: 9254632.48 },
    { name: 'Offshore Investments', unitPrice: 2.765432, fundBalance: 1892345.67, marketValue: 5234567.89 },
    { name: 'Private Equity', unitPrice: 5.123456, fundBalance: 890234.56, marketValue: 4563789.12 },
  ];

  const usdFunds: USDFund[] = [
    { name: 'US Dollar High Yield Fund', unitPrice: 1.834562, fundBalance: 567234.89, marketValue: 1040298.47 },
    { name: 'US Dollar Fund', unitPrice: 1.456789, fundBalance: 892456.78, marketValue: 1300234.56 },
  ];

  const totalKwacha = funds.reduce((sum, fund) => sum + fund.marketValue, 0);
  const totalUSD = usdFunds.reduce((sum, fund) => sum + fund.marketValue, 0);

  // Chart data
  const assetAllocationData = [
    { name: 'Equities', value: 35.2, color: '#1e3a5f' },
    { name: 'Bonds & Securities', value: 28.7, color: '#f9a825' },
    { name: 'Property Investment', value: 18.9, color: '#4ba3e5' },
    { name: 'Fixed Deposits', value: 12.3, color: '#7ed321' },
    { name: 'Other Investments', value: 4.9, color: '#e8534a' },
  ];

  const ytmCurveData = [
    { maturity: '3M', yield: 8.2 },
    { maturity: '6M', yield: 8.5 },
    { maturity: '1Y', yield: 8.8 },
    { maturity: '2Y', yield: 9.1 },
    { maturity: '3Y', yield: 9.4 },
    { maturity: '5Y', yield: 9.8 },
    { maturity: '7Y', yield: 10.2 },
    { maturity: '10Y', yield: 10.5 },
  ];

  const propertyData = [
    { name: 'Office Buildings', value: 45.2 },
    { name: 'Retail Spaces', value: 32.1 },
    { name: 'Residential', value: 15.8 },
    { name: 'Industrial', value: 6.9 },
  ];

  const kwachaMaturitiesData = [
    { month: 'Jan', property: 120, equity: 85, bonds: 95, fixed: 45, deposits: 25 },
    { month: 'Feb', property: 135, equity: 92, bonds: 88, fixed: 52, deposits: 28 },
    { month: 'Mar', property: 148, equity: 78, bonds: 102, fixed: 48, deposits: 32 },
    { month: 'Apr', property: 156, equity: 105, bonds: 95, fixed: 55, deposits: 29 },
    { month: 'May', property: 142, equity: 98, bonds: 108, fixed: 51, deposits: 31 },
    { month: 'Jun', property: 165, equity: 112, bonds: 115, fixed: 58, deposits: 35 },
  ];

  const usdMaturitiesData = [
    { month: 'Jan', highYield: 8.5, usdFund: 12.2, offshore: 5.8, private: 3.2 },
    { month: 'Feb', highYield: 9.1, usdFund: 11.8, offshore: 6.2, private: 3.8 },
    { month: 'Mar', highYield: 7.8, usdFund: 13.5, offshore: 5.5, private: 4.1 },
    { month: 'Apr', highYield: 10.2, usdFund: 12.8, offshore: 6.8, private: 3.5 },
    { month: 'May', highYield: 8.9, usdFund: 14.1, offshore: 5.9, private: 4.2 },
    { month: 'Jun', highYield: 9.5, usdFund: 13.2, offshore: 7.1, private: 3.9 },
  ];

  const kwachaLegend: LegendItem[] = [
    { color: '#1e3a5f', label: 'Property Investment' },
    { color: '#f9a825', label: 'Equity Investment' },
    { color: '#4ba3e5', label: 'Bonds & Securities' },
    { color: '#7ed321', label: 'Fixed Term' },
    { color: '#e8534a', label: 'Call Deposits' },
    { color: '#c67ecc', label: 'Collective Investments' },
  ];

  const usdLegend: LegendItem[] = [
    { color: '#16a34a', label: 'US Dollar High Yield' },
    { color: '#0891b2', label: 'US Dollar Fund' },
    { color: '#e8534a', label: 'Offshore Investments' },
    { color: '#f9a825', label: 'Private Equity' },
  ];

  const formatCurrency = (value: number, currency: string = 'K') => {
    return `${currency} ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatNumber = (value: number) => {
    return value.toFixed(6);
  };

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto">
      <div className="text-xs text-gray-600 mb-6">Operations &gt; Fund Management</div>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">Fund Management</h1>
      <div className="text-base text-gray-600 mb-8 font-medium">
        Below is the summary of your fund position as at 2026-01-06
      </div>

      {/* Asset Allocation Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Asset Allocation</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-sm">Equities</span>
              </div>
              <span className="font-medium">35.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-sm">Bonds & Securities</span>
              </div>
              <span className="font-medium">28.7%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <span className="text-sm">Property Investment</span>
              </div>
              <span className="font-medium">18.9%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <span className="text-sm">Fixed Deposits</span>
              </div>
              <span className="font-medium">12.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <span className="text-sm">Other Investments</span>
              </div>
              <span className="font-medium">4.9%</span>
            </div>
          </div>
          <div className="mt-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={assetAllocationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {assetAllocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Attribution</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Equities</span>
              <span className="font-medium text-green-600">+4.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Bonds & Securities</span>
              <span className="font-medium text-green-600">+2.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Property Investment</span>
              <span className="font-medium text-green-600">+3.1%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Fixed Deposits</span>
              <span className="font-medium text-yellow-600">+1.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Other Investments</span>
              <span className="font-medium text-red-600">-0.3%</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <div className="text-sm text-blue-800">
              <strong>Top Contributor:</strong> Equities (+4.2% to total return)
              <br />
              <strong>Portfolio Return:</strong> +12.4% YTD
            </div>
          </div>
        </div>
      </div>

      {/* Individual Asset Class Drills */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Equity Portfolio</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Top 5 Holdings</span>
              <span className="text-xs text-gray-500">by value</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Zambia Sugar</span>
                <span className="font-medium">K 45.2M</span>
              </div>
              <div className="flex justify-between">
                <span>Zambia Breweries</span>
                <span className="font-medium">K 38.7M</span>
              </div>
              <div className="flex justify-between">
                <span>Copperbelt Energy</span>
                <span className="font-medium">K 32.1M</span>
              </div>
              <div className="flex justify-between">
                <span>Zambia National Comm.</span>
                <span className="font-medium">K 28.9M</span>
              </div>
              <div className="flex justify-between">
                <span>Copperbelt Cement</span>
                <span className="font-medium">K 25.4M</span>
              </div>
            </div>
            <div className="pt-3 border-t">
              <div className="flex justify-between text-sm">
                <span>Portfolio P/E Ratio</span>
                <span className="font-medium">14.2x</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Dividend Yield</span>
                <span className="font-medium">3.8%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bonds & Treasury Bills</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Yield to Maturity (YTM)</span>
              <span className="font-medium">9.4%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Average Portfolio Duration</span>
              <span className="font-medium">4.2 years</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Interest Receivable</span>
              <span className="font-medium">K 2.1M</span>
            </div>
          </div>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={ytmCurveData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="maturity" />
                <YAxis domain={[7, 11]} />
                <Tooltip formatter={(value) => [`${value}%`, 'YTM']} />
                <Line type="monotone" dataKey="yield" stroke="#f9a825" strokeWidth={2} dot={{ fill: '#f9a825' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Real Estate Portfolio</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Occupancy Rate</span>
              <span className="font-medium text-green-600">94.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Rental Collection Rate</span>
              <span className="font-medium text-green-600">97.1%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Monthly Rental Income</span>
              <span className="font-medium">K 2.8M</span>
            </div>
          </div>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={propertyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`K ${value}M`, 'Value']} />
                <Bar dataKey="value" fill="#4ba3e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Compliance & Alerts */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance & Alerts</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium mb-3">Policy Limit Monitoring</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Equities (Target: 30-40%)</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Within Range</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Bonds (Target: 25-35%)</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Within Range</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Property (Target: 15-25%)</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Near Limit</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Cash/Fixed (Target: 10-20%)</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Below Minimum</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Upcoming Events & Alerts</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <div>
                  <div className="text-sm font-medium">Government Bond Auction</div>
                  <div className="text-xs text-gray-600">Feb 15, 2026 - 5-year bonds</div>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">2 weeks</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <div className="text-sm font-medium">Zambia Sugar AGM</div>
                  <div className="text-xs text-gray-600">Mar 22, 2026</div>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">6 weeks</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <div>
                  <div className="text-sm font-medium">Bond Maturity</div>
                  <div className="text-xs text-gray-600">Zambia Govt Bond 2026A - K 50M</div>
                </div>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Critical</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fund Position Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
        {/* Kwacha Funds Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a3a52] text-white">
                  <th className="px-3 py-3 text-left font-semibold">Fund Name</th>
                  <th className="px-3 py-3 text-left font-semibold">Unit Price</th>
                  <th className="px-3 py-3 text-right font-semibold">Fund Balance</th>
                  <th className="px-3 py-3 text-right font-semibold">Market Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {funds.map((fund, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-3 text-gray-900 font-medium">{fund.name}</td>
                    <td className="px-3 py-3 text-gray-900 font-mono">{formatNumber(fund.unitPrice)}</td>
                    <td className="px-3 py-3 text-right text-gray-900 font-mono">{formatCurrency(fund.fundBalance)}</td>
                    <td className="px-3 py-3 text-right text-gray-900 font-mono">{formatCurrency(fund.marketValue)}</td>
                  </tr>
                ))}
                <tr className="bg-gray-100 font-semibold">
                  <td colSpan={3} className="px-3 py-4 text-gray-900">Total Fund under Management</td>
                  <td className="px-3 py-4 text-right text-gray-900 font-mono">{formatCurrency(totalKwacha)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* USD Funds Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a3a52] text-white">
                  <th className="px-3 py-3 text-left font-semibold">USD Fund Name</th>
                  <th className="px-3 py-3 text-left font-semibold">Unit Price</th>
                  <th className="px-3 py-3 text-right font-semibold">Fund Balance</th>
                  <th className="px-3 py-3 text-right font-semibold">Market Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {usdFunds.map((fund, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-3 text-gray-900 font-medium">{fund.name}</td>
                    <td className="px-3 py-3 text-gray-900 font-mono">{formatNumber(fund.unitPrice)}</td>
                    <td className="px-3 py-3 text-right text-gray-900 font-mono">{formatCurrency(fund.fundBalance, '$')}</td>
                    <td className="px-3 py-3 text-right text-gray-900 font-mono">{formatCurrency(fund.marketValue, '$')}</td>
                  </tr>
                ))}
                <tr className="bg-gray-100 font-semibold">
                  <td colSpan={3} className="px-3 py-4 text-gray-900">Total Fund under Management</td>
                  <td className="px-3 py-4 text-right text-gray-900 font-mono">{formatCurrency(totalUSD, '$')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Cash Maturities Section */}
      <div className="text-base text-gray-900 mb-8 mt-8 font-medium">
        The following is your cash maturities profile for the next 6 months.
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
        {/* Kwacha Maturities Chart */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-5">Maturities in K' Millions</h3>
          <div className="flex flex-wrap gap-4 mb-5 text-xs">
            {kwachaLegend.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {/* eslint-disable-next-line react/forbid-dom-props */}
                <div 
                  className="w-4 h-4 rounded-sm" 
                  style={{backgroundColor: item.color} as React.CSSProperties}
                />
                <span className="text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={kwachaMaturitiesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`K ${value}M`, '']} />
                <Bar dataKey="property" stackId="a" fill="#1e3a5f" />
                <Bar dataKey="equity" stackId="a" fill="#f9a825" />
                <Bar dataKey="bonds" stackId="a" fill="#4ba3e5" />
                <Bar dataKey="fixed" stackId="a" fill="#7ed321" />
                <Bar dataKey="deposits" stackId="a" fill="#e8534a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* USD Maturities Chart */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-5">Maturities in $' Millions</h3>
          <div className="flex flex-wrap gap-4 mb-5 text-xs">
            {usdLegend.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {/* eslint-disable-next-line react/forbid-dom-props */}
                <div 
                  className="w-4 h-4 rounded-sm" 
                  style={{backgroundColor: item.color} as React.CSSProperties}
                />
                <span className="text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usdMaturitiesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$ ${value}M`, '']} />
                <Bar dataKey="highYield" stackId="a" fill="#16a34a" />
                <Bar dataKey="usdFund" stackId="a" fill="#0891b2" />
                <Bar dataKey="offshore" stackId="a" fill="#e8534a" />
                <Bar dataKey="private" stackId="a" fill="#f9a825" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © 2026 ABC Asset Management Powered By Probase
      </div>
    </div>
  );
};

export default FundMgmtView;