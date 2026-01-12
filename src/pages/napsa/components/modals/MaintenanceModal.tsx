import React, { useState } from "react";

interface MaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const MaintenanceModal: React.FC<MaintenanceModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    type: '',
    cost: '',
    status: 'Open',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ type: '', cost: '', status: 'Open' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-md w-full mx-4 shadow-2xl overflow-hidden">
        <div className="bg-primary-navy p-4 text-white flex justify-between items-center">
          <h2 className="text-lg font-bold">Add Maintenance</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Type</label>
              <input 
                type="text" 
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full p-2 border rounded" 
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Cost (ZMW)</label>
              <input 
                type="number" 
                value={formData.cost}
                onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                className="w-full p-2 border rounded" 
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Status</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Maintenance</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceModal;