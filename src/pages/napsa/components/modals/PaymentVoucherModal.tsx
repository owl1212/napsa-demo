import React, { useState } from 'react';
import { X, User, FileText, Landmark, ShieldCheck } from 'lucide-react';

interface PaymentVoucherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const PaymentVoucherModal: React.FC<PaymentVoucherModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [vendor, setVendor] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [amount, setAmount] = useState<number | string>('');
  const [paymentMethod, setPaymentMethod] = useState('EFT');
  const [bankAccount, setBankAccount] = useState('Zanaco Main');
  const [description, setDescription] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [budgetLine, setBudgetLine] = useState('');

  const vendors = [
    'ZESCO Limited',
    'Zamtel',
    'Office Mart',
    'KPMG Zambia',
    'Toyota Zambia',
    'Lusaka Water & Sewerage'
  ];

  const paymentMethods = ['EFT', 'RTGS', 'Internal Transfer', 'Cheque'];
  
  const budgetLines = [
    '7010 - Utilities',
    '7020 - Rent',
    '7030 - IT Services',
    '7040 - Professional Fees',
    '7050 - Transport & Travel'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      voucherId: `PV-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000) + 1000}`,
      vendor,
      date,
      amount,
      paymentMethod,
      bankAccount,
      description,
      invoiceNumber,
      budgetLine,
      status: 'Awaiting Approval'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full mx-4 shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b bg-primary-navy text-white rounded-t-lg">
          <div>
            <h2 className="text-xl font-semibold">Payment Voucher (PV)</h2>
            <p className="text-blue-100 text-xs mt-1">Generate a new disbursement request</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <User size={14} /> Payee Details
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vendor/Beneficiary *</label>
                <select
                  required
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none"
                >
                  <option value="">Select Vendor</option>
                  {vendors.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Invoice Reference</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <input
                    type="text"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    placeholder="INV/2026/..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-navy outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount to Pay (K) *</label>
                <input
                  required
                  type="number"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-bold text-primary-navy focus:ring-2 focus:ring-primary-navy outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Landmark size={14} /> Payment Info
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none"
                >
                  {paymentMethods.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From Bank Account</label>
                <select
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none"
                >
                  <option value="Zanaco Main">Zanaco Main (452...)</option>
                  <option value="Stanbic Ops">Stanbic Ops (287...)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Budget Line Allocation</label>
                <select
                  value={budgetLine}
                  onChange={(e) => setBudgetLine(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none"
                >
                  <option value="">Select Budget Line</option>
                  {budgetLines.map(line => <option key={line} value={line}>{line}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description / Purpose of Payment *</label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none"
            />
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200 flex gap-3">
            <ShieldCheck className="text-yellow-600 shrink-0" size={20} />
            <div className="text-xs text-yellow-800">
              <p className="font-bold uppercase mb-1">Approval Workflow</p>
              <p>This voucher will be routed to the <strong>Finance Manager</strong> for review and subsequently to the <strong>Director of Finance</strong> for final approval before disbursement.</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-primary-navy text-white font-bold py-3 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-all shadow-lg capitalize"
            >
              Generate Voucher & Route for Approval
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-8 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentVoucherModal;
