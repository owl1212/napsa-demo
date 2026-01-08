import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
    BarChart3,
    Users,
    Settings,
    Shield,
    Database,
    Briefcase,
    LogOut,
    Menu,
    X,
    FileSpreadsheet
} from 'lucide-react';
import { cn } from '../lib/utils';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    const navigation = [
        { name: 'Overview', href: '/admin/dashboard', icon: BarChart3 },
        { name: 'Member Registry', href: '/admin/members', icon: Users },
        { name: 'Fund Management', href: '/admin/funds', icon: Briefcase },
        { name: 'Accounting', href: '/admin/accounting', icon: FileSpreadsheet },
        { name: 'System Config', href: '/admin/settings', icon: Settings },
        { name: 'Security', href: '/admin/security', icon: Shield },
    ];

    return (
        <div className="min-h-screen bg-nsps-neutral-50 flex">
            {/* Sidebar - Dark theme for Admin */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-64 bg-nsps-neutral-900 text-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0",
                    !isSidebarOpen && "-translate-x-full lg:hidden"
                )}
            >
                <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-nsps-neutral-800">
                        <h1 className="text-2xl font-bold font-sans tracking-tight">NSPS<span className="text-red-500">.</span>Admin</h1>
                        <p className="text-xs text-nsps-neutral-400 opacity-70">System Administration</p>
                    </div>

                    <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                                        isActive
                                            ? "bg-nsps-neutral-800 text-white shadow-sm border-l-4 border-nsps-orange-500"
                                            : "text-nsps-neutral-400 hover:bg-nsps-neutral-800/50 hover:text-white"
                                    )}
                                >
                                    <Icon className="w-5 h-5" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-nsps-neutral-800">
                        <button className="flex items-center gap-3 px-4 py-3 w-full text-sm font-medium text-nsps-neutral-400 hover:bg-nsps-neutral-800/50 hover:text-white rounded-lg transition-colors">
                            <LogOut className="w-5 h-5" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="bg-white border-b border-nsps-neutral-200 h-16 flex items-center justify-between px-6 lg:px-8">
                    <button
                        type="button"
                        className="lg:hidden text-nsps-neutral-600 hover:text-nsps-neutral-900"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <div className="flex items-center gap-4 ml-auto">
                        <div className="hidden md:block text-right">
                            <p className="text-sm font-semibold text-nsps-neutral-900">Admin User</p>
                            <p className="text-xs text-nsps-neutral-600">Super Administrator</p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-nsps-neutral-900 text-white flex items-center justify-center font-bold">
                            AD
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-6 lg:p-8 overflow-y-auto bg-nsps-neutral-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
