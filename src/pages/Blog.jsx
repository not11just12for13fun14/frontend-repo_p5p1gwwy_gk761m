import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const posts = [
  { title: 'Designing AI Voice Agents', date: 'Oct 1, 2025', excerpt: 'Principles for natural conversations that get work done.' },
  { title: 'Automation Playbooks', date: 'Sep 20, 2025', excerpt: 'Common patterns to orchestrate complex tasks.' },
  { title: 'Integrations Deep Dive', date: 'Sep 5, 2025', excerpt: 'How we connect safely to your stack and keep data secure.' },
]

export default function Blog() {
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
          Blog
        </motion.h1>
        <p className="text-white/70 max-w-2xl">Insights and updates on AI automation.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-white/60 text-xs mt-1">{p.date}</p>
              <p className="text-white/70 text-sm mt-3">{p.excerpt}</p>
              <a href="#" className="inline-block mt-4 text-white font-semibold hover:underline">Read more →</a>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
