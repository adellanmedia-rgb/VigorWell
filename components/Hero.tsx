'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Snowflake, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vigor-dark">

      {/* Background — cool left, warm right */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071422] via-[#0A0A0A] to-[#160800]" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 70% at 5% 50%, rgba(90,169,230,0.14) 0%, transparent 100%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 70% at 95% 50%, rgba(232,93,4,0.16) 0%, transparent 100%)' }}
      />

      {/* Content — two-column on desktop, stacked on mobile */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 pt-28 pb-12 lg:pt-32 lg:pb-16">

        {/* LEFT: Heading + tagline + pricing */}
        <motion.div
          className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.6, 0.36, 1] }}
        >
          {/* Main heading */}
          <h1 className="font-display leading-none tracking-tight">
            <span className="block text-5xl md:text-6xl lg:text-7xl">
              <span style={{ color: '#5AA9E6' }}>HOT</span>
              <span className="text-white mx-2 lg:mx-3">+</span>
              <span className="text-vigor-orange-500">COLD</span>
            </span>
            <span className="block font-heading font-light tracking-[0.22em] uppercase text-base md:text-lg lg:text-xl text-white/70 mt-2">
              Body Sculpt Experience
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-body text-[11px] md:text-xs text-vigor-silver-500 tracking-[0.18em] uppercase">
            Freeze Fat&nbsp;&nbsp;·&nbsp;&nbsp;Sweat It Out&nbsp;&nbsp;·&nbsp;&nbsp;Sculpt Your Body
          </p>

          {/* $99 pricing block */}
          <div
            className="inline-flex flex-col items-center px-8 py-5 rounded-2xl border"
            style={{
              borderColor: 'rgba(201,168,76,0.45)',
              background: 'linear-gradient(160deg, #1e1700, #0d0b00)',
              boxShadow: '0 0 40px rgba(201,168,76,0.08)',
            }}
          >
            <span className="font-display text-5xl lg:text-6xl leading-none" style={{ color: '#f0c040' }}>$99</span>
            <span className="font-heading text-xs tracking-widest uppercase text-white/85 mt-2">
              Intro Experience
            </span>
            <span className="font-body text-[11px] text-vigor-silver-600 mt-0.5">
              Regular $425 Value
            </span>
          </div>
        </motion.div>

        {/* RIGHT: Service cards + CTA */}
        <motion.div
          className="flex flex-col items-center lg:items-start gap-4 w-full max-w-xs"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 0.6, 0.36, 1] }}
        >
          {/* Cryo card */}
          <div
            className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border"
            style={{ background: 'rgba(90,169,230,0.07)', borderColor: 'rgba(90,169,230,0.22)' }}
          >
            <Snowflake className="w-8 h-8 shrink-0" style={{ color: '#7FC8F8' }} />
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-wider" style={{ color: '#7FC8F8' }}>
                Cryo Bodysculpting
              </p>
              <p className="font-body text-xs text-vigor-silver-500 mt-0.5">
                Freeze Fat · Tighten &amp; Contour
              </p>
            </div>
          </div>

          {/* Spa Capsule card */}
          <div
            className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border"
            style={{ background: 'rgba(232,93,4,0.08)', borderColor: 'rgba(232,93,4,0.22)' }}
          >
            <Flame className="w-8 h-8 shrink-0 text-vigor-orange-400" />
            <div>
              <p className="font-heading text-sm font-bold text-vigor-orange-400 uppercase tracking-wider">
                Spa Capsule
              </p>
              <p className="font-body text-xs text-vigor-silver-500 mt-0.5">
                Detox &amp; Sweat · Boost Circulation
              </p>
            </div>
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full mt-1">
            <Button asChild size="lg" className="w-full gap-3">
              <Link href="/booking">
                <span>Book Now — $99</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

      </div>

      {/*
        ====== ORIGINAL HERO (hidden, preserved for restoration) ======
        Background: /images/hero-wellness.jpg
        Heading: "Optimize How You Look, Feel and Function"
        Body: "Structured body and nervous system optimization…"
        CTAs: Book Your Session + Explore Services
        Social proof: 500+ Happy Clients avatars, 4.8 star rating
        To restore: revert Hero.tsx to the commit before Task #7.
      */}

    </section>
  )
}
