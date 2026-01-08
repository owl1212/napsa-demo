import React from 'react';
import { Clock, Globe, TrendingUp, Minus, Download } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export default function MarketData() {
    return (
        <div className="bg-slate-50 min-h-screen fade-in">
            <div className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-3xl font-serif font-bold mb-2">Market Data Center</h1>
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> Live Updates</span>
                        <span className="flex items-center"><Globe className="w-4 h-4 mr-1" /> Global Indices</span>
                    </div>
                </div>
            </div>

            {/* Ticker - Note: CSS animation would need to be in index.css for 'animate-marquee' */}
            <div className="bg-slate-800 overflow-hidden py-2">
                <div className="whitespace-nowrap flex space-x-8 text-sm text-white overflow-x-auto no-scrollbar">
                    <span className="font-mono text-green-400">VIRGINIA: $3.45 (+0.12)</span>
                    <span className="font-mono text-slate-400">|</span>
                    <span className="font-mono text-white">BURLEY: $2.80 (0.00)</span>
                    <span className="font-mono text-slate-400">|</span>
                    <span className="font-mono text-red-400">DARK FIRE: $2.15 (-0.05)</span>
                    <span className="font-mono text-slate-400">|</span>
                    <span className="font-mono text-green-400">ORIENTAL: $4.10 (+0.22)</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                        <h3 class="font-bold text-slate-900">Regional Floor Prices (2025 Start)</h3>
                        <Button variant="ghost" size="sm" className="text-brand-600 hover:text-brand-700"><Download className="w-4 h-4 mr-1" /> Export CSV</Button>
                    </div>
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-3">Region</th>
                                <th className="px-6 py-3">Grade A</th>
                                <th className="px-6 py-3">Grade B</th>
                                <th className="px-6 py-3">Trend</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr>
                                <td className="px-6 py-4 font-medium">Lusaka West</td>
                                <td className="px-6 py-4 text-slate-900 bg-green-50/50">$3.80</td>
                                <td className="px-6 py-4 text-slate-600">$3.10</td>
                                <td className="px-6 py-4 text-green-600"><TrendingUp className="w-4 h-4" /></td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">Eastern (Chipata)</td>
                                <td className="px-6 py-4 text-slate-900 bg-green-50/50">$3.65</td>
                                <td className="px-6 py-4 text-slate-600">$2.95</td>
                                <td className="px-6 py-4 text-slate-400"><Minus className="w-4 h-4" /></td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">Southern (Choma)</td>
                                <td className="px-6 py-4 text-slate-900 bg-green-50/50">$3.75</td>
                                <td className="px-6 py-4 text-slate-600">$3.05</td>
                                <td className="px-6 py-4 text-green-600"><TrendingUp className="w-4 h-4" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
