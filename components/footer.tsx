'use client'

import { motion } from 'framer-motion'
import { MagneticButton } from './magnetic-button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 md:flex-row">
        {/* Copyright */}
        <p className="text-sm font-light text-foreground/50">
          &copy; {new Date().getFullYear()} TAKAKO DESIGN. All rights reserved.
        </p>

        {/* Scroll to Top */}
        <MagneticButton
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-sm font-light uppercase tracking-widest text-foreground/60 transition-colors hover:text-foreground"
        >
          Back to Top
          <motion.span
            className="inline-block"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            ↑
          </motion.span>
        </MagneticButton>
      </div>
    </footer>
  )
}
