"use client";

import { motion } from "framer-motion";
import { Check, BarChart2, ShieldCheck, AlertTriangle, Minus, BrainCircuit, Hourglass, LineChart } from "lucide-react";

const competitors = [
  { 
    name: "Rankett", 
    price: "FREE", 
    aiTracking: true, 
    doneForYou: true, 
    milestoneReporting: true,
    competitorAnalysis: true,
    highlight: true 
  },
  { 
    name: "Semrush", 
    price: "$500+", 
    aiTracking: true, 
    doneForYou: false, 
    milestoneReporting: false,
    competitorAnalysis: true 
  },
  { 
    name: "Ahrefs", 
    price: "$1000+", 
    aiTracking: true, 
    doneForYou: false, 
    milestoneReporting: false,
    competitorAnalysis: true
  },
  { 
    name: "Hi Goody", 
    price: "$100+", 
    aiTracking: true, 
    doneForYou: true, 
    milestoneReporting: false, 
    competitorAnalysis: true
  },
  { 
    name: "Peec.AI", 
    price: "$100+", 
    aiTracking: true, 
    doneForYou: false, 
    milestoneReporting: false,
    competitorAnalysis: false
  },
  { 
    name: "AIPeekaboo", 
    price: "$100+", 
    aiTracking: true, 
    doneForYou: false, 
    milestoneReporting: false,
    competitorAnalysis: false
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
                <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider min-w-[200px]">Platform</th>
                <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider min-w-[150px]">Monthly Cost</th>
                <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider text-center">AI Search Tracking</th>
                <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider text-center">Done-For-You Engine</th>
                <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider text-center">Milestone Reporting</th>
                <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider text-center">Competitor Analysis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {competitors.map((comp) => (
                <tr 
                  key={comp.name} 
                  className={`transition-colors ${comp.highlight ? 'bg-blue-900/20 hover:bg-blue-900/30 relative' : 'hover:bg-slate-800/50'}`}
                >
                  <td className="p-6 font-bold text-white text-lg">
                    <span className={comp.highlight ? "text-lg" : ""}>{comp.name}</span>
                  </td>
                  <td className={`p-6 font-mono text-base ${comp.highlight ? 'text-blue-300 font-black text-xl' : 'text-slate-400'}`}>
                    {comp.price}
                  </td>
                  
                  {/* Feature Columns */}
                  <td className="p-6 text-center">
                    <FeatureIcon active={comp.aiTracking} />
                  </td>
                  <td className="p-6 text-center">
                    <FeatureIcon active={comp.doneForYou} />
                  </td>
                  <td className="p-6 text-center">
                    <FeatureIcon active={comp.milestoneReporting} />
                  </td>
                  <td className="p-6 text-center">
                    <FeatureIcon active={comp.competitorAnalysis} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Info Grid / Copy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          {/* Card 1: AI Systems */}
          <InfoCard 
            icon={<BrainCircuit className="w-8 h-8 text-blue-400" />}
            title="AI Visibility Systems"
            delay={0}
          >
            <p className="mb-4">
              We get you cited by ChatGPT, Perplexity, and Gemini when your ideal customers ask for recommendations, generating leads that convert <span className="text-white font-semibold">5-25X better than Google</span>.
            </p>
            <p>
              We build systems that influence how models identify, trust, and recommend businesses, engineering how AI prioritizes your company.
            </p>
          </InfoCard>

          {/* Card 2: Window of Opportunity */}
          <InfoCard 
            icon={<Hourglass className="w-8 h-8 text-purple-400" />}
            title="The Window of Opportunity"
            delay={0.1}
          >
            <p>
              AI search is free right now, but that won&apos;t last. There&apos;s a critical window where businesses that show up first will lock in the advantage.
            </p>
            <p className="mt-4">
              AI doesn&apos;t guess; it decides based on signals. We make sure your business sends the right signals so your name is the one it keeps choosing.
            </p>
          </InfoCard>

          {/* Card 3: Milestone Reporting */}
          <InfoCard 
            icon={<LineChart className="w-8 h-8 text-green-400" />}
            title="Milestone Reporting"
            delay={0.2}
          >
            <p className="mb-4">
              Forget boring PDFs. We track your progress in real time. See exactly how your AI Visibility Score moves, where you appear, and how you stack up against competitors.
            </p>
            <p>
              Simple, transparent updates focused on what matters: getting you seen more and bringing in more leads.
            </p>
          </InfoCard>

          {/* Card 4: Trust & Safety */}
          <InfoCard 
            icon={<ShieldCheck className="w-8 h-8 text-teal-400" />}
            title="Trust & Safety"
            delay={0.3}
          >
            <p className="mb-4">
              AI recommends based on trust. We ensure your business looks like the safest, most obvious choice. It&apos;s not about gaming the system; it&apos;s about becoming the authority.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/50 italic text-slate-500 text-sm">
              &quot;If you&apos;re small, AI only shows the best choice. We make sure you look like the obvious one.&quot;
            </div>
          </InfoCard>

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

function InfoCard({ icon, title, children, delay }: { icon: React.ReactNode, title: string, children: React.ReactNode, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 group"
    >
      <div className="mb-6 p-3 bg-slate-950 rounded-full inline-block border border-slate-800 group-hover:border-blue-500/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <div className="text-slate-400 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

function FeatureIcon({ active }: { active: boolean }) {
  if (active) {
    return (
      <div className="flex justify-center">
        <div className="p-1.5 bg-green-500/10 rounded-full">
          <Check className="w-5 h-5 text-green-500" strokeWidth={3} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <Minus className="w-5 h-5 text-slate-600" />
    </div>
  );
}