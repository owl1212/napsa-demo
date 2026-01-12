import React, { useState } from 'react';
import { X, ArrowRightLeft, Building, CreditCard, Calendar, AlertCircle } from 'lucide-react';

interface BankTransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const BankTransferModal: React.FC<BankTransferModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    sourceAccountId: '',
    destinationAccountId: '',
    amount: 0,
    transferDate: new Date().toISOString().split('T')[0],
    reference: `TRF-${Math.floor(Math.random() * 90000) + 10000}`,
    purpose: '',
  });

  const accounts = [
    { id: '1', name: 'Zanaco Main Ops', balance: 45200000, type: 'Operating' },
    { id: '2', name: 'Stanbic Investment', balance: 120500000, type: 'Investment' },
    { id: '3', name: 'FNB Reserve', balance: 12100000, type: 'Reserve' },
    { id: '4', name: 'Indo-Zambia Payroll', balance: 5600000, type: 'Payroll' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  const sourceAccount = accounts.find(a => a.id === formData.sourceAccountId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 shadow-2xl overflow-hidden">
        <div className="bg-primary-navy p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <ArrowRightLeft size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Inter-Account Transfer</h2>
              <p className="text-blue-200 text-sm font-light">Treasury & Liquidity Management</p>
            </div>
          </div>
          <button onClick={onClose} className="text-blue-200 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Source Account</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 text-gray-400" size={18} />
                <select 
                  required
                  className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none appearance-none"
                  value={formData.sourceAccountId}
                  onChange={(e) => setFormData({...formData, sourceAccountId: e.target.value})}
                >
                  <option value="">Select Account</option>
                  {accounts.map(acc => (
                    <option key={acc.id} value={acc.id}>{acc.name} (K { (acc.balance/1000000).toFixed(1) }M)</option>
                  ))}
                </select>
              </div>
              {sourceAccount && (
                <div className="text-[11px] text-gray-500 pl-1 italic">
                  Available Balance: K {sourceAccount.balance.toLocaleString()}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Destination Account</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 text-gray-400" size={18} />
                <select 
                  required
                  className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none appearance-none"
                  value={formData.destinationAccountId}
                  onChange={(e) => setFormData({...formData, destinationAccountId: e.target.value})}
                >
                  <option value="">Select Account</option>
                  {accounts.map(acc => (
                    <option key={acc.id} value={acc.id} disabled={acc.id === formData.sourceAccountId}>{acc.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Transfer Amount (ZMW)</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-500 font-bold">K</span>
              <input 
                type="number"
                required
                className="w-full pl-10 pr-4 py-3 border rounded-lg text-lg font-bold text-primary-navy focus:ring-2 focus:ring-primary-navy outline-none"
                placeholder="0.00"
                value={formData.amount || ''}
                onChange={(e) => setFormData({...formData, amount: parseFloat(e.target.value) || 0})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 text-xs uppercase tracking-wider">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type="date"
                  className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none text-sm"
                  value={formData.transferDate}
                  onChange={(e) => setFormData({...formData, transferDate: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 text-xs uppercase tracking-wider">Reference</label>
              <input 
                className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none text-sm"
                value={formData.reference}
                onChange={(e) => setFormData({...formData, reference: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Purpose / Description</label>
            <textarea 
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none text-sm"
              rows={2}
              placeholder="Reason for transfer (e.g. Payroll funding)"
              value={formData.purpose}
              onChange={(e) => setFormData({...formData, purpose: e.target.value})}
            />
          </div>

          {sourceAccount && formData.amount > sourceAccount.balance && (
            <div className="bg-red-50 p-4 rounded-lg flex gap-3 text-red-700 items-start">
              <AlertCircle size={20} className="shrink-0" />
              <p className="text-sm">Warning: Transfer amount exceeds available balance in source account.</p>
            </div>
          )}

          <div className="pt-4 flex gap-4">
            <button 
              type="submit"
              className="flex-1 bg-accent-gold text-primary-navy font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-md active:transform active:scale-95"
            >
              Initiate Transfer
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

export default BankTransferModal;
