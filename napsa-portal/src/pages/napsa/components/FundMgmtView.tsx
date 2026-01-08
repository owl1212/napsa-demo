import React from 'react';

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
          <div className="h-[200px] bg-gradient-to-br from-gray-50 to-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
            Chart visualization area
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
          <div className="h-[200px] bg-gradient-to-br from-gray-50 to-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
            Chart visualization area
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