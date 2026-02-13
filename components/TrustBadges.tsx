'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Award, ShieldCheck, Star, Lock, FlaskConical } from 'lucide-react'
import { FadeIn } from './motion'
import { trustBadges } from '@/lib/constants'
import { Badge } from '@/components/ui/badge'

const iconMap: Record<string, React.ReactNode> = {
  'badge-check': <BadgeCheck className="w-7 h-7" />,
  'award': <Award className="w-7 h-7" />,
  'shield-check': <ShieldCheck className="w-7 h-7" />,
  'star': <Star className="w-7 h-7" />,
  'lock': <Lock className="w-7 h-7" />,
  'beaker': <FlaskConical className="w-7 h-7" />,
}

export default function TrustBadges() {
  return (
    <section className="py-16 lg:py-20 bg-vigor-silver-50 border-y border-vigor-silver-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-vigor-orange-50/30 via-transparent to-vigor-teal-50/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="flex flex-col items-center gap-3 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-soft group-hover:shadow-vigor transition-all duration-500 flex items-center justify-center text-vigor-orange-500 group-hover:text-vigor-orange-600 border border-vigor-silver-100/50 group-hover:border-vigor-orange-200">
                  {iconMap[badge.icon]}
                </div>
                <Badge variant="secondary" className="font-medium text-xs px-3 py-1 group-hover:bg-vigor-orange-50 group-hover:text-vigor-orange-700 transition-colors duration-300">
                  {badge.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
