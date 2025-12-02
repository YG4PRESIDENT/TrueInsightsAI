import React from 'react'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'white'
    size?: 'sm' | 'md' | 'lg'
    loading?: boolean
    icon?: React.ReactNode
}

export function Button({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    loading = false,
    icon,
    disabled,
    ...props
}: ButtonProps) {
    const variants = {
        // Electric Blue Gradient (The "Pro" Action)
        primary: 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.3)] border border-blue-400/20',
        
        // Dark Slate (Secondary Actions)
        secondary: 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700',
        
        // Transparent Outline
        outline: 'border border-slate-700 bg-transparent hover:bg-slate-800 hover:text-white',
        
        // Ghost (Text only)
        ghost: 'hover:bg-slate-800 hover:text-white',
        
        // Glass (Blurry)
        glass: 'glass-button',

        // Clean White (High Contrast against Dark)
        white: 'bg-white text-slate-950 hover:bg-slate-100 shadow-[0_0_20px_rgba(255,255,255,0.2)] font-bold'
    }

    const sizes = {
        sm: 'h-9 px-4 text-xs',
        md: 'h-11 px-6 text-sm',
        lg: 'h-14 px-10 text-base',
    }

    return (
        <button
            className={`
        inline-flex items-center justify-center rounded-full font-medium transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
        disabled:pointer-events-none disabled:opacity-50
        active:scale-95
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : icon ? (
                <span className="mr-2">{icon}</span>
            ) : null}
            {children}
        </button>
    )
}
