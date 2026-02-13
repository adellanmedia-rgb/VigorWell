'use client'

import { motion } from 'framer-motion'
import { Cpu, User, Award, Shield, Heart, TrendingUp } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './motion'
import { whyChooseUs } from '@/lib/constants'

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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-vigor-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-vigor-orange-500/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <FadeIn>
            <span className="inline-block font-body text-sm font-semibold text-vigor-orange-400 uppercase tracking-widest mb-4">
              Why VIGOR
            </span>
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

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
          {whyChooseUs.map((item, index) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-vigor-orange-500/30 hover:bg-white/10 transition-all duration-500"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-vigor-orange-500/20 to-vigor-teal-500/20 flex items-center justify-center text-vigor-orange-400 group-hover:text-vigor-orange-300 transition-colors">
                    {iconMap[item.icon]}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl text-white mb-3 group-hover:text-vigor-orange-300 transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-vigor-silver-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-vigor-orange-500/0 to-vigor-teal-500/0 group-hover:from-vigor-orange-500/5 group-hover:to-vigor-teal-500/5 transition-all duration-500 pointer-events-none" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
