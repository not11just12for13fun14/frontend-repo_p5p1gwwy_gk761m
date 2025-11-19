import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const cases = [
  { title: 'Customer Support', desc: 'Deploy AI voice agents to triage, resolve, or escalate requests.' },
  { title: 'Sales Outreach', desc: 'Automated research, outreach, and meeting scheduling.' },
  { title: 'Ops Automation', desc: 'Internal bots to sync data and remediate incidents.' },
  { title: 'Marketing', desc: 'Generate content, schedule posts, and analyze performance.' },
]

export default function UseCases() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-6"
        >
          Use Cases
        </motion.h1>
        <p className="text-white/70 max-w-2xl">Real outcomes powered by AI automation.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <h3 className="text-white font-semibold">{c.title}</h3>
              <p className="text-white/70 text-sm mt-2">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
