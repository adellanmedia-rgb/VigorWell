'use client'

import { Calendar, CreditCard, ClipboardCheck, Heart } from 'lucide-react'
import { siteConfig, promo } from '@/lib/constants'
import BookingWidget from './BookingWidget'

const steps = [
  {
    icon: Calendar,
    number: '1',
    title: 'Reserve Your Spot',
    description: '$49 deposit secures your time slot during our Grand Opening Event.',
  },
  {
    icon: CreditCard,
    number: '2',
    title: 'Pay at Arrival',
    description: '$50 balance due when you arrive. That\'s $99 total — no hidden fees.',
  },
  {
    icon: ClipboardCheck,
    number: '3',
    title: 'Complete Your Sessions',
    description: 'After your first visit, schedule the remaining two services at your convenience.',
  },
]

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

      <section className="py-8 lg:py-12 bg-vigor-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="font-heading text-2xl md:text-3xl text-vigor-dark mb-1">Ready to Book?</h2>
            <p className="font-body text-vigor-silver-600 text-sm">Select your service below to get started</p>
          </div>
          <BookingWidget />
        </div>
      </section>

      <section className="relative py-12 lg:py-16 bg-vigor-dark border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-vigor-dark to-teal-950/15 pointer-events-none" />

        <svg className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 opacity-[0.06] pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 180 Q80 100 40 40 Q90 70 140 30 Q110 90 160 160 Q100 130 60 180Z" stroke="currentColor" strokeWidth="1.5" className="text-emerald-400" />
          <path d="M50 160 Q65 110 45 60" stroke="currentColor" strokeWidth="1" className="text-emerald-400" />
          <circle cx="40" cy="35" r="8" stroke="currentColor" strokeWidth="1" className="text-pink-400" />
          <circle cx="40" cy="35" r="3" fill="currentColor" className="text-pink-400" />
          <path d="M30 20 Q40 10 50 20 Q40 15 30 20Z" fill="currentColor" className="text-pink-300" opacity="0.6" />
          <path d="M25 35 Q35 25 45 35 Q35 30 25 35Z" fill="currentColor" className="text-pink-300" opacity="0.4" />
        </svg>

        <svg className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 opacity-[0.06] pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M140 20 Q120 100 160 160 Q110 130 60 170 Q90 110 40 40 Q100 70 140 20Z" stroke="currentColor" strokeWidth="1.5" className="text-emerald-400" />
          <path d="M150 40 Q135 90 155 140" stroke="currentColor" strokeWidth="1" className="text-emerald-400" />
          <circle cx="160" cy="165" r="8" stroke="currentColor" strokeWidth="1" className="text-pink-400" />
          <circle cx="160" cy="165" r="3" fill="currentColor" className="text-pink-400" />
          <path d="M150 180 Q160 170 170 180 Q160 175 150 180Z" fill="currentColor" className="text-pink-300" opacity="0.6" />
        </svg>

        <svg className="absolute top-1/2 left-4 -translate-y-1/2 w-16 h-32 opacity-[0.04] hidden lg:block pointer-events-none" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 110 Q25 80 10 60 Q25 65 30 40 Q35 65 50 60 Q35 80 30 110Z" stroke="currentColor" strokeWidth="1.5" className="text-teal-400" />
          <circle cx="30" cy="35" r="5" stroke="currentColor" strokeWidth="1" className="text-orange-400" />
          <circle cx="30" cy="35" r="2" fill="currentColor" className="text-orange-400" />
        </svg>

        <svg className="absolute top-1/2 right-4 -translate-y-1/2 w-16 h-32 opacity-[0.04] hidden lg:block pointer-events-none" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 110 Q25 80 10 60 Q25 65 30 40 Q35 65 50 60 Q35 80 30 110Z" stroke="currentColor" strokeWidth="1.5" className="text-teal-400" />
          <circle cx="30" cy="35" r="5" stroke="currentColor" strokeWidth="1" className="text-orange-400" />
          <circle cx="30" cy="35" r="2" fill="currentColor" className="text-orange-400" />
        </svg>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block font-body text-xs font-semibold text-emerald-400/70 uppercase tracking-[0.2em] mb-3">Spring Wellness Spectacular</span>
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-2">How It Works</h2>
            <p className="font-body text-vigor-silver-400">
              All 3 services for just <span className="text-white font-bold">$99</span> <span className="text-vigor-silver-300 line-through text-base font-bold">~{promo.regularPrice} value</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {steps.map((step) => (
              <div key={step.number} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-vigor-orange-500 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-body text-sm font-bold text-vigor-orange-400">{step.number}</span>
                </div>
                <h3 className="font-heading text-lg text-white mb-2">{step.title}</h3>
                <p className="font-body text-sm text-vigor-silver-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="font-body text-sm text-vigor-silver-300">{promo.charity}</span>
            </div>
            <span className="font-body text-sm text-red-400 font-bold uppercase tracking-wide">{promo.note}</span>
          </div>
        </div>
      </section>
    </>
  )
}
