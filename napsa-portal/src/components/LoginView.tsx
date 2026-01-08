import React, { useState, useEffect } from 'react';
import {
    User,
    Lock,
    ArrowRight,
    ShieldCheck,
    Building2,
    CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';
// import loginBg from '../assets/login_bg.jpg';
// import napsaLogo from '../assets/napsa_logo.png';

interface LoginViewProps {
    onLogin: (role: 'member' | 'employer' | 'admin') => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
    const [userType, setUserType] = useState<'member' | 'employer' | 'admin'>('member');
    const [step, setStep] = useState<'credentials' | 'mfa'>('credentials');
    const [isLoading, setIsLoading] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "Sign in to access your account and manage your services.",
        "Secure, reliable access to your NAPSA services—anytime.",
        "Managing your social security made simple and efficient.",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const handleCredentialsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStep('mfa');
        }, 1000);
    };

    const handleMfaSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate MFA validation
        setTimeout(() => {
            setIsLoading(false);
            onLogin(userType);
        }, 1500);
    };

    return (
        <div className="flex min-h-screen bg-nsps-neutral-50 overflow-hidden">
            {/* Left Side - Login Form */}
            <div className="w-full lg:w-[480px] bg-white flex flex-col justify-center px-8 lg:px-12 relative z-10 shadow-2xl">
                <div className="w-full max-w-sm mx-auto space-y-8">

                    {/* Header */}
                    <div className="text-center space-y-2">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-nsps-blue-50 text-nsps-blue-900 mb-4">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-nsps-blue-900">
                            {userType === 'member' && 'Member Portal'}
                            {userType === 'employer' && 'Employer Portal'}
                            {userType === 'admin' && 'Staff Admin Portal'}
                        </h1>
                        <p className="text-sm text-nsps-neutral-600">
                            {step === 'credentials'
                                ? 'Enter your credentials to access your account'
                                : 'Enter the verification code sent to your phone'}
                        </p>
                    </div>

                    {/* Role Switcher */}
                    {step === 'credentials' && (
                        <div className="grid grid-cols-3 gap-2 p-1 bg-nsps-neutral-100 rounded-lg">
                            {(['member', 'employer', 'admin'] as const).map((role) => (
                                <button
                                    key={role}
                                    onClick={() => setUserType(role)}
                                    className={cn(
                                        "px-3 py-1.5 text-xs font-medium rounded-md transition-all capitalize",
                                        userType === role
                                            ? "bg-white text-nsps-blue-900 shadow-sm"
                                            : "text-nsps-neutral-600 hover:text-nsps-blue-900"
                                    )}
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Forms */}
                    {step === 'credentials' ? (
                        <form onSubmit={handleCredentialsSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase text-nsps-neutral-600">
                                    {userType === 'employer' ? 'Employer Account Number' : 'NRC / Social Security No.'}
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-5 w-5 text-nsps-neutral-400" />
                                    <input
                                        type="text"
                                        required
                                        className="w-full pl-10 pr-4 py-2.5 bg-nsps-neutral-50 border border-nsps-neutral-200 rounded-lg focus:ring-2 focus:ring-nsps-blue-600 focus:border-transparent outline-none transition-all placeholder:text-nsps-neutral-400 font-medium text-nsps-blue-900"
                                        placeholder={userType === 'employer' ? '12345678' : '123456/78/1'}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase text-nsps-neutral-600">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-nsps-neutral-400" />
                                    <input
                                        type="password"
                                        required
                                        className="w-full pl-10 pr-4 py-2.5 bg-nsps-neutral-50 border border-nsps-neutral-200 rounded-lg focus:ring-2 focus:ring-nsps-blue-600 focus:border-transparent outline-none transition-all placeholder:text-nsps-neutral-400 font-medium text-nsps-blue-900"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs">
                                <label className="flex items-center gap-2 text-nsps-neutral-600 cursor-pointer select-none">
                                    <input type="checkbox" className="rounded border-nsps-neutral-300 text-nsps-blue-600 focus:ring-nsps-blue-600" />
                                    Remember me
                                </label>
                                <a href="#" className="font-medium text-nsps-blue-600 hover:text-nsps-blue-800">Forgot password?</a>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-2 bg-nsps-orange-500 hover:bg-nsps-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-lg shadow-nsps-orange-500/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>Sign In <ArrowRight className="h-5 w-5" /></>
                                )}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleMfaSubmit} className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-300">
                            <div className="text-center bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <p className="text-sm text-blue-800">We sent a 6-digit code to your phone ending in <span className="font-bold">...8921</span></p>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase text-nsps-neutral-600">Verification Code</label>
                                <input
                                    type="text"
                                    required
                                    maxLength={6}
                                    className="w-full text-center tracking-[1em] text-2xl py-3 bg-nsps-neutral-50 border border-nsps-neutral-200 rounded-lg focus:ring-2 focus:ring-nsps-blue-600 focus:border-transparent outline-none transition-all font-mono font-bold text-nsps-blue-900"
                                    placeholder="000000"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-2 bg-nsps-blue-600 hover:bg-nsps-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-lg shadow-nsps-blue-600/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>Verify & Login <CheckCircle2 className="h-5 w-5" /></>
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={() => setStep('credentials')}
                                className="w-full text-sm text-nsps-neutral-500 hover:text-nsps-blue-900 transition-colors"
                            >
                                ← Back to login
                            </button>
                        </form>
                    )}
                </div>

                {/* Footer */}
                <div className="absolute bottom-6 left-0 right-0 text-center">
                    <p className="text-xs text-nsps-neutral-400">© 2026 National Pension Scheme Authority</p>
                </div>
            </div>

            {/* Right Side - Visuals */}
            <div className="hidden lg:flex flex-1 relative bg-nsps-blue-900 items-center justify-center overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nsps-blue-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-nsps-orange-500 rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4"></div>

                {/* Content Overlay */}
                <div className="relative z-10 max-w-lg text-center text-white px-8">
                    <div className="mb-8 flex justify-center">
                        <div className="h-20 w-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                            <Building2 className="w-10 h-10 text-white" />
                        </div>
                    </div>

                    <div className="h-32 mb-8">
                        {slides.map((slide, index) => (
                            <p
                                key={index}
                                className={cn(
                                    "text-2xl font-medium leading-relaxed transition-all duration-700 absolute top-0 left-0 right-0",
                                    currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                )}
                            >
                                {slide}
                            </p>
                        ))}
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={cn(
                                    "h-1.5 rounded-full transition-all duration-300",
                                    currentSlide === index ? "w-8 bg-nsps-orange-500" : "w-1.5 bg-white/30 hover:bg-white/50"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginView;
