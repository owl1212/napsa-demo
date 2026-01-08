import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export default function LicensingWizard() {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Application Submitted (Mock)!');
        navigate('/portal/dashboard');
    };

    return (
        <div className="bg-slate-50 min-h-screen py-10 fade-in">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="bg-slate-900 px-8 py-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-serif font-bold text-white">License Application</h2>
                        <p className="text-slate-400 text-sm">Step 1 of 3: Personal Details</p>
                    </div>
                    <button onClick={() => navigate('/portal/dashboard')} className="text-slate-400 hover:text-white"><X className="w-6 h-6" /></button>
                </div>

                <div className="p-8">
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 rounded-full h-2 mb-8">
                        <div className="bg-brand-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Banda" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">NRC Number</label>
                            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" placeholder="123456/10/1" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Province</label>
                            <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none bg-white">
                                <option>Eastern</option>
                                <option>Central</option>
                                <option>Southern</option>
                                <option>Lusaka</option>
                            </select>
                        </div>

                        <div className="pt-6 flex justify-end gap-3">
                            <Button type="button" variant="outline" onClick={() => navigate('/portal/dashboard')}>Cancel</Button>
                            <Button type="submit">Next Step &rarr;</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
