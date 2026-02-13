'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { FadeIn } from './motion'
import { reviews } from '@/lib/constants'

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-24 lg:py-32 bg-vigor-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-vigor-orange-100/30 via-transparent to-vigor-teal-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block font-body text-sm font-semibold text-vigor-orange-500 uppercase tracking-widest mb-4">
              Testimonials
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-section text-vigor-silver-900 mb-6">
              What Our Clients Say
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body text-vigor-silver-600">
              Real experiences from real clients who have transformed their 
              wellness journey with VIGOR.
            </p>
          </FadeIn>
        </div>

        {/* Reviews Carousel */}
        <FadeIn delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 lg:left-12 z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-vigor-orange-500 to-vigor-orange-600 flex items-center justify-center shadow-vigor">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Review Card */}
              <div className="bg-white rounded-3xl shadow-soft-lg p-8 lg:p-12 pt-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-vigor-orange-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <blockquote className="font-heading text-2xl lg:text-3xl text-vigor-silver-800 leading-relaxed mb-8">
                      &ldquo;{reviews[currentIndex].text}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-body font-semibold text-vigor-silver-900">
                          {reviews[currentIndex].name}
                        </p>
                        <p className="font-body text-sm text-vigor-silver-500">
                          {reviews[currentIndex].location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-body text-sm font-medium text-vigor-orange-500">
                          {reviews[currentIndex].service}
                        </p>
                        <p className="font-body text-xs text-vigor-silver-400">
                          {reviews[currentIndex].date}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-10 pt-8 border-t border-vigor-silver-100">
                  <div className="flex items-center gap-2">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'w-8 bg-vigor-orange-500'
                            : 'bg-vigor-silver-200 hover:bg-vigor-silver-300'
                        }`}
                        aria-label={`Go to review ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={prev}
                      className="w-12 h-12 rounded-full border border-vigor-silver-200 flex items-center justify-center text-vigor-silver-600 hover:border-vigor-orange-300 hover:text-vigor-orange-500 transition-colors"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={next}
                      className="w-12 h-12 rounded-full bg-vigor-orange-500 flex items-center justify-center text-white hover:bg-vigor-orange-600 transition-colors"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
