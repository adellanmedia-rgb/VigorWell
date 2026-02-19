'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
})

const headingReveal = (delay: number) => ({
  initial: { opacity: 0.15, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-vigor-dark">
      <Image
        src="/images/hero-wellness.jpg"
        alt="Premium wellness spa"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-vigor-dark via-vigor-dark/80 to-vigor-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-vigor-dark via-transparent to-vigor-dark/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32">
        <div className="max-w-3xl space-y-8">
          <motion.div {...fadeUp(0.2)}>
            <Badge variant="glow" className="gap-2 px-4 py-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-vigor-orange-500 animate-pulse" />
              <span className="font-body text-sm text-vigor-silver-300">
                Recover ∞ Rejuvenate ∞ Perform
              </span>
            </Badge>
          </motion.div>

          <div className="space-y-4">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tight">
              <motion.span className="inline-block" {...headingReveal(0.3)}>
                Optimize How You
              </motion.span>
              <br />
              <motion.span className="inline-block gradient-text" {...headingReveal(0.5)}>
                Look, Feel and Function
              </motion.span>
            </h1>
          </div>

          <motion.div {...fadeUp(0.7)}>
            <p className="font-body text-lg md:text-xl text-vigor-silver-300 max-w-xl leading-relaxed">
              Structured body and nervous system optimization designed for high-performing adults in Summerlin.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.9)}>
            <div className="flex flex-wrap items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild size="lg">
                  <Link href="/booking" className="gap-3">
                    <span>Book Your Session</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(1.1)}>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['/images/avatar-1_1.jpg', '/images/avatar-1_2.jpg', '/images/avatar-1_3.jpg', '/images/avatar-1_4.jpg'].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Happy client"
                      className="w-8 h-8 rounded-full object-cover border-2 border-vigor-dark"
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
                  4.8 Rating
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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
