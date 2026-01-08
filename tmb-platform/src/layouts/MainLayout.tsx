import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function MainLayout() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Sticky Premium Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-action group-hover:text-primary transition-colors">
                            <Sprout className="w-6 h-6" />
                        </div>
                        <span className="font-serif font-bold text-xl text-primary tracking-tight">TBZ</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {['About', 'Services', 'Market'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase()}`}
                                className="text-sm font-medium text-surface-dark hover:text-action-hover transition-colors uppercase tracking-wide"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={() => navigate('/portal/login')} className="hidden sm:inline-flex">
                            Staff Login
                        </Button>
                        <Button variant="primary" size="sm" onClick={() => navigate('/portal/login')}>
                            Portal Access
                        </Button>
                    </div>
                </div>
            </header>

            {/* Content with Header Offset */}
            <main className="flex-grow pt-20">
                <Outlet />
            </main>

            {/* Premium Footer */}
            <footer className="bg-primary text-white py-16 border-t-[6px] border-accent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Sprout className="w-8 h-8 text-action" />
                            <span className="font-serif font-bold text-2xl">TBZ</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                            Regulating and promoting the "Green Gold" of Zambia since 1967. Committed to sustainable growth and farmer prosperity.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-action mb-6 uppercase tracking-wider text-xs">Platform</h4>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li><Link to="/portal/register" className="hover:text-white">E-Licensing</Link></li>
                            <li><Link to="/market" className="hover:text-white">Market Data</Link></li>
                            <li><Link to="/services" className="hover:text-white">Compliance Guide</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-action mb-6 uppercase tracking-wider text-xs">Contact</h4>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li>Plot 402, Lusaka</li>
                            <li>+260 211 254 211</li>
                            <li>info@tbz.co.zm</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 p-6 rounded-card border border-white/10">
                        <h4 className="font-bold text-white mb-2">Need Help?</h4>
                        <p className="text-xs text-white/60 mb-4">Our dedicated support team is available 24/7 for farmers.</p>
                        <Button variant="outline" size="sm" className="w-full border-action text-action hover:bg-action hover:text-primary">
                            Contact Support
                        </Button>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40">
                    © 2025 Tobacco Board of Zambia. All rights reserved. Government of Zambia.
                </div>
            </footer>
        </div>
    );
}
