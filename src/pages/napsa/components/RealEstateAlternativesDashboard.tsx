import React from 'react';

const RealEstateAlternativesDashboard: React.FC = () => {
  const properties = [
    { name: 'NAPSA Tower', location: 'Lusaka CBD', value: 500000000, yield: 9.2, occupancy: 100, status: 'performing' },
    { name: 'Industrial Park A', location: 'Kitwe', value: 350000000, yield: 8.5, occupancy: 95, status: 'performing' },
    { name: 'Retail Complex B', location: 'Ndola', value: 280000000, yield: 7.8, occupancy: 85, status: 'amber' },
    { name: 'Office Block C', location: 'Livingstone', value: 200000000, yield: 6.5, occupancy: 70, status: 'red' },
    { name: 'Warehouse D', location: 'Chirundu', value: 150000000, yield: 8.9, occupancy: 100, status: 'performing' },
  ];

  const alternatives = [
    { name: 'African Infrastructure Fund', commitment: 100000000, drawn: 80000000, vintage: 2020, nav: 1.15, dpi: 1.2, tvpi: 1.35 },
    { name: 'Zambia Growth Fund', commitment: 75000000, drawn: 60000000, vintage: 2021, nav: 1.08, dpi: 0.9, tvpi: 1.12 },
    { name: 'Regional Private Equity Fund', commitment: 50000000, drawn: 45000000, vintage: 2019, nav: 1.25, dpi: 1.4, tvpi: 1.55 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'performing': return 'text-green-600';
      case 'amber': return 'text-yellow-600';
      case 'red': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'performing': return '🟢';
      case 'amber': return '🟡';
      case 'red': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Real Estate & Alternatives Dashboard</h2>

      {/* Summary Tile */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <span className="text-sm text-gray-600">Total Property Value</span>
            <div className="text-2xl font-bold">ZMW 1.48B</div>
          </div>
          <div>
            <span className="text-sm text-gray-600">Average Rental Yield</span>
            <div className="text-xl font-semibold">8.2%</div>
          </div>
          <div>
            <span className="text-sm text-gray-600">Occupancy Rate</span>
            <div className="text-xl font-semibold">90%</div>
          </div>
          <div>
            <span className="text-sm text-gray-600">Alternatives NAV</span>
            <div className="text-xl font-semibold">ZMW 225M</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Geographic/Performance Map */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Property Portfolio Overview</h3>
          <div className="space-y-3">
            {properties.map((property, idx) => (
              <div key={idx} className="p-3 border rounded hover:bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold">{property.name}</div>
                    <div className="text-sm text-gray-600">{property.location}</div>
                  </div>
                  <div className={`text-lg ${getStatusColor(property.status)}`}>
                    {getStatusIcon(property.status)}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-gray-600">Value:</span>
                    <div className="font-semibold">ZMW {(property.value / 1000000).toFixed(0)}M</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Yield:</span>
                    <div className="font-semibold">{property.yield}%</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Occupancy:</span>
                    <div className="font-semibold">{property.occupancy}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2">
            <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Add New Property
            </button>
            <button className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
              Update Rent Reviews
            </button>
          </div>
        </div>

        {/* Private Equity/Alternatives Summary */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Private Equity & Alternatives</h3>
          <div className="space-y-4">
            {alternatives.map((alt, idx) => (
              <div key={idx} className="p-3 border rounded">
                <div className="font-semibold mb-2">{alt.name}</div>
                <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                  <div>
                    <span className="text-gray-600">Commitment:</span>
                    <div className="font-semibold">ZMW {(alt.commitment / 1000000).toFixed(0)}M</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Drawn:</span>
                    <div className="font-semibold">ZMW {(alt.drawn / 1000000).toFixed(0)}M</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Vintage:</span>
                    <div className="font-semibold">{alt.vintage}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Latest NAV:</span>
                    <div className="font-semibold">{alt.nav}x</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-gray-600">DPI:</span>
                    <span className="font-semibold">{alt.dpi}x</span>
                  </div>
                  <div>
                    <span className="text-gray-600">TVPI:</span>
                    <span className="font-semibold">{alt.tvpi}x</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2">
            <button className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              Record Capital Call
            </button>
            <button className="w-full p-2 bg-orange-500 text-white rounded hover:bg-orange-600">
              Update NAV
            </button>
            <button className="w-full p-2 bg-teal-500 text-white rounded hover:bg-teal-600">
              Generate Alternatives Report
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h3 className="text-xl font-bold mb-4">Key Performance Indicators</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <span className="text-sm text-gray-600">Total AUM (Real Estate + Alt)</span>
            <div className="text-xl font-bold">ZMW 1.705B</div>
          </div>
          <div>
            <span className="text-sm text-gray-600">IRR (5-year)</span>
            <div className="text-xl font-bold text-green-600">11.2%</div>
          </div>
          <div>
            <span className="text-sm text-gray-600">Vacancy Rate</span>
            <div className="text-xl font-bold text-yellow-600">10%</div>
          </div>
          <div>
            <span className="text-sm text-gray-600">Avg Lease Term Remaining</span>
            <div className="text-xl font-bold">3.8 years</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateAlternativesDashboard;