import {
    Users,
    Upload,
    AlertCircle,
    CheckCircle,
    Clock,
    ArrowRight,
    TrendingDown
} from 'lucide-react';

const EmployerDashboard = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-nsps-neutral-900">Employer Overview</h1>
                    <p className="text-nsps-neutral-600 mt-1">Manage contributions and employee records for <span className="font-semibold">Tech Corp Zambia Ltd</span>.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">
                        <CheckCircle className="w-3 h-3 mr-1" /> Compliant
                    </span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-nsps-neutral-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                            <Users className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 bg-nsps-neutral-100 text-nsps-neutral-600 rounded">Active</span>
                    </div>
                    <p className="text-sm text-nsps-neutral-600">Total Employees</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">1,248</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-nsps-neutral-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="h-10 w-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
                            <Clock className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 bg-red-50 text-red-600 rounded">Due Soon</span>
                    </div>
                    <p className="text-sm text-nsps-neutral-600">Pending Contributions</p>
                    <p className="text-3xl font-bold text-nsps-orange-500 mt-1">K 450,290</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-nsps-neutral-200">
                    <div className="flex justify-between items-start mb-4">
                        <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                            <CheckCircle className="w-5 h-5" />
                        </div>
                    </div>
                    <p className="text-sm text-nsps-neutral-600">Last Remittance</p>
                    <p className="text-xl font-bold text-nsps-green-600 mt-1">K 448,100</p>
                    <p className="text-xs text-nsps-neutral-400">Paid on Jan 15, 2026</p>
                </div>

                <div className="bg-nsps-blue-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-10 -mr-10 -mt-10"></div>
                    <p className="text-nsps-blue-200 text-sm font-medium">Compliance Score</p>
                    <div className="mt-4 flex items-end gap-2">
                        <span className="text-4xl font-bold">98%</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full bg-blue-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 w-[98%]"></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Quick Upload Action */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-nsps-neutral-200 p-8 flex flex-col items-center justify-center text-center space-y-4 hover:border-nsps-blue-300 transition-colors border-dashed border-2">
                    <div className="h-16 w-16 bg-nsps-blue-50 rounded-full flex items-center justify-center text-nsps-blue-600 mb-2">
                        <Upload className="w-8 h-8" />
                    </div>
                    <h2 className="text-xl font-bold text-nsps-neutral-900">Upload Monthly Payroll Return</h2>
                    <p className="text-nsps-neutral-500 max-w-sm">
                        Drag and drop your breakdown CSV or Excel file here to process contributions for January 2026.
                    </p>
                    <button className="mt-4 bg-nsps-blue-600 hover:bg-nsps-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center gap-2">
                        Select File to Upload <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-xl shadow-sm border border-nsps-neutral-200 p-6">
                    <h3 className="text-lg font-bold text-nsps-neutral-900 mb-4">Notifications</h3>
                    <div className="space-y-4">
                        <div className="flex gap-3 text-sm">
                            <AlertCircle className="w-5 h-5 text-nsps-orange-500 shrink-0" />
                            <div>
                                <p className="font-semibold text-nsps-neutral-900">Missing NRC Numbers</p>
                                <p className="text-nsps-neutral-500 text-xs mt-1">3 employees have invalid or missing NRC numbers. Please update.</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-6 text-center text-sm font-bold text-nsps-blue-600 hover:text-nsps-blue-800 py-2">
                        View All Alerts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployerDashboard;
