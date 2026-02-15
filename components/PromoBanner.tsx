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

        <svg className="absolute top-6 left-6 w-40 h-56 md:w-52 md:h-72 opacity-[0.18] pointer-events-none" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 210 Q75 160 50 120 Q70 130 80 90 Q90 130 110 120 Q85 160 80 210Z" stroke="currentColor" strokeWidth="1.5" className="text-emerald-400" />
          <path d="M80 90 Q60 60 30 50 Q60 45 80 20 Q100 45 130 50 Q100 60 80 90Z" stroke="currentColor" strokeWidth="1.5" className="text-emerald-400" />
          <path d="M55 130 Q40 110 20 115 Q35 100 55 130Z" stroke="currentColor" strokeWidth="1" className="text-emerald-500" />
          <path d="M105 130 Q120 110 140 115 Q125 100 105 130Z" stroke="currentColor" strokeWidth="1" className="text-emerald-500" />
          <circle cx="80" cy="15" r="10" stroke="currentColor" strokeWidth="1.5" className="text-pink-400" />
          <circle cx="80" cy="15" r="4" fill="currentColor" className="text-pink-400" />
          <path d="M70 5 Q80 -5 90 5 Q80 0 70 5Z" fill="currentColor" className="text-pink-300" opacity="0.5" />
          <path d="M65 15 Q75 5 85 15 Q75 10 65 15Z" fill="currentColor" className="text-pink-300" opacity="0.4" />
          <path d="M75 25 Q85 15 95 25 Q85 20 75 25Z" fill="currentColor" className="text-pink-300" opacity="0.4" />
        </svg>

        <svg className="absolute bottom-6 right-6 w-40 h-56 md:w-52 md:h-72 opacity-[0.18] pointer-events-none" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 10 Q85 60 110 100 Q90 90 80 130 Q70 90 50 100 Q75 60 80 10Z" stroke="currentColor" strokeWidth="1.5" className="text-emerald-400" />
          <path d="M80 130 Q100 160 130 170 Q100 175 80 200 Q60 175 30 170 Q60 160 80 130Z" stroke="currentColor" strokeWidth="1.5" className="text-emerald-400" />
          <path d="M105 90 Q120 70 140 75 Q125 85 105 90Z" stroke="currentColor" strokeWidth="1" className="text-emerald-500" />
          <path d="M55 90 Q40 70 20 75 Q35 85 55 90Z" stroke="currentColor" strokeWidth="1" className="text-emerald-500" />
          <circle cx="80" cy="205" r="10" stroke="currentColor" strokeWidth="1.5" className="text-pink-400" />
          <circle cx="80" cy="205" r="4" fill="currentColor" className="text-pink-400" />
          <path d="M70 215 Q80 205 90 215 Q80 210 70 215Z" fill="currentColor" className="text-pink-300" opacity="0.5" />
          <path d="M65 205 Q75 195 85 205 Q75 200 65 205Z" fill="currentColor" className="text-pink-300" opacity="0.4" />
        </svg>

        <svg className="absolute top-1/3 left-2 w-20 h-28 opacity-[0.15] pointer-events-none hidden lg:block" viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 100 Q35 70 15 50 Q30 55 40 30 Q50 55 65 50 Q45 70 40 100Z" stroke="currentColor" strokeWidth="1.2" className="text-teal-400" />
          <circle cx="40" cy="25" r="7" stroke="currentColor" strokeWidth="1" className="text-orange-300" />
          <circle cx="40" cy="25" r="3" fill="currentColor" className="text-orange-300" />
        </svg>

        <svg className="absolute top-1/3 right-2 w-20 h-28 opacity-[0.15] pointer-events-none hidden lg:block" viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 100 Q35 70 15 50 Q30 55 40 30 Q50 55 65 50 Q45 70 40 100Z" stroke="currentColor" strokeWidth="1.2" className="text-teal-400" />
          <circle cx="40" cy="25" r="7" stroke="currentColor" strokeWidth="1" className="text-orange-300" />
          <circle cx="40" cy="25" r="3" fill="currentColor" className="text-orange-300" />
        </svg>

        <svg className="absolute bottom-1/4 left-8 w-16 h-16 opacity-[0.14] pointer-events-none hidden md:block" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="12" stroke="currentColor" strokeWidth="1.5" className="text-pink-400" />
          <circle cx="25" cy="25" r="5" fill="currentColor" className="text-pink-400" />
          <path d="M15 15 Q25 5 35 15 Q25 10 15 15Z" fill="currentColor" className="text-pink-300" opacity="0.5" />
          <path d="M15 35 Q25 45 35 35 Q25 40 15 35Z" fill="currentColor" className="text-pink-300" opacity="0.5" />
          <path d="M10 25 Q15 15 20 25 Q15 20 10 25Z" fill="currentColor" className="text-pink-300" opacity="0.4" />
          <path d="M30 25 Q35 15 40 25 Q35 20 30 25Z" fill="currentColor" className="text-pink-300" opacity="0.4" />
        </svg>

        <svg className="absolute top-1/4 right-12 w-16 h-16 opacity-[0.14] pointer-events-none hidden md:block" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="12" stroke="currentColor" strokeWidth="1.5" className="text-pink-400" />
          <circle cx="25" cy="25" r="5" fill="currentColor" className="text-pink-400" />
          <path d="M15 15 Q25 5 35 15 Q25 10 15 15Z" fill="currentColor" className="text-pink-300" opacity="0.5" />
          <path d="M15 35 Q25 45 35 35 Q25 40 15 35Z" fill="currentColor" className="text-pink-300" opacity="0.5" />
          <path d="M10 25 Q15 15 20 25 Q15 20 10 25Z" fill="currentColor" className="text-pink-300" opacity="0.4" />
          <path d="M30 25 Q35 15 40 25 Q35 20 30 25Z" fill="currentColor" className="text-pink-300" opacity="0.4" />
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
                <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3">
                  <Calendar className="w-6 h-6 text-vigor-orange-400" />
                  <span className="font-body font-bold text-white text-lg">{promo.dates}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3">
                  <Clock className="w-6 h-6 text-vigor-orange-400" />
                  <span className="font-body font-bold text-white text-lg">{promo.time}</span>
                </div>
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
                        <p className="font-body text-sm text-vigor-silver-400">{service.tagline}</p>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  <div className="bg-white/5 rounded-xl p-5 border border-white/8">
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

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                    <button
                      onClick={() => setShowModal(true)}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-vigor-orange-400/60 hover:border-vigor-orange-400 text-white font-body font-bold text-lg rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
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
