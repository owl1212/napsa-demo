const ActuarialView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Actuarial & Scheme Sustainability</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Actuarial & Scheme Sustainability</h1>

      {/* Valuation Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Latest Liability Valuation</h3>
          <div className="text-3xl font-bold text-text-dark mb-2">K 2.8B</div>
          <div className="text-sm text-text-gray mb-2">As at December 31, 2025</div>
          <div className="text-sm text-green-600">+4.2% from previous valuation</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Funding Level</h3>
          <div className="text-3xl font-bold text-text-dark mb-2">112.3%</div>
          <div className="text-sm text-text-gray mb-2">Assets vs Liabilities</div>
          <div className="flex items-center text-sm">
            <span className="text-green-600 font-medium">+2.1%</span>
            <span className="text-text-gray ml-2">from last valuation</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Funding Level Trend</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>2023 Q4</span>
              <span className="font-medium">108.7%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>2024 Q4</span>
              <span className="font-medium">110.2%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>2025 Q4</span>
              <span className="font-medium text-green-600">112.3%</span>
            </div>
          </div>
          <div className="mt-3 text-xs text-green-600">Improving trend over last 5 valuations</div>
        </div>
      </div>

      {/* Demographic Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Active to Retiree Ratio</h3>
          <div className="text-3xl font-bold text-text-dark mb-2">3.2 : 1</div>
          <div className="text-sm text-text-gray mb-4">Current support ratio</div>

          <h4 className="text-sm font-medium mb-3">Trend Over Time</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>2021</span>
              <span className="font-medium">3.8 : 1</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>2022</span>
              <span className="font-medium">3.6 : 1</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>2023</span>
              <span className="font-medium">3.4 : 1</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>2024</span>
              <span className="font-medium">3.3 : 1</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>2025</span>
              <span className="font-medium text-yellow-600">3.2 : 1</span>
            </div>
          </div>
          <div className="mt-3 text-xs text-yellow-600">Ratio declining due to aging population</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Average Retirement Age Distribution</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">55-59 years</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '25%'}}></div>
                </div>
                <span className="text-xs font-medium">25%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">60-64 years</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
                <span className="text-xs font-medium">45%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">65+ years</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '30%'}}></div>
                </div>
                <span className="text-xs font-medium">30%</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <span className="font-semibold">Average retirement age: </span>
            <span>62.3 years</span>
          </div>
        </div>
      </div>

      {/* Benefit Projection Modeling */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h3 className="text-sm font-semibold text-text-gray mb-4">Benefit Projection Modeling - "What-if" Scenarios</h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h4 className="text-sm font-medium mb-3">Discount Rate Impact</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Current (8.5%)</span>
                <span className="font-medium">K 2.8B</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>-1% (7.5%)</span>
                <span className="font-medium text-red-600">K 3.1B</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>+1% (9.5%)</span>
                <span className="font-medium text-green-600">K 2.6B</span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="text-sm font-medium mb-3">Salary Growth Impact</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Current (5.0%)</span>
                <span className="font-medium">K 2.8B</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>-1% (4.0%)</span>
                <span className="font-medium text-green-600">K 2.7B</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>+1% (6.0%)</span>
                <span className="font-medium text-red-600">K 2.9B</span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="text-sm font-medium mb-3">Investment Return Impact</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Current (10.5%)</span>
                <span className="font-medium">K 2.8B</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>-2% (8.5%)</span>
                <span className="font-medium text-red-600">K 3.0B</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>+2% (12.5%)</span>
                <span className="font-medium text-green-600">K 2.6B</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-3">
            <i className="fa-solid fa-lightbulb text-blue-600 mt-1"></i>
            <div>
              <h4 className="text-sm font-medium text-blue-900 mb-1">Scenario Analysis Summary</h4>
              <p className="text-xs text-blue-800">
                The scheme shows moderate sensitivity to discount rate changes and investment returns.
                A 1% decrease in discount rate increases liabilities by ~11%. Maintaining strong investment
                performance is critical for scheme sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Quality for Actuarial Work */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-sm font-semibold text-text-gray mb-4">Data Quality for Actuarial Work</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium mb-3">Latest Actuarial Extract Status</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Extract generation</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Data validation</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">In Progress</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Anomaly detection</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Issues Found</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Data Anomalies Flagged</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Missing salary data</span>
                <span className="font-medium text-red-600">234 records</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Inconsistent service dates</span>
                <span className="font-medium text-yellow-600">89 records</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Invalid benefit calculations</span>
                <span className="font-medium text-yellow-600">45 records</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Duplicate member records</span>
                <span className="font-medium text-red-600">12 records</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="bg-accent-gold text-white px-4 py-2 rounded-full font-medium text-sm">
            <i className="fa-solid fa-download mr-2"></i> Download Extract
          </button>
          <button className="border border-gray-300 text-text-dark px-4 py-2 rounded-full font-medium text-sm">
            <i className="fa-solid fa-exclamation-triangle mr-2"></i> Review Anomalies
          </button>
          <button className="border border-gray-300 text-text-dark px-4 py-2 rounded-full font-medium text-sm">
            <i className="fa-solid fa-chart-line mr-2"></i> Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActuarialView;