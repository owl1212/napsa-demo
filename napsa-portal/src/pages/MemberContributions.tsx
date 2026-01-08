import {
    Download,
    Filter,
    Search,
    ArrowDownRight,
    CheckCircle2,
    Calendar
} from 'lucide-react';

const MemberContributions = () => {
    const transactions = Array.from({ length: 12 }).map((_, i) => ({
        id: `TRX-${2025000 + i}`,
        date: new Date(2025, 11 - i, 5).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        month: new Date(2025, 11 - i, 1).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
        amount: 1250.00,
        employer: 'Tech Corp Zambia Ltd',
        type: 'Mandatory',
        status: 'Credited'
    }));

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-nsps-blue-900">Contribution History</h1>
                    <p className="text-nsps-neutral-600 text-sm mt-1">
                        Track your monthly pension contributions and statements.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-nsps-neutral-300 rounded-lg text-sm font-medium hover:bg-nsps-neutral-50 text-nsps-neutral-700">
                        <Download className="w-4 h-4" /> Export Report
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-nsps-neutral-200 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-nsps-neutral-400" />
                    <input
                        type="text"
                        placeholder="Search by Employer or Transaction ID..."
                        className="w-full pl-9 pr-4 py-2 text-sm border border-nsps-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nsps-blue-600"
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-3 py-2 bg-nsps-neutral-100 rounded-lg text-sm font-medium text-nsps-neutral-700 hover:bg-nsps-neutral-200">
                        <Calendar className="w-4 h-4" /> Year: 2025
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-nsps-neutral-100 rounded-lg text-sm font-medium text-nsps-neutral-700 hover:bg-nsps-neutral-200">
                        <Filter className="w-4 h-4" /> All Types
                    </button>
                </div>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-nsps-blue-50 p-6 rounded-xl border border-nsps-blue-100">
                    <p className="text-sm font-semibold text-nsps-blue-600 uppercase">Total Contributed (2025)</p>
                    <p className="text-2xl font-bold text-nsps-blue-900 mt-2">K 15,000.00</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-nsps-neutral-200">
                    <p className="text-sm font-semibold text-nsps-neutral-600 uppercase">Average Monthly</p>
                    <p className="text-2xl font-bold text-nsps-neutral-900 mt-2">K 1,250.00</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-nsps-neutral-200">
                    <p className="text-sm font-semibold text-nsps-neutral-600 uppercase">Last Credited</p>
                    <p className="text-2xl font-bold text-nsps-green-600 mt-2">Jan 05, 2026</p>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-nsps-neutral-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-nsps-neutral-50 text-nsps-neutral-600 font-semibold uppercase border-b border-nsps-neutral-200">
                            <tr>
                                <th className="px-6 py-4">Transaction ID</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Period</th>
                                <th className="px-6 py-4">Employer</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-nsps-neutral-100">
                            {transactions.map((trx) => (
                                <tr key={trx.id} className="hover:bg-nsps-neutral-50 transition-colors group">
                                    <td className="px-6 py-4 font-mono text-xs text-nsps-neutral-500">{trx.id}</td>
                                    <td className="px-6 py-4 font-medium text-nsps-neutral-900">{trx.date}</td>
                                    <td className="px-6 py-4 text-nsps-neutral-700">{trx.month}</td>
                                    <td className="px-6 py-4 text-nsps-neutral-600">{trx.employer}</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                                            {trx.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-nsps-blue-900">K {trx.amount.toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                            <CheckCircle2 className="w-3 h-3" /> {trx.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-nsps-neutral-200 bg-nsps-neutral-50 text-center text-xs text-nsps-neutral-500">
                    Showing 12 of 48 records
                </div>
            </div>
        </div>
    );
};

export default MemberContributions;
