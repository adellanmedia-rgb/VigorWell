'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation, siteConfig } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-[36px] left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-soft py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <img
                  src="/images/real-LOGO-WEB-VIGOR-White-TAGLINE-1-05.svg"
                  alt="VIGOR The Wellness Spa"
                  className={cn(
                    'h-20 lg:h-28 w-auto transition-all duration-500 absolute inset-0',
                    isScrolled ? 'opacity-0' : 'opacity-100'
                  )}
                />
                <img
                  src="/images/LOGO-WEB-VIGOR-BLACK-TAGLINE-1-01.svg"
                  alt="VIGOR The Wellness Spa"
                  className={cn(
                    'h-20 lg:h-28 w-auto transition-all duration-500',
                    isScrolled ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 font-body text-sm font-medium rounded-lg transition-all duration-300',
                      isScrolled
                        ? 'text-vigor-silver-700 hover:text-vigor-orange-600 hover:bg-vigor-silver-100/50'
                        : 'text-white/80 hover:text-white'
                    )}
                  >
                    <span className="flex items-center gap-1">
                      {item.name}
                      {item.children && (
                        <ChevronDown className={cn(
                          'w-4 h-4 transition-transform duration-300',
                          activeDropdown === item.name && 'rotate-180'
                        )} />
                      )}
                    </span>
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white rounded-2xl shadow-soft-lg border border-vigor-silver-100 p-2 min-w-[240px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-3 rounded-xl font-body text-sm text-vigor-silver-700 hover:bg-vigor-orange-50 hover:text-vigor-orange-600 transition-all duration-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className={cn(
                  'flex items-center gap-2 font-body text-sm font-medium transition-colors',
                  isScrolled ? 'text-vigor-silver-600' : 'text-white/70',
                  'hover:text-vigor-orange-400'
                )}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{siteConfig.phone}</span>
              </a>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild>
                  <Link href="/booking">
                    Book Now
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden relative z-10 p-2 rounded-lg transition-colors',
                isScrolled ? 'hover:bg-vigor-silver-100/50' : 'hover:bg-white/10'
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={cn('w-6 h-6', isScrolled ? 'text-vigor-silver-700' : 'text-white')} />
              ) : (
                <Menu className={cn('w-6 h-6', isScrolled ? 'text-vigor-silver-700' : 'text-white')} />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-vigor-dark/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <nav className="flex-1 space-y-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.children ? (
                        <div className="space-y-2">
                          <div className="px-4 py-3 font-heading text-lg text-vigor-silver-800">
                            {item.name}
                          </div>
                          <div className="pl-4 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2.5 font-body text-sm text-vigor-silver-600 hover:text-vigor-orange-500 transition-colors"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-3 font-heading text-lg text-vigor-silver-800 hover:text-vigor-orange-500 transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="space-y-4 pt-6 border-t border-vigor-silver-200">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-3 font-body text-vigor-silver-600"
                  >
                    <Phone className="w-5 h-5" />
                    {siteConfig.phone}
                  </a>
                  <Button asChild className="w-full">
                    <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                      Book Now
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
