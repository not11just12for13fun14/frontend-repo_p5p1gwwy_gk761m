import { motion } from 'framer-motion'
import { Zap, CircuitBoard, Bot, Workflow, ShieldCheck, Gauge } from 'lucide-react'

const items = [
  { icon: Zap, title: 'Fast Setup', desc: 'Spin up automations in minutes with prebuilt templates.' },
  { icon: CircuitBoard, title: 'Deep Integrations', desc: 'Connect your tools with robust, secure APIs.' },
  { icon: Bot, title: 'AI Agents', desc: 'Voice and text agents that execute multi-step tasks.' },
  { icon: Workflow, title: 'Orchestration', desc: 'Visually design and monitor complex workflows.' },
  { icon: ShieldCheck, title: 'Enterprise-Ready', desc: 'SSO, audit logs, and granular access controls.' },
  { icon: Gauge, title: 'Real-time Insights', desc: 'Dashboards, alerts, and cost controls built in.' },
]

export default function Features() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 grid place-items-center text-white mb-4">
                <item.icon size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
