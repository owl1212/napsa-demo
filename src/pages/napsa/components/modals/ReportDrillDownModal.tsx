import React from 'react';
import { X, Search, FileDown, Printer, Filter, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface DrillDownModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryName: string;
  totalAmount: string;
}

const ReportDrillDownModal: React.FC<DrillDownModalProps> = ({ isOpen, onClose, categoryName, totalAmount }) => {
  // Mock transaction data based on category
  const transactions = [
    { id: '1', date: '2026-01-15', ref: 'PV-00125', desc: 'NAPSA HQ Utility Payment', entity: 'ZESCO Ltd', type: 'Credit', amount: 15400.00 },
    { id: '2', date: '2026-01-14', ref: 'CR-99021', desc: 'Employer Contribution - Q4', entity: 'Indeni Petroleum', type: 'Debit', amount: 450000.00 },
    { id: '3', date: '2026-01-14', ref: 'JV-88401', desc: 'Investment Income Accrual', entity: 'Lusaka Stock Exchange', type: 'Debit', amount: 12500.50 },
    { id: '4', date: '2026-01-13', ref: 'PV-00126', desc: 'Staff Payroll Disbursement', entity: 'Various Staff', type: 'Credit', amount: 1250000.00 },
    { id: '5', date: '2026-01-12', ref: 'TRF-5501', desc: 'Inter-account liquidity transfer', entity: 'Zanaco to Stanbic', type: 'Transfer', amount: 5000000.00 },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-5xl w-full mx-4 shadow-2xl flex flex-col h-[85vh]">
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center bg-gray-50 rounded-t-2xl">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-blue bg-blue-50 px-2 py-0.5 rounded">Ledger Analysis</span>
              <span className="text-xs text-gray-400">• Report Drill-down</span>
            </div>
            <h2 className="text-2xl font-bold text-primary-navy">{categoryName}</h2>
            <p className="text-sm text-gray-500">Showing all underlying transactions contributing to <span className="font-bold text-primary-navy">{totalAmount}</span></p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-400 hover:text-primary-navy hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all">
              <Printer size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-primary-navy hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all">
              <FileDown size={20} />
            </button>
            <div className="w-px h-8 bg-gray-200 mx-2"></div>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="px-6 py-4 border-b flex flex-wrap gap-4 items-center justify-between bg-white">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              placeholder="Filter by reference, description or entity..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary-navy outline-none"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-xl text-sm font-medium hover:bg-gray-50">
              <Filter size={16} /> Filter Date
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-xl text-sm font-medium hover:bg-gray-50 text-primary-navy">
              Export Excel
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white z-10 shadow-sm">
              <tr className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider border-b">
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Reference</th>
                <th className="px-6 py-4">Description / Entity</th>
                <th className="px-6 py-4 text-right">Debit (In)</th>
                <th className="px-6 py-4 text-right">Credit (Out)</th>
                <th className="px-6 py-4 text-right">Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {transactions.map((t, idx) => (
                <tr key={t.id} className="hover:bg-blue-50/50 transition-colors cursor-default group">
                  <td className="px-6 py-4 text-gray-600 font-medium">{t.date}</td>
                  <td className="px-6 py-4 font-mono text-xs text-accent-blue">{t.ref}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-primary-navy">{t.desc}</div>
                    <div className="text-xs text-gray-500">{t.entity}</div>
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-green-600">
                    {t.type === 'Debit' ? t.amount.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '-'}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-red-600">
                    {t.type === 'Credit' ? t.amount.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '-'}
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-700">
                    K { (idx * 1500 + 45000).toLocaleString() }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Empty State / Bottom Padding */}
          <div className="p-12 text-center text-gray-400">
            <p className="text-sm">End of transaction records for fiscal period Jan 2026</p>
          </div>
        </div>

        {/* Footer Summary */}
        <div className="p-6 border-t bg-gray-50 rounded-b-2xl flex justify-between items-center shrink-0">
          <div className="flex gap-8">
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Total Debits</div>
              <div className="text-lg font-bold text-green-600 flex items-center gap-1">
                <ArrowUpRight size={16} /> K 462,500.50
              </div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Total Credits</div>
              <div className="text-lg font-bold text-red-600 flex items-center gap-1">
                <ArrowDownLeft size={16} /> K 1,265,400.00
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Net Movement</div>
            <div className="text-2xl font-black text-primary-navy">
              K 802,899.50 CR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDrillDownModal;
