import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  glass?: boolean
  hover?: boolean
}

export function Card({
  children,
  className = '',
  glass = true,
  hover = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl border p-6
        ${glass ? 'glass-card' : 'bg-slate-900 text-slate-200 border-slate-800'}
        ${hover ? 'hover:border-blue-500/50 hover:shadow-blue-500/10' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col space-y-1.5 mb-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`font-semibold leading-none tracking-tight text-lg text-white ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function CardContent({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}
