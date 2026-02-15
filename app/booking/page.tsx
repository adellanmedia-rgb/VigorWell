import { Metadata } from 'next'
import { siteConfig } from '@/lib/constants'
import BookingWidget from './BookingWidget'

export const metadata: Metadata = {
  title: 'Book Your Appointment',
  description: 'Schedule your wellness session at VIGOR The Wellness Spa. Book Brain Mapping, Cryo Bodysculpting, or Spa Capsule treatments online.',
}

export default function BookingPage() {
  return (
    <>
      <section className="relative pt-40 pb-8 lg:pt-52 lg:pb-12 bg-vigor-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vigor-teal-900/20 via-vigor-dark to-vigor-orange-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block font-body text-sm font-semibold text-vigor-orange-400 uppercase tracking-widest mb-4">
            Schedule Your Visit
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Book Your Appointment
          </h1>
          <p className="text-body text-vigor-silver-400 max-w-2xl mx-auto">
            Select your preferred service, date, and time below.
            Questions? Call us at{' '}
            <a href={`tel:${siteConfig.phone}`} className="text-vigor-orange-400 hover:text-vigor-orange-300 transition-colors whitespace-nowrap">
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-12 bg-vigor-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <BookingWidget />
        </div>
      </section>
    </>
  )
}
