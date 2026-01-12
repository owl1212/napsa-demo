import React, { useState } from 'react';
import { X, Trash2, AlertTriangle, FileText, ArrowDownRight, RefreshCcw } from 'lucide-react';

interface AssetDisposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const AssetDisposalModal: React.FC<AssetDisposalModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    assetId: '',
    disposalDate: new Date().toISOString().split('T')[0],
    disposalMethod: 'Sale',
    disposalProceeds: 0,
    reason: '',
  });

  const assets = [
    { id: '1', name: 'Toyota Hilux (BCA 1234)', nbv: 145000, tag: 'NS-AST-5521' },
    { id: '2', name: 'Server Cluster - Rack 4', nbv: 89000, tag: 'NS-AST-9902' },
    { id: '3', name: 'Office Furniture - Suite 2', nbv: 12000, tag: 'NS-AST-1140' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedAsset = assets.find(a => a.id === formData.assetId);
    onSubmit({ ...formData, assetName: selectedAsset?.name, gainLoss: formData.disposalProceeds - (selectedAsset?.nbv || 0) });
    onClose();
  };

  if (!isOpen) return null;

  const selectedAsset = assets.find(a => a.id === formData.assetId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 shadow-2xl overflow-hidden">
        <div className="bg-accent-red p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Trash2 size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Asset Disposal / Write-off</h2>
              <p className="text-red-100 text-sm">Retirement of fixed assets from Registry</p>
            </div>
          </div>
          <button onClick={onClose} className="text-red-100 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Select Asset to Retire</label>
              <select 
                required
                className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-accent-red outline-none appearance-none bg-white font-medium"
                value={formData.assetId}
                onChange={(e) => setFormData({...formData, assetId: e.target.value})}
              >
                <option value="">Choose Asset...</option>
                {assets.map(a => <option key={a.id} value={a.id}>{a.tag} - {a.name}</option>)}
              </select>
            </div>

            {selectedAsset && (
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 block uppercase text-[10px] font-bold">Net Book Value</span>
                  <span className="font-bold text-primary-navy">K {selectedAsset.nbv.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-gray-500 block uppercase text-[10px] font-bold">Asset Tag</span>
                  <span className="font-bold text-primary-navy">{selectedAsset.tag}</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Disposal Date</label>
                <input 
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent-red outline-none text-sm"
                  value={formData.disposalDate}
                  onChange={(e) => setFormData({...formData, disposalDate: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Method</label>
                <select 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent-red outline-none text-sm appearance-none bg-white"
                  value={formData.disposalMethod}
                  onChange={(e) => setFormData({...formData, disposalMethod: e.target.value})}
                >
                  <option value="Sale">External Sale</option>
                  <option value="Scrap">Scrap / Destruction</option>
                  <option value="Donation">Charitable Donation</option>
                  <option value="Theft">Theft / Write-off</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Disposal Proceeds (K)</label>
              <div className="relative">
                <span className="absolute left-4 top-2 text-gray-500 font-bold">K</span>
                <input 
                  type="number"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg font-bold text-primary-navy focus:ring-2 focus:ring-accent-red outline-none"
                  placeholder="0.00"
                  value={formData.disposalProceeds || ''}
                  onChange={(e) => setFormData({...formData, disposalProceeds: parseFloat(e.target.value) || 0})}
                />
              </div>
              {selectedAsset && (
                <div className={`mt-2 text-[11px] font-bold flex items-center gap-1 ${formData.disposalProceeds >= selectedAsset.nbv ? 'text-green-600' : 'text-red-600'}`}>
                  {formData.disposalProceeds >= selectedAsset.nbv ? <RefreshCcw size={12} /> : <ArrowDownRight size={12} />}
                  Estimated {formData.disposalProceeds >= selectedAsset.nbv ? 'Gain' : 'Loss'} on Disposal: 
                  K {Math.abs(formData.disposalProceeds - selectedAsset.nbv).toLocaleString()}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Justification / Reason</label>
              <textarea 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent-red outline-none text-sm"
                rows={2}
                placeholder="Details of disposal decision..."
                value={formData.reason}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
              />
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded flex gap-3">
            <AlertTriangle className="text-amber-600 shrink-0" size={20} />
            <div className="text-xs text-amber-800 leading-relaxed">
              <strong>Warning:</strong> This action will remove the asset from the active registry and post a realized gain/loss entry to the General Ledger. This cannot be easily reversed.
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              type="submit"
              className="flex-1 bg-accent-red text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <FileText size={18} /> Process Disposal
            </button>
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-gray-200 text-gray-600 font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssetDisposalModal;
