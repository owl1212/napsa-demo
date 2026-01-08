import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export default function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 min-h-screen pb-20 fade-in">
            <div className="bg-slate-900 border-b border-slate-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="bg-red-500 text-xs font-bold px-2 py-1 rounded">STAFF PORTAL</span>
                        <span className="text-slate-400 text-sm">Logged in as: Admin User</span>
                    </div>
                    <button onClick={() => navigate('/')} className="text-sm text-slate-400 hover:text-white">Sign Out</button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-2xl font-serif font-bold text-slate-900 mb-6">Overview</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="text-slate-500 text-sm font-medium mb-2">Pending Applications</h3>
                        <p className="text-3xl font-bold text-slate-900">42</p>
                        <p className="text-xs text-red-500 mt-1">Requires immediate attention</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="text-slate-500 text-sm font-medium mb-2">Compliance Rate</h3>
                        <p className="text-3xl font-bold text-slate-900">88%</p>
                        <p className="text-xs text-green-500 mt-1">+2% from last month</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="text-slate-500 text-sm font-medium mb-2">Total Growers</h3>
                        <p className="text-3xl font-bold text-slate-900">14,203</p>
                        <p className="text-xs text-slate-400 mt-1">Registered for 2025 season</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 font-bold text-slate-900">Recent Implementations</div>
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-3">Applicant</th>
                                <th className="px-6 py-3">Type</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr>
                                <td className="px-6 py-4 font-medium">Banda Farms Ltd</td>
                                <td className="px-6 py-4">Commercial Grower</td>
                                <td className="px-6 py-4 text-slate-500">Today, 10:42 AM</td>
                                <td className="px-6 py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">Pending</span></td>
                                <td className="px-6 py-4"><Button variant="ghost" size="sm" className="text-brand-600 font-medium hover:underline">Review</Button></td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">Eastern Co-op</td>
                                <td className="px-6 py-4">Buyer License A</td>
                                <td className="px-6 py-4 text-slate-500">Yesterday</td>
                                <td className="px-6 py-4"><span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">Flagged</span></td>
                                <td className="px-6 py-4"><Button variant="ghost" size="sm" className="text-brand-600 font-medium hover:underline">Review</Button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
