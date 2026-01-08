import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate('/portal/dashboard');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden fade-in">
                <div className="bg-slate-900 px-8 py-6">
                    <h2 className="text-2xl font-serif font-bold text-white">Welcome Back</h2>
                    <p className="text-slate-400 text-sm">Sign in to your dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email or License ID</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
                            placeholder="e.g. farmer@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
                            defaultValue="password123"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500" />
                            <span className="ml-2 text-sm text-slate-600">Remember me</span>
                        </label>
                        <a href="#" className="text-sm font-medium text-brand-600 hover:text-brand-700">Forgot password?</a>
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign In'}
                    </Button>

                    <div className="text-center">
                        <Button variant="ghost" size="sm" type="button" onClick={() => navigate('/')}>
                            Back to Home
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
