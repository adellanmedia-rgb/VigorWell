'use client'

import { motion } from 'framer-motion'
import { Cpu, User, Award, Shield, Heart, TrendingUp } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './motion'
import { whyChooseUs } from '@/lib/constants'
import { Badge } from '@/components/ui/badge'

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu className="w-6 h-6" />,
  user: <User className="w-6 h-6" />,
  award: <Award className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  'trending-up': <TrendingUp className="w-6 h-6" />,
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-vigor-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-vigor-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-vigor-orange-500/10 rounded-full blur-3xl" />

        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <FadeIn>
            <Badge variant="glow" className="mb-6 px-4 py-1.5 text-xs uppercase tracking-widest border border-vigor-orange-400/30">
              Why VIGOR
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-section text-white mb-6">
              Why Choose Us?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body text-vigor-silver-400">
              We combine cutting-edge technology with personalized care to deliver 
              transformative wellness experiences that produce real, lasting results.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative bg-white/[0.06] backdrop-blur-md rounded-2xl p-8 border border-white/[0.08] hover:border-vigor-orange-500/40 hover:bg-white/[0.1] transition-all duration-500"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-vigor-orange-500/20 to-vigor-teal-500/20 flex items-center justify-center text-vigor-orange-400 group-hover:text-vigor-orange-300 group-hover:shadow-vigor transition-all duration-500">
                    {iconMap[item.icon]}
                  </div>
                </div>

                <h3 className="font-heading text-xl text-white mb-3 group-hover:text-vigor-orange-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-vigor-silver-400 leading-relaxed group-hover:text-vigor-silver-300 transition-colors duration-300">
                  {item.description}
                </p>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-vigor-orange-500/0 to-vigor-teal-500/0 group-hover:from-vigor-orange-500/[0.06] group-hover:to-vigor-teal-500/[0.06] transition-all duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-vigor-orange-500/0 to-transparent group-hover:via-vigor-orange-500/40 transition-all duration-500" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
