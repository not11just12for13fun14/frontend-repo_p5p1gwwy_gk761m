import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder submit; in a real app this would POST to backend
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Sent! We will get back to you shortly.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      <Navbar />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-6"
        >
          Contact Us
        </motion.h1>
        <p className="text-white/70 mb-8">Tell us about your use case. We usually respond within one business day.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm mb-1">Name</label>
            <input required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-1">Email</label>
            <input required type="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="jane@company.com" />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-1">Message</label>
            <textarea required rows={5} className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="How can we help?" />
          </div>
          <button className="px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-white/90 transition-colors">Send message</button>
          {status && <p className="text-white/70">{status}</p>}
        </form>
      </section>

      <Footer />
    </div>
  )
}
