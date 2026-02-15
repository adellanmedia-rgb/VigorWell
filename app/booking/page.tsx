import { Metadata } from 'next'
import { Calendar, CreditCard, ClipboardCheck, Heart } from 'lucide-react'
import { siteConfig, promo } from '@/lib/constants'
import BookingWidget from './BookingWidget'

export const metadata: Metadata = {
  title: 'Book Your Appointment',
  description: 'Schedule your wellness session at VIGOR The Wellness Spa. Book Brain Mapping, Cryo Bodysculpting, or Spa Capsule treatments online.',
}

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

      <section className="py-12 lg:py-16 bg-vigor-dark border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-2">How It Works</h2>
            <p className="font-body text-vigor-silver-400">
              All 3 services for just <span className="text-white font-bold">$99</span> <span className="text-vigor-silver-500 line-through text-sm">~{promo.regularPrice} value</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {steps.map((step) => (
              <div key={step.number} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
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

      <section className="py-8 lg:py-12 bg-vigor-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <BookingWidget />
        </div>
      </section>
    </>
  )
}
