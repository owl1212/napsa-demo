import React, { useState } from 'react';
import { X, Building2, MapPin, Phone, Mail, CreditCard, Shield } from 'lucide-react';

interface VendorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const VendorModal: React.FC<VendorModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    tradingName: '',
    tpin: '',
    category: 'Service Provider',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    bankName: '',
    accountNumber: '',
    branchCode: '',
    paymentTerms: '30 Days'
  });

  const categories = ['Service Provider', 'Contractor', 'Consultant', 'Supplier', 'Government Agency'];
  const pTerms = ['Immediate', '7 Days', '15 Days', '30 Days', '60 Days'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, status: 'Active', registrationDate: new Date().toISOString() });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 shadow-2xl max-h-[95vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg text-primary-navy">
              <Building2 size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary-navy">Add New Vendor/Supplier</h2>
              <p className="text-sm text-gray-500">Register a new entity in the procurement master data</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section 1: Basic Info */}
            <div className="space-y-4">
              <h3 className="font-bold text-xs uppercase tracking-widest text-primary-navy border-b pb-2">Company Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Legal Company Name *</label>
                <input required name="name" value={formData.name} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none" placeholder="e.g. Solutions Ltd" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">TPIN *</label>
                  <input required name="tpin" value={formData.tpin} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none" placeholder="10034..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select name="category" value={formData.category} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none">
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <h3 className="font-bold text-xs uppercase tracking-widest text-primary-navy border-b pb-2">Contact Details</h3>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <input name="email" value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-primary-navy outline-none" placeholder="accounts@vendor.co.zm" />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <input name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-primary-navy outline-none" placeholder="+260..." />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <textarea name="address" value={formData.address} onChange={handleChange} rows={2} className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-primary-navy outline-none" placeholder="Physical Address" />
                </div>
              </div>
            </div>

            {/* Section 2: Banking & Compliance */}
            <div className="space-y-4">
              <h3 className="font-bold text-xs uppercase tracking-widest text-primary-navy border-b pb-2">Banking Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <input name="bankName" value={formData.bankName} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-primary-navy outline-none" placeholder="e.g. Zanaco" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                  <input name="accountNumber" value={formData.accountNumber} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Branch Code</label>
                  <input name="branchCode" value={formData.branchCode} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none" />
                </div>
              </div>
              <div className="pt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Terms</label>
                <select name="paymentTerms" value={formData.paymentTerms} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-navy outline-none">
                  {pTerms.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300 mt-6">
                <div className="flex items-center gap-2 mb-3 text-primary-navy font-semibold text-sm">
                  <Shield size={16} />
                  KYC Documentation
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span>Certificate of Incorporation</span>
                    <button type="button" className="text-accent-blue hover:underline">Upload</button>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>Tax Clearance Certificate</span>
                    <button type="button" className="text-accent-blue hover:underline">Upload</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-4 border-t pt-6">
            <button type="submit" className="flex-1 bg-primary-navy text-white font-bold py-3 rounded-lg hover:bg-accent-gold hover:text-primary-navy transition-all shadow-lg">
              Register Vendor
            </button>
            <button type="button" onClick={onClose} className="px-10 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorModal;
