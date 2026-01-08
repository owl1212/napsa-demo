import { useState } from 'react';
import {
    Calculator,
    TrendingUp,
    RefreshCw,
    Download,
    Info
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const MemberCalculator = () => {
    const [salary, setSalary] = useState(15000);
    const [age, setAge] = useState(35);
    const [contributionRate, setContributionRate] = useState(10); // 5% Employee + 5% Employer
    const [returnRate, setReturnRate] = useState(8);
    const [retirementAge, setRetirementAge] = useState(60);

    // Simple projection logic
    const yearsToRetirement = retirementAge - age;
    const data = Array.from({ length: yearsToRetirement + 1 }).map((_, i) => {
        const year = new Date().getFullYear() + i;
        const memberAge = age + i;
        // Simplified Compound Interest: PV * (1+r)^n + PMT * (((1+r)^n - 1) / r)
        // Here we just iterate for chart smooth

        // Total contribution per year = salary * 12 * rate
        // Assuming salary stays constant for simplicity or grows with inflation (omitted for UI demo)
        const annualContribution = salary * 12 * (contributionRate / 100);
        const totalAccumulated = (annualContribution * ((Math.pow(1 + returnRate / 100, i + 1) - 1) / (returnRate / 100))).toFixed(0);

        return {
            year,
            age: memberAge,
            value: parseInt(totalAccumulated),
            contributions: annualContribution * (i + 1)
        };
    });

    const finalAmount = data[data.length - 1].value;

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-nsps-blue-900">Benefits Estimator</h1>
                    <p className="text-nsps-neutral-600 text-sm mt-1">
                        Project your future retirement benefits based on current trends.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-nsps-neutral-300 rounded-lg text-sm font-medium hover:bg-nsps-neutral-50 text-nsps-neutral-700">
                    <Download className="w-4 h-4" /> Download/Print Estimate
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Controls */}
                <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-nsps-neutral-200">
                    <div className="flex items-center gap-2 font-semibold text-nsps-blue-900 border-b border-nsps-neutral-100 pb-4">
                        <Calculator className="w-5 h-5" /> Calculate Parameters
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase text-nsps-neutral-500">Current Monthly Salary (ZMW)</label>
                            <input
                                type="range"
                                min="1000"
                                max="100000"
                                step="500"
                                value={salary}
                                onChange={(e) => setSalary(Number(e.target.value))}
                                className="w-full h-2 bg-nsps-neutral-200 rounded-lg appearance-none cursor-pointer accent-nsps-blue-600"
                            />
                            <div className="flex justify-between items-center bg-nsps-neutral-50 px-3 py-2 rounded-lg border border-nsps-neutral-200">
                                <span className="font-mono text-nsps-blue-900 font-bold">K {salary.toLocaleString()}</span>
                                <span className="text-xs text-nsps-neutral-400">Monthly</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase text-nsps-neutral-500">Current Age</label>
                            <div className="flex justify-between items-center gap-4">
                                <input
                                    type="range"
                                    min="18"
                                    max="59"
                                    value={age}
                                    onChange={(e) => setAge(Number(e.target.value))}
                                    className="w-full h-2 bg-nsps-neutral-200 rounded-lg appearance-none cursor-pointer accent-nsps-blue-600"
                                />
                                <span className="font-mono text-sm font-bold w-12 text-center bg-nsps-neutral-100 rounded py-1">{age}</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase text-nsps-neutral-500">Retirement Age</label>
                            <div className="flex justify-between items-center gap-4">
                                <input
                                    type="range"
                                    min="50"
                                    max="65"
                                    value={retirementAge}
                                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                                    className="w-full h-2 bg-nsps-neutral-200 rounded-lg appearance-none cursor-pointer accent-nsps-orange-500"
                                />
                                <span className="font-mono text-sm font-bold w-12 text-center bg-nsps-neutral-100 rounded py-1">{retirementAge}</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase text-nsps-neutral-500">Exp. Annual Return Rate (%)</label>
                            <div className="flex justify-between items-center gap-4">
                                <input
                                    type="range"
                                    min="2"
                                    max="15"
                                    step="0.5"
                                    value={returnRate}
                                    onChange={(e) => setReturnRate(Number(e.target.value))}
                                    className="w-full h-2 bg-nsps-neutral-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                                />
                                <span className="font-mono text-sm font-bold w-16 text-center bg-nsps-neutral-100 rounded py-1">{returnRate}%</span>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg text-xs text-blue-800 flex gap-2">
                            <Info className="w-4 h-4 shrink-0 mt-0.5" />
                            <p>Estimates are strictly for guidance and do not guarantee future benefits. Actual values depend on fund performance.</p>
                        </div>
                    </div>
                </div>

                {/* Visualization */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-nsps-neutral-200">
                        <h3 className="text-lg font-bold text-nsps-blue-900 mb-6">Projected Growth</h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorContrib" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="age" />
                                    <YAxis tickFormatter={(val) => `K${val / 1000}k`} />
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <Tooltip
                                        formatter={(value) => [`K ${Number(value).toLocaleString()}`, 'Amount']}
                                        labelFormatter={(label) => `Age: ${label}`}
                                    />
                                    <Area type="monotone" dataKey="value" stroke="#1e3a8a" fillOpacity={1} fill="url(#colorValue)" name="Total Value" />
                                    <Area type="monotone" dataKey="contributions" stroke="#f97316" fillOpacity={1} fill="url(#colorContrib)" name="Principal" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-nsps-blue-900 text-white p-6 rounded-xl shadow-lg">
                            <p className="text-nsps-blue-200 text-sm font-medium">Estimated Lumpsum at Age {retirementAge}</p>
                            <p className="text-4xl font-bold mt-2 tracking-tight">K {finalAmount.toLocaleString()}</p>
                            <div className="mt-4 flex items-center gap-2 text-sm text-nsps-blue-200">
                                <TrendingUp className="w-4 h-4 text-green-400" />
                                <span>Based on {returnRate}% annual return</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-nsps-neutral-200 shadow-sm">
                            <p className="text-nsps-neutral-600 text-sm font-medium">Monthly Pension (Annuity) Est.</p>
                            <p className="text-3xl font-bold text-nsps-neutral-900 mt-2">K {Math.floor(finalAmount * 0.006).toLocaleString()}</p>
                            <p className="mt-2 text-xs text-nsps-neutral-400">Assuming 60% commutation factor</p>
                            <button className="mt-4 text-sm font-bold text-nsps-orange-500 hover:text-nsps-orange-600 flex items-center gap-1">
                                Recalculate <RefreshCw className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCalculator;
