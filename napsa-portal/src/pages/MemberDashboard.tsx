import {
    TrendingUp,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Wallet,
    FileText,
    UserCheck,
    CreditCard,
    ChevronRight,
    Clock,
    CheckCircle2
} from 'lucide-react';

const MemberDashboard = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-nsps-blue-900 tracking-tight">
                        Welcome back, John 👋
                    </h1>
                    <p className="text-nsps-neutral-600 mt-1">
                        Here's what's happening with your pension account today.
                    </p>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm border border-nsps-neutral-200">
                    <Calendar className="w-4 h-4 text-nsps-neutral-500" />
                    <span className="text-sm font-medium text-nsps-neutral-700">January 8, 2026</span>
                </div>
            </div>

            {/* Primary Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Accumulated */}
                <div className="bg-gradient-to-br from-nsps-blue-900 to-nsps-blue-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <Wallet className="w-24 h-24" />
                    </div>
                    <p className="text-nsps-blue-100 font-medium text-sm">Total Pension Fund</p>
                    <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-4xl font-bold tracking-tight">K 45,231</span>
                        <span className="text-xl font-medium opacity-80">.00</span>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                        <TrendingUp className="w-3 h-3 text-nsps-green-600" />
                        <span className="text-nsps-green-500">+12.5%</span> from last year
                    </div>
                </div>

                {/* Projected Benefit */}
                <div className="bg-white rounded-2xl p-6 border border-nsps-neutral-200 shadow-sm relative overflow-hidden group hover:border-nsps-blue-200 transition-colors">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-nsps-orange-100 rounded-full blur-2xl -mr-8 -mt-8 opacity-50"></div>
                    <p className="text-nsps-neutral-600 font-medium text-sm">Projected Retirement Benefit</p>
                    <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-nsps-blue-900 tracking-tight">K 128,400</span>
                    </div>
                    <p className="mt-4 text-xs text-nsps-neutral-500">
                        Estimated for age 60 retirement. <br />
                        <a href="#" className="text-nsps-blue-600 font-medium hover:underline">View Calculator →</a>
                    </p>
                </div>

                {/* Member Status */}
                <div className="bg-white rounded-2xl p-6 border border-nsps-neutral-200 shadow-sm flex flex-col justify-between hover:border-nsps-blue-200 transition-colors">
                    <div>
                        <div className="flex justify-between items-start">
                            <p className="text-nsps-neutral-600 font-medium text-sm">Membership Status</p>
                            <div className="h-8 w-8 bg-nsps-green-50 rounded-full flex items-center justify-center text-nsps-green-600">
                                <UserCheck className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-nsps-green-100 text-nsps-green-700">
                                Active Contributing
                            </span>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-nsps-neutral-100 mt-4 flex justify-between items-center text-xs text-nsps-neutral-500">
                        <span>Since Mar 2021</span>
                        <span>Employer: Tech Corp</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Contributions Feed */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-nsps-blue-900">Recent Contributions</h2>
                        <button className="text-sm font-medium text-nsps-blue-600 hover:text-nsps-blue-800 flex items-center gap-1">
                            View Full History <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-nsps-neutral-200 divide-y divide-nsps-neutral-100 overflow-hidden">
                        {[
                            { month: 'December 2025', amount: 'K 1,250.00', date: 'Jan 05, 2026', status: 'Credited' },
                            { month: 'November 2025', amount: 'K 1,250.00', date: 'Dec 03, 2025', status: 'Credited' },
                            { month: 'October 2025', amount: 'K 1,250.00', date: 'Nov 04, 2025', status: 'Credited' },
                            { month: 'September 2025', amount: 'K 1,250.00', date: 'Oct 02, 2025', status: 'Credited' },
                        ].map((item, i) => (
                            <div key={i} className="p-4 flex items-center justify-between hover:bg-nsps-neutral-50 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-nsps-blue-50 flex items-center justify-center text-nsps-blue-600 group-hover:bg-nsps-blue-100">
                                        <ArrowDownRight className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-nsps-neutral-900">Contribution - {item.month}</h3>
                                        <p className="text-xs text-nsps-neutral-500">Processed on {item.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-nsps-blue-900">{item.amount}</p>
                                    <p className="text-xs font-medium text-nsps-green-600 flex items-center justify-end gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> {item.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions & Notifications */}
                <div className="space-y-6">
                    <h2 className="text-lg font-bold text-nsps-blue-900">Quick Actions</h2>

                    <div className="grid grid-cols-1 gap-3">
                        <button className="flex items-center gap-4 p-4 bg-white border border-nsps-neutral-200 rounded-xl shadow-sm hover:shadow-md hover:border-nsps-blue-200 transition-all text-left group">
                            <div className="h-10 w-10 rounded-lg bg-nsps-orange-100 flex items-center justify-center text-nsps-orange-600 group-hover:scale-110 transition-transform">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-sm font-bold text-nsps-neutral-900">Get Statement</span>
                                <span className="block text-xs text-nsps-neutral-500">Download PDF report</span>
                            </div>
                        </button>

                        <button className="flex items-center gap-4 p-4 bg-white border border-nsps-neutral-200 rounded-xl shadow-sm hover:shadow-md hover:border-nsps-blue-200 transition-all text-left group">
                            <div className="h-10 w-10 rounded-lg bg-nsps-blue-100 flex items-center justify-center text-nsps-blue-600 group-hover:scale-110 transition-transform">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-sm font-bold text-nsps-neutral-900">Make Voluntary Contribution</span>
                                <span className="block text-xs text-nsps-neutral-500">Boost your pension</span>
                            </div>
                        </button>
                    </div>

                    <div className="bg-nsps-blue-50 rounded-xl p-5 border border-nsps-blue-100 mt-6">
                        <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-nsps-blue-600 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-sm font-bold text-nsps-blue-900">Pending Action</h3>
                                <p className="text-xs text-nsps-blue-700 mt-1 leading-relaxed">
                                    Please update your beneficiary details. It has been over 2 years since your last update.
                                </p>
                                <button className="mt-3 text-xs font-bold text-white bg-nsps-blue-600 px-3 py-1.5 rounded-lg hover:bg-nsps-blue-700">
                                    Update Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberDashboard;
