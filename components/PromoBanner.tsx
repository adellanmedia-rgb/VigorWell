'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Calendar, Clock, Gift, ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'
import { FadeIn, StaggerContainer, StaggerItem } from './motion'
import { promo } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-vigor-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-vigor-dark via-[#1a1a2e] to-vigor-dark" />

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-vigor-orange-500/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-vigor-teal-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <FadeIn>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <Badge variant="glow" className="gap-2 px-5 py-2.5 text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Limited Time Offer
              </Badge>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 mt-6">
              {promo.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-6 text-vigor-silver-300 font-body">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-vigor-orange-400" />
                <span>{promo.dates}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-vigor-orange-400" />
                <span>{promo.time}</span>
              </div>
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
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="font-display text-6xl md:text-7xl text-white"
                  >
                    $99
                  </motion.span>
                  <div className="text-left">
                    <p className="font-body text-vigor-silver-500 line-through text-lg">{promo.regularPrice} Value</p>
                    <p className="font-body text-vigor-teal-400 font-semibold text-lg">Save over 80%</p>
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
                      <p className="font-body text-sm text-vigor-silver-400 mb-5">{service.tagline}</p>
                      <Button asChild size="sm" className="w-full rounded-full">
                        <Link href="/contact#booking" className="gap-2">
                          Book Now
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
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
                <div className="bg-vigor-teal-500/10 rounded-xl p-5 border border-vigor-teal-500/20">
                  <div className="flex items-start gap-3">
                    <Gift className="w-5 h-5 text-vigor-teal-400 flex-shrink-0 mt-0.5" />
                    <p className="font-body text-vigor-silver-300 text-sm">
                      {promo.charity}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Button asChild size="lg" className="font-bold text-lg px-10 py-6 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                    <Link href="/contact#booking" className="gap-3">
                      Claim Your $99 Package
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
                <p className="mt-5 font-body text-sm text-vigor-silver-500 uppercase tracking-wider">
                  {promo.note}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
