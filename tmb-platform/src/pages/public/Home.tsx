import React from 'react';
import { FileCheck, ChevronRight, CheckCircle, TrendingUp, Users, Scale, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="fade-in">
            {/* HER0 SECTION: Full Bleed Editorial */}
            <div className="relative h-[650px] w-full overflow-hidden bg-primary-dark">
                <img
                    src="/images/hero.png"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
                    alt="Zambian Tobacco Field"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-transparent"></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-8">
                            <span className="w-2 h-2 rounded-full bg-action animate-pulse"></span>
                            <span className="text-white text-xs font-bold uppercase tracking-widest font-sans">2025 Marketing Season Open</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight leading-time mb-8">
                            Regulating Zambia's <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-action to-white">Green Gold</span>
                        </h1>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl font-light">
                            The official digital platform of the Tobacco Board of Zambia. Ensuring quality, compliance, and sustainable growth for every stakeholder.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Button size="lg" onClick={() => navigate('/portal/login')} className="h-14 px-10 text-lg w-full sm:w-auto">
                                Get Licensed <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" onClick={() => navigate('/services')} className="h-14 px-10 text-lg w-full sm:w-auto">
                                View Services
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* OVERLAPPING STATS STRIP */}
            <div className="relative -mt-20 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: 'Registered Growers', value: '24,500+', icon: Users, color: 'text-action' },
                        { label: 'Market Volume', value: '35M kg', icon: Scale, color: 'text-white' },
                        { label: 'Hectares Planted', value: '12,000', icon: SproutIcon, color: 'text-white' }, // SproutIcon local wrapper or generic
                        { label: 'Export Value', value: '$120M', icon: TrendingUp, color: 'text-action' }
                    ].map((stat, i) => (
                        <div key={i} className="bg-primary-dark/95 backdrop-blur border border-white/10 p-8 rounded-card shadow-2xl hover:-translate-y-1 transition-transform duration-300 group">
                            <div className="flex justify-between items-start mb-4">
                                <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform`} />
                            </div>
                            <div className="text-4xl font-serif font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm font-bold uppercase tracking-wide text-white/50">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* EDITORIAL CONTENT: History */}
            <div className="py-24 bg-surface-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <img src="/images/farmers.png" className="rounded-card shadow-2xl object-cover h-[600px] w-full" alt="Zambian farmers" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-action rounded-full blur-3xl opacity-20"></div>
                            <div className="absolute top-10 -left-10 w-32 h-32 bg-primary rounded-full blur-2xl opacity-10"></div>
                        </div>

                        <div>
                            <span className="text-action font-bold uppercase tracking-widest text-sm mb-4 block">Our Mandate</span>
                            <h2 className="text-4xl md:text-5xl text-primary font-bold mb-8 leading-tight">
                                Over 50 Years of <br /> Regulatory Excellence.
                            </h2>
                            <p className="text-surface-dark/70 text-lg leading-relaxed mb-8">
                                Established under the Tobacco Act of 1967, TBZ has been the guardian of Zambia's tobacco industry. We bridge the gap between smallholder farmers and global markets, ensuring fair trade and quality compliance.
                            </p>

                            <ul className="space-y-6 mb-10">
                                {['Orderly Marketing Systems', 'Good Agricultural Practices (GAP)', 'Value Maximization for Farmers'].map((item) => (
                                    <li key={item} className="flex items-center text-primary font-medium text-lg">
                                        <div className="w-8 h-8 rounded-full bg-action/20 flex items-center justify-center mr-4 text-primary-dark">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                Read Full History
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SERVICES PREVIEW */}
            <div className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-bold text-primary mb-6">Streamlined Services</h2>
                        <p className="text-xl text-surface-dark/60">We've digitized our core operations to ensure transparency and efficiency for all industry players.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="group p-10 rounded-card bg-surface-light border border-gray-100 hover:border-action transition-all duration-300 hover:shadow-xl cursor-pointer" onClick={() => navigate('/portal/login')}>
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-primary">
                                <FileCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">E-Licensing</h3>
                            <p className="text-surface-dark/60 mb-8 leading-relaxed">Digital application and renewal for Grower, Buyer, and Floor Operator licenses.</p>
                            <span className="text-primary font-bold flex items-center group-hover:text-action-hover transition-colors">Start Application <ChevronRight className="ml-2 w-4 h-4" /></span>
                        </div>

                        {/* Service 2 */}
                        <div className="group p-10 rounded-card bg-surface-light border border-gray-100 hover:border-action transition-all duration-300 hover:shadow-xl cursor-pointer" onClick={() => navigate('/market')}>
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-primary">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Market Data</h3>
                            <p className="text-surface-dark/60 mb-8 leading-relaxed">Real-time floor prices, volume tracking, and historical trend analysis.</p>
                            <span className="text-primary font-bold flex items-center group-hover:text-action-hover transition-colors">View Data <ChevronRight className="ml-2 w-4 h-4" /></span>
                        </div>

                        {/* Service 3 */}
                        <div className="group p-10 rounded-card bg-surface-light border border-gray-100 hover:border-action transition-all duration-300 hover:shadow-xl cursor-pointer" onClick={() => navigate('/services')}>
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-primary">
                                <Scale className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Compliance</h3>
                            <p className="text-surface-dark/60 mb-8 leading-relaxed">Arbitration services, GAP guidelines, and regulatory documentation.</p>
                            <span className="text-primary font-bold flex items-center group-hover:text-action-hover transition-colors">Learn More <ChevronRight className="ml-2 w-4 h-4" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Icon Helper
function SproutIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 20h10" />
            <path d="M10 20c5.5-2.5.8-6.4 3-10" />
            <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.2.4-4.8-.3-1.1-.6-2.3-1.9-3.3-2.4 6-1.5 8.5-4 8.5-6.5a6 6 0 0 1 6 6c0 2.2-2 4.5-5 6.5" />
        </svg>
    )
}
