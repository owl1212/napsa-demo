import React from 'react';
import { Download, Plus, Sprout, Coins, TrendingUp } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export default function Dashboard() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20 fade-in">
            {/* Dashboard Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-serif font-bold text-slate-900">Dashboard</h1>
                            <p className="text-slate-500 text-sm">Welcome back, <span className="font-medium text-slate-900">John Banda</span></p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex items-center gap-2">
                                <Download className="w-4 h-4" /> Reports
                            </Button>
                            <Button className="flex items-center gap-2">
                                <Plus className="w-4 h-4" /> New Application
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-medium text-slate-500">License Status</h3>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded uppercase">Active</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-900">Grower Class A</p>
                        <p className="text-xs text-slate-400 mt-1">Expires: 31 Dec 2025</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-medium text-slate-500">Est. Yield</h3>
                            <Sprout className="w-4 h-4 text-brand-500" />
                        </div>
                        <p className="text-2xl font-bold text-slate-900">12,500 kg</p>
                        <p className="text-xs text-green-600 mt-1 flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> +5% vs 2024</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-medium text-slate-500">Avg. Market Price</h3>
                            <Coins className="w-4 h-4 text-copper-500" />
                        </div>
                        <p className="text-2xl font-bold text-slate-900">$3.45 <span className="text-sm font-normal text-slate-400">/ kg</span></p>
                        <p className="text-xs text-slate-400 mt-1">Last updated: Today</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-medium text-slate-500">Notifications</h3>
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        </div>
                        <p className="text-2xl font-bold text-slate-900">2 New</p>
                        <p className="text-xs text-slate-400 mt-1">Action required</p>
                    </div>
                </div>

                {/* Main Content Areas */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Chart Area */}
                    <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-slate-900 mb-6 font-serif">Application History</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-400 uppercase bg-slate-50">
                                    <tr>
                                        <th className="px-4 py-3 rounded-l-lg">App ID</th>
                                        <th className="px-4 py-3">Type</th>
                                        <th className="px-4 py-3">Date</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3 rounded-r-lg">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50 transition">
                                        <td className="px-4 py-4 font-medium text-slate-900">#APP-2025-001</td>
                                        <td className="px-4 py-4">Season Renewal</td>
                                        <td className="px-4 py-4 text-slate-500">Oct 24, 2024</td>
                                        <td className="px-4 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Approved</span></td>
                                        <td className="px-4 py-4"><button className="text-brand-600 hover:text-brand-700 font-medium">View</button></td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition">
                                        <td className="px-4 py-4 font-medium text-slate-900">#APP-2024-892</td>
                                        <td className="px-4 py-4">Input Subsidy</td>
                                        <td className="px-4 py-4 text-slate-500">Jan 12, 2024</td>
                                        <td className="px-4 py-4"><span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Completed</span></td>
                                        <td className="px-4 py-4"><button className="text-brand-600 hover:text-brand-700 font-medium">View</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="bg-slate-900 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-brand-500 rounded-full opacity-20 blur-2xl"></div>
                        <h3 className="font-bold text-lg mb-4 font-serif">Compliance Alert</h3>
                        <p className="text-slate-300 text-sm mb-6">The 2025 licensing window closes in <span className="text-white font-bold">14 days</span>. Ensure all return forms are submitted.</p>
                        <Button className="w-full bg-white text-slate-900 hover:bg-slate-100">Submit Returns</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
