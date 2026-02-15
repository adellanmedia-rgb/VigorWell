import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Brain, Snowflake, Sparkles } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import { services } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore VIGOR\'s holistic wellness services: Brain Mapping & Neuro-PT, Cryo Bodysculpting, and Delight Spa Capsule. Science-backed treatments in Las Vegas.',
}

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-10 h-10" />,
  snowflake: <Snowflake className="w-10 h-10" />,
  sparkles: <Sparkles className="w-10 h-10" />,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 bg-vigor-dark overflow-hidden">
        <Image
          src="/images/services-hero.jpg"
          alt="Premium wellness spa services"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vigor-dark/70 via-vigor-dark/80 to-vigor-dark" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block font-body text-sm font-semibold text-vigor-orange-400 uppercase tracking-widest mb-4">
              What We Offer
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Our Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body text-vigor-silver-400 max-w-2xl mx-auto">
              Cutting-edge, science-backed wellness treatments designed to optimize your 
              mind and body. Each service is tailored to your unique goals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32 bg-vigor-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="space-y-12" staggerDelay={0.2}>
            {services.map((service, index) => (
              <StaggerItem key={service.id}>
                <Link href={service.href} className="group block">
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-vigor-dark/50 to-transparent" />
                        
                        {/* Icon Badge */}
                        <div className="absolute bottom-6 left-6">
                          <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-vigor-orange-500 shadow-lg">
                            {iconMap[service.icon]}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <span className="inline-block font-body text-sm font-semibold text-vigor-orange-500 uppercase tracking-widest mb-3">
                        {service.tagline}
                      </span>
                      <h2 className="heading-section text-vigor-silver-900 mb-4 group-hover:text-vigor-orange-600 transition-colors">
                        {service.name}
                      </h2>
                      <p className="text-body text-vigor-silver-600 mb-6">
                        {service.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-2 font-body font-semibold text-vigor-orange-500 group-hover:text-vigor-orange-600 transition-colors">
                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-vigor-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="heading-section text-white mb-6">
              Not Sure Where to Start?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body text-vigor-silver-400 mb-8">
              Book a complimentary consultation and let our experts guide you to the 
              perfect treatment plan for your goals.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/booking"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
