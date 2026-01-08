import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
    return (
        <div className="fade-in">
            <div className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl font-serif font-bold text-white mb-4">About TBZ</h1>
                <p className="text-slate-400 max-w-2xl mx-auto">Regulating, promoting, and developing the tobacco industry since 1968.</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-brand-600 font-bold uppercase tracking-wide mb-2 text-sm">Our History</h2>
                        <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Over 50 Years of Excellence</h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">The Tobacco Board of Zambia was established under the Tobacco Act of 1967 (Chapter 237 of the Laws of Zambia). Our mandate is to regulate, promote, and develop the tobacco industry in Zambia.</p>
                        <ul className="space-y-3 mt-6">
                            <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-brand-600 mr-3" /> Promoting orderly marketing</li>
                            <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-brand-600 mr-3" /> Enforcing quality standards</li>
                            <li className="flex items-center text-slate-700"><CheckCircle className="w-5 h-5 text-brand-600 mr-3" /> Maximizing value for farmers</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=500" className="rounded-2xl shadow-lg mt-8" alt="Tobacco drying" />
                        <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=500" className="rounded-2xl shadow-lg" alt="Tobacco leaves" />
                    </div>
                </div>
            </div>
        </div>
    );
}
