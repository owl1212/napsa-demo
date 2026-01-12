import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Plus, Edit, Wrench } from 'lucide-react';
import PropertyModal from './modals/PropertyModal';
import LeaseModal from './modals/LeaseModal';
import MaintenanceModal from './modals/MaintenanceModal';

const RealEstateView = () => {
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [showLeaseModal, setShowLeaseModal] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);

  const handlePropertySubmit = (data: any) => {
    console.log('Property added:', data);
  };

  const handleLeaseSubmit = (data: any) => {
    console.log('Lease updated:', data);
  };

  const handleMaintenanceSubmit = (data: any) => {
    console.log('Maintenance added:', data);
  };

  const chartData = [
    { month: 'Jan', income: 2.5 },
    { month: 'Feb', income: 2.7 },
    { month: 'Mar', income: 2.8 },
    { month: 'Apr', income: 2.6 },
    { month: 'May', income: 2.9 },
    { month: 'Jun', income: 2.8 },
  ];
  return (
    <>
    <div className="p-8 max-w-7xl w-full">
      <div className="text-xs text-text-gray mb-6">Operations &gt; Real Estate Management</div>

      <h1 className="text-2xl font-bold text-text-dark mb-8">Real Estate Management</h1>

      {/* Portfolio Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Portfolio Value</h3>
          <div className="text-3xl font-bold text-text-dark mb-2">K 45.2M</div>
          <div className="text-sm text-text-gray mb-2">Carrying Value</div>
          <div className="text-sm text-green-600 mb-4">+5.2% from acquisition cost (K 43.0M)</div>
          <button className="text-sm text-blue-500 hover:underline">View Report</button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Monthly Rental Income</h3>
          <div className="text-3xl font-bold text-text-dark mb-2">K 2.8M</div>
          <div className="text-sm text-text-gray mb-2">Current month</div>
          <div className="flex items-center text-sm mb-4">
            <span className="text-green-600 font-medium">+8.3%</span>
            <span className="text-text-gray ml-2">vs budget (K 2.6M)</span>
          </div>
          <button className="text-sm text-blue-500 hover:underline">View Report</button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Occupancy Rate</h3>
          <div className="text-3xl font-bold text-text-dark mb-2">94.2%</div>
          <div className="text-sm text-text-gray mb-2">Overall portfolio</div>
          <div className="text-sm text-green-600 mb-4">+2.1% from last quarter</div>
          <button className="text-sm text-blue-500 hover:underline">View Report</button>
        </div>
      </div>

      {/* Rental Income Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h3 className="text-sm font-semibold text-text-gray mb-4">Monthly Rental Income Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => [`K ${value}M`, 'Income']} />
            <Bar dataKey="income" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Operational Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-text-gray">Occupancy Dashboard</h3>
            <button 
              onClick={() => setShowPropertyModal(true)}
              className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
            >
              <Plus size={14} />
              Add Property
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded" onClick={() => setShowPropertyModal(true)}>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-green-500"></div>
                <span className="text-sm">Lusaka Central Office</span>
              </div>
              <span className="text-sm font-medium">98% occupied (120/122 units)</span>
            </div>
            <div className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded" onClick={() => setShowPropertyModal(true)}>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-yellow-500"></div>
                <span className="text-sm">Ndola Commercial Complex</span>
              </div>
              <span className="text-sm font-medium">87% occupied (52/60 units)</span>
            </div>
            <div className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded" onClick={() => setShowPropertyModal(true)}>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-red-500"></div>
                <span className="text-sm">Kitwe Retail Plaza</span>
              </div>
              <span className="text-sm font-medium">76% occupied (38/50 units)</span>
            </div>
            <div className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded" onClick={() => setShowPropertyModal(true)}>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-green-500"></div>
                <span className="text-sm">Livingstone Mall</span>
              </div>
              <span className="text-sm font-medium">95% occupied (95/100 units)</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-text-gray mb-4">Rent Collection Status</h3>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Current month collection</span>
              <span className="font-medium">K 2.8M / K 2.9M</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '97%'}}></div>
            </div>
            <div className="text-xs text-green-600 mt-1 flex justify-between items-center">
              97% collection rate
              <button className="text-xs text-blue-500 hover:underline">View Details</button>
            </div>
          </div>

          <h4 className="text-sm font-medium mb-3">Current Rent Arrears</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>1-30 days</span>
              <span className="font-medium text-yellow-600">K 45,230</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>31-60 days</span>
              <span className="font-medium text-orange-600">K 28,450</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>61+ days</span>
              <span className="font-medium text-red-600">K 12,890</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t text-sm font-semibold">
            Total arrears: K 86,570
          </div>
        </div>
      </div>

      {/* Lease Management & Maintenance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-text-gray">Lease Expiry Schedule</h3>
            <button 
              onClick={() => setShowLeaseModal(true)}
              className="flex items-center gap-2 px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600"
            >
              <Edit size={14} />
              Update Lease
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">Shoprite Lusaka (Unit 15-20)</div>
                <div className="text-xs text-text-gray">Lease expires: Feb 15, 2026</div>
              </div>
              <div className="flex items-center gap-2">
                <Edit size={14} className="text-gray-500 cursor-pointer hover:text-blue-500" onClick={() => setShowLeaseModal(true)} />
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Critical</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">Game Stores Ndola</div>
                <div className="text-xs text-text-gray">Lease expires: Apr 30, 2026</div>
              </div>
              <div className="flex items-center gap-2">
                <Edit size={14} className="text-gray-500 cursor-pointer hover:text-blue-500" onClick={() => setShowLeaseModal(true)} />
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Review</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <div>
                <div className="font-medium text-sm">Pick n Pay Kitwe</div>
                <div className="text-xs text-text-gray">Lease expires: Jun 12, 2026</div>
              </div>
              <div className="flex items-center gap-2">
                <Edit size={14} className="text-gray-500 cursor-pointer hover:text-blue-500" onClick={() => setShowLeaseModal(true)} />
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Review</span>
              </div>
            </div>
          </div>
          <button className="text-accent-blue font-medium text-sm mt-4">View Full Schedule →</button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-text-gray">Maintenance & Capex</h3>
            <button 
              onClick={() => setShowMaintenanceModal(true)}
              className="flex items-center gap-2 px-3 py-1 bg-orange-500 text-white text-xs rounded hover:bg-orange-600"
            >
              <Wrench size={14} />
              Add Maintenance
            </button>
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-3">Open Work Orders</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm cursor-pointer hover:bg-gray-50 p-1 rounded" onClick={() => setShowMaintenanceModal(true)}>
                <span>HVAC Repairs</span>
                <span className="font-medium">3 orders</span>
              </div>
              <div className="flex justify-between text-sm cursor-pointer hover:bg-gray-50 p-1 rounded" onClick={() => setShowMaintenanceModal(true)}>
                <span>Electrical Maintenance</span>
                <span className="font-medium">5 orders</span>
              </div>
              <div className="flex justify-between text-sm cursor-pointer hover:bg-gray-50 p-1 rounded" onClick={() => setShowMaintenanceModal(true)}>
                <span>Plumbing Issues</span>
                <span className="font-medium">2 orders</span>
              </div>
            </div>
          </div>

          <h4 className="text-sm font-medium mb-3">Capex Budget vs Actual (YTD)</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm mb-1">
              <span>Property Improvements</span>
              <span>K 1.2M / K 1.5M</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
            </div>
            <div className="text-xs text-green-600">20% under budget</div>
          </div>
        </div>
      </div>

    </div>

    <PropertyModal 
      isOpen={showPropertyModal} 
      onClose={() => setShowPropertyModal(false)} 
      onSubmit={handlePropertySubmit} 
    />
    <LeaseModal 
      isOpen={showLeaseModal} 
      onClose={() => setShowLeaseModal(false)} 
      onSubmit={handleLeaseSubmit} 
    />
    <MaintenanceModal 
      isOpen={showMaintenanceModal} 
      onClose={() => setShowMaintenanceModal(false)} 
      onSubmit={handleMaintenanceSubmit} 
    />
    </>
  );
};

export default RealEstateView;