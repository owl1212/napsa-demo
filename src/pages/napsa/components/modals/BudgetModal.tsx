import React, { useState } from 'react';
import { X, Target, BarChart3, PieChart, Users, ChevronRight, Save } from 'lucide-react';

interface JournalEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const BudgetModal: React.FC<JournalEntryModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fiscalYear: '2026',
    department: '',
    budgetType: 'Operating',
    totalAllocation: 0,
    description: '',
  });

  const [allocations, setAllocations] = useState([
    { category: 'Personnel Emoluments', percentage: 40, amount: 0 },
    { category: 'Operational Expenses', percentage: 30, amount: 0 },
    { category: 'Capital Expenditure', percentage: 20, amount: 0 },
    { category: 'Other Costs', percentage: 10, amount: 0 },
  ]);

  const departments = [
    'Information Technology',
    'Human Resources',
    'Operations & Benefits',
    'Investment & Treasury',
    'Legal & Compliance',
    'Corporate Communications'
  ];

  const handleAllocationChange = (index: number, percent: number) => {
    const newAllocations = [...allocations];
    newAllocations[index].percentage = percent;
    newAllocations[index].amount = (formData.totalAllocation * percent) / 100;
    setAllocations(newAllocations);
  };

  const updateAmounts = (total: number) => {
    setAllocations(allocations.map(a => ({
      ...a,
      amount: (total * a.percentage) / 100
    })));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, allocations });
    onClose();
  };

  if (!isOpen) return null;

  const totalPercent = allocations.reduce((acc, a) => acc + a.percentage, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full mx-4 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 bg-primary-navy text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-accent-gold p-2 rounded-lg text-primary-navy">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Annual Budget Allocation</h2>
              <p className="text-blue-200 text-sm">Fiscal Planning & Resource Management</p>
            </div>
          </div>
          <button onClick={onClose} className="text-blue-200 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Department</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 text-gray-400" size={18} />
                <select 
                  required
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none appearance-none bg-white text-sm"
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                >
                  <option value="">Select Department</option>
                  {departments.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Budget Type</label>
              <select 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-navy outline-none text-sm"
                value={formData.budgetType}
                onChange={(e) => setFormData({...formData, budgetType: e.target.value})}
              >
                <option value="Operating">Operating Budget (OPEX)</option>
                <option value="Capital">Capital Budget (CAPEX)</option>
                <option value="Special">Special Project Fund</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Total Allocation (ZMW)</label>
              <div className="relative">
                <span className="absolute left-4 top-2 text-primary-navy font-bold">K</span>
                <input 
                  type="number"
                  required
                  className="w-full pl-10 pr-4 py-2 border rounded-lg font-bold text-primary-navy focus:ring-2 focus:ring-primary-navy outline-none"
                  value={formData.totalAllocation || ''}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value) || 0;
                    setFormData({...formData, totalAllocation: val});
                    updateAmounts(val);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Allocation Sliders */}
            <div className="space-y-6">
              <h3 className="font-bold text-primary-navy border-b pb-2 flex items-center gap-2">
                <BarChart3 size={18} /> Budget Split Analysis
              </h3>
              {allocations.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-medium">{item.category}</span>
                    <span className="font-bold text-primary-navy">{item.percentage}%</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    value={item.percentage}
                    onChange={(e) => handleAllocationChange(idx, parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-navy"
                  />
                  <div className="text-right text-[11px] text-gray-500">
                    Calculated: K {item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </div>
                </div>
              ))}
              
              <div className={`p-3 rounded-lg flex justify-between items-center text-sm font-bold ${totalPercent === 100 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                <span>Total Percentage:</span>
                <span>{totalPercent}%</span>
              </div>
            </div>

            {/* Visual Overview */}
            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center justify-center border border-dashed border-gray-300">
              <PieChart size={64} className="text-gray-300 mb-4" />
              <p className="text-sm text-gray-500 text-center mb-6">Budget Distribution Visualization</p>
              
              <div className="w-full space-y-3">
                {allocations.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: `hsl(${idx * 40 + 200}, 70%, 40%)` }}></div>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${item.percentage}%`, backgroundColor: `hsl(${idx * 40 + 200}, 70%, 40%)` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl shadow-sm w-full border border-gray-100">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Impact Analysis</div>
                <div className="text-sm font-semibold text-primary-navy">
                  {formData.department || 'Select Department'} 2026 Strategy 
                </div>
                <div className="mt-2 text-xs text-gray-600 leading-relaxed">
                  Allocation supports core operational performance and ensures 100% compliance with statutory requirements.
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="p-6 bg-gray-50 border-t flex gap-4 shrink-0">
          <button 
            type="submit"
            onClick={handleSubmit}
            disabled={totalPercent !== 100}
            className={`flex-1 flex items-center justify-center gap-2 font-bold py-3 rounded-lg transition-all shadow-md ${totalPercent === 100 ? 'bg-primary-navy text-white hover:bg-accent-gold hover:text-primary-navy cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            <Save size={20} /> Approve & Commit Budget
          </button>
          <button 
            type="button"
            onClick={onClose}
            className="px-8 border-2 border-gray-200 text-gray-600 font-bold py-3 rounded-lg hover:bg-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetModal;
