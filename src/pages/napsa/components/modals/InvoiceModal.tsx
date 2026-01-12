import React, { useState } from 'react';
import { X, FileText, User, Calendar, Plus, Trash2, Calculator, Receipt } from 'lucide-react';

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [lines, setLines] = useState([
    { id: 1, description: '', quantity: 1, unitPrice: 0, taxRate: 16 }
  ]);

  const [formData, setFormData] = useState({
    customerId: '',
    customerName: '',
    invoiceDate: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    reference: `INV-${Math.floor(Math.random() * 9000) + 1000}`,
    notes: ''
  });

  const addLine = () => {
    setLines([...lines, { id: Date.now(), description: '', quantity: 1, unitPrice: 0, taxRate: 16 }]);
  };

  const removeLine = (id: number) => {
    if (lines.length > 1) {
      setLines(lines.filter(l => l.id !== id));
    }
  };

  const updateLine = (id: number, field: string, value: any) => {
    setLines(lines.map(l => l.id === id ? { ...l, [field]: value } : l));
  };

  const calculateSubtotal = () => lines.reduce((acc, l) => acc + (l.quantity * l.unitPrice), 0);
  const calculateTotalTax = () => lines.reduce((acc, l) => acc + (l.quantity * l.unitPrice * (l.taxRate / 100)), 0);
  const calculateTotal = () => calculateSubtotal() + calculateTotalTax();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      items: lines,
      subtotal: calculateSubtotal(),
      tax: calculateTotalTax(),
      total: calculateTotal(),
      status: 'Awaiting Payment'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-5xl w-full mx-4 shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg text-green-700">
              <FileText size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary-navy">Create Sales Invoice</h2>
              <p className="text-sm text-gray-500">Generate a new billing document for internal or external entities</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Top Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-xs uppercase text-primary-navy border-b pb-1">Customer Selection</h3>
              <div className="relative">
                <User className="absolute left-3 top-2.5 text-gray-400" size={16} />
                <select 
                  className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary-navy appearance-none"
                  value={formData.customerId}
                  onChange={(e) => setFormData({...formData, customerId: e.target.value})}
                  required
                >
                  <option value="">Select Entity...</option>
                  <option value="1">Ministry of Finance</option>
                  <option value="2">Zambia Revenue Authority</option>
                  <option value="3">Indeni Petroleum</option>
                  <option value="4">ZESCO Limited</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-xs uppercase text-primary-navy border-b pb-1">Timing</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-gray-500 uppercase">Issue Date</label>
                  <input type="date" value={formData.invoiceDate} onChange={(e) => setFormData({...formData, invoiceDate: e.target.value})} className="w-full border rounded-lg px-2 py-1.5 text-xs outline-none focus:ring-1 focus:ring-primary-navy" />
                </div>
                <div>
                  <label className="text-[10px] text-gray-500 uppercase">Due Date</label>
                  <input type="date" value={formData.dueDate} onChange={(e) => setFormData({...formData, dueDate: e.target.value})} className="w-full border rounded-lg px-2 py-1.5 text-xs outline-none focus:ring-1 focus:ring-primary-navy" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-xs uppercase text-primary-navy border-b pb-1">Reference</h3>
              <div className="relative">
                <Receipt className="absolute left-3 top-2.5 text-gray-400" size={16} />
                <input value={formData.reference} onChange={(e) => setFormData({...formData, reference: e.target.value})} className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary-navy" />
              </div>
            </div>
          </div>

          {/* Line Items */}
          <div className="space-y-3">
            <h3 className="font-bold text-xs uppercase text-primary-navy border-b pb-1">Itemized Services/Goods</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
                  <th className="p-3 w-1/2">Description</th>
                  <th className="p-3">Qty</th>
                  <th className="p-3">Unit Price</th>
                  <th className="p-3 text-right">Amount</th>
                  <th className="p-3 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {lines.map((line) => (
                  <tr key={line.id} className="text-sm">
                    <td className="p-2">
                      <input 
                        value={line.description} 
                        onChange={(e) => updateLine(line.id, 'description', e.target.value)}
                        placeholder="e.g. Pension Administration Fees - Q3" 
                        className="w-full border-b border-transparent focus:border-primary-navy py-1 px-1 outline-none" 
                      />
                    </td>
                    <td className="p-2">
                      <input 
                        type="number" 
                        value={line.quantity} 
                        onChange={(e) => updateLine(line.id, 'quantity', parseInt(e.target.value) || 0)}
                        className="w-16 border-b border-transparent focus:border-primary-navy py-1 px-1 outline-none" 
                      />
                    </td>
                    <td className="p-2">
                      <input 
                        type="number" 
                        value={line.unitPrice} 
                        onChange={(e) => updateLine(line.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                        className="w-32 border-b border-transparent focus:border-primary-navy py-1 px-1 outline-none" 
                      />
                    </td>
                    <td className="p-2 text-right font-medium">
                      {(line.quantity * line.unitPrice).toLocaleString()}
                    </td>
                    <td className="p-2">
                      <button type="button" onClick={() => removeLine(line.id)} className="text-red-400 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button 
              type="button" 
              onClick={addLine}
              className="flex items-center gap-2 text-sm text-accent-blue font-semibold hover:text-blue-700 mt-2"
            >
              <Plus size={16} /> Add Line Item
            </button>
          </div>

          {/* Footer Totals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t font-semibold">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Internal Notes</label>
              <textarea 
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary-navy outline-none" 
                placeholder="Details for the finance team..."
              ></textarea>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
              <div className="flex justify-between items-center text-gray-600">
                <span className="text-sm">Subtotal (ZMW)</span>
                <span>{calculateSubtotal().toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span className="text-sm">Value Added Tax (16%)</span>
                <span>{calculateTotalTax().toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center text-primary-navy border-t pt-2 text-xl font-bold">
                <span>Total Amount</span>
                <span>K {calculateTotal().toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
        </form>

        <div className="p-6 bg-gray-50 border-t flex gap-4 shrink-0">
          <button 
            type="submit" 
            onClick={handleSubmit}
            className="flex-1 bg-primary-navy text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-accent-gold hover:text-primary-navy transition-all"
          >
            <Calculator size={20} /> Generate & Send Invoice
          </button>
          <button type="button" onClick={onClose} className="px-8 border border-gray-300 rounded-lg text-gray-600 hover:bg-white transition-colors">
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
