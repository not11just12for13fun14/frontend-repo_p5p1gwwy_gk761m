import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['100 tasks/mo', 'Community support', 'Basic integrations'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29/mo',
    features: ['10k tasks/mo', 'Priority support', 'All integrations', 'Custom workflows'],
    cta: 'Start Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    features: ['Unlimited tasks', 'SSO & audit logs', 'SLA & security review', 'Dedicated success'],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-6 text-center"
        >
          Pricing
        </motion.h1>
        <p className="text-white/70 max-w-2xl mx-auto text-center">Simple, transparent plans that scale with you.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5 ${t.highlighted ? 'ring-2 ring-white/20' : ''}`}
            >
              <h3 className="text-white font-semibold text-lg">{t.name}</h3>
              <p className="text-3xl font-bold text-white mt-2">{t.price}</p>
              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="text-white/70 text-sm">• {f}</li>
                ))}
              </ul>
              <a href="/contact" className={`mt-6 inline-block w-full text-center px-4 py-2 rounded-lg font-semibold ${t.highlighted ? 'bg-white text-slate-900' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
