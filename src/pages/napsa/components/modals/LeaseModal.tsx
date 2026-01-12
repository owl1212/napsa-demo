import React, { useState } from "react";

interface LeaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const LeaseModal: React.FC<LeaseModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    tenant: '',
    expiryDate: '',
    status: 'Active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ tenant: '', expiryDate: '', status: 'Active' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-md w-full mx-4 shadow-2xl overflow-hidden">
        <div className="bg-primary-navy p-4 text-white flex justify-between items-center">
          <h2 className="text-lg font-bold">Update Lease</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Tenant</label>
              <input 
                type="text" 
                value={formData.tenant}
                onChange={(e) => setFormData({ ...formData, tenant: e.target.value })}
                className="w-full p-2 border rounded" 
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Expiry Date</label>
              <input 
                type="date" 
                value={formData.expiryDate}
                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
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
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
                <option value="Renewed">Renewed</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Update Lease</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaseModal;