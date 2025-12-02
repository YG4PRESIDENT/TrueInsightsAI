'use client'

import { useState } from 'react'
import { Globe, Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import BrandLogo from '@/components/ui/BrandLogo'

export default function Hero() {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) {
      setError('Please enter a website URL')
      return
    }

    // Redirect to the Tool App
    // In production: https://tool.trueinsightsai.com
    // In dev: http://localhost:3001 (assuming tool runs there)
    const toolBaseUrl = process.env.NEXT_PUBLIC_TOOL_URL || 'http://localhost:3001'
    window.location.href = `${toolBaseUrl}/?url=${encodeURIComponent(url)}`
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="w-full max-w-xl space-y-8 animate-fade-in relative z-10">
        
        {/* Hero Text */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium font-mono mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            FREE AI VISIBILITY TOOL
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            See how AI models <br />
            <span className="text-gradient">rank your business.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Agencies charge <span className="text-slate-200 font-semibold underline decoration-primary/50 decoration-2">$200+</span> for this. Audit your AI visibility for free.
          </p>
        </div>

        {/* Main Input Card */}
        <div className="w-full backdrop-blur-xl bg-slate-900/40 border border-slate-800 shadow-2xl rounded-xl relative overflow-hidden">
          {/* Subtle glow on card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    placeholder="acme.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="pl-11"
                    icon={<Globe size={18} />}
                  />
                </div>
                {error && <p className="text-xs text-red-400">{error}</p>}
              </div>
              
              <Button 
                type="submit"
                className="w-full h-12 text-lg"
                disabled={!url}
              >
                Start Audit
              </Button>
            </form>
          </div>
        </div>

        {/* Footer / Trust */}
        <div className="text-center">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">Powered By</p>
          <div className="flex justify-center items-center gap-8 opacity-50 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2">
               <BrandLogo platform="chatgpt" size={24} />
               <span className="text-sm font-medium text-slate-300">OpenAI</span>
            </div>
            <div className="flex items-center gap-2">
               <BrandLogo platform="claude" size={24} />
               <span className="text-sm font-medium text-slate-300">Anthropic</span>
            </div>
            <div className="flex items-center gap-2">
               <BrandLogo platform="gemini" size={24} />
               <span className="text-sm font-medium text-slate-300">Google</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}