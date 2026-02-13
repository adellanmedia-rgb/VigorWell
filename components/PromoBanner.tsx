'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Calendar, Clock, Gift, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { FadeIn, StaggerContainer, StaggerItem } from './motion'
import { promo } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vigor-orange-600 via-vigor-orange-500 to-vigor-teal-500">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px',
          }}
        />

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-vigor-teal-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
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
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 font-body">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{promo.dates}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{promo.time}</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-10">
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="font-body text-white/80 text-lg mb-2">Get All 3 Services</p>
                  <div className="flex items-center justify-center gap-4">
                    <span className="font-display text-6xl md:text-7xl text-white">$99</span>
                    <div className="text-left">
                      <p className="font-body text-white/60 line-through text-lg">{promo.regularPrice} Value</p>
                      <p className="font-body text-vigor-teal-200 font-semibold">Save over 80%</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-10" staggerDelay={0.1}>
                {promo.services.map((service) => (
                  <StaggerItem key={service.name}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="bg-white/10 rounded-2xl p-6 text-center border border-white/10 hover:border-white/30 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                    >
                      <h4 className="font-heading text-xl text-white mb-2">{service.name}</h4>
                      <p className="font-body text-sm text-white/70 mb-4">{service.tagline}</p>
                      <Button asChild size="sm" className="bg-white text-vigor-orange-600 hover:bg-white/90 hover:shadow-lg rounded-full">
                        <Link href="/contact#booking">
                          Book Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <p className="font-body text-white/80 text-sm">
                    <span className="text-white font-semibold">${promo.deposit} deposit</span> to secure your appointment
                  </p>
                  <p className="font-body text-white/80 text-sm mt-1">
                    <span className="text-white font-semibold">${promo.balanceDue} balance</span> due at visit
                  </p>
                </div>
                <div className="bg-vigor-teal-500/20 rounded-xl p-5 border border-vigor-teal-400/30">
                  <div className="flex items-start gap-3">
                    <Gift className="w-5 h-5 text-vigor-teal-300 flex-shrink-0 mt-0.5" />
                    <p className="font-body text-white/90 text-sm">
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
                  <Button asChild size="lg" className="bg-white text-vigor-orange-600 hover:bg-white/90 hover:shadow-2xl font-bold text-lg px-10 py-5 rounded-full">
                    <Link href="/contact#booking">
                      Claim Your $99 Package
                      <ArrowRight className="w-5 h-5 ml-3" />
                    </Link>
                  </Button>
                </motion.div>
                <p className="mt-4 font-body text-sm text-white/70 uppercase tracking-wider">
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
