import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    children?: React.ReactNode;
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action disabled:pointer-events-none disabled:opacity-50 rounded-pill';

    const variants = {
        primary: 'bg-action text-primary hover:bg-action-hover shadow-md hover:-translate-y-0.5 hover:shadow-lg',
        outline: 'border-2 border-primary/20 bg-transparent text-primary hover:bg-primary/5 hover:border-primary/40',
        ghost: 'text-primary hover:bg-primary/5 text-primary',
    };

    const sizes = {
        sm: 'h-9 px-4 text-xs',
        md: 'h-12 px-8 text-sm',
        lg: 'h-14 px-10 text-base',
    };

    return (
        <button
            className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
            {...props}
        />
    );
}
