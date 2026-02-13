import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Target, Users, Award } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about VIGOR The Wellness Spa - Las Vegas\'s premier destination for holistic wellness. Our mission, values, and commitment to your wellbeing.',
}

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Holistic Care',
    description: 'We treat the whole person — mind and body — with integrated wellness solutions that work in harmony.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Results-Driven',
    description: 'Every treatment is backed by science and designed to deliver measurable, lasting results you can see and feel.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Personalized Approach',
    description: 'No two bodies are alike. We create customized treatment plans tailored to your unique goals and needs.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Excellence',
    description: 'From our state-of-the-art equipment to our certified practitioners, we maintain the highest standards in everything we do.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-vigor-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vigor-teal-900/20 via-vigor-dark to-vigor-orange-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <span className="inline-block font-body text-sm font-semibold text-vigor-orange-400 uppercase tracking-widest mb-4">
                  Our Story
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                  About VIGOR
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-body text-vigor-silver-400 mb-6">
                  VIGOR The Wellness Spa was founded with a simple yet powerful vision: to bring 
                  cutting-edge, science-backed wellness treatments to Las Vegas in a luxurious, 
                  welcoming environment.
                </p>
                <p className="text-body text-vigor-silver-400">
                  We believe that true wellness encompasses both mind and body. That's why we've 
                  carefully curated a selection of transformative treatments that address cognitive 
                  performance, physical wellness, and deep relaxation.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} direction="left" className="hidden lg:block">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-vigor-teal-500/20 to-vigor-orange-500/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white/5 rounded-3xl p-2 border border-white/10">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-vigor-silver-900">
                    <Image
                      src="/images/about-hero.jpg"
                      alt="VIGOR Wellness Spa Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 bg-vigor-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <span className="inline-block font-body text-sm font-semibold text-vigor-orange-500 uppercase tracking-widest mb-4">
                Our Mission
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-section text-vigor-silver-900 mb-8">
                Recover. Rejuvenate. Perform.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-vigor-silver-600 text-lg leading-relaxed">
                Our mission is to empower every client to achieve their optimal state of wellness. 
                Whether you're seeking to enhance cognitive performance, sculpt your body, or simply 
                find a moment of peace in your busy life, VIGOR provides the tools, technology, and 
                expertise to help you reach your goals.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-vigor-silver-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="inline-block font-body text-sm font-semibold text-vigor-orange-500 uppercase tracking-widest mb-4">
                What We Stand For
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-section text-vigor-silver-900">
                Our Values
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow h-full">
                  <div className="w-14 h-14 rounded-xl bg-vigor-orange-100 flex items-center justify-center text-vigor-orange-500 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-xl text-vigor-silver-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-body-sm text-vigor-silver-600">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Las Vegas */}
      <section className="py-24 lg:py-32 bg-vigor-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <span className="inline-block font-body text-sm font-semibold text-vigor-orange-400 uppercase tracking-widest mb-4">
                  Our Location
                </span>
                <h2 className="heading-section text-white mb-6">
                  Wellness in the Heart of Las Vegas
                </h2>
                <p className="text-body text-vigor-silver-400 mb-6">
                  Located in the vibrant West Charleston area, VIGOR provides a peaceful retreat 
                  from the energy of Las Vegas. Our spa is designed to be your sanctuary — a place 
                  where you can disconnect from the outside world and focus entirely on your wellbeing.
                </p>
                <p className="text-body text-vigor-silver-400 mb-8">
                  Whether you're a local resident seeking regular wellness maintenance or a visitor 
                  looking to recharge during your stay, VIGOR welcomes you with open arms and 
                  world-class care.
                </p>
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span>Visit Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="relative aspect-video rounded-3xl overflow-hidden">
                <Image
                  src="/images/spa-interior.jpg"
                  alt="VIGOR Spa Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-vigor-orange-600 to-vigor-orange-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Ready to Experience VIGOR?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body text-white/90 mb-8">
              Join our community of wellness enthusiasts and discover what VIGOR can do for you.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/contact#booking"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-vigor-orange-600 font-body font-bold text-lg rounded-full hover:shadow-2xl transition-all"
            >
              <span>Book Your First Session</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
