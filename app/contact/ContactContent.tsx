'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { FadeIn } from '@/components/motion'
import { siteConfig } from '@/lib/constants'

export default function ContactContent() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormStatus('success')
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setFormStatus('idle')
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-vigor-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vigor-teal-900/20 via-vigor-dark to-vigor-orange-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block font-body text-sm font-semibold text-vigor-orange-400 uppercase tracking-widest mb-4">
              Get In Touch
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Contact Us
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body text-vigor-silver-400 max-w-2xl mx-auto">
              Ready to start your wellness journey? Reach out to book an appointment 
              or ask us any questions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 lg:py-32 bg-vigor-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <FadeIn>
              <div>
                <h2 className="heading-card text-vigor-silver-900 mb-8">
                  Visit Our Spa
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-vigor-orange-100 flex items-center justify-center text-vigor-orange-500 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-vigor-silver-900 mb-1">Address</h3>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-sm text-vigor-silver-600 hover:text-vigor-orange-500 transition-colors"
                      >
                        {siteConfig.address.street}<br />
                        {siteConfig.address.suite}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-vigor-teal-100 flex items-center justify-center text-vigor-teal-500 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-vigor-silver-900 mb-1">Phone</h3>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-body-sm text-vigor-silver-600 hover:text-vigor-orange-500 transition-colors"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-vigor-orange-100 flex items-center justify-center text-vigor-orange-500 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-vigor-silver-900 mb-1">Email</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-body-sm text-vigor-silver-600 hover:text-vigor-orange-500 transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-vigor-teal-100 flex items-center justify-center text-vigor-teal-500 flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-vigor-silver-900 mb-1">Business Hours</h3>
                      <div className="text-body-sm text-vigor-silver-600 space-y-1">
                        <p>Monday - Friday: {siteConfig.hours.weekdays}</p>
                        <p>Saturday: {siteConfig.hours.saturday}</p>
                        <p>Sunday: {siteConfig.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Embed Placeholder */}
                <div className="mt-10 aspect-video bg-vigor-silver-200 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.8!2d-115.36!3d36.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA5JzM2LjAiTiAxMTXCsDIxJzM2LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VIGOR The Wellness Spa Location"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-soft-lg">
                <h2 className="heading-card text-vigor-silver-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-body-sm text-vigor-silver-500 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-vigor-silver-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-vigor-silver-200 font-body text-vigor-silver-800 placeholder:text-vigor-silver-400 focus:outline-none focus:border-vigor-orange-400 focus:ring-2 focus:ring-vigor-orange-100 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block font-body text-sm font-medium text-vigor-silver-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-vigor-silver-200 font-body text-vigor-silver-800 placeholder:text-vigor-silver-400 focus:outline-none focus:border-vigor-orange-400 focus:ring-2 focus:ring-vigor-orange-100 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-body text-sm font-medium text-vigor-silver-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-vigor-silver-200 font-body text-vigor-silver-800 placeholder:text-vigor-silver-400 focus:outline-none focus:border-vigor-orange-400 focus:ring-2 focus:ring-vigor-orange-100 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block font-body text-sm font-medium text-vigor-silver-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-vigor-silver-200 font-body text-vigor-silver-800 focus:outline-none focus:border-vigor-orange-400 focus:ring-2 focus:ring-vigor-orange-100 transition-all"
                    >
                      <option value="">Select a service...</option>
                      <option value="brain-mapping">Brain Mapping & Neuro-PT</option>
                      <option value="cryo">Cryo Bodysculpting</option>
                      <option value="spa-capsule">Spa Capsule Experience</option>
                      <option value="spring-promo">Spring Wellness Spectacular ($99)</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-medium text-vigor-silver-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-vigor-silver-200 font-body text-vigor-silver-800 placeholder:text-vigor-silver-400 focus:outline-none focus:border-vigor-orange-400 focus:ring-2 focus:ring-vigor-orange-100 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    whileHover={{ scale: formStatus === 'idle' ? 1.02 : 1 }}
                    whileTap={{ scale: formStatus === 'idle' ? 0.98 : 1 }}
                    className={`w-full py-4 rounded-xl font-body font-semibold text-white flex items-center justify-center gap-2 transition-all ${
                      formStatus === 'success'
                        ? 'bg-green-500'
                        : 'bg-gradient-to-r from-vigor-orange-600 to-vigor-orange-500 hover:shadow-vigor'
                    }`}
                  >
                    {formStatus === 'idle' && (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                    {formStatus === 'submitting' && (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    )}
                    {formStatus === 'success' && (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 lg:py-32 bg-vigor-dark scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <FadeIn>
              <span className="inline-block font-body text-sm font-semibold text-vigor-orange-400 uppercase tracking-widest mb-4">
                Book Online
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-section text-white mb-4">
                Schedule Your Appointment
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-vigor-silver-400 max-w-2xl mx-auto">
                Choose your preferred service and time slot below. 
                Appointments are required — no walk-ins.
              </p>
            </FadeIn>
          </div>

          {/* SimplyBook.me Embed Placeholder */}
          <FadeIn delay={0.3}>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 min-h-[600px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-body text-vigor-silver-500 mb-4">
                  SimplyBook.me booking widget will be embedded here
                </p>
                <p className="text-body-sm text-vigor-silver-400">
                  Replace this placeholder with your SimplyBook.me embed code
                </p>
                {/* 
                  To add your SimplyBook.me widget, replace this div content with:
                  
                  <script src="//simplybook.me/v2/widget/widget.js"></script>
                  <script>
                    var widget = new SimplybookWidget({
                      "widget_type": "iframe",
                      "url": "https://YOUR-COMPANY.simplybook.me",
                      "theme": "belle",
                      "theme_settings": {
                        "sb_base_color": "#E85D04",
                        "body_bg_color": "#ffffff"
                      }
                    });
                  </script>
                */}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
