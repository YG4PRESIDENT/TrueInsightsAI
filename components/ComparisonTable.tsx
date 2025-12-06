"use client";

import { motion } from "framer-motion";
import { Check, X, BarChart2, ShieldCheck, Zap, AlertTriangle, Minus } from "lucide-react";

// Refined competitor data with boolean flags for checkmark-based comparison
const competitors = [
  { 
    name: "Rankett (True Insights)", 
    price: "Custom / Free Audit", 
    aiFirst: true, 
    doneForYou: true, 
    realTime: true,
    highlight: true 
  },
  { 
    name: "Semrush", 
    price: "$499.95/mo", 
    aiFirst: false, 
    doneForYou: false, 
    realTime: false 
  },
  { 
    name: "Ahrefs", 
    price: "$999–1,499/mo", 
    aiFirst: false, 
    doneForYou: false, 
    realTime: false 
  },
  { 
    name: "Goodie / higoodie", 
    price: "$500+/mo", 
    aiFirst: true, 
    doneForYou: true, 
    realTime: false // Usually manual reporting
  },
  { 
    name: "Peec AI", 
    price: "€199/mo", 
    aiFirst: true, 
    doneForYou: false, 
    realTime: false 
  },
  { 
    name: "Peekaboo", 
    price: "$100/mo", 
    aiFirst: true, 
    doneForYou: false, 
    realTime: false 
  },
];

export default function ComparisonTable() {
  return (
    <section className="relative bg-slate-950 py-32 overflow-hidden border-t border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Compare the Market
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            See why brands choose our AI Visibility Engine over traditional tools.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-slate-800 shadow-2xl mb-32 bg-slate-900/50 backdrop-blur-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80">
                <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider w-1/4">Platform</th>
                <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider w-1/4">Monthly Cost</th>
                <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider text-center w-1/6">AI First?</th>
                <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider text-center w-1/6">Done-For-You?</th>
                <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider text-center w-1/6">Real-Time Data?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {competitors.map((comp) => (
                <tr 
                  key={comp.name} 
                  className={`transition-colors ${comp.highlight ? 'bg-blue-900/20 hover:bg-blue-900/30 relative' : 'hover:bg-slate-800/50'}`}
                >
                  <td className="p-6 font-medium text-white flex items-center gap-3">
                    {comp.highlight && <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400 flex-shrink-0" />}
                    <span className={comp.highlight ? "text-lg" : ""}>{comp.name}</span>
                  </td>
                  <td className={`p-6 ${comp.highlight ? 'text-blue-300 font-bold text-lg' : 'text-slate-400 font-mono'}`}>
                    {comp.price}
                  </td>
                  
                  {/* Feature Columns - Checkmark Based */}
                  <td className="p-6 text-center">
                    {comp.aiFirst ? (
                      <div className="flex justify-center">
                        <div className="p-1 bg-green-500/10 rounded-full">
                          <Check className="w-6 h-6 text-green-500" strokeWidth={3} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <Minus className="w-6 h-6 text-slate-600" />
                      </div>
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {comp.doneForYou ? (
                      <div className="flex justify-center">
                        <div className="p-1 bg-green-500/10 rounded-full">
                          <Check className="w-6 h-6 text-green-500" strokeWidth={3} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <X className="w-6 h-6 text-slate-600" />
                      </div>
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {comp.realTime ? (
                      <div className="flex justify-center">
                        <div className="p-1 bg-green-500/10 rounded-full">
                          <Check className="w-6 h-6 text-green-500" strokeWidth={3} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <X className="w-6 h-6 text-slate-600" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Info Grid / Copy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Left Column: The Core Value */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 border-l-4 border-l-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-500" />
                AI Visibility Systems
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                We get you cited by ChatGPT, Perplexity, and Gemini when your ideal customers ask for recommendations, generating leads that convert <span className="text-white font-semibold">5-25X better than Google</span>, at a fraction of the ad cost.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We build AI Visibility Systems that influence how models identify, trust, and recommend businesses. We engineer how AI models interpret and prioritize your company in real customer searches.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 border-l-4 border-l-purple-500">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-purple-500" />
                The Window of Opportunity
              </h3>
              <p className="text-slate-400 leading-relaxed">
                AI search is free right now. That won&apos;t last forever. And while it&apos;s open, there&apos;s a window where the businesses that show up first will lock in the advantage. AI doesn&apos;t guess who to recommend. It looks at signals online to decide who&apos;s trusted, active, and relevant.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Reporting & Trust */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 border-l-4 border-l-green-500">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <BarChart2 className="w-6 h-6 text-green-500" />
                Real-Time Milestone Reporting
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Milestone Reporting isn&apos;t some boring monthly PDF you&apos;ll never open. It&apos;s your progress, tracked in real time. We show you exactly how your AI visibility is moving across search engines and AI platforms, where your business is showing up (and where it&apos;s not), what&apos;s improving, and how you stack up against competitors.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Simple, transparent, and focused on what actually matters: getting you seen more and bringing in more leads.
              </p>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Trust & Safety</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                AI recommends based on trust. We make sure your business looks like the safest choice. It&apos;s not about gaming the system. It&apos;s about becoming the obvious answer, and we got it down to a science.
              </p>
              <div className="pl-6 border-l-2 border-slate-700 italic text-slate-500">
                &quot;We operate AI Visibility Infrastructure for high-competition markets. If you&apos;re small, AI only shows the best choice. We make sure you look like the obvious one.&quot;
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 p-12 rounded-3xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            &quot;AI is a tidal wave, not a trend.&quot;
          </h3>
          <p className="text-xl text-blue-200">
            Learn to surf it or get dragged under while your competitors ride past you smiling.
          </p>
        </motion.div>

      </div>
    </section>
  );
}