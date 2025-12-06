'use client'

import Image from 'next/image'

export type PlatformKey = 'chatgpt' | 'claude' | 'gemini' | 'perplexity' | 'grok' | 'google' | 'deepseek'

interface BrandLogoProps {
  platform: PlatformKey | string
  className?: string
  size?: number
}

const LOGO_MAP: Record<string, string> = {
  chatgpt: '/logos/openai.svg',
  claude: '/logos/claude-color.svg',
  gemini: '/logos/gemini-color.png',
  perplexity: '/logos/perplexity.svg',
  grok: '/logos/grok.svg',
  google: '/logos/google.svg',
  deepseek: '/logos/deepseek.svg',
}

// Default export for ease of use, but also named export if needed
export default function BrandLogo({ platform, className = "", size = 24 }: BrandLogoProps) {
  const key = platform.toLowerCase() as PlatformKey
  const src = LOGO_MAP[key]

  // Fallback for Perplexity or unknown platforms if we don't have the asset yet
  if (!src) {
    return (
      <div 
        className={`bg-slate-800 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-400 ${className}`}
        style={{ width: size, height: size }}
      >
        {key.slice(0, 2).toUpperCase()}
      </div>
    )
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={`${platform} logo`}
        fill
        className={`object-contain ${key === 'chatgpt' ? 'dark:invert invert' : ''}`}
      />
    </div>
  )
}
