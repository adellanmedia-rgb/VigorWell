'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { FadeIn } from './motion'
import { siteConfig } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-vigor-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-vigor-orange-100/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-vigor-teal-100/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block font-body text-sm font-semibold text-vigor-orange-500 uppercase tracking-widest mb-4">
              Ready to Transform?
            </span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="heading-section text-vigor-silver-900 mb-6">
              Begin Your Wellness Journey Today
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-body text-vigor-silver-600 mb-10 max-w-2xl mx-auto">
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
              >
                <Link
                  href="/contact#booking"
                  className="btn-primary group"
                >
                  <span>Book Your Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <span className="text-vigor-silver-400 font-body text-sm">or</span>

              <motion.a
                href={`tel:${siteConfig.phone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-vigor-silver-200 text-vigor-silver-700 font-body font-medium rounded-full hover:border-vigor-orange-300 hover:text-vigor-orange-600 transition-all duration-300 shadow-soft"
              >
                <Phone className="w-5 h-5" />
                <span>Call {siteConfig.phone}</span>
              </motion.a>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-8 font-body text-sm text-vigor-silver-500">
              {siteConfig.address.full} • Mon-Fri {siteConfig.hours.weekdays}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
