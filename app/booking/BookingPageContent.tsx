'use client'

import { siteConfig } from '@/lib/constants'
import BookingWidget from './BookingWidget'

export default function BookingPageContent() {
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

      <section className="pt-10 pb-4 lg:pt-14 lg:pb-6 bg-vigor-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-vigor-silver-100">
            <h2 className="font-heading text-2xl md:text-3xl text-vigor-dark mb-6 text-center">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-vigor-orange-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <p className="text-body text-vigor-silver-700">Select one service, date, and time to book your first visit.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-vigor-orange-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <p className="text-body text-vigor-silver-700">Schedule your remaining two services at your appointment.</p>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-vigor-silver-200 text-center">
              <p className="font-heading text-xl text-vigor-silver-900">
                Total investment: <span className="text-vigor-orange-500 font-bold">$99</span> for all three services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-2 pb-8 lg:pt-4 lg:pb-12 bg-vigor-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <BookingWidget />
        </div>
      </section>
    </>
  )
}
