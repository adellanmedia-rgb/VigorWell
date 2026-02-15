'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, ArrowUpRight } from 'lucide-react'
import { siteConfig, services } from '@/lib/constants'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-vigor-dark text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-vigor-teal-900/20 via-transparent to-vigor-orange-900/20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/images/real-LOGO-WEB-VIGOR-White-TAGLINE-1-05.svg"
                alt="VIGOR The Wellness Spa"
                className="h-20 w-auto"
              />
            </Link>
            <p className="font-body text-vigor-silver-400 text-sm leading-relaxed">
              Experience holistic wellness solutions for a balanced life. 
              We nurture both body and mind with cutting-edge treatments 
              designed for real results.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vigor-orange-500 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vigor-orange-500 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="font-heading text-2xl text-white font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 font-body text-sm text-vigor-silver-400 hover:text-vigor-orange-400 transition-colors duration-300"
                  >
                    <span>{service.shortName}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="font-heading text-2xl text-white font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Contact', href: '/contact' },
                { name: 'Book Appointment', href: '/booking' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 font-body text-sm text-vigor-silver-400 hover:text-vigor-orange-400 transition-colors duration-300"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="font-heading text-2xl text-white font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-body text-sm text-vigor-silver-400 hover:text-vigor-orange-400 transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-vigor-orange-500" />
                  <span>
                    {siteConfig.address.street}<br />
                    {siteConfig.address.suite}<br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 font-body text-sm text-vigor-silver-400 hover:text-vigor-orange-400 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-vigor-orange-500" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 font-body text-sm text-vigor-silver-400 hover:text-vigor-orange-400 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-vigor-orange-500" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-vigor-silver-400">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-vigor-orange-500" />
                <span>
                  Mon - Fri: {siteConfig.hours.weekdays}<br />
                  Sat: {siteConfig.hours.saturday}<br />
                  Sun: {siteConfig.hours.sunday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="bg-white/10" />
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="font-body text-xs text-vigor-silver-500">
              © {currentYear} VIGOR The Wellness Spa. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="font-body text-xs text-vigor-silver-500 hover:text-vigor-orange-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-body text-xs text-vigor-silver-500 hover:text-vigor-orange-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
