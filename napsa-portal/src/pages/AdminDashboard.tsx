import {
    Users,
    Briefcase,
    TrendingUp,
    AlertTriangle,
    ArrowUpRight,
    Activity,
    PieChart
} from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line
} from 'recharts';

const AdminDashboard = () => {
    const data = [
        { name: 'Jan', income: 4000, expense: 2400 },
        { name: 'Feb', income: 3000, expense: 1398 },
        { name: 'Mar', income: 2000, expense: 9800 },
        { name: 'Apr', income: 2780, expense: 3908 },
        { name: 'May', income: 1890, expense: 4800 },
        { name: 'Jun', income: 2390, expense: 3800 },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-2xl font-bold text-nsps-neutral-900">System Overview</h1>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-nsps-neutral-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-nsps-neutral-500">Total Members</p>
                            <p className="text-2xl font-bold text-nsps-neutral-900 mt-2">54,231</p>
                        </div>
                        <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-green-600 font-medium">
                        <ArrowUpRight className="w-3 h-3 mr-1" /> +2.5% this month
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-nsps-neutral-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-nsps-neutral-500">Total Fund Assets</p>
                            <p className="text-2xl font-bold text-nsps-blue-900 mt-2">K 8.5Bn</p>
                        </div>
                        <div className="h-10 w-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-green-600 font-medium">
                        <ArrowUpRight className="w-3 h-3 mr-1" /> +12% YTD Growth
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-nsps-neutral-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-nsps-neutral-500">Compliance Rate</p>
                            <p className="text-2xl font-bold text-nsps-orange-500 mt-2">87%</p>
                        </div>
                        <div className="h-10 w-10 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center">
                            <Activity className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-nsps-neutral-500 font-medium">
                        Target: 90%
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-nsps-neutral-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-nsps-neutral-500">Pending Issues</p>
                            <p className="text-2xl font-bold text-nsps-neutral-900 mt-2">12</p>
                        </div>
                        <div className="h-10 w-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
                            <AlertTriangle className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-red-600 font-medium">
                        Requires immediate action
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-nsps-neutral-200">
                    <h3 className="text-lg font-bold text-nsps-neutral-900 mb-6">Fund Inflow vs Outflow</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="income" fill="#1e3a8a" name="Contributions" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="expense" fill="#f97316" name="Benefits Paid" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-nsps-neutral-200">
                    <h3 className="text-lg font-bold text-nsps-neutral-900 mb-6">Asset Allocation</h3>
                    <div className="space-y-6">
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                        Equities
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-blue-600">
                                        45%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-50">
                                <div style={{ width: "45%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-800"></div>
                            </div>
                        </div>

                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                                        Government Bonds
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-orange-600">
                                        30%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-50">
                                <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                            </div>
                        </div>

                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                                        Property
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-green-600">
                                        25%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-50">
                                <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
