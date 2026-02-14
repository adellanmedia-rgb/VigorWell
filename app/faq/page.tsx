import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/motion'
import Accordion from '@/components/Accordion'
import { faqs } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about VIGOR\'s wellness services including Brain Mapping, Cryo Bodysculpting, and Spa Capsule treatments.',
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-vigor-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vigor-teal-900/20 via-vigor-dark to-vigor-orange-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block font-body text-sm font-semibold text-vigor-orange-400 uppercase tracking-widest mb-4">
              Get Answers
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Frequently Asked Questions
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body text-vigor-silver-400 max-w-2xl mx-auto">
              Find answers to common questions about our services, booking, and what to expect 
              during your visit to VIGOR.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 lg:py-32 bg-vigor-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {faqs.map((category, index) => (
            <FadeIn key={category.category} delay={index * 0.1}>
              <div className={index > 0 ? "mt-16" : ""}>
                <h2 className="heading-card text-vigor-silver-900 mb-8 pb-4 border-b border-vigor-silver-200">
                  {category.category}
                </h2>
                <Accordion
                  items={category.questions.map((q, i) => ({
                    id: `${category.category}-${i}`,
                    title: q.question,
                    content: <p>{q.answer}</p>,
                  }))}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-vigor-silver-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="heading-section text-vigor-silver-900 mb-6">
              Still Have Questions?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body text-vigor-silver-600 mb-8">
              We're here to help! Contact us directly and our team will be happy to 
              answer any questions you may have.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/booking"
                className="btn-secondary"
              >
                Book a Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
