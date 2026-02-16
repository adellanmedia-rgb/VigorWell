'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Calendar, Clock, Gift, ArrowRight, Check, AlertTriangle, Info, X, Heart } from 'lucide-react'
import { useState } from 'react'
import { FadeIn, StaggerContainer, StaggerItem } from './motion'
import { promo } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

function HowItWorksModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gradient-to-b from-[#1e1e30] to-[#12121f] rounded-3xl border border-white/15 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="relative p-8 md:p-10">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-vigor-orange-500/20 flex items-center justify-center">
                    <Info className="w-8 h-8 text-vigor-orange-400" />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-white mb-2">How It Works</h3>
                  <div className="w-16 h-1 bg-vigor-orange-500 mx-auto rounded-full" />
                </div>

                <p className="font-body text-vigor-silver-300 text-base leading-relaxed mb-6">
                  {promo.howItWorks.intro}
                </p>

                <div className="bg-vigor-orange-500/10 border border-vigor-orange-500/30 rounded-2xl p-5 mb-6">
                  <p className="font-body text-white text-base font-semibold text-center">
                    {promo.howItWorks.eventDetails}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="font-heading text-xl text-white">Simple 3-Step Process:</h4>
                  {promo.howItWorks.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-vigor-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="font-body text-sm font-bold text-white">{i + 1}</span>
                      </div>
                      <p className="font-body text-vigor-silver-300 text-base leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-vigor-teal-500/10 border border-vigor-teal-500/30 rounded-2xl p-5 mb-6">
                  <p className="font-body text-vigor-teal-300 text-base font-semibold text-center">
                    {promo.howItWorks.noHiddenFees}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
                  <div className="flex items-center justify-center gap-3">
                    <Heart className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <p className="font-body text-vigor-silver-300 text-base">
                      {promo.howItWorks.donation}
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                    <Button asChild size="lg" className="font-bold text-lg px-10 py-6 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                      <Link href="/booking" className="gap-3">
                        Reserve Your Spot Now
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function PromoBanner() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden bg-vigor-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-vigor-dark via-[#1a1a2e] to-vigor-dark" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/15 via-transparent to-emerald-950/10 pointer-events-none" />

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-vigor-orange-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-vigor-teal-500/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-vigor-orange-500/10 rounded-full blur-[80px]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-emerald-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-pink-500/10 rounded-full blur-[80px]" />

        <svg className="absolute top-8 left-4 w-28 h-28 md:w-40 md:h-40 opacity-[0.22] pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="text-pink-300">
            <path d="M50 50 Q50 30 50 15 Q58 30 50 50Z" fill="currentColor" opacity="0.7" />
            <path d="M50 50 Q65 38 78 32 Q68 48 50 50Z" fill="currentColor" opacity="0.6" />
            <path d="M50 50 Q68 55 78 68 Q60 62 50 50Z" fill="currentColor" opacity="0.7" />
            <path d="M50 50 Q42 68 35 78 Q40 60 50 50Z" fill="currentColor" opacity="0.6" />
            <path d="M50 50 Q32 42 22 35 Q38 40 50 50Z" fill="currentColor" opacity="0.7" />
          </g>
          <circle cx="50" cy="50" r="5" fill="#f9a8d4" />
          <circle cx="50" cy="50" r="2.5" fill="#fbbf24" />
        </svg>

        <svg className="absolute top-16 left-32 md:left-44 w-16 h-16 md:w-20 md:h-20 opacity-[0.16] pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="text-pink-200">
            <path d="M50 50 Q48 32 50 18 Q56 32 50 50Z" fill="currentColor" opacity="0.6" />
            <path d="M50 50 Q64 36 76 30 Q66 46 50 50Z" fill="currentColor" opacity="0.5" />
            <path d="M50 50 Q66 56 76 70 Q58 62 50 50Z" fill="currentColor" opacity="0.6" />
            <path d="M50 50 Q44 66 36 76 Q42 58 50 50Z" fill="currentColor" opacity="0.5" />
            <path d="M50 50 Q34 44 24 36 Q40 42 50 50Z" fill="currentColor" opacity="0.6" />
          </g>
          <circle cx="50" cy="50" r="4" fill="#f9a8d4" />
          <circle cx="50" cy="50" r="2" fill="#fbbf24" />
        </svg>

        <svg className="absolute bottom-10 right-6 w-32 h-32 md:w-44 md:h-44 opacity-[0.20] pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="text-pink-300">
            <path d="M50 50 Q50 30 50 15 Q58 30 50 50Z" fill="currentColor" opacity="0.7" />
            <path d="M50 50 Q65 38 78 32 Q68 48 50 50Z" fill="currentColor" opacity="0.6" />
            <path d="M50 50 Q68 55 78 68 Q60 62 50 50Z" fill="currentColor" opacity="0.7" />
            <path d="M50 50 Q42 68 35 78 Q40 60 50 50Z" fill="currentColor" opacity="0.6" />
            <path d="M50 50 Q32 42 22 35 Q38 40 50 50Z" fill="currentColor" opacity="0.7" />
          </g>
          <circle cx="50" cy="50" r="5" fill="#f9a8d4" />
          <circle cx="50" cy="50" r="2.5" fill="#fbbf24" />
        </svg>

        <svg className="absolute bottom-20 right-40 md:right-52 w-14 h-14 md:w-18 md:h-18 opacity-[0.14] pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="text-pink-200">
            <path d="M50 50 Q48 32 50 18 Q56 32 50 50Z" fill="currentColor" opacity="0.6" />
            <path d="M50 50 Q64 36 76 30 Q66 46 50 50Z" fill="currentColor" opacity="0.5" />
            <path d="M50 50 Q66 56 76 70 Q58 62 50 50Z" fill="currentColor" opacity="0.6" />
            <path d="M50 50 Q44 66 36 76 Q42 58 50 50Z" fill="currentColor" opacity="0.5" />
            <path d="M50 50 Q34 44 24 36 Q40 42 50 50Z" fill="currentColor" opacity="0.6" />
          </g>
          <circle cx="50" cy="50" r="4" fill="#f9a8d4" />
          <circle cx="50" cy="50" r="2" fill="#fbbf24" />
        </svg>

        <svg className="absolute top-[15%] right-[8%] w-10 h-16 opacity-[0.20] pointer-events-none rotate-[25deg]" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0 Q30 15 28 35 Q20 25 12 35 Q10 15 20 0Z" fill="#fbcfe8" opacity="0.8" />
          <path d="M15 35 Q20 55 25 35" stroke="#f9a8d4" strokeWidth="0.8" fill="none" />
        </svg>

        <svg className="absolute top-[40%] left-[5%] w-8 h-14 opacity-[0.18] pointer-events-none rotate-[-15deg] hidden md:block" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0 Q30 15 28 35 Q20 25 12 35 Q10 15 20 0Z" fill="#fbcfe8" opacity="0.7" />
          <path d="M15 35 Q20 55 25 35" stroke="#f9a8d4" strokeWidth="0.8" fill="none" />
        </svg>

        <svg className="absolute bottom-[30%] left-[12%] w-7 h-12 opacity-[0.15] pointer-events-none rotate-[45deg] hidden lg:block" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0 Q30 15 28 35 Q20 25 12 35 Q10 15 20 0Z" fill="#fce7f3" opacity="0.8" />
          <path d="M15 35 Q20 55 25 35" stroke="#f9a8d4" strokeWidth="0.8" fill="none" />
        </svg>

        <svg className="absolute top-[60%] right-[15%] w-9 h-14 opacity-[0.17] pointer-events-none rotate-[-35deg] hidden md:block" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0 Q30 15 28 35 Q20 25 12 35 Q10 15 20 0Z" fill="#fbcfe8" opacity="0.7" />
          <path d="M15 35 Q20 55 25 35" stroke="#f9a8d4" strokeWidth="0.8" fill="none" />
        </svg>

        <svg className="absolute top-[25%] left-[25%] w-6 h-10 opacity-[0.12] pointer-events-none rotate-[60deg] hidden lg:block" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0 Q30 15 28 35 Q20 25 12 35 Q10 15 20 0Z" fill="#fce7f3" opacity="0.7" />
        </svg>

        <svg className="absolute bottom-[15%] right-[30%] w-7 h-11 opacity-[0.13] pointer-events-none rotate-[-50deg] hidden lg:block" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0 Q30 15 28 35 Q20 25 12 35 Q10 15 20 0Z" fill="#fbcfe8" opacity="0.8" />
        </svg>

        <svg className="absolute top-[70%] left-[30%] w-5 h-8 opacity-[0.10] pointer-events-none rotate-[80deg] hidden md:block" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0 Q30 15 28 35 Q20 25 12 35 Q10 15 20 0Z" fill="#fce7f3" opacity="0.7" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <FadeIn>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block mb-4"
              >
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 border-2 border-red-500/60 rounded-full text-red-300 font-body font-bold text-sm md:text-base uppercase tracking-widest">
                  <AlertTriangle className="w-5 h-5" />
                  {promo.daysOnly}
                  <AlertTriangle className="w-5 h-5" />
                </span>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white mb-3">
                {promo.title}
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="font-heading text-lg md:text-xl text-vigor-orange-400 mb-6">
                {promo.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-vigor-orange-400" />
                <span className="font-body font-bold text-white text-lg">March 5th – 7th</span>
                <span className="text-vigor-silver-500 text-lg">|</span>
                <Clock className="w-6 h-6 text-vigor-orange-400" />
                <span className="font-body font-bold text-white text-lg">10:00 AM – 4:00 PM</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/15 border border-yellow-500/40 rounded-full text-yellow-300 font-body font-semibold text-sm uppercase tracking-wide">
                  <Sparkles className="w-4 h-4" />
                  {promo.limitedSlots}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-vigor-teal-500/15 border border-vigor-teal-500/40 rounded-full text-vigor-teal-300 font-body font-semibold text-sm uppercase tracking-wide">
                  <AlertTriangle className="w-4 h-4" />
                  {promo.preRegistration}
                </span>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-b from-[#1e1e30] to-[#15152a] rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
                <div className="text-center mb-10">
                  <p className="font-body text-vigor-silver-400 text-lg mb-3 uppercase tracking-wide">Get All 3 Services</p>
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="font-display text-7xl md:text-8xl text-white"
                    >
                      $99
                    </motion.span>
                    <div className="text-left">
                      <p className="font-body text-vigor-silver-300 line-through text-xl font-bold">{promo.regularPrice} Value</p>
                      <p className="font-body text-vigor-teal-400 font-bold text-lg">Save over 80%</p>
                    </div>
                  </div>
                </div>

                <StaggerContainer className="grid md:grid-cols-3 gap-5 mb-10" staggerDelay={0.1}>
                  {promo.services.map((service) => (
                    <StaggerItem key={service.name}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:border-vigor-orange-500/40 hover:bg-white/8 transition-all duration-300"
                      >
                        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-vigor-orange-500/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-vigor-orange-400" />
                        </div>
                        <h4 className="font-heading text-xl text-white mb-2">{service.name}</h4>
                        <p className="font-body text-sm text-vigor-silver-400 mb-4">{service.tagline}</p>
                        <Link href="/booking" className="inline-flex items-center gap-1.5 px-4 py-2 bg-vigor-orange-500/20 hover:bg-vigor-orange-500/30 border border-vigor-orange-500/40 rounded-full text-vigor-orange-400 hover:text-vigor-orange-300 font-body text-sm font-semibold transition-all duration-300">
                          Book Now
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  <div className="bg-white/5 rounded-xl p-5 border border-white/8">
                    <p className="font-heading text-vigor-orange-400 text-sm font-semibold tracking-wide uppercase mb-3">Event Promotional Pricing</p>
                    <p className="font-body text-vigor-silver-300 text-sm">
                      <span className="text-white font-semibold">${promo.deposit} deposit</span> to secure your appointment
                    </p>
                    <p className="font-body text-vigor-silver-300 text-sm mt-1">
                      <span className="text-white font-semibold">${promo.balanceDue} balance</span> due at visit
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500/10 to-vigor-teal-500/10 rounded-xl p-5 border border-pink-500/25">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <p className="font-body text-white text-sm font-semibold">
                        {promo.charity}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                    <Button asChild size="lg" className="font-bold text-lg px-10 py-6 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                      <Link href="/booking" className="gap-3">
                        Claim Your $99 Package
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      boxShadow: [
                        '0 0 15px rgba(249,115,22,0.15)',
                        '0 0 30px rgba(249,115,22,0.35)',
                        '0 0 15px rgba(249,115,22,0.15)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-block rounded-full"
                  >
                    <button
                      onClick={() => setShowModal(true)}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-vigor-orange-400/60 hover:border-vigor-orange-400 text-white font-body font-bold text-lg rounded-full transition-all duration-300"
                    >
                      <Info className="w-5 h-5 text-vigor-orange-400" />
                      How It Works
                    </button>
                  </motion.div>
                </div>

                <div className="text-center">
                  <motion.p
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="font-body text-sm font-bold text-red-400 uppercase tracking-widest"
                  >
                    {promo.note}
                  </motion.p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <HowItWorksModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
