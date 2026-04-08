'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Snowflake, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vigor-dark">

      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-wellness.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vigor-dark via-vigor-dark/80 to-vigor-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-vigor-dark via-transparent to-vigor-dark/30" />
      </div>

      {/* Color tints — warm orange left, cool blue right */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 70% at 5% 50%, rgba(232,93,4,0.15) 0%, transparent 100%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 70% at 95% 50%, rgba(90,169,230,0.13) 0%, transparent 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 lg:px-8 pt-28 pb-12 text-center flex flex-col items-center gap-4">

        {/* HOT + COLD heading — HOT = orange (warm), COLD = blue (cool) */}
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 0.6, 0.36, 1] }}
        >
          <h1 className="font-display leading-none tracking-tight">
            <span className="block text-5xl md:text-6xl lg:text-7xl">
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
        <motion.div
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 0.6, 0.36, 1] }}
          className="flex items-center gap-2 md:gap-4"
        >
          <span className="font-body text-[10px] md:text-xs text-white font-bold tracking-[0.1em] md:tracking-[0.18em] uppercase whitespace-nowrap">FREEZE FAT</span>
          <span className="w-px h-3 bg-white/40 shrink-0" />
          <span className="font-body text-[10px] md:text-xs text-white font-bold tracking-[0.1em] md:tracking-[0.18em] uppercase whitespace-nowrap">SWEAT IT OUT</span>
          <span className="w-px h-3 bg-white/40 shrink-0" />
          <span className="font-body text-[10px] md:text-xs text-white font-bold tracking-[0.1em] md:tracking-[0.18em] uppercase whitespace-nowrap">SCULPT YOUR BODY</span>
        </motion.div>

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
            <span className="font-display text-4xl md:text-5xl leading-none text-vigor-orange-500">$99</span>
            <span className="font-heading text-xs tracking-widest uppercase text-white/85 mt-1">
              Intro Experience
            </span>
            <span className="font-body text-[11px] text-white mt-0.5">
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
          {/* LEFT: Cryo Bodysculpting */}
          <div
            className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl border"
            style={{ background: 'rgba(90,169,230,0.07)', borderColor: 'rgba(90,169,230,0.22)' }}
          >
            <Snowflake className="w-6 h-6 shrink-0" style={{ color: '#7FC8F8' }} />
            <p className="font-heading text-[11px] md:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#7FC8F8' }}>
              Cryo Bodysculpting
            </p>
            <p className="font-body text-[11px] text-white text-center leading-snug">
              Freeze Fat<br />Tighten &amp; Contour
            </p>
          </div>

          {/* RIGHT: Spa Capsule */}
          <div
            className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl border"
            style={{ background: 'rgba(232,93,4,0.08)', borderColor: 'rgba(232,93,4,0.22)' }}
          >
            <Flame className="w-6 h-6 shrink-0 text-vigor-orange-400" />
            <p className="font-heading text-[11px] md:text-xs font-bold text-vigor-orange-400 uppercase tracking-wider text-center">
              Spa Capsule
            </p>
            <p className="font-body text-[11px] text-white text-center leading-snug">
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

    </section>
  )
}
