import React, { useState } from 'react';
import { X, Box, Barcode, Calendar, DollarSign, ShieldCheck, Tag } from 'lucide-react';

interface AssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const AssetModal: React.FC<AssetModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    assetName: '',
    assetCategory: 'IT Equipment',
    serialNumber: '',
    purchaseDate: new Date().toISOString().split('T')[0],
    purchasePrice: 0,
    depreciationMethod: 'Straight Line',
    usefulLife: 5,
    location: '',
    department: '',
    status: 'Active'
  });

  const categories = ['IT Equipment', 'Office Furniture', 'Motor Vehicles', 'Buildings', 'Land', 'Plant & Machinery'];
  const methods = ['Straight Line', 'Reducing Balance', 'Sum of Years Digits'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      assetTag: `NS-AST-${Math.floor(1000 + Math.random() * 9000)}`,
      bookValue: formData.purchasePrice,
      accumulatedDepreciation: 0
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full mx-4 shadow-2xl overflow-hidden flex flex-col">
        <div className="bg-primary-navy p-6 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-teal-500 p-2 rounded-lg">
              <Box size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Fixed Asset Registration</h2>
              <p className="text-blue-100 text-sm font-light">Capital Asset Lifecycle Management</p>
            </div>
          </div>
          <button onClick={onClose} className="text-blue-200 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 overflow-y-auto max-h-[80vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Basic Info */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 border-b pb-2 flex items-center gap-2">
                <Tag size={14} /> Asset Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Asset Name *</label>
                  <input 
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none text-sm"
                    placeholder="e.g. Dell Latitude 5420"
                    value={formData.assetName}
                    onChange={(e) => setFormData({...formData, assetName: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                    <select 
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none text-sm appearance-none bg-white"
                      value={formData.assetCategory}
                      onChange={(e) => setFormData({...formData, assetCategory: e.target.value})}
                    >
                      {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Serial Number</label>
                    <div className="relative">
                      <Barcode className="absolute left-3 top-2.5 text-gray-400" size={16} />
                      <input 
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none text-sm"
                        placeholder="SN-123456"
                        value={formData.serialNumber}
                        onChange={(e) => setFormData({...formData, serialNumber: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
                    <input 
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none text-sm"
                      placeholder="e.g. Finance"
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                    <input 
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none text-sm"
                      placeholder="e.g. Head Office, 4th Floor"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Financials */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 border-b pb-2 flex items-center gap-2">
                <DollarSign size={14} /> Acquisition & Depreciation
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Purchase Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 text-gray-400" size={16} />
                      <input 
                        type="date"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none text-sm"
                        value={formData.purchaseDate}
                        onChange={(e) => setFormData({...formData, purchaseDate: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Purchase Price (K)</label>
                    <input 
                      type="number"
                      required
                      className="w-full px-4 py-2 border rounded-lg font-bold text-primary-navy focus:ring-2 focus:ring-primary-navy outline-none text-sm"
                      placeholder="0.00"
                      value={formData.purchasePrice || ''}
                      onChange={(e) => setFormData({...formData, purchasePrice: parseFloat(e.target.value) || 0})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Depreciation Method</label>
                  <select 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none text-sm appearance-none bg-white"
                    value={formData.depreciationMethod}
                    onChange={(e) => setFormData({...formData, depreciationMethod: e.target.value})}
                  >
                    {methods.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Useful Life (Years): <span className="text-primary-navy font-bold">{formData.usefulLife} Years</span></label>
                  <input 
                    type="range"
                    min="1"
                    max="50"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-navy"
                    value={formData.usefulLife}
                    onChange={(e) => setFormData({...formData, usefulLife: parseInt(e.target.value)})}
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg flex gap-3 items-start border border-blue-100">
                  <ShieldCheck size={20} className="text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-blue-900 uppercase tracking-tight">Compliance Note</p>
                    <p className="text-[11px] text-blue-800 leading-relaxed mt-1">
                      This asset will be automatically added to the Asset Registry and depreciation schedules will be generated upon approval.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-4 pt-6 border-t">
            <button 
              type="submit"
              className="flex-1 bg-primary-navy text-white font-bold py-3 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-all shadow-lg active:scale-95"
            >
              Register Asset
            </button>
            <button 
              type="button"
              onClick={onClose}
              className="px-8 border-2 border-gray-200 text-gray-600 font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssetModal;
