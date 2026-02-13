'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Award, ShieldCheck, Star, Lock, FlaskConical } from 'lucide-react'
import { FadeIn } from './motion'
import { trustBadges } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  'badge-check': <BadgeCheck className="w-8 h-8" />,
  'award': <Award className="w-8 h-8" />,
  'shield-check': <ShieldCheck className="w-8 h-8" />,
  'star': <Star className="w-8 h-8" />,
  'lock': <Lock className="w-8 h-8" />,
  'beaker': <FlaskConical className="w-8 h-8" />,
}

export default function TrustBadges() {
  return (
    <section className="py-16 bg-vigor-silver-50 border-y border-vigor-silver-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center text-vigor-orange-500">
                  {iconMap[badge.icon]}
                </div>
                <span className="font-body text-sm font-medium text-vigor-silver-700">
                  {badge.name}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
