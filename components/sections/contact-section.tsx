'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, type FormEvent } from 'react'
import { CharacterReveal, LineReveal } from '@/components/text-reveal'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqkjvqw'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (status === 'submitting') return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        const data = await response.json().catch(() => null)
        const errorText =
          data?.errors?.[0]?.message ??
          '送信に失敗しました。時間をおいて再度お試しください。'
        setErrorMessage(errorText)
        setStatus('error')
      }
    } catch {
      setErrorMessage(
        '送信に失敗しました。ネットワーク環境をご確認のうえ、再度お試しください。'
      )
      setStatus('error')
    }
  }

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative flex min-h-screen flex-col justify-center px-6 py-[var(--section-gap)] md:px-12"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Section Label */}
        <LineReveal>
          <span className="mb-8 block text-sm font-light uppercase tracking-widest text-foreground/50">
            Contact
          </span>
        </LineReveal>

        {/* Main Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-[clamp(60px,12vw,180px)] leading-display tracking-tight">
            <CharacterReveal delay={0.2} staggerDelay={0.05}>
              {"Let's Talk."}
            </CharacterReveal>
          </h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
          className="mb-16 max-w-lg font-light text-lg leading-relaxed text-foreground/70 md:text-xl"
        >
          まずは気軽にご相談ください。
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.7 }}
          className="max-w-[640px]"
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-[2px] border border-foreground/10 bg-foreground/[0.02] p-8 md:p-10"
            >
              <p className="mb-3 font-serif text-2xl md:text-3xl">
                ありがとうございます。
              </p>
              <p className="font-light leading-relaxed text-foreground/70">
                お問い合わせを受け付けました。
                <br />
                3営業日以内にご返信いたします。
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* Honeypot (spam protection) */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="!absolute !left-[-9999px] !h-0 !w-0 !opacity-0"
              />

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-light uppercase tracking-widest text-foreground/60"
                >
                  お名前
                  <span className="ml-1 text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  autoComplete="name"
                  className="w-full border-b border-foreground/20 bg-transparent px-0 py-3 font-light text-base text-foreground transition-colors placeholder:text-foreground/30 focus:border-accent focus:outline-none disabled:opacity-50"
                  placeholder="山田 太郎"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-light uppercase tracking-widest text-foreground/60"
                >
                  メールアドレス
                  <span className="ml-1 text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  autoComplete="email"
                  className="w-full border-b border-foreground/20 bg-transparent px-0 py-3 font-light text-base text-foreground transition-colors placeholder:text-foreground/30 focus:border-accent focus:outline-none disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-light uppercase tracking-widest text-foreground/60"
                >
                  お問い合わせ内容
                  <span className="ml-1 text-accent">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  rows={6}
                  className="w-full resize-none border-b border-foreground/20 bg-transparent px-0 py-3 font-light text-base text-foreground transition-colors placeholder:text-foreground/30 focus:border-accent focus:outline-none disabled:opacity-50"
                  placeholder="ご相談内容をお聞かせください"
                />
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-light text-accent"
                  role="alert"
                >
                  {errorMessage}
                </motion.p>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group relative inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 text-sm font-light uppercase tracking-widest text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </span>
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
