'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Snowflake, Sparkles } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './motion'
import { services } from '@/lib/constants'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-8 h-8" />,
  snowflake: <Snowflake className="w-8 h-8" />,
  sparkles: <Sparkles className="w-8 h-8" />,
}

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-vigor-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-vigor-orange-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-vigor-teal-100/50 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <FadeIn>
            <Badge className="mb-6 px-4 py-1.5 text-xs uppercase tracking-widest">
              Our Services
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-section text-vigor-silver-900 mb-6">
              Premium Outcome-Oriented Modalities
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

        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-10" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card className="group relative overflow-hidden hover:shadow-vigor-lg border border-vigor-silver-100/50">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-vigor-dark/90 via-vigor-dark/30 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-vigor-orange-500 shadow-lg group-hover:shadow-vigor transition-shadow duration-500">
                        {iconMap[service.icon]}
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-heading text-2xl text-white mb-1 drop-shadow-lg">
                        {service.name}
                      </h3>
                      <p className="font-body text-sm text-vigor-orange-300 font-medium">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <p className="text-body-sm text-vigor-silver-600 mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    
                    <Button variant="link" asChild className="px-0 font-semibold gap-2 group/btn">
                      <Link href={service.href}>
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>

                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-vigor-orange-200/60 transition-colors duration-500 pointer-events-none" />
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <div className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button variant="secondary" size="lg" asChild>
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
