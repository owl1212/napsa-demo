import React, { useState } from "react";

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    value: '',
    yield: '',
    occupancy: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', location: '', value: '', yield: '', occupancy: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-md w-full mx-4 shadow-2xl overflow-hidden">
        <div className="bg-primary-navy p-4 text-white flex justify-between items-center">
          <h2 className="text-lg font-bold">Add Property</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Property Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Value (ZMW)</label>
              <input
                type="number"
                value={formData.value}
                onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Yield (%)</label>
              <input
                type="number"
                step="0.1"
                value={formData.yield}
                onChange={(e) => setFormData({ ...formData, yield: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Occupancy (%)</label>
              <input
                type="number"
                value={formData.occupancy}
                onChange={(e) => setFormData({ ...formData, occupancy: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Property</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
