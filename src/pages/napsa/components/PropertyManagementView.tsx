import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import PropertyModal from './modals/PropertyModal';

interface Property {
  id: number;
  name: string;
  location: string;
  value: number;
  yield: number;
  occupancy: number;
}

const PropertyManagementView: React.FC = () => {
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [properties, setProperties] = useState<Property[]>([
    { id: 1, name: 'Lusaka Central Office', location: 'Lusaka', value: 45000000, yield: 8.5, occupancy: 98 },
    { id: 2, name: 'Ndola Commercial Complex', location: 'Ndola', value: 32000000, yield: 7.2, occupancy: 87 },
    { id: 3, name: 'Kitwe Retail Plaza', location: 'Kitwe', value: 28000000, yield: 9.1, occupancy: 76 },
    { id: 4, name: 'Livingstone Mall', location: 'Livingstone', value: 35000000, yield: 8.8, occupancy: 95 },
  ]);

  const handlePropertySubmit = (data: any) => {
    const newProperty: Property = {
      id: properties.length + 1,
      name: data.name,
      location: data.location,
      value: parseFloat(data.value),
      yield: parseFloat(data.yield),
      occupancy: parseFloat(data.occupancy),
    };
    setProperties([...properties, newProperty]);
  };

  return (
    <>
      <div className="p-8 max-w-7xl w-full">
        <div className="text-xs text-gray-600 mb-6">Operations &gt; Property Management</div>

        <h1 className="text-2xl font-bold text-gray-900 mb-8">Property Management</h1>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Properties Portfolio</h3>
            <button 
              onClick={() => setShowPropertyModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              <Plus size={16} />
              Add Property
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Property Name</th>
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-right p-3 font-semibold">Value (ZMW)</th>
                  <th className="text-right p-3 font-semibold">Yield (%)</th>
                  <th className="text-right p-3 font-semibold">Occupancy (%)</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{property.name}</td>
                    <td className="p-3">{property.location}</td>
                    <td className="p-3 text-right">{property.value.toLocaleString()}</td>
                    <td className="p-3 text-right">{property.yield}%</td>
                    <td className="p-3 text-right">{property.occupancy}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <PropertyModal 
        isOpen={showPropertyModal} 
        onClose={() => setShowPropertyModal(false)} 
        onSubmit={handlePropertySubmit} 
      />
    </>
  );
};

export default PropertyManagementView;
