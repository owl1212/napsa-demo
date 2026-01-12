import React, { useState } from 'react';
import { X, Calculator, TrendingUp, Save, AlertTriangle } from 'lucide-react';

interface RevaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const RevaluationModal: React.FC<RevaluationModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    assetId: '',
    assetName: '',
    currentBookValue: 0,
    revaluedAmount: 0,
    revaluationDate: new Date().toISOString().split('T')[0],
    revaluationMethod: 'Market Value',
    appraiserName: '',
    reason: '',
  });

  const [assets] = useState([
    { id: 'AST001', name: 'Office Building - Lusaka', bookValue: 150000000, location: 'Lusaka' },
    { id: 'AST002', name: 'Investment Property - Ndola', bookValue: 78000000, location: 'Ndola' },
    { id: 'AST003', name: 'IT Equipment Portfolio', bookValue: 23400000, location: 'Lusaka' },
    { id: 'AST004', name: 'Vehicle Fleet', bookValue: 15600000, location: 'Nationwide' },
  ]);

  if (!isOpen) return null;

  const revaluationMethods = [
    'Market Value',
    'Depreciated Replacement Cost',
    'Income Approach',
    'Cost Approach',
    'Professional Appraisal'
  ];

  const handleAssetSelect = (asset: any) => {
    setFormData({
      ...formData,
      assetId: asset.id,
      assetName: asset.name,
      currentBookValue: asset.bookValue,
      revaluedAmount: asset.bookValue, // Default to current value
    });
  };

  const calculateGainLoss = () => {
    return formData.revaluedAmount - formData.currentBookValue;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const gainLoss = calculateGainLoss();
    onSubmit({
      ...formData,
      gainLoss,
      gainLossType: gainLoss >= 0 ? 'gain' : 'loss',
      submittedAt: new Date().toISOString(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Calculator size={20} />
            Asset Revaluation
          </h2>
          <button onClick={onClose} className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-auto max-h-[70vh]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Asset Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Select Asset for Revaluation</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {assets.map((asset) => (
                  <div
                    key={asset.id}
                    onClick={() => handleAssetSelect(asset)}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      formData.assetId === asset.id
                        ? 'border-accent-blue bg-accent-blue bg-opacity-10'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-medium">{asset.name}</div>
                    <div className="text-sm text-gray-600">ID: {asset.id}</div>
                    <div className="text-sm text-gray-600">Book Value: K {asset.bookValue.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>

            {formData.assetId && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Asset ID</label>
                    <input
                      type="text"
                      value={formData.assetId}
                      readOnly
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Asset Name</label>
                    <input
                      type="text"
                      value={formData.assetName}
                      readOnly
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Current Book Value (K)</label>
                    <input
                      type="number"
                      value={formData.currentBookValue}
                      readOnly
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Revalued Amount (K)</label>
                    <input
                      type="number"
                      value={formData.revaluedAmount}
                      onChange={(e) => setFormData({ ...formData, revaluedAmount: Number(e.target.value) })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                      min="0"
                      step="1000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Revaluation Date</label>
                    <input
                      type="date"
                      value={formData.revaluationDate}
                      onChange={(e) => setFormData({ ...formData, revaluationDate: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Revaluation Method</label>
                    <select
                      value={formData.revaluationMethod}
                      onChange={(e) => setFormData({ ...formData, revaluationMethod: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                    >
                      {revaluationMethods.map(method => (
                        <option key={method} value={method}>{method}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Appraiser/Valuer Name</label>
                    <input
                      type="text"
                      value={formData.appraiserName}
                      onChange={(e) => setFormData({ ...formData, appraiserName: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                      placeholder="Enter appraiser name"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Reason for Revaluation</label>
                    <textarea
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                      rows={3}
                      placeholder="Explain the reason for this revaluation..."
                    />
                  </div>
                </div>

                {/* Revaluation Impact */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-md font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp size={18} />
                    Revaluation Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Current Book Value</div>
                      <div className="text-lg font-semibold">K {formData.currentBookValue.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Revalued Amount</div>
                      <div className="text-lg font-semibold">K {formData.revaluedAmount.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-sm ${calculateGainLoss() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {calculateGainLoss() >= 0 ? 'Revaluation Gain' : 'Revaluation Loss'}
                      </div>
                      <div className={`text-lg font-semibold ${calculateGainLoss() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        K {Math.abs(calculateGainLoss()).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {Math.abs(calculateGainLoss()) > formData.currentBookValue * 0.1 && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center gap-2 text-yellow-800">
                        <AlertTriangle size={16} />
                        <span className="font-medium">Significant Revaluation</span>
                      </div>
                      <div className="text-sm text-yellow-700 mt-1">
                        This revaluation represents a {Math.abs((calculateGainLoss() / formData.currentBookValue) * 100).toFixed(1)}% change.
                        Additional approval may be required.
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!formData.assetId}
                className="px-6 py-2 bg-primary-navy text-white rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={18} />
                Submit Revaluation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RevaluationModal;