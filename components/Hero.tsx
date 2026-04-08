'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Snowflake, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vigor-dark">

      {/* Background — warm left, cool right */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#160800] via-[#0A0A0A] to-[#071422]" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 70% at 5% 50%, rgba(232,93,4,0.15) 0%, transparent 100%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 70% at 95% 50%, rgba(90,169,230,0.13) 0%, transparent 100%)' }}
      />

      {/* Content — centered single column */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 lg:px-8 pt-28 pb-12 text-center flex flex-col items-center gap-4">

        {/* HOT + COLD heading */}
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 0.6, 0.36, 1] }}
        >
          <h1 className="font-display leading-none tracking-tight">
            <span className="block text-5xl md:text-6xl lg:text-7xl">
              {/* HOT = orange (warm), COLD = blue (cool) */}
              <span className="text-vigor-orange-500">HOT</span>
              <span className="text-white mx-2 lg:mx-3">+</span>
              <span style={{ color: '#5AA9E6' }}>COLD</span>
            </span>
            <span className="block font-heading font-light tracking-[0.22em] uppercase text-base md:text-lg lg:text-xl text-white/70 mt-2">
              Body Sculpt Experience
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 0.6, 0.36, 1] }}
          className="font-body text-[11px] md:text-xs text-vigor-silver-500 tracking-[0.18em] uppercase"
        >
          FREEZE FAT. SWEAT IT OUT. SCULPT YOUR BODY.
        </motion.p>

        {/* $99 pricing badge */}
        <motion.div
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 0.6, 0.36, 1] }}
        >
          <div
            className="inline-flex flex-col items-center px-8 py-4 rounded-2xl border"
            style={{
              borderColor: 'rgba(201,168,76,0.45)',
              background: 'linear-gradient(160deg, #1e1700, #0d0b00)',
              boxShadow: '0 0 36px rgba(201,168,76,0.09)',
            }}
          >
            <span className="font-display text-4xl md:text-5xl leading-none" style={{ color: '#f0c040' }}>$99</span>
            <span className="font-heading text-xs tracking-widest uppercase text-white/85 mt-1">
              Intro Experience
            </span>
            <span className="font-body text-[11px] text-vigor-silver-600 mt-0.5">
              Regular $425 Value
            </span>
          </div>
        </motion.div>

        {/* Two service columns side by side */}
        <motion.div
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 0.6, 0.36, 1] }}
          className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-sm"
        >
          {/* LEFT: Cryo Bodysculpting — cold/blue */}
          <div
            className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl border"
            style={{ background: 'rgba(90,169,230,0.07)', borderColor: 'rgba(90,169,230,0.22)' }}
          >
            <Snowflake className="w-6 h-6 shrink-0" style={{ color: '#7FC8F8' }} />
            <p className="font-heading text-[11px] md:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#7FC8F8' }}>
              Cryo Bodysculpting
            </p>
            <p className="font-body text-[11px] text-vigor-silver-500 text-center leading-snug">
              Freeze Fat<br />Tighten &amp; Contour
            </p>
          </div>

          {/* RIGHT: Spa Capsule — hot/orange */}
          <div
            className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl border"
            style={{ background: 'rgba(232,93,4,0.08)', borderColor: 'rgba(232,93,4,0.22)' }}
          >
            <Flame className="w-6 h-6 shrink-0 text-vigor-orange-400" />
            <p className="font-heading text-[11px] md:text-xs font-bold text-vigor-orange-400 uppercase tracking-wider text-center">
              Spa Capsule
            </p>
            <p className="font-body text-[11px] text-vigor-silver-500 text-center leading-snug">
              Detox &amp; Sweat<br />Boost Circulation
            </p>
          </div>
        </motion.div>

        {/* Book Now CTA */}
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 0.6, 0.36, 1] }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button asChild size="lg" className="gap-3 px-10">
              <Link href="/booking">
                <span>Book Now — $99</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

      </div>

      {/*
        ====== ORIGINAL HERO — preserved for restoration ======

        To restore the original hero, replace everything in this file with the
        following structure (or revert to the commit before Task #7):

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

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-44">
            <div className="max-w-4xl space-y-8">

              <motion.div {...fadeUp(0.2)}>
                <Badge variant="glow" className="gap-2 px-4 py-2 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-vigor-orange-500 animate-pulse" />
                  <span className="font-body text-sm text-vigor-silver-300">
                    Recover ∞ Rejuvenate ∞ Perform
                  </span>
                </Badge>
              </motion.div>

              <div className="space-y-4">
                <h1 className="font-display text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] text-white leading-[1.05] tracking-tight">
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
                  <Button asChild size="lg">
                    <Link href="/booking" className="gap-3">
                      <span>Book Your Session</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </motion.div>

              -- Social proof row: 500+ Happy Clients avatars + 4.8 star rating --
              -- Scroll indicator at bottom of section --

            </div>
          </div>
        </section>

        Also restore these animation helpers at top of file:
          const fadeUp = (delay) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] } })
          const headingReveal = (delay) => ({ initial: { opacity: 0.15, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] } })
        And restore: import Image from 'next/image' and import { Badge } from '@/components/ui/badge'
        Avatar images: /images/avatar-1_1.jpg through avatar-1_4.jpg
      */}

    </section>
  )
}
