'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="btn btn-solid"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn btn-outline"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16"
        >
          <div className="w-64 h-64 mx-auto relative">
            <div className="absolute inset-0 bg-[var(--accent)]/10 rounded-full animate-pulse" />
            <div className="absolute inset-8 bg-[var(--accent)]/5 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl">🔍</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
