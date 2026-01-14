import React, { useState } from 'react';

const RiskAnalysisView = () => {
  // State for sensitivity calculator
  const [discountRate, setDiscountRate] = useState(5.0);
  const [salaryGrowth, setSalaryGrowth] = useState(4.5);

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
      <div className="text-xs text-text-gray mb-6">Operations {'>'} Actuarial {'>'} Risk Analysis</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Risk Analysis Dashboard</h1>

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
    </div>
  );
};

export default RiskAnalysisView;