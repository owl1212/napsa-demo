import React from 'react';
import { ScrollText, GraduationCap, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 min-h-screen fade-in">
            <div className="bg-white border-b border-slate-200 py-16 text-center">
                <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Our Services</h1>
                <p className="text-slate-500">Comprehensive support for the entire value chain.</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 text-brand-600">
                            <ScrollText className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Licensing & Registration</h3>
                        <p className="text-slate-600 text-sm mb-4">Issuance of licenses for growers, buyers, floor operators, and exporters.</p>
                        <button onClick={() => navigate('/portal/login')} className="text-brand-600 font-medium text-sm hover:underline">Apply now &rarr;</button>
                    </div>
                    {/* Service 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-copper-100 rounded-lg flex items-center justify-center mb-4 text-copper-600">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Extension Services</h3>
                        <p className="text-slate-600 text-sm mb-4">Providing technical knowledge and training to farmers to improve yield quality.</p>
                        <button className="text-copper-600 font-medium text-sm hover:underline">View schedule &rarr;</button>
                    </div>
                    {/* Service 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                            <Scale className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Arbitration</h3>
                        <p className="text-slate-600 text-sm mb-4">Dispute resolution between growers and buyers during marketing season.</p>
                        <button className="text-blue-600 font-medium text-sm hover:underline">Learn more &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
