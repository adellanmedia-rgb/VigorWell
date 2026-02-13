'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { FadeIn, TextReveal, Floating } from './motion'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-vigor-dark"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-vigor-teal-900/30 via-vigor-dark to-vigor-orange-900/20" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-vigor-teal-500/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-vigor-orange-500/20 to-transparent blur-3xl"
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-vigor-orange-500 animate-pulse" />
                <span className="font-body text-sm text-vigor-silver-300">
                  Recover ∞ Rejuvenate ∞ Perform
                </span>
              </div>
            </FadeIn>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                <TextReveal delay={0.3}>
                  Revitalize Your
                </TextReveal>
                <br />
                <span className="gradient-text">
                  <TextReveal delay={0.5}>
                    Mind and Body
                  </TextReveal>
                </span>
              </h1>
            </div>

            {/* Description */}
            <FadeIn delay={0.7}>
              <p className="font-body text-lg md:text-xl text-vigor-silver-400 max-w-lg leading-relaxed">
                Discover holistic wellness solutions for a balanced life at Las Vegas&apos;s 
                premier wellness destination.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.9}>
              <div className="flex flex-wrap items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact#booking"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-vigor-orange-600 to-vigor-orange-500 text-white font-body font-semibold rounded-full hover:shadow-vigor-lg transition-all duration-300"
                  >
                    <span>Book Your Session</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-body font-medium rounded-full hover:bg-white/5 transition-all duration-300"
                  >
                    <span>Explore Services</span>
                  </Link>
                </motion.div>
              </div>
            </FadeIn>

            {/* Trust Indicators */}
            <FadeIn delay={1.1}>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-vigor-teal-400 to-vigor-orange-400 border-2 border-vigor-dark"
                      />
                    ))}
                  </div>
                  <span className="font-body text-sm text-vigor-silver-400">
                    500+ Happy Clients
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-vigor-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="font-body text-sm text-vigor-silver-400 ml-1">
                    5.0 Rating
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Visual Element */}
          <FadeIn delay={0.5} direction="left" className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image Container */}
              <Floating duration={4} distance={15}>
                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vigor-teal-500/30 to-vigor-orange-500/30 rounded-[3rem] blur-2xl" />
                  
                  {/* Image Frame */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-[3rem] p-2 backdrop-blur-sm border border-white/10">
                    <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-vigor-silver-900">
                      <Image
                        src="/images/hero-wellness.jpg"
                        alt="Wellness therapy session"
                        fill
                        className="object-cover"
                        priority
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-vigor-dark/50 to-transparent" />
                    </div>
                  </div>

                  {/* Floating Badge 1 */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -left-8 top-1/4 glass-card-dark px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-vigor-teal-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-vigor-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-body text-xs text-vigor-silver-400">Science-Backed</p>
                        <p className="font-heading text-sm text-white">Treatments</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Badge 2 */}
                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -right-8 bottom-1/4 glass-card-dark px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-vigor-orange-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-vigor-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-body text-xs text-vigor-silver-400">Zero</p>
                        <p className="font-heading text-sm text-white">Downtime</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Floating>
            </div>
          </FadeIn>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs text-vigor-silver-500 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-vigor-silver-600 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-vigor-orange-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
