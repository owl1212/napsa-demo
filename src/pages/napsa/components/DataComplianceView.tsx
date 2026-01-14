import React from 'react';

const DataComplianceView = () => {
  return (
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations {'>'} Actuarial {'>'} Data & Compliance</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Data Quality & Compliance</h1>

      {/* D. DATA QUALITY & WORKFLOW */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-dark mb-4">D. DATA QUALITY & WORKFLOW</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1. Extract Status Monitor */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Extract Status Monitor</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Last Extract:</span>
                <span className="text-sm font-medium">15 Mar 2024, 14:30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Status:</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">UNDER REVIEW</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Portal:</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">CLOSED</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Next Valuation:</span>
                <span className="text-sm font-medium">47 days (31 May 2024)</span>
              </div>
            </div>
          </div>

          {/* 2. Critical Data Flags */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Critical Data Flags</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-red-600">
                  <i className="fa-solid fa-exclamation-triangle mr-1"></i>
                  CRITICAL: 15 members
                </span>
                <span className="text-xs text-red-600">retirement date &lt; join date</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-yellow-600">
                  <i className="fa-solid fa-exclamation-triangle mr-1"></i>
                  WARNING: 200 actives
                </span>
                <span className="text-xs text-yellow-600">zero contributions (12mo)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600">
                  <i className="fa-solid fa-check-circle mr-1"></i>
                  CLEAN: Member/beneficiary alignment
                </span>
                <span className="text-xs text-green-600">99.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* F. COMPLIANCE & GOVERNANCE DASHBOARD */}
      <div>
        <h3 className="text-lg font-semibold text-text-dark mb-4">F. COMPLIANCE & GOVERNANCE DASHBOARD</h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Regulatory Filings */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Regulatory Filings Status</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Annual Report 2024</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Filed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">PIA Compliance Report</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">In Review</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Audit Report Q4</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Overdue</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Board Minutes</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Approved</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-accent-gold text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-yellow-600 transition-colors">
              <i className="fa-solid fa-upload mr-2"></i> Upload Document
            </button>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Upcoming Deadlines</h4>
            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-400 bg-red-50 rounded">
                <div className="text-sm font-medium text-red-800">Board Meeting</div>
                <div className="text-xs text-red-600">March 15, 2024 - 2 days</div>
                <div className="text-xs text-red-600">Agenda: Valuation Review</div>
              </div>
              <div className="p-3 border-l-4 border-yellow-400 bg-yellow-50 rounded">
                <div className="text-sm font-medium text-yellow-800">PIA Report Submission</div>
                <div className="text-xs text-yellow-600">March 31, 2024 - 16 days</div>
                <div className="text-xs text-yellow-600">Annual compliance filing</div>
              </div>
              <div className="p-3 border-l-4 border-blue-400 bg-blue-50 rounded">
                <div className="text-sm font-medium text-blue-800">Risk Assessment</div>
                <div className="text-xs text-blue-600">April 30, 2024 - 46 days</div>
                <div className="text-xs text-blue-600">Quarterly review</div>
              </div>
            </div>
          </div>

          {/* Risk Register Updates */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-sm font-semibold text-text-gray mb-4">Risk Register Summary</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm">High Risk Items</span>
                </div>
                <span className="text-lg font-bold text-red-600">3</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-sm">Medium Risk Items</span>
                </div>
                <span className="text-lg font-bold text-yellow-600">7</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Low Risk Items</span>
                </div>
                <span className="text-lg font-bold text-green-600">12</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium text-text-gray mb-1">Latest Update</div>
              <div className="text-xs text-text-gray">
                Investment risk assessment updated - March 10, 2024
              </div>
            </div>
            <button className="mt-4 w-full border border-gray-300 text-text-dark px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors">
              <i className="fa-solid fa-eye mr-2"></i> View Full Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataComplianceView;