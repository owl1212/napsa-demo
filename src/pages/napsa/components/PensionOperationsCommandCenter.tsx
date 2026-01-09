import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

// Mock data for the command center
const mockData = {
  // Quadrant A: Contribution Cycle Health & Compliance
  contributionGauge: {
    received: 89.2,
    expected: 95.8,
    percentage: 93.1
  },
  arrearsAging: [
    { bucket: 'Current', amount: 0, color: '#10B981' },
    { bucket: '1-30 Days', amount: 2.1, color: '#F59E0B' },
    { bucket: '31-60 Days', amount: 1.8, color: '#F59E0B' },
    { bucket: '61-90 Days', amount: 2.7, color: '#EF4444' },
    { bucket: '90+ Days', amount: 4.0, color: '#EF4444' }
  ],
  arrearsTrend: [
    { month: 'Jul', amount: 5.2 },
    { month: 'Aug', amount: 4.8 },
    { month: 'Sep', amount: 6.1 },
    { month: 'Oct', amount: 5.9 },
    { month: 'Nov', amount: 6.6 },
    { month: 'Dec', amount: 6.6 }
  ],
  topDelinquentSponsors: [
    { name: 'Zambia Mining Corp', amount: 1200000, members: 245 },
    { name: 'National Breweries', amount: 890000, members: 189 },
    { name: 'Lusaka City Council', amount: 756000, members: 312 },
    { name: 'Shoprite Zambia', amount: 623000, members: 156 },
    { name: 'Agro Supplies Co', amount: 512000, members: 98 }
  ],
  batchProcessing: {
    lastImport: '2024-01-09 14:30:22',
    awaitingValidation: 124,
    batchesPosted: 23,
    alerts: [
      'Alert: Variance detected for Sponsor ABC Corp. Processing halted.',
      'Alert: Batch BC-2024-0123 validation failed - invalid SSN format.'
    ]
  },

  // Quadrant B: Claims Processing Pipeline & Service Delivery
  claimsFunnel: [
    { stage: 'Initiated', count: 156, avgTime: 2 },
    { stage: 'Documents Verified', count: 142, avgTime: 5 },
    { stage: 'Calculation & Review', count: 98, avgTime: 12 },
    { stage: 'Authorized', count: 76, avgTime: 18 },
    { stage: 'Posted to Accounting', count: 65, avgTime: 22 },
    { stage: 'Paid & Closed', count: 58, avgTime: 25 }
  ],
  slaCompliance: [
    { type: 'Retirement', sla: 10, current: 7.2, compliance: 92 },
    { type: 'Death', sla: 7, current: 4.1, compliance: 98 },
    { type: 'Withdrawal', sla: 14, current: 9.8, compliance: 87 },
    { type: 'Ill-Health', sla: 21, current: 15.3, compliance: 95 }
  ],
  benefitsAwaitingPayment: {
    total: 12800000,
    breakdown: [
      { type: 'Retirement', amount: 8500000 },
      { type: 'Death', amount: 2100000 },
      { type: 'Withdrawal', amount: 2200000 }
    ]
  },
  recentPayments: [
    { member: 'John Banda', amount: 450000, date: '2024-01-09', type: 'Retirement' },
    { member: 'Mary Zulu', amount: 280000, date: '2024-01-09', type: 'Death' },
    { member: 'Peter Mwanza', amount: 150000, date: '2024-01-08', type: 'Withdrawal' }
  ],

  // Quadrant C: Member Data Integrity & Masterfile Management
  dataCompleteness: {
    score: 98.2,
    issues: [
      { type: 'Missing NID', count: 1247 },
      { type: 'No Beneficiaries', count: 892 },
      { type: 'Invalid Contact', count: 456 },
      { type: 'Incomplete History', count: 234 }
    ]
  },
  bulkOperations: {
    newMembers: { status: 'Completed', count: 1250, timestamp: '2024-01-08 16:45' },
    beneficiaries: { status: 'In Progress', count: 890, timestamp: '2024-01-09 09:15' },
    legacyMigration: { status: 'Completed', progress: 100, timestamp: '2024-01-07 14:20' },
    lastUser: 'System Admin'
  },

  // Quadrant D: Member Lifecycle & Movement Analytics
  memberMovement: [
    'Today: 5 Retirements, 2 Withdrawals, 1 Death Claim, 15 New Members Added',
    'Yesterday: 8 Retirements, 3 Withdrawals, 2 Death Claims, 22 New Members Added',
    '2 days ago: 3 Retirements, 1 Withdrawal, 3 Death Claims, 18 New Members Added'
  ],
  membershipStock: {
    active: 248592,
    deferred: 45678,
    pensioners: 12847
  },
  membershipFlow: [
    { stage: 'Opening Balance', count: 294117 },
    { stage: 'New Entrants', count: 15000 },
    { stage: 'Retirements', count: -5200 },
    { stage: 'Withdrawals', count: -1800 },
    { stage: 'Deaths', count: -1200 },
    { stage: 'Closing Balance', count: 294917 }
  ],
  schemeTransitions: {
    pending: 45,
    approved: 23,
    awaitingMovement: 12
  },

  // Global Header KPIs
  kpis: {
    collectionRate: 97.4,
    avgProcessingTime: 7.2,
    dataCompleteness: 98.2
  },
  alerts: [
    { level: 'red', message: 'Death Claim #DL-4456 awaiting certificate > 5 days', timestamp: '2024-01-09 08:30' },
    { level: 'amber', message: 'Sponsor ABC Corp arrears exceed 60 days', timestamp: '2024-01-09 09:15' },
    { level: 'amber', message: 'Monthly statement generation delayed', timestamp: '2024-01-09 10:45' },
    { level: 'green', message: 'All monthly statements generated successfully', timestamp: '2024-01-09 11:20' }
  ]
};

