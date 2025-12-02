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
        // Clean, Deep Blue with subtle top highlight (Bevel)
        primary: `
            bg-blue-600 hover:bg-blue-500 
            text-white font-semibold tracking-tight
            border-t border-white/20 border-b border-blue-800/50
            shadow-[0_4px_12px_rgba(37,99,235,0.3)]
            hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]
            hover:-translate-y-0.5 active:translate-y-0
        `,
        
        // Dark Slate
        secondary: 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700',
        
        // Transparent Outline
        outline: 'border border-slate-700 bg-transparent hover:bg-slate-800 hover:text-white',
        
        // Ghost
        ghost: 'hover:bg-slate-800 hover:text-white',
        
        // Glass
        glass: 'glass-button',

        // Clean White
        white: 'bg-white text-slate-950 hover:bg-slate-100 shadow-lg font-semibold'
    }

    const sizes = {
        sm: 'h-9 px-4 text-xs',
        md: 'h-11 px-6 text-sm',
        lg: 'h-12 px-8 text-base', // Reduced from h-14/text-lg to be tighter
    }

    return (
        <button
            className={`
        inline-flex items-center justify-center rounded-full transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
        disabled:pointer-events-none disabled:opacity-50
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
