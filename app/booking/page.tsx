import { Metadata } from 'next'
import { FadeIn } from '@/components/motion'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Book Your Appointment',
  description: 'Schedule your wellness session at VIGOR The Wellness Spa. Book Brain Mapping, Cryo Bodysculpting, or Spa Capsule treatments online.',
}

export default function BookingPage() {
  return (
    <>
      <section className="relative pt-32 pb-8 lg:pt-40 lg:pb-12 bg-vigor-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vigor-teal-900/20 via-vigor-dark to-vigor-orange-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block font-body text-sm font-semibold text-vigor-orange-400 uppercase tracking-widest mb-4">
              Schedule Your Visit
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Book Your Appointment
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body text-vigor-silver-400 max-w-2xl mx-auto">
              Select your preferred service, date, and time below. 
              Questions? Call us at{' '}
              <a href={`tel:${siteConfig.phone}`} className="text-vigor-orange-400 hover:text-vigor-orange-300 transition-colors">
                {siteConfig.phone}
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-8 lg:py-12 bg-vigor-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-3xl shadow-soft-lg overflow-hidden border border-vigor-silver-100">
              <iframe
                src="https://vigorwellnessspa.simplybook.me/v2/"
                width="100%"
                height="800"
                frameBorder="0"
                scrolling="auto"
                className="w-full min-h-[600px] md:min-h-[800px]"
                title="Book an appointment at VIGOR The Wellness Spa"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
