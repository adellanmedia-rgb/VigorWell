'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Snowflake, Sparkles } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './motion'
import { services } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-8 h-8" />,
  snowflake: <Snowflake className="w-8 h-8" />,
  sparkles: <Sparkles className="w-8 h-8" />,
}

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-vigor-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-vigor-orange-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-vigor-teal-100/50 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <FadeIn>
            <span className="inline-block font-body text-sm font-semibold text-vigor-orange-500 uppercase tracking-widest mb-4">
              Our Services
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-section text-vigor-silver-900 mb-6">
              Holistic Healing Approach
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body text-vigor-silver-600">
              At VIGOR The Wellness Spa, we believe in a holistic approach to wellness that nurtures 
              both the body and mind. Our expert therapists provide tailored treatments designed to 
              promote relaxation and rejuvenation.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {services.map((service, index) => (
            <StaggerItem key={service.id}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vigor-dark/80 via-vigor-dark/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-vigor-orange-500 shadow-lg">
                      {iconMap[service.icon]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="heading-card text-vigor-silver-900 mb-2 group-hover:text-vigor-orange-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="font-body text-sm text-vigor-orange-500 font-medium mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-body-sm text-vigor-silver-600 mb-6">
                    {service.shortDescription}
                  </p>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-body font-semibold text-vigor-orange-500 hover:text-vigor-orange-600 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-vigor-orange-200 transition-colors pointer-events-none" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <div className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/services"
                className="btn-secondary"
              >
                View All Services
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
