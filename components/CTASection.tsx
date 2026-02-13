'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { FadeIn } from './motion'
import { siteConfig } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-vigor-cream relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-vigor-orange-100/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-vigor-teal-100/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Badge className="mb-6 px-4 py-1.5 text-xs uppercase tracking-widest">
              Ready to Transform?
            </Badge>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-vigor-silver-900 mb-6 tracking-tight">
              Begin Your Wellness
              <span className="block gradient-text">Journey Today</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-body text-vigor-silver-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
              Take the first step toward a healthier, more balanced you. 
              Book your consultation and discover how VIGOR can help you 
              achieve your wellness goals.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button asChild size="lg" className="group text-base px-10 py-5">
                  <Link href="/contact#booking">
                    Book Your Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              <span className="text-vigor-silver-400 font-body text-sm">or</span>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button variant="secondary" asChild size="lg" className="gap-3 px-8 py-5">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-5 h-5" />
                    Call {siteConfig.phone}
                  </a>
                </Button>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-10 font-body text-sm text-vigor-silver-500">
              {siteConfig.address.full} • Mon-Fri {siteConfig.hours.weekdays}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
