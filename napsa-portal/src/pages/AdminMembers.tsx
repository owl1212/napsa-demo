import { useState } from 'react';
import { Search, Filter, MoreHorizontal, User, Download, Plus } from 'lucide-react';

const AdminMembers = () => {
    const members = [
        { id: '1001', name: 'John Doe', nrc: '123456/78/1', employer: 'Tech Corp Zambia', status: 'Active', type: 'DC' },
        { id: '1002', name: 'Jane Smith', nrc: '876543/21/1', employer: 'Mining Ltd', status: 'Active', type: 'DC' },
        { id: '1003', name: 'Michael Banda', nrc: '112233/44/1', employer: 'Gov Dept', status: 'Retired', type: 'DB' },
        { id: '1004', name: 'Sarah Mumba', nrc: '556677/88/1', employer: 'Retail Kings', status: 'Inactive', type: 'DC' },
        { id: '1005', name: 'David Phiri', nrc: '990011/22/1', employer: 'Self Employed', status: 'Active', type: 'DC' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-nsps-neutral-900">Member Registry</h1>
                    <p className="text-nsps-neutral-600 text-sm mt-1">View and manage all pension scheme members.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-nsps-neutral-300 rounded-lg text-sm font-medium hover:bg-nsps-neutral-50 text-nsps-neutral-700">
                        <Download className="w-4 h-4" /> Export
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-nsps-blue-900 text-white rounded-lg text-sm font-medium hover:bg-nsps-blue-800 shadow-sm">
                        <Plus className="w-4 h-4" /> Add New Member
                    </button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-nsps-neutral-200 flex flex-col md:flex-row gap-4 justify-between">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-nsps-neutral-400" />
                    <input
                        type="text"
                        placeholder="Search by name, NRC, or Member ID..."
                        className="w-full pl-9 pr-4 py-2 text-sm border border-nsps-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nsps-blue-600"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-nsps-neutral-50 border border-nsps-neutral-200 rounded-lg text-sm font-medium hover:bg-nsps-neutral-100 text-nsps-neutral-700">
                        <Filter className="w-4 h-4" /> Status: All
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-nsps-neutral-50 border border-nsps-neutral-200 rounded-lg text-sm font-medium hover:bg-nsps-neutral-100 text-nsps-neutral-700">
                        <Filter className="w-4 h-4" /> Type: All
                    </button>
                </div>
            </div>

            <div className="bg-white border border-nsps-neutral-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-nsps-neutral-50 text-nsps-neutral-600 font-semibold uppercase border-b border-nsps-neutral-200">
                            <tr>
                                <th className="px-6 py-4">Member Info</th>
                                <th className="px-6 py-4">NRC / ID</th>
                                <th className="px-6 py-4">Employer</th>
                                <th className="px-6 py-4">Scheme Type</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-nsps-neutral-100">
                            {members.map((member) => (
                                <tr key={member.id} className="hover:bg-nsps-neutral-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-nsps-blue-100 text-nsps-blue-600 flex items-center justify-center font-bold text-xs">
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="font-medium text-nsps-neutral-900">{member.name}</p>
                                                <p className="text-xs text-nsps-neutral-500">ID: {member.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-nsps-neutral-600">{member.nrc}</td>
                                    <td className="px-6 py-4 text-nsps-neutral-700">{member.employer}</td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "px-2 py-1 rounded text-xs font-medium",
                                            member.type === 'DC' ? "bg-purple-50 text-purple-700" : "bg-orange-50 text-orange-700"
                                        )}>
                                            {member.type === 'DC' ? 'Defined Contribution' : 'Defined Benefit'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "px-2 py-1 rounded-full text-xs font-medium border",
                                            member.status === 'Active' ? "bg-green-50 text-green-700 border-green-200" :
                                                member.status === 'Retired' ? "bg-blue-50 text-blue-700 border-blue-200" :
                                                    "bg-gray-50 text-gray-700 border-gray-200"
                                        )}>
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-nsps-neutral-400 hover:text-nsps-blue-600 p-1">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// Simple Utility for classnames if importing fails or for portability
function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

export default AdminMembers;
