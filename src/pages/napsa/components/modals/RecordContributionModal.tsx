import React, { useState } from 'react';
import { X, User, Calendar, DollarSign, Building } from 'lucide-react';

interface RecordContributionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const RecordContributionModal: React.FC<RecordContributionModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [memberSSN, setMemberSSN] = useState('');
  const [employer, setEmployer] = useState('');
  const [period, setPeriod] = useState('');
  const [grossSalary, setGrossSalary] = useState<number | string>('');
  const [employeeContribution, setEmployeeContribution] = useState<number | string>('');
  const [employerContribution, setEmployerContribution] = useState<number | string>('');
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);
  const [status, setStatus] = useState('Paid');
  const [notes, setNotes] = useState('');

  const employers = [
    'Zambia Mining Corp',
    'National Breweries',
    'Lusaka City Council',
    'Shoprite Zambia',
    'Agro Supplies Co',
    'Copperbelt Energy',
    'MTN Zambia',
    'ZANACO Bank',
    'Airtel Zambia',
    'Zambeef Products'
  ];

  const periods = [
    'Dec 2024',
    'Nov 2024',
    'Oct 2024',
    'Sep 2024',
    'Aug 2024',
    'Jul 2024',
    'Jun 2024',
    'May 2024',
    'Apr 2024',
    'Mar 2024',
    'Feb 2024',
    'Jan 2024'
  ];

  const statuses = ['Paid', 'Pending', 'Overdue', 'Failed'];

  const calculateContributions = (salary: number) => {
    if (salary > 0) {
      const employee = Math.min(salary * 0.05, 255); // 5% cap at statutory maximum
      const employer = employee * 1.5; // Employer matches 150% of employee
      setEmployeeContribution(employee.toFixed(2));
      setEmployerContribution(employer.toFixed(2));
    }
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setGrossSalary(e.target.value);
    calculateContributions(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      contributionId: `CON-${new Date().getFullYear()}-${Math.floor(Math.random() * 90000) + 10000}`,
      memberSSN,
      employer,
      period,
      grossSalary: parseFloat(grossSalary.toString()),
      employeeContribution: parseFloat(employeeContribution.toString()),
      employerContribution: parseFloat(employerContribution.toString()),
      totalContribution: parseFloat(employeeContribution.toString()) + parseFloat(employerContribution.toString()),
      paymentDate,
      status,
      notes,
      recordedDate: new Date().toISOString(),
      recordedBy: 'System Admin'
    });
    onClose();
    // Reset form
    setMemberSSN('');
    setEmployer('');
    setPeriod('');
    setGrossSalary('');
    setEmployeeContribution('');
    setEmployerContribution('');
    setPaymentDate(new Date().toISOString().split('T')[0]);
    setStatus('Paid');
    setNotes('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b bg-primary-navy text-white rounded-t-lg">
          <div>
            <h2 className="text-xl font-semibold">Record Contribution</h2>
            <p className="text-blue-100 text-xs mt-1">Add a new pension contribution record</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <User size={14} /> Member & Employer Details
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Member SSN *</label>
                <input
                  type="text"
                  required
                  value={memberSSN}
                  onChange={(e) => setMemberSSN(e.target.value)}
                  placeholder="123456789"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employer *</label>
                <div className="relative">
                  <Building className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <select
                    required
                    value={employer}
                    onChange={(e) => setEmployer(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-navy outline-none"
                  >
                    <option value="">Select Employer</option>
                    {employers.map(e => <option key={e} value={e}>{e}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contribution Period *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <select
                    required
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-navy outline-none"
                  >
                    <option value="">Select Period</option>
                    {periods.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Date *</label>
                <input
                  type="date"
                  required
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <DollarSign size={14} /> Contribution Details
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gross Monthly Salary (ZMW) *</label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={grossSalary}
                  onChange={handleSalaryChange}
                  placeholder="5000.00"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">Contributions calculated automatically at 5% employee + 7.5% employer</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Employee Contribution</label>
                  <input
                    type="number"
                    readOnly
                    value={employeeContribution}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Employer Contribution</label>
                  <input
                    type="number"
                    readOnly
                    value={employerContribution}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none"
                >
                  {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Additional notes or comments..."
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary-navy text-white rounded-lg text-sm font-medium hover:bg-primary-navy-dark"
            >
              Record Contribution
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecordContributionModal;