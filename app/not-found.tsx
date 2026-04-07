import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-slate-50 selection:bg-brand-50 selection:text-brand-dark">
      <div className="text-center max-w-lg relative z-10">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-light rounded-full blur-[100px] opacity-30 pointer-events-none" />

        <h1 className="text-8xl sm:text-9xl font-black text-slate-900 mb-2 tracking-tighter">
          404
        </h1>
        <div className="h-1.5 w-24 bg-brand-primary rounded-full mx-auto mb-8" />

        <h2 className="text-2xl sm:text-3xl font-black mb-4 text-slate-900">Page Not Found</h2>
        <p className="text-slate-600 mb-10 text-lg font-medium leading-relaxed">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-dark text-white rounded-xl font-bold shadow-xl shadow-brand-dark/20 hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  )
}