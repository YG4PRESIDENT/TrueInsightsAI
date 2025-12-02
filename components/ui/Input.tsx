import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    icon?: React.ReactNode
}

export function Input({
    className = '',
    label,
    error,
    icon,
    id,
    ...props
}: InputProps) {
    return (
        <div className="w-full space-y-2">
            {label && (
                <label
                    htmlFor={id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-300"
                >
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    id={id}
                    className={`
            flex h-12 w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm ring-offset-slate-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 text-slate-200
            ${icon ? 'pr-10' : ''}
            ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}
            ${className}
          `}
                    {...props}
                />
                {icon && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                        {icon}
                    </div>
                )}
            </div>
            {error && (
                <p className="text-sm font-medium text-red-500 animate-slide-up">
                    {error}
                </p>
            )}
        </div>
    )
}