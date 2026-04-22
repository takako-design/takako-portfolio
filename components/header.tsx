'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MagneticButton } from './magnetic-button'

const navItems = [
  { href: '#works', label: 'Works' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
        className={`fixed left-0 right-0 top-0 z-50 px-6 py-6 transition-colors duration-500 md:px-12 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md' : ''
        }`}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between">
          {/* Logo */}
          <MagneticButton href="#" className="font-serif text-xl tracking-tight md:text-2xl">
            TAKAKO<span className="text-accent">.</span>
          </MagneticButton>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-12 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <MagneticButton
                  href={item.href}
                  className="text-sm font-light uppercase tracking-widest transition-colors hover:text-accent"
                >
                  {item.label}
                </MagneticButton>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center md:hidden"
            aria-label="メニューを開く"
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 0 : -4,
              }}
              className="block h-px w-6 bg-foreground"
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -1 : 4,
              }}
              className="block h-px w-6 bg-foreground"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-background md:hidden"
          >
            <nav>
              <ul className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-serif text-4xl tracking-tight"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
