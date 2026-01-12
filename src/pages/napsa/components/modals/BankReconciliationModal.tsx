import React, { useState } from 'react';
import { X, Search, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'Debit' | 'Credit';
  isMatched: boolean;
}

interface BankReconciliationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const BankReconciliationModal: React.FC<BankReconciliationModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [selectedBank, setSelectedBank] = useState('Zanaco Main');
  const [statementDate, setStatementDate] = useState(new Date().toISOString().split('T')[0]);
  const [statementBalance, setStatementBalance] = useState<number | string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', date: '2026-01-05', description: 'Employer Contribution - ABC Ltd', amount: 125000, type: 'Credit', isMatched: true },
    { id: '2', date: '2026-01-06', description: 'Office Rent Payment', amount: 45000, type: 'Debit', isMatched: false },
    { id: '3', date: '2026-01-07', description: 'Interest Income', amount: 1240.50, type: 'Credit', isMatched: false },
    { id: '4', date: '2026-01-07', description: 'ZESCO Bill Payment', amount: 8900, type: 'Debit', isMatched: true },
    { id: '5', date: '2026-01-08', description: 'Benefit Disbursement - Batch #44', amount: 250000, type: 'Debit', isMatched: false },
  ]);

  const bankAccounts = [
    'Zanaco Main',
    'Stanbic Ops',
    'FNB Reserve',
    'ABSA Treasury'
  ];

  const toggleMatch = (id: string) => {
    setTransactions(transactions.map(t => 
      t.id === id ? { ...t, isMatched: !t.isMatched } : t
    ));
  };

  const calculateSubtotal = (type: 'Debit' | 'Credit') => {
    return transactions
      .filter(t => t.type === type && t.isMatched)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const ledgerBalance = 45200000; // Mock current ledger balance
  const matchedDebits = calculateSubtotal('Debit');
  const matchedCredits = calculateSubtotal('Credit');
  const reconciledBalance = ledgerBalance - matchedDebits + matchedCredits;
  
  const difference = Number(statementBalance || 0) - reconciledBalance;

  const handleSubmit = () => {
    onSubmit({
      selectedBank,
      statementDate,
      statementBalance,
      matchedCount: transactions.filter(t => t.isMatched).length,
      difference
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-5xl w-full mx-4 shadow-xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b bg-emerald-700 text-white rounded-t-lg">
          <div>
            <h2 className="text-xl font-semibold">Bank Reconciliation</h2>
            <p className="text-emerald-100 text-sm">Match bank statement transactions with ledger entries</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 flex flex-col md:flex-row gap-6 overflow-y-auto">
          {/* Left Panel: Configuration */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Bank Account</label>
                <select
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  {bankAccounts.map(bank => <option key={bank} value={bank}>{bank}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Statement Date</label>
                <input
                  type="date"
                  value={statementDate}
                  onChange={(e) => setStatementDate(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Statement Ending Balance (K)</label>
                <input
                  type="number"
                  value={statementBalance}
                  onChange={(e) => setStatementBalance(e.target.value)}
                  placeholder="0.00"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 space-y-3">
              <h3 className="font-semibold text-emerald-800 text-sm uppercase tracking-wider">Reconciliation Summary</h3>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Current Ledger Balance:</span>
                <span className="font-medium">K {ledgerBalance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cleared Inflows (+):</span>
                <span className="font-medium text-emerald-600">K {matchedCredits.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cleared Outflows (-):</span>
                <span className="font-medium text-red-600">K {matchedDebits.toLocaleString()}</span>
              </div>
              <div className="pt-2 border-t border-emerald-200 flex justify-between font-bold">
                <span>Reconciled Balance:</span>
                <span>K {reconciledBalance.toLocaleString()}</span>
              </div>
              <div className={`mt-2 p-2 rounded text-center font-bold ${Math.abs(difference) < 0.01 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {Math.abs(difference) < 0.01 ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle size={16} /> Balanced
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <span>Difference: K {difference.toLocaleString()}</span>
                    <span className="text-[10px] font-normal uppercase mt-1">Adjustments required</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel: Transaction Matching */}
          <div className="w-full md:w-2/3 flex flex-col">
            <div className="mb-4 relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search transactions by description or amount..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div className="border rounded-lg overflow-hidden flex-1 overflow-y-auto min-h-[400px]">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 sticky top-0">
                  <tr>
                    <th className="px-4 py-2 text-left">Match</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-right">Debit</th>
                    <th className="px-4 py-2 text-right">Credit</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {transactions.map(t => (
                    <tr 
                      key={t.id} 
                      className={`hover:bg-blue-50 cursor-pointer transition-colors ${t.isMatched ? 'bg-emerald-50' : ''}`}
                      onClick={() => toggleMatch(t.id)}
                    >
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={t.isMatched}
                          onChange={() => {}} // Handled by row click
                          className="h-4 w-4 text-emerald-600 border-gray-300 rounded"
                        />
                      </td>
                      <td className="px-4 py-3 text-gray-600">{t.date}</td>
                      <td className="px-4 py-3 font-medium">{t.description}</td>
                      <td className="px-4 py-3 text-right text-red-600">
                        {t.type === 'Debit' ? t.amount.toLocaleString(undefined, {minimumFractionDigits: 2}) : '-'}
                      </td>
                      <td className="px-4 py-3 text-right text-emerald-600">
                        {t.type === 'Credit' ? t.amount.toLocaleString(undefined, {minimumFractionDigits: 2}) : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><div className="w-3 h-3 bg-emerald-50 border border-emerald-200"></div> Matched</span>
                <span className="flex items-center gap-1"><div className="w-3 h-3 bg-white border border-gray-200"></div> Unmatched</span>
              </div>
              <button 
                className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
                onClick={() => setTransactions(transactions.map(t => ({...t, isMatched: true})))}
              >
                Match all visible items
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded font-medium text-gray-700 hover:bg-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={Math.abs(difference) > 0.01}
            className={`px-8 py-2 rounded font-bold text-white transition-all ${Math.abs(difference) < 0.01 ? 'bg-emerald-600 hover:bg-emerald-700 shadow-md' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            Finish Reconciliation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankReconciliationModal;
