import React, { useState } from 'react';
import { X, Info } from 'lucide-react';

interface GLAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (account: any) => void;
}

const GLAccountModal: React.FC<GLAccountModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [accountCode, setAccountCode] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountType, setAccountType] = useState('Asset');
  const [parentAccount, setParentAccount] = useState('');
  const [currency, setCurrency] = useState('ZMW');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const accountTypes = [
    'Asset',
    'Liability',
    'Equity',
    'Revenue',
    'Expense'
  ];

  const parentAccounts = [
    { code: '1000', name: 'Current Assets' },
    { code: '1100', name: 'Cash & Cash Equivalents' },
    { code: '2000', name: 'Current Liabilities' },
    { code: '3000', name: 'Equity' },
    { code: '4000', name: 'Operating Revenue' },
    { code: '5000', name: 'Operating Expenses' },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!accountCode) newErrors.accountCode = 'Account code is required';
    if (!accountName) newErrors.accountName = 'Account name is required';
    if (!accountType) newErrors.accountType = 'Account type is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({
        accountCode,
        accountName,
        accountType,
        parentAccount,
        currency,
        description,
        isActive
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 shadow-xl">
        <div className="flex justify-between items-center p-6 border-b bg-primary-navy text-white rounded-t-lg">
          <h2 className="text-xl font-semibold">Create New GL Account</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={accountCode}
                  onChange={(e) => setAccountCode(e.target.value)}
                  placeholder="e.g. 1010-001"
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-navy focus:border-transparent outline-none ${errors.accountCode ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.accountCode && <p className="text-red-500 text-xs mt-1">{errors.accountCode}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  placeholder="e.g. Petty Cash - Lusaka"
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-navy focus:border-transparent outline-none ${errors.accountName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.accountName && <p className="text-red-500 text-xs mt-1">{errors.accountName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-navy outline-none"
                >
                  {accountTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent Account
                </label>
                <select
                  value={parentAccount}
                  onChange={(e) => setParentAccount(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-navy outline-none"
                >
                  <option value="">None (Top Level)</option>
                  {parentAccounts.map(acc => (
                    <option key={acc.code} value={acc.code}>{acc.code} - {acc.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-navy outline-none"
                >
                  <option value="ZMW">ZMW - Zambian Kwacha</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="EUR">EUR - Euro</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-8">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="w-4 h-4 text-primary-navy border-gray-300 rounded focus:ring-primary-navy"
                />
                <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                  Account is Active
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Provide a detailed description of the account's purpose..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-navy outline-none"
            />
          </div>

          <div className="mt-6 flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
            <Info className="text-blue-500 mt-0.5" size={18} />
            <div className="text-sm text-blue-700">
              <p className="font-semibold">Accounting Tip:</p>
              <p>Ensure the account code follows the national standard chart of accounts for statutory bodies.</p>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-primary-navy text-white font-semibold py-2.5 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-all duration-200"
            >
              Create Account
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GLAccountModal;
