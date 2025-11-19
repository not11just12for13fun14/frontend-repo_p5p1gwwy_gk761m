import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Slack, Github, Zap, Database, NotepadText, Mail } from 'lucide-react'

const integrations = [
  { icon: Slack, name: 'Slack', desc: 'Send updates, trigger workflows, and respond with AI.' },
  { icon: Github, name: 'GitHub', desc: 'Automate issues, PR reviews, and deployments.' },
  { icon: Zap, name: 'Zapier', desc: 'Bridge 5,000+ apps with zero code.' },
  { icon: Database, name: 'Postgres', desc: 'Read, write, and analyze data with agents.' },
  { icon: NotepadText, name: 'Notion', desc: 'Sync docs, databases, and meeting notes.' },
  { icon: Mail, name: 'Gmail', desc: 'Parse emails and auto-reply with context.' },
]

export default function Integrations() {
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
          Integrations
        </motion.h1>
        <p className="text-white/70 max-w-2xl">Connect your favorite tools to create seamless automations. Add triggers, actions, and AI reasoning to any workflow.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 grid place-items-center text-white mb-4">
                <item.icon size={20} />
              </div>
              <h3 className="text-white font-semibold">{item.name}</h3>
              <p className="text-white/70 text-sm mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
