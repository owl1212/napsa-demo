import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Plus, DollarSign, TrendingUp, BarChart3, Clock } from 'lucide-react';

const BondManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [selectedBond, setSelectedBond] = useState<any>(null);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showSellModal, setShowSellModal] = useState(false);
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [notification, setNotification] = useState('');

  const bonds = [
    {
      id: 'ZM001',
      name: 'Government Bond 2025A',
      isin: 'ZM0000000001',
      cusip: 'ZMGB2025A',
      coupon: 12.5,
      maturity: '2025-06-15',
      faceValue: 100000000,
      marketValue: 102500000,
      bookValue: 98000000,
      yield: 11.8,
      ytm: 11.8,
      duration: 2.3,
      convexity: 0.056,
      creditRating: 'AAA',
      ratingAgency: 'S&P',
      issuer: 'Government of Zambia',
      sector: 'Government',
      purchaseDate: '2023-06-15',
      purchasePrice: 98000000,
      purchaseYield: 13.2,
      accruedInterest: 1250000,
      lastPrice: 102.5,
      bidPrice: 102.3,
      askPrice: 102.7,
      volume: 2500000,
      outstanding: 500000000,
      currency: 'ZMW',
      paymentFrequency: 'Semi-Annual',
      callable: false,
      putable: false,
      convertible: false,
      seniority: 'Senior Unsecured',
      collateral: 'Government Guarantee',
      domicile: 'Zambia',
      benchmark: 'Zambia Government Bond Index',
      liquidity: 'High',
      tradeStatus: 'Active'
    },
    {
      id: 'ZM002',
      name: 'Government Bond 2027B',
      isin: 'ZM0000000002',
      cusip: 'ZMGB2027B',
      coupon: 11.8,
      maturity: '2027-03-20',
      faceValue: 150000000,
      marketValue: 148000000,
      bookValue: 145000000,
      yield: 12.1,
      ytm: 12.1,
      duration: 3.8,
      convexity: 0.089,
      creditRating: 'AAA',
      ratingAgency: 'S&P',
      issuer: 'Government of Zambia',
      sector: 'Government',
      purchaseDate: '2023-03-20',
      purchasePrice: 145000000,
      purchaseYield: 12.5,
      accruedInterest: 2212500,
      lastPrice: 98.7,
      bidPrice: 98.5,
      askPrice: 98.9,
      volume: 1800000,
      outstanding: 750000000,
      currency: 'ZMW',
      paymentFrequency: 'Semi-Annual',
      callable: false,
      putable: false,
      convertible: false,
      seniority: 'Senior Unsecured',
      collateral: 'Government Guarantee',
      domicile: 'Zambia',
      benchmark: 'Zambia Government Bond Index',
      liquidity: 'High',
      tradeStatus: 'Active'
    },
    {
      id: 'CB001',
      name: 'ZANACO Corporate Bond 2026',
      isin: 'ZM0000000003',
      cusip: 'ZMCB2026',
      coupon: 13.2,
      maturity: '2026-09-30',
      faceValue: 50000000,
      marketValue: 48500000,
      bookValue: 49000000,
      yield: 14.1,
      ytm: 14.1,
      duration: 2.1,
      convexity: 0.042,
      creditRating: 'BBB+',
      ratingAgency: 'S&P',
      issuer: 'Zambia National Commercial Bank',
      sector: 'Financial Services',
      purchaseDate: '2024-03-15',
      purchasePrice: 49000000,
      purchaseYield: 13.8,
      accruedInterest: 825000,
      lastPrice: 97.0,
      bidPrice: 96.8,
      askPrice: 97.2,
      volume: 800000,
      outstanding: 200000000,
      currency: 'ZMW',
      paymentFrequency: 'Semi-Annual',
      callable: true,
      putable: false,
      convertible: false,
      seniority: 'Senior Unsecured',
      collateral: 'Unsecured',
      domicile: 'Zambia',
      benchmark: 'Zambia Corporate Bond Index',
      liquidity: 'Medium',
      tradeStatus: 'Active'
    },
    {
      id: 'CB002',
      name: 'Investrust Corporate Bond 2028',
      isin: 'ZM0000000004',
      cusip: 'ZMCB2028',
      coupon: 12.8,
      maturity: '2028-11-15',
      faceValue: 75000000,
      marketValue: 74250000,
      bookValue: 72000000,
      yield: 13.2,
      ytm: 13.2,
      duration: 3.2,
      convexity: 0.067,
      creditRating: 'BBB',
      ratingAgency: 'S&P',
      issuer: 'Investrust Bank PLC',
      sector: 'Financial Services',
      purchaseDate: '2024-05-10',
      purchasePrice: 72000000,
      purchaseYield: 13.5,
      accruedInterest: 1200000,
      lastPrice: 99.0,
      bidPrice: 98.8,
      askPrice: 99.2,
      volume: 600000,
      outstanding: 150000000,
      currency: 'ZMW',
      paymentFrequency: 'Semi-Annual',
      callable: true,
      putable: false,
      convertible: false,
      seniority: 'Senior Unsecured',
      collateral: 'Unsecured',
      domicile: 'Zambia',
      benchmark: 'Zambia Corporate Bond Index',
      liquidity: 'Medium',
      tradeStatus: 'Active'
    },
    {
      id: 'CB003',
      name: 'Zambia Breweries Corporate Bond 2029',
      isin: 'ZM0000000005',
      cusip: 'ZMCB2029',
      coupon: 11.5,
      maturity: '2029-07-30',
      faceValue: 60000000,
      marketValue: 61800000,
      bookValue: 58500000,
      yield: 11.8,
      ytm: 11.8,
      duration: 4.1,
      convexity: 0.098,
      creditRating: 'BBB+',
      ratingAgency: 'S&P',
      issuer: 'Zambia Breweries PLC',
      sector: 'Consumer Goods',
      purchaseDate: '2024-01-20',
      purchasePrice: 58500000,
      purchaseYield: 12.2,
      accruedInterest: 862500,
      lastPrice: 103.0,
      bidPrice: 102.8,
      askPrice: 103.2,
      volume: 400000,
      outstanding: 120000000,
      currency: 'ZMW',
      paymentFrequency: 'Semi-Annual',
      callable: false,
      putable: true,
      convertible: false,
      seniority: 'Senior Unsecured',
      collateral: 'Unsecured',
      domicile: 'Zambia',
      benchmark: 'Zambia Corporate Bond Index',
      liquidity: 'Medium',
      tradeStatus: 'Active'
    },
    {
      id: 'CB004',
      name: 'Copperbelt Energy Corporate Bond 2030',
      isin: 'ZM0000000006',
      cusip: 'ZMCB2030',
      coupon: 14.5,
      maturity: '2030-12-20',
      faceValue: 80000000,
      marketValue: 75200000,
      bookValue: 76000000,
      yield: 15.8,
      ytm: 15.8,
      duration: 3.9,
      convexity: 0.085,
      creditRating: 'BB+',
      ratingAgency: 'S&P',
      issuer: 'Copperbelt Energy Corporation',
      sector: 'Utilities',
      purchaseDate: '2024-07-15',
      purchasePrice: 76000000,
      purchaseYield: 15.2,
      accruedInterest: 1450000,
      lastPrice: 94.0,
      bidPrice: 93.8,
      askPrice: 94.2,
      volume: 300000,
      outstanding: 160000000,
      currency: 'ZMW',
      paymentFrequency: 'Semi-Annual',
      callable: true,
      putable: false,
      convertible: false,
      seniority: 'Senior Unsecured',
      collateral: 'Unsecured',
      domicile: 'Zambia',
      benchmark: 'Zambia Corporate Bond Index',
      liquidity: 'Low',
      tradeStatus: 'Active'
    }
  ];

  const upcomingMaturities = bonds.filter(bond => {
    const maturityDate = new Date(bond.maturity);
    const now = new Date();
    const daysUntilMaturity = Math.ceil((maturityDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilMaturity <= 90;
  });

  const totalPortfolioValue = bonds.reduce((sum, bond) => sum + bond.marketValue, 0);
  const totalAccruedInterest = bonds.reduce((sum, bond) => sum + bond.accruedInterest, 0);
  const averageYield = bonds.reduce((sum, bond) => sum + (bond.yield * bond.marketValue), 0) / totalPortfolioValue;
  const averageDuration = bonds.reduce((sum, bond) => sum + (bond.duration * bond.marketValue), 0) / totalPortfolioValue;

  // Chart data
  const creditQualityData = [
    { name: 'AAA', value: bonds.filter(b => b.creditRating === 'AAA').reduce((sum, b) => sum + b.marketValue, 0), color: '#10B981' },
    { name: 'BBB+', value: bonds.filter(b => b.creditRating === 'BBB+').reduce((sum, b) => sum + b.marketValue, 0), color: '#F59E0B' },
    { name: 'BBB', value: bonds.filter(b => b.creditRating === 'BBB').reduce((sum, b) => sum + b.marketValue, 0), color: '#F59E0B' },
    { name: 'BB+', value: bonds.filter(b => b.creditRating === 'BB+').reduce((sum, b) => sum + b.marketValue, 0), color: '#EF4444' },
  ];

  const sectorAllocationData = [
    { name: 'Government', value: bonds.filter(b => b.sector === 'Government').reduce((sum, b) => sum + b.marketValue, 0), color: '#1e3a5f' },
    { name: 'Financial Services', value: bonds.filter(b => b.sector === 'Financial Services').reduce((sum, b) => sum + b.marketValue, 0), color: '#4ba3e5' },
    { name: 'Consumer Goods', value: bonds.filter(b => b.sector === 'Consumer Goods').reduce((sum, b) => sum + b.marketValue, 0), color: '#7ed321' },
    { name: 'Utilities', value: bonds.filter(b => b.sector === 'Utilities').reduce((sum, b) => sum + b.marketValue, 0), color: '#e8534a' },
  ];

  const yieldCurveData = [
    { maturity: '0-1Y', yield: 11.2 },
    { maturity: '1-2Y', yield: 11.8 },
    { maturity: '2-3Y', yield: 12.1 },
    { maturity: '3-5Y', yield: 12.5 },
    { maturity: '5-7Y', yield: 13.2 },
    { maturity: '7-10Y', yield: 13.8 },
  ];

  const durationDistributionData = [
    { range: '0-1Y', count: bonds.filter(b => b.duration < 1).length },
    { range: '1-2Y', count: bonds.filter(b => b.duration >= 1 && b.duration < 2).length },
    { range: '2-3Y', count: bonds.filter(b => b.duration >= 2 && b.duration < 3).length },
    { range: '3-4Y', count: bonds.filter(b => b.duration >= 3 && b.duration < 4).length },
    { range: '4-5Y', count: bonds.filter(b => b.duration >= 4 && b.duration < 5).length },
  ];

  const performanceData = [
    { month: 'Jan', portfolio: 2.1, benchmark: 1.8 },
    { month: 'Feb', portfolio: 2.8, benchmark: 2.2 },
    { month: 'Mar', portfolio: 3.2, benchmark: 2.9 },
    { month: 'Apr', portfolio: 3.8, benchmark: 3.5 },
    { month: 'May', portfolio: 4.1, benchmark: 3.8 },
    { month: 'Jun', portfolio: 4.5, benchmark: 4.2 },
  ];

  const liquidityData = [
    { category: 'High', value: bonds.filter(b => b.liquidity === 'High').length, color: '#10B981' },
    { category: 'Medium', value: bonds.filter(b => b.liquidity === 'Medium').length, color: '#F59E0B' },
    { category: 'Low', value: bonds.filter(b => b.liquidity === 'Low').length, color: '#EF4444' },
  ];

  // Helper functions
  const formatCurrency = (value: any) => {
    if (typeof value !== 'number') return 'ZMW 0.0M';
    return `ZMW ${(value / 1000000).toFixed(1)}M`;
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="p-8 max-w-7xl w-full">
      {notification && (
        <div className="fixed top-4 right-4 bg-accent-gold text-primary-navy px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in font-semibold">
          ✓ {notification}
        </div>
      )}
      <div className="text-xs text-text-gray mb-6">Operations &gt; Investments &gt; Bond Management</div>
      <h1 className="text-2xl font-bold text-text-dark mb-8">Bond Portfolio Management</h1>

      {/* Portfolio Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-gray-600 mb-2">Total Portfolio Value</div>
          <div className="text-2xl font-bold text-primary-navy">{formatCurrency(totalPortfolioValue)}</div>
          <div className="text-xs text-green-600 mt-2">+2.3% from last month</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-gray-600 mb-2">Accrued Interest</div>
          <div className="text-2xl font-bold text-green-600">{formatCurrency(totalAccruedInterest)}</div>
          <div className="text-xs text-green-600 mt-2">Available for collection</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-gray-600 mb-2">Portfolio Yield</div>
          <div className="text-2xl font-bold text-accent-blue">{formatPercentage(averageYield)}</div>
          <div className="text-xs text-yellow-600 mt-2">Above benchmark</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-gray-600 mb-2">Average Duration</div>
          <div className="text-2xl font-bold text-accent-gold">{averageDuration.toFixed(1)} years</div>
          <div className="text-xs text-blue-600 mt-2">Interest rate risk</div>
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
              Portfolio Overview
            </button>
            <button
              onClick={() => setActiveTab('maturities')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'maturities'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Maturity Schedule
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'analytics'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Risk Analytics
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
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              {/* Portfolio Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Portfolio Value</p>
                      <p className="text-2xl font-bold text-gray-900">ZMW {(totalPortfolioValue / 1000000).toFixed(1)}M</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-primary-navy" />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Average Yield</p>
                      <p className="text-2xl font-bold text-gray-900">{(bonds.reduce((sum, bond) => sum + bond.yield, 0) / bonds.length).toFixed(2)}%</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-accent-gold" />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Bonds</p>
                      <p className="text-2xl font-bold text-gray-900">{bonds.length}</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-accent-blue" />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Avg Duration</p>
                      <p className="text-2xl font-bold text-gray-900">{averageDuration.toFixed(1)}Y</p>
                    </div>
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Bond Holdings Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-primary-navy">Bond Holdings</h2>
                  <button
                    onClick={() => setShowBuyModal(true)}
                    className="bg-accent-gold hover:bg-accent-gold/90 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add New Bond
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-4 font-semibold text-gray-700">Bond Details</th>
                        <th className="text-right p-4 font-semibold text-gray-700">Face Value</th>
                        <th className="text-right p-4 font-semibold text-gray-700">Market Value</th>
                        <th className="text-right p-4 font-semibold text-gray-700">Yield</th>
                        <th className="text-right p-4 font-semibold text-gray-700">Duration</th>
                        <th className="text-center p-4 font-semibold text-gray-700">Rating</th>
                        <th className="text-center p-4 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bonds.map((bond) => (
                        <tr key={bond.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
                          <td className="p-4">
                            <div>
                              <div className="font-semibold text-gray-900">{bond.name}</div>
                              <div className="text-xs text-gray-600 mt-1">
                                ISIN: {bond.isin} | CUSIP: {bond.cusip}
                              </div>
                              <div className="text-xs text-gray-600">
                                Issuer: {bond.issuer} | Maturity: {bond.maturity}
                              </div>
                              <div className="text-xs text-gray-600">
                                Coupon: {bond.coupon.toFixed(2)}% | Convexity: {bond.convexity.toFixed(2)}
                              </div>
                            </div>
                          </td>
                          <td className="text-right p-4 font-medium">ZMW {(bond.faceValue / 1000000).toFixed(1)}M</td>
                          <td className="text-right p-4 font-semibold text-primary-navy">ZMW {(bond.marketValue / 1000000).toFixed(1)}M</td>
                          <td className="text-right p-4">
                            <span className="font-medium text-green-600">{bond.yield.toFixed(2)}%</span>
                          </td>
                          <td className="text-right p-4 font-medium">{bond.duration.toFixed(1)} yrs</td>
                          <td className="text-center p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              bond.creditRating === 'AAA' ? 'bg-green-100 text-green-800 border border-green-200' :
                              bond.creditRating === 'BBB+' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                              'bg-gray-100 text-gray-800 border border-gray-200'
                            }`}>
                              {bond.creditRating}
                            </span>
                          </td>
                          <td className="text-center p-4">
                            <div className="flex justify-center gap-2">
                              <button
                                onClick={() => setSelectedBond(bond)}
                                className="text-accent-blue hover:text-accent-blue/80 font-medium text-sm transition-colors duration-150"
                              >
                                View
                              </button>
                              <button
                                onClick={() => {
                                  setSelectedBond(bond);
                                  setShowTradeModal(true);
                                }}
                                className="text-green-600 hover:text-green-800 font-medium text-sm transition-colors duration-150"
                              >
                                Trade
                              </button>
                              <button
                                onClick={() => {
                                  setSelectedBond(bond);
                                  setShowSellModal(true);
                                }}
                                className="text-red-600 hover:text-red-800 font-medium text-sm transition-colors duration-150"
                              >
                                Sell
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'maturities' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Upcoming Maturities</h2>
              <div className="space-y-4">
                {upcomingMaturities.map((bond) => {
                  const maturityDate = new Date(bond.maturity);
                  const now = new Date();
                  const daysUntilMaturity = Math.ceil((maturityDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

                  return (
                    <div key={bond.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{bond.name}</h3>
                          <p className="text-sm text-gray-600">Maturity: {bond.maturity}</p>
                          <p className="text-sm text-gray-600">Face Value: ZMW {(bond.faceValue / 1000000).toFixed(1)}M</p>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${
                            daysUntilMaturity <= 30 ? 'text-red-600' :
                            daysUntilMaturity <= 60 ? 'text-yellow-600' : 'text-green-600'
                          }`}>
                            {daysUntilMaturity} days
                          </div>
                          <div className="text-sm text-gray-600">until maturity</div>
                        </div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                          Roll Over
                        </button>
                        <button className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
                          Sell at Maturity
                        </button>
                        <button className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600">
                          Set Reminder
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Credit Quality Distribution */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Credit Quality Distribution</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={creditQualityData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {creditQualityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [formatCurrency(value), 'Market Value']} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-2">
                    {creditQualityData.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                          <span className="text-sm">{item.name}</span>
                        </div>
                        <span className="text-sm font-medium">{((item.value / totalPortfolioValue) * 100).toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sector Allocation */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Sector Allocation</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={sectorAllocationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {sectorAllocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [formatCurrency(value), 'Market Value']} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-2">
                    {sectorAllocationData.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                          <span className="text-sm">{item.name}</span>
                        </div>
                        <span className="text-sm font-medium">{((item.value / totalPortfolioValue) * 100).toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Yield Curve */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Zambia Government Bond Yield Curve</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={yieldCurveData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="maturity" />
                      <YAxis domain={[10, 15]} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Yield']} />
                      <Line type="monotone" dataKey="yield" stroke="#1e3a5f" strokeWidth={3} dot={{ fill: '#1e3a5f', r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Duration Distribution */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Duration Distribution</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={durationDistributionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="range" />
                      <YAxis />
                      <Tooltip formatter={(value) => [value, 'Bonds']} />
                      <Bar dataKey="count" fill="#4ba3e5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Performance vs Benchmark */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Portfolio Performance vs Benchmark</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, 'Return']} />
                      <Line type="monotone" dataKey="portfolio" stroke="#1e3a5f" strokeWidth={2} name="Portfolio" />
                      <Line type="monotone" dataKey="benchmark" stroke="#F59E0B" strokeWidth={2} name="Benchmark" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Liquidity Analysis */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Liquidity Analysis</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={liquidityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip formatter={(value) => [value, 'Bonds']} />
                      <Bar dataKey="value" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    {liquidityData.map((item, index) => (
                      <div key={index} className="p-3 rounded-lg" style={{backgroundColor: `${item.color}20`}}>
                        <div className="text-lg font-bold" style={{color: item.color}}>{item.value}</div>
                        <div className="text-xs text-gray-600">{item.category}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Risk Metrics Summary */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Risk Metrics Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{averageDuration.toFixed(1)}Y</div>
                    <div className="text-sm text-gray-600">Modified Duration</div>
                    <div className="text-xs text-yellow-600 mt-1">Interest Rate Risk</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{(averageDuration * 0.01 * totalPortfolioValue / 1000000).toFixed(1)}M</div>
                    <div className="text-sm text-gray-600">DV01 (ZMW)</div>
                    <div className="text-xs text-blue-600 mt-1">Price Sensitivity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">AAA</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                    <div className="text-xs text-green-600 mt-1">Credit Quality</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">High</div>
                    <div className="text-sm text-gray-600">Liquidity</div>
                    <div className="text-xs text-purple-600 mt-1">Marketability</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'trading' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Bond Trading</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Buy Bonds</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Bond Selection</label>
                      <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                        <option>Select a bond...</option>
                        <option>Government Bond 2028</option>
                        <option>Government Bond 2030</option>
                        <option>Corporate Bond - ZANACO</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Face Value (ZMW)</label>
                      <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="10000000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Price (% of Face)</label>
                      <input type="number" step="0.01" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="98.50" />
                    </div>
                    <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                      Execute Buy Order
                    </button>
                  </div>
                </div>
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Sell Bonds</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Select Holding</label>
                      <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                        <option>Select holding...</option>
                        {bonds.map(bond => (
                          <option key={bond.id}>{bond.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Quantity to Sell</label>
                      <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="50000000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Sell Price (% of Face)</label>
                      <input type="number" step="0.01" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="102.00" />
                    </div>
                    <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                      Execute Sell Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Recent Transactions</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Date</th>
                        <th className="text-left p-2">Bond</th>
                        <th className="text-center p-2">Type</th>
                        <th className="text-right p-2">Amount</th>
                        <th className="text-right p-2">Price</th>
                        <th className="text-center p-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">2024-01-05</td>
                        <td className="p-2">Government Bond 2025</td>
                        <td className="text-center p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">BUY</span></td>
                        <td className="text-right p-2">ZMW 10M</td>
                        <td className="text-right p-2">98.5%</td>
                        <td className="text-center p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Completed</span></td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">2024-01-03</td>
                        <td className="p-2">ZANACO Corporate Bond</td>
                        <td className="text-center p-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">SELL</span></td>
                        <td className="text-right p-2">ZMW 5M</td>
                        <td className="text-right p-2">101.2%</td>
                        <td className="text-center p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pending</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Buy Bond Modal */}
      {showBuyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4">
            <div className="bg-gradient-to-r from-primary-navy to-primary-navy/90 text-white p-6 rounded-t-xl">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Buy New Bond
              </h3>
              <p className="text-sm opacity-90 mt-1">Add a new bond to your portfolio</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bond Selection</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent">
                  <option>Select a bond...</option>
                  <option>Government Bond 2028 - 10.5%</option>
                  <option>Government Bond 2030 - 11.2%</option>
                  <option>ZANACO Corporate Bond 2027 - 12.8%</option>
                  <option>Zambia Railways Bond 2029 - 13.5%</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Face Value (ZMW)</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  placeholder="10000000"
                  min="1000000"
                  step="1000000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (% of Face Value)</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  placeholder="98.50"
                  min="90"
                  max="110"
                />
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-blue-800">
                  <strong>Estimated Cost:</strong> ZMW 9,850,000<br/>
                  <strong>Expected Yield:</strong> 10.5%<br/>
                  <strong>Settlement:</strong> T+2 business days
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowBuyModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button className="flex-1 bg-accent-gold hover:bg-accent-gold/90 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                  Execute Buy Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sell Bond Modal */}
      {showSellModal && selectedBond && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4">
            <div className="bg-gradient-to-r from-red-600 to-red-600/90 text-white p-6 rounded-t-xl">
              <h3 className="text-xl font-semibold">Sell Bond</h3>
              <p className="text-sm opacity-90 mt-1">{selectedBond.name}</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Current Holding:</span>
                    <span className="font-medium">ZMW {(selectedBond.faceValue / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Market Value:</span>
                    <span className="font-medium text-primary-navy">ZMW {(selectedBond.marketValue / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Yield:</span>
                    <span className="font-medium text-green-600">{selectedBond.yield.toFixed(2)}%</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity to Sell (ZMW)</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  placeholder={selectedBond.faceValue.toString()}
                  min="1000000"
                  max={selectedBond.faceValue}
                  step="1000000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sell Price (% of Face Value)</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  placeholder="102.00"
                  min="90"
                  max="110"
                />
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-green-800">
                  <strong>Estimated Proceeds:</strong> ZMW 10,200,000<br/>
                  <strong>Realized P&L:</strong> +ZMW 200,000<br/>
                  <strong>Settlement:</strong> T+2 business days
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => {
                    setShowSellModal(false);
                    setSelectedBond(null);
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                  Execute Sell Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Trade Bond Modal */}
      {showTradeModal && selectedBond && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4">
            <div className="bg-gradient-to-r from-accent-blue to-accent-blue/90 text-white p-6 rounded-t-xl">
              <h3 className="text-xl font-semibold">Trade Bond</h3>
              <p className="text-sm opacity-90 mt-1">{selectedBond.name}</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Current Position:</span>
                    <span className="font-medium">ZMW {(selectedBond.faceValue / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Market Price:</span>
                    <span className="font-medium text-primary-navy">{((selectedBond.marketValue / selectedBond.faceValue) * 100).toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Yield:</span>
                    <span className="font-medium text-green-600">{selectedBond.yield.toFixed(2)}%</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Trade Type</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent">
                    <option>Buy More</option>
                    <option>Sell Some</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity (ZMW)</label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                    placeholder="5000000"
                    min="1000000"
                    step="1000000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Limit Price (% of Face)</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  placeholder="101.50"
                  min="90"
                  max="110"
                />
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-blue-800">
                  <strong>Order Type:</strong> Limit Order<br/>
                  <strong>Estimated Value:</strong> ZMW 5,075,000<br/>
                  <strong>Time in Force:</strong> Good for Day
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => {
                    setShowTradeModal(false);
                    setSelectedBond(null);
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button className="flex-1 bg-accent-blue hover:bg-accent-blue/90 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                  Place Trade Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BondManagement;