const PensionOperationsCommandCenter: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Global Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Pension Operations Command Center</h1>
            <p className="text-gray-600">End-to-end visibility and control over member lifecycle operations</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Last Updated</div>
            <div className="text-lg font-semibold">{currentTime.toLocaleTimeString()}</div>
          </div>
        </div>

        {/* KPI Ribbon */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{mockData.kpis.collectionRate}%</div>
            <div className="text-sm text-gray-600">Contribution Collection Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{mockData.kpis.avgProcessingTime} days</div>
            <div className="text-sm text-gray-600">Avg Claim Processing Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{mockData.kpis.dataCompleteness}%</div>
            <div className="text-sm text-gray-600">Data Completeness Score</div>
          </div>
        </div>

        {/* Priority Alert Center */}
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-3">Priority Alerts</h3>
          <div className="space-y-2">
            {mockData.alerts.map((alert, index) => (
              <div key={index} className={`p-3 rounded-lg flex justify-between items-center ${
                alert.level === 'red' ? 'bg-red-50 border-red-200' :
                alert.level === 'amber' ? 'bg-yellow-50 border-yellow-200' :
                'bg-green-50 border-green-200'
              }`}>
                <span className={`font-medium ${
                  alert.level === 'red' ? 'text-red-800' :
                  alert.level === 'amber' ? 'text-yellow-800' :
                  'text-green-800'
                }`}>{alert.message}</span>
                <span className="text-sm text-gray-500">{alert.timestamp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Search & Actions */}
        <div className="border-t pt-4 mt-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search members by number, NID, or name..."
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Create New Claim
            </button>
          </div>
        </div>
      </div>

      {/* Four Quadrants Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quadrant A: Contribution Cycle Health & Compliance */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">A. Contribution Cycle Health & Compliance</h2>
          <p className="text-gray-600 mb-6">"Are we collecting all the money we should, on time?"</p>

          {/* Monthly Contribution Performance Gauge */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Monthly Contribution Performance</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Received vs Expected</span>
              <span className="text-lg font-bold">K {mockData.contributionGauge.received}M / K {mockData.contributionGauge.expected}M</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div
                className={`h-4 rounded-full ${
                  mockData.contributionGauge.percentage >= 95 ? 'bg-green-500' :
                  mockData.contributionGauge.percentage >= 90 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{width: `${mockData.contributionGauge.percentage}%`}}
              ></div>
            </div>
            <div className="text-sm text-gray-600">{mockData.contributionGauge.percentage}% received (K {(mockData.contributionGauge.expected - mockData.contributionGauge.received).toFixed(1)}M outstanding)</div>
          </div>

          {/* Contribution Arrears Aging & Recovery */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Contribution Arrears Aging & Recovery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={mockData.arrearsAging}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bucket" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`K ${value}M`, 'Amount']} />
                    <Bar dataKey="amount" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={mockData.arrearsTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`K ${value}M`, '30+ Days Arrears']} />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Top 10 Delinquent Sponsors */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Top 10 Delinquent Sponsors</h3>
            <div className="space-y-2">
              {mockData.topDelinquentSponsors.map((sponsor, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">{sponsor.name}</div>
                    <div className="text-sm text-gray-600">{sponsor.members} members</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-red-600">K {sponsor.amount.toLocaleString()}</div>
                    <div className="flex gap-1">
                      <button className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Send Reminder</button>
                      <button className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Generate Report</button>
                      <button className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Flag for Legal</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Batch Processing Monitor */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Batch Processing Monitor</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Last Payroll File Import</span>
                <span className="font-medium">{mockData.batchProcessing.lastImport}</span>
              </div>
              <div className="flex justify-between">
                <span>Contributions Awaiting Validation</span>
                <span className="font-medium text-yellow-600">{mockData.batchProcessing.awaitingValidation}</span>
              </div>
              <div className="flex justify-between">
                <span>Batches Successfully Posted to GL</span>
                <span className="font-medium text-green-600">{mockData.batchProcessing.batchesPosted}</span>
              </div>
              <div>
                <span className="font-medium">Alert Feed:</span>
                <div className="mt-2 space-y-1">
                  {mockData.batchProcessing.alerts.map((alert, index) => (
                    <div key={index} className="text-sm text-red-600 bg-red-50 p-2 rounded">{alert}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quadrant B: Claims Processing Pipeline & Service Delivery */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">B. Claims Processing Pipeline & Service Delivery</h2>
          <p className="text-gray-600 mb-6">"Are we paying the right people, the right amount, in the right time?"</p>

          {/* Claims Funnel & Throughput Analyzer */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Claims Funnel & Throughput Analyzer</h3>
            <div className="flex gap-2 mb-4">
              <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm">Retirement</button>
              <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Death</button>
              <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Withdrawal</button>
              <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Ill-Health</button>
            </div>
            <div className="space-y-2">
              {mockData.claimsFunnel.map((stage, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">{stage.stage}</span>
                  <div className="text-right">
                    <div className="font-bold">{stage.count} claims</div>
                    <div className="text-sm text-gray-600">{stage.avgTime} days avg</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SLA Compliance Dashboard */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">SLA Compliance Dashboard</h3>
            <div className="grid grid-cols-2 gap-4">
              {mockData.slaCompliance.map((sla, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded">
                  <div className="text-lg font-bold mb-1">{sla.type}</div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{sla.compliance}%</div>
                  <div className="text-sm text-gray-600">SLA: {sla.sla} days</div>
                  <div className="text-sm text-gray-600">Current: {sla.current} days</div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Exposure & Payment Gateway */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Financial Exposure & Payment Gateway</h3>
            <div className="text-center p-4 bg-green-50 rounded-lg mb-4">
              <div className="text-3xl font-bold text-green-600 mb-2">K {mockData.benefitsAwaitingPayment.total.toLocaleString()}</div>
              <div className="text-gray-600">Benefits Authorized & Pending Bank Transfer</div>
            </div>
            <div className="space-y-2 mb-4">
              {mockData.benefitsAwaitingPayment.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.type} benefits</span>
                  <span className="font-medium">K {item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Initiate Bulk Payment Run
            </button>
          </div>

          {/* Recent Payments Ticker */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Recent Payments</h3>
            <div className="space-y-2">
              {mockData.recentPayments.map((payment, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">{payment.member}</div>
                    <div className="text-sm text-gray-600">{payment.type} • {payment.date}</div>
                  </div>
                  <div className="font-bold text-green-600">K {payment.amount.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quadrant C: Member Data Integrity & Masterfile Management */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">C. Member Data Integrity & Masterfile Management</h2>
          <p className="text-gray-600 mb-6">"Is our member data complete, accurate, and ready for processing?"</p>

          {/* Member Profile Completeness Scorecard */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Member Profile Completeness Scorecard</h3>
            <div className="text-center p-6 bg-blue-50 rounded-lg mb-4">
              <div className="text-5xl font-bold text-blue-600 mb-2">{mockData.dataCompleteness.score}%</div>
              <div className="text-gray-600">Member Masterfile Health Complete</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {mockData.dataCompleteness.issues.map((issue, index) => (
                <div key={index} className="p-4 bg-red-50 rounded-lg text-center cursor-pointer hover:bg-red-100">
                  <div className="text-2xl font-bold text-red-600 mb-1">{issue.count.toLocaleString()}</div>
                  <div className="text-sm text-gray-700">{issue.type}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bulk Action & Data Upload Monitor */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Bulk Action & Data Upload Monitor</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">New Member Batch Upload</span>
                  <span className="text-green-600 font-bold">{mockData.bulkOperations.newMembers.status}</span>
                </div>
                <div className="text-sm text-gray-600">{mockData.bulkOperations.newMembers.count} members • {mockData.bulkOperations.newMembers.timestamp}</div>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Beneficiary Import</span>
                  <span className="text-yellow-600 font-bold">{mockData.bulkOperations.beneficiaries.status}</span>
                </div>
                <div className="text-sm text-gray-600">{mockData.bulkOperations.beneficiaries.count} records • {mockData.bulkOperations.beneficiaries.timestamp}</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Legacy Data Migration</span>
                  <span className="text-green-600 font-bold">{mockData.bulkOperations.legacyMigration.status}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: `${mockData.bulkOperations.legacyMigration.progress}%`}}></div>
                </div>
                <div className="text-sm text-gray-600">{mockData.bulkOperations.legacyMigration.timestamp}</div>
              </div>
              <div className="text-sm text-gray-600">
                Last bulk update by: <span className="font-medium">{mockData.bulkOperations.lastUser}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quadrant D: Member Lifecycle & Movement Analytics */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">D. Member Lifecycle & Movement Analytics</h2>
          <p className="text-gray-600 mb-6">"How is our member population changing, and why?"</p>

          {/* Real-Time Member Movement Ticker */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Real-Time Member Movement Ticker</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="space-y-2">
                {mockData.memberMovement.map((movement, index) => (
                  <div key={index} className="text-sm font-medium text-gray-800">{movement}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Membership Stock & Flow Dashboard */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Membership Stock & Flow Dashboard</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-2xl font-bold text-blue-600">{mockData.membershipStock.active.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded">
                <div className="text-2xl font-bold text-yellow-600">{mockData.membershipStock.deferred.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Deferred Members</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded">
                <div className="text-2xl font-bold text-purple-600">{mockData.membershipStock.pensioners.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Pensioners</div>
              </div>
            </div>
            <div className="text-center">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={mockData.membershipFlow}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="stage" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Scheme Transition Monitor */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Scheme Transition Monitor</h3>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Members Pending Sub-Scheme Switch</span>
                <span className="text-orange-600 font-bold">{mockData.schemeTransitions.pending}</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Approved: {mockData.schemeTransitions.approved} • Awaiting System Movement: {mockData.schemeTransitions.awaitingMovement}
              </div>
              <div className="text-xs text-gray-500">Serves as control to ensure batch movements are completed accurately.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PensionOperationsCommandCenter;