'use client'

import { siteConfig } from '@/lib/constants'
import BookingWidget from './BookingWidget'

export default function BookingPageContent() {
  return (
    <>
      <section className="relative pt-32 pb-4 lg:pt-40 lg:pb-6 bg-vigor-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vigor-teal-900/20 via-vigor-dark to-vigor-orange-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-3">
            Book Your Appointment
          </h1>
          <p className="text-body text-vigor-silver-400 max-w-2xl mx-auto text-sm">
            Select your preferred service, date, and time below.
            Questions? Call us at{' '}
            <a href={`tel:${siteConfig.phone}`} className="text-vigor-orange-400 hover:text-vigor-orange-300 transition-colors whitespace-nowrap">
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </section>

      <section className="pt-6 pb-0 lg:pt-8 lg:pb-0 bg-vigor-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-5 shadow-soft border border-vigor-silver-100">
            <h2 className="font-heading text-xl md:text-2xl text-vigor-dark mb-4 text-center">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-vigor-orange-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <p className="text-body text-vigor-silver-700 text-sm">Select one service, date, and time to book your first visit.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-vigor-orange-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <p className="text-body text-vigor-silver-700 text-sm">Schedule your remaining service at your appointment.</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-vigor-silver-200 text-center">
              <p className="font-heading text-xl md:text-2xl font-bold text-vigor-silver-900">
                Total investment: Only <span className="text-vigor-orange-500">$99</span> for the Intro Cold &amp; Hot Experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-2 lg:pb-3 bg-vigor-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <BookingWidget />
        </div>
      </section>

      <section className="py-4 lg:py-5 bg-vigor-cream border-t border-vigor-silver-200">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-heading text-2xl md:text-3xl font-bold text-vigor-dark mb-2">Can't find a time that works?</p>
          <p className="font-body text-vigor-silver-600 text-base md:text-lg mb-5">Call or email us and we'll get you set up.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-vigor-orange-500 text-white font-body font-semibold text-sm hover:bg-vigor-orange-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-vigor-silver-300 text-vigor-dark font-body font-semibold text-sm hover:border-vigor-orange-400 hover:text-vigor-orange-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
