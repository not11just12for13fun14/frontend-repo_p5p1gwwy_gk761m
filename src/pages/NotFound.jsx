import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-4xl font-bold mb-2">Page not found</h1>
        <p className="text-white/70">The page you’re looking for doesn’t exist. Return to the homepage.</p>
        <a href="/" className="inline-block mt-6 px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold">Go home</a>
      </div>
      <Footer />
    </div>
  )
}
