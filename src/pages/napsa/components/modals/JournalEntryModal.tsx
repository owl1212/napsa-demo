import React, { useState } from 'react';
import { X, Plus, Trash2, Upload } from 'lucide-react';

interface JournalEntryLine {
  id: string;
  account: string;
  description: string;
  debit: number;
  credit: number;
}

interface JournalEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (entry: {
    date: string;
    reference: string;
    description: string;
    lines: JournalEntryLine[];
    attachments: File[];
  }) => void;
}

const JournalEntryModal: React.FC<JournalEntryModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [reference, setReference] = useState('');
  const [description, setDescription] = useState('');
  const [lines, setLines] = useState<JournalEntryLine[]>([
    { id: '1', account: '', description: '', debit: 0, credit: 0 },
    { id: '2', account: '', description: '', debit: 0, credit: 0 }
  ]);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  // Mock account data - in real app this would come from API
  const accounts = [
    '1000 - Cash and Cash Equivalents',
    '1010 - Petty Cash',
    '1100 - Accounts Receivable',
    '1200 - Inventory',
    '1300 - Prepaid Expenses',
    '1400 - Investments',
    '2000 - Accounts Payable',
    '2100 - Accrued Liabilities',
    '2200 - Loans Payable',
    '3000 - Common Stock',
    '3100 - Retained Earnings',
    '4000 - Sales Revenue',
    '4100 - Service Revenue',
    '5000 - Cost of Goods Sold',
    '5100 - Operating Expenses',
    '5200 - Administrative Expenses',
    '6000 - Interest Expense',
    '7000 - Income Tax Expense'
  ];

  const addLine = () => {
    const newLine: JournalEntryLine = {
      id: Date.now().toString(),
      account: '',
      description: '',
      debit: 0,
      credit: 0
    };
    setLines([...lines, newLine]);
  };

  const removeLine = (id: string) => {
    if (lines.length > 2) {
      setLines(lines.filter(line => line.id !== id));
    }
  };

  const updateLine = (id: string, field: keyof JournalEntryLine, value: string | number) => {
    setLines(lines.map(line =>
      line.id === id ? { ...line, [field]: value } : line
    ));
  };

  const calculateTotal = (type: 'debit' | 'credit') => {
    return lines.reduce((sum, line) => sum + (line[type] || 0), 0);
  };

  const validateEntry = (): string[] => {
    const validationErrors: string[] = [];

    if (!date) validationErrors.push('Date is required');
    if (!reference.trim()) validationErrors.push('Reference number is required');
    if (!description.trim()) validationErrors.push('Description is required');

    const totalDebit = calculateTotal('debit');
    const totalCredit = calculateTotal('credit');

    if (Math.abs(totalDebit - totalCredit) > 0.01) {
      validationErrors.push('Debits must equal credits');
    }

    if (totalDebit === 0 && totalCredit === 0) {
      validationErrors.push('At least one debit or credit amount is required');
    }

    const emptyLines = lines.filter(line =>
      !line.account.trim() && line.debit === 0 && line.credit === 0
    );
    if (emptyLines.length === lines.length) {
      validationErrors.push('At least one line must have an account and amount');
    }

    return validationErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateEntry();
    setErrors(validationErrors);

    if (validationErrors.length === 0) {
      onSubmit({
        date,
        reference,
        description,
        lines: lines.filter(line => line.account.trim() || line.debit > 0 || line.credit > 0),
        attachments
      });
      onClose();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setAttachments([...attachments, ...files]);
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  const totalDebit = calculateTotal('debit');
  const totalCredit = calculateTotal('credit');
  const isBalanced = Math.abs(totalDebit - totalCredit) < 0.01;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-primary-navy">New Journal Entry</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Header Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Entry Date *</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-navy"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Reference Number *</label>
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="JE-2026-001"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-navy"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of the transaction"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-navy"
              />
            </div>
          </div>

          {/* Journal Lines */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Journal Lines</h3>
              <button
                onClick={addLine}
                className="flex items-center gap-2 bg-accent-blue text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                <Plus size={16} />
                Add Line
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Account *</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Description</th>
                    <th className="px-4 py-2 text-right text-sm font-medium text-gray-700 border-r">Debit (K)</th>
                    <th className="px-4 py-2 text-right text-sm font-medium text-gray-700 border-r">Credit (K)</th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {lines.map((line, index) => (
                    <tr key={line.id} className="border-t">
                      <td className="px-4 py-2 border-r">
                        <select
                          value={line.account}
                          onChange={(e) => updateLine(line.id, 'account', e.target.value)}
                          className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary-navy"
                        >
                          <option value="">Select Account</option>
                          {accounts.map(account => (
                            <option key={account} value={account}>{account}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-2 border-r">
                        <input
                          type="text"
                          value={line.description}
                          onChange={(e) => updateLine(line.id, 'description', e.target.value)}
                          placeholder="Line description"
                          className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary-navy"
                        />
                      </td>
                      <td className="px-4 py-2 border-r">
                        <input
                          type="number"
                          value={line.debit || ''}
                          onChange={(e) => updateLine(line.id, 'debit', parseFloat(e.target.value) || 0)}
                          placeholder="0.00"
                          step="0.01"
                          min="0"
                          className="w-full border border-gray-300 rounded px-2 py-1 text-sm text-right focus:outline-none focus:ring-1 focus:ring-primary-navy"
                        />
                      </td>
                      <td className="px-4 py-2 border-r">
                        <input
                          type="number"
                          value={line.credit || ''}
                          onChange={(e) => updateLine(line.id, 'credit', parseFloat(e.target.value) || 0)}
                          placeholder="0.00"
                          step="0.01"
                          min="0"
                          className="w-full border border-gray-300 rounded px-2 py-1 text-sm text-right focus:outline-none focus:ring-1 focus:ring-primary-navy"
                        />
                      </td>
                      <td className="px-4 py-2 text-center">
                        {lines.length > 2 && (
                          <button
                            onClick={() => removeLine(line.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr className="border-t-2">
                    <td colSpan={2} className="px-4 py-2 text-right font-medium">Totals:</td>
                    <td className={`px-4 py-2 text-right font-medium border-r ${isBalanced ? 'text-green-600' : 'text-red-600'}`}>
                      K {totalDebit.toLocaleString('en-ZM', { minimumFractionDigits: 2 })}
                    </td>
                    <td className={`px-4 py-2 text-right font-medium border-r ${isBalanced ? 'text-green-600' : 'text-red-600'}`}>
                      K {totalCredit.toLocaleString('en-ZM', { minimumFractionDigits: 2 })}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {!isBalanced && (
              <div className="text-red-600 text-sm font-medium">
                ⚠️ Debits and credits must balance before submitting
              </div>
            )}
          </div>

          {/* Attachments */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Attachments (Optional)</h3>
            <div className="space-y-2">
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
              />
              <label
                htmlFor="file-upload"
                className="flex items-center gap-2 cursor-pointer bg-gray-50 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                <Upload size={16} />
                Choose Files (PDF, DOC, XLS, Images)
              </label>
              {attachments.length > 0 && (
                <div className="space-y-1">
                  {attachments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
                      <span className="text-sm">{file.name}</span>
                      <button
                        onClick={() => removeAttachment(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Validation Errors */}
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <h4 className="text-red-800 font-medium mb-2">Please correct the following errors:</h4>
              <ul className="list-disc list-inside text-red-700 text-sm">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4 border-t">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!isBalanced}
              className="px-6 py-2 bg-primary-navy text-white rounded hover:bg-accent-gold hover:text-primary-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post Journal Entry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalEntryModal;