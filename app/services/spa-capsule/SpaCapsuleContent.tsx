'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Sparkles, Flame, Droplets, Vibrate, Lightbulb, Music,
  CheckCircle, ArrowRight, ChevronRight, Heart, Zap, Moon
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import Tabs from '@/components/Tabs'
import Accordion from '@/components/Accordion'

const features = [
  { icon: <Flame className="w-6 h-6" />, name: 'Infrared Heat', desc: 'Deep penetrating warmth' },
  { icon: <Droplets className="w-6 h-6" />, name: 'Detox Steam', desc: 'Purifying steam therapy' },
  { icon: <Vibrate className="w-6 h-6" />, name: 'Vibration Massage', desc: 'Circulation stimulation' },
  { icon: <Lightbulb className="w-6 h-6" />, name: 'Chromotherapy', desc: 'Mood-balancing light' },
  { icon: <Sparkles className="w-6 h-6" />, name: 'Aromatherapy', desc: 'Calming essential oils' },
  { icon: <Music className="w-6 h-6" />, name: 'Audio Relaxation', desc: 'Soothing soundscapes' },
]

const benefits = [
  { category: 'Detoxification', items: ['Release toxins through sweat', 'Support lymphatic drainage', 'Reduce water retention', 'Improve skin clarity'] },
  { category: 'Recovery & Relaxation', items: ['Relieve muscle tension', 'Improve flexibility', 'Reduce soreness', 'Promote faster recovery'] },
  { category: 'Skin & Glow', items: ['Smoother skin texture', 'Increased radiance', 'Improved hydration', 'Temporary cellulite reduction'] },
  { category: 'Wellness', items: ['Lower stress levels', 'Improve sleep quality', 'Reduce cortisol', 'Burn calories passively'] },
]

const idealFor = [
  'Busy professionals needing stress relief',
  'Athletes looking to recover faster',
  'Individuals working on weight management',
  'Anyone wanting glowing skin',
  'Clients seeking detox support',
  'People wanting a quiet reset',
]

const faqItems = [
  {
    id: '1',
    title: 'Will I feel claustrophobic?',
    content: 'The Spa Capsule is designed with your comfort in mind — your head remains outside the capsule at all times, so you can breathe normally and won\'t feel enclosed.',
  },
  {
    id: '2',
    title: 'What should I wear?',
    content: 'We recommend a swimsuit or bikini. Athletic shorts and sports bra are also fine. We provide fresh towels and disposable undergarments if requested.',
  },
  {
    id: '3',
    title: 'How often should I use the Spa Capsule?',
    content: 'For best results, we recommend 2-3 sessions per week for detox and body goals, or weekly for maintenance. It\'s also excellent for post-workout recovery.',
  },
  {
    id: '4',
    title: 'Should I eat before my session?',
    content: 'We recommend eating a light meal 1-2 hours before your session. Avoid heavy meals immediately before, and stay well hydrated. We provide electrolyte support after your session.',
  },
  {
    id: '5',
    title: 'How will I feel afterward?',
    content: 'Most clients feel lighter, deeply relaxed, and may be slightly flushed (normal and temporary). We recommend drinking electrolytes and staying hydrated after your session.',
  },
]

export default function SpaCapsuleContent() {
  const tabContent = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h3 className="font-heading text-2xl text-vigor-silver-900 mb-4">What Is the Delight Spa Capsule?</h3>
            <p className="text-body text-vigor-silver-600">
              The Delight Spa Capsule is a full-body wellness pod that combines six powerful 
              therapies in one luxurious session. Step into a private wellness experience designed 
              to relax your body, stimulate circulation, burn calories, detoxify through sweat, 
              and leave you feeling lighter, clearer, and completely renewed.
            </p>
            <p className="text-body text-vigor-silver-600 font-medium text-vigor-orange-600">
              This is not just a sauna. This is targeted infrared + steam + vibration therapy in one powerful session.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 border border-vigor-silver-100 text-center hover:shadow-soft transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vigor-orange-100 to-vigor-teal-100 flex items-center justify-center text-vigor-orange-500 mx-auto mb-3">
                  {feature.icon}
                </div>
                <h4 className="font-heading text-lg text-vigor-silver-900 mb-1">{feature.name}</h4>
                <p className="text-body-sm text-vigor-silver-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-vigor-silver-900 rounded-2xl p-8 text-white">
            <p className="text-body text-vigor-silver-300 text-center">
              Your body surrounds in therapeutic warmth while your head stays cool and outside the capsule, 
              allowing you to fully relax while your body does the work.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'benefits',
      label: 'Benefits',
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-vigor-silver-100"
              >
                <h4 className="font-heading text-lg text-vigor-silver-900 mb-4 flex items-center gap-2">
                  {index === 0 && <Droplets className="w-5 h-5 text-vigor-teal-500" />}
                  {index === 1 && <Heart className="w-5 h-5 text-vigor-orange-500" />}
                  {index === 2 && <Sparkles className="w-5 h-5 text-vigor-teal-500" />}
                  {index === 3 && <Moon className="w-5 h-5 text-vigor-orange-500" />}
                  {category.category}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-body-sm text-vigor-silver-600">
                      <CheckCircle className="w-4 h-4 text-vigor-orange-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-vigor-orange-50 to-vigor-teal-50 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center text-vigor-orange-500 flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg text-vigor-silver-900 mb-2">Calorie Burn & Metabolic Boost</h4>
                <p className="text-body-sm text-vigor-silver-600">
                  During a 30-45 minute session, your body works as if it's performing light cardio. 
                  Burns calories, supports fat metabolism, increases circulation, and encourages 
                  post-session metabolic elevation.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'expect',
      label: 'What to Expect',
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-vigor-silver-100">
              <h4 className="font-heading text-lg text-vigor-silver-900 mb-4">What to Wear</h4>
              <ul className="space-y-2 text-body-sm text-vigor-silver-600">
                <li>• Swimsuit or bikini recommended</li>
                <li>• Athletic shorts & sports bra OK</li>
                <li>• Minimal clothing for max exposure</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-vigor-silver-100">
                <p className="text-body-sm text-vigor-silver-500">
                  <span className="font-medium text-vigor-silver-700">We provide:</span> Fresh towels, 
                  disposable undergarments, private treatment space
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-vigor-silver-100">
              <h4 className="font-heading text-lg text-vigor-silver-900 mb-4">During Your Session</h4>
              <ul className="space-y-2 text-body-sm text-vigor-silver-600">
                <li>• Lie comfortably inside the capsule</li>
                <li>• Head remains outside (no claustrophobia)</li>
                <li>• Heat level customized to comfort</li>
                <li>• Session lasts 30-45 minutes</li>
                <li>• Relax, listen to music, meditate</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-vigor-silver-100">
              <h4 className="font-heading text-lg text-vigor-silver-900 mb-4">After Your Session</h4>
              <p className="text-body-sm text-vigor-silver-600 mb-3">You may feel:</p>
              <ul className="space-y-2 text-body-sm text-vigor-silver-600">
                <li>✓ Lighter and refreshed</li>
                <li>✓ Deeply relaxed and calm</li>
                <li>✓ Slightly flushed (normal)</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-vigor-silver-100">
                <p className="text-body-sm text-vigor-silver-500">
                  We provide electrolyte support to replenish minerals lost during sweat.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-vigor-teal-50 rounded-2xl p-8 border border-vigor-teal-100">
            <h4 className="font-heading text-lg text-vigor-silver-900 mb-4">Recommended Frequency</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="font-heading text-2xl text-vigor-teal-600 mb-1">2-3x</p>
                <p className="text-body-sm text-vigor-silver-600">Per week for detox & body goals</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-2xl text-vigor-teal-600 mb-1">Weekly</p>
                <p className="text-body-sm text-vigor-silver-600">For maintenance</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-2xl text-vigor-teal-600 mb-1">Post-Workout</p>
                <p className="text-body-sm text-vigor-silver-600">For optimal recovery</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'who',
      label: 'Who It\'s For',
      content: (
        <div className="space-y-8">
          <p className="text-body text-vigor-silver-600">
            The Delight Spa Capsule is perfect for anyone seeking relaxation, recovery, and rejuvenation:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {idealFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-vigor-silver-100 hover:border-vigor-orange-200 hover:shadow-soft transition-all"
              >
                <CheckCircle className="w-5 h-5 text-vigor-orange-500 flex-shrink-0" />
                <span className="font-body text-vigor-silver-700">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-vigor-silver-900 rounded-2xl p-8 text-center">
            <p className="text-body text-vigor-silver-300 italic">
              "It's passive wellness with active results."
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'faq',
      label: 'FAQ',
      content: <Accordion items={faqItems} />,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-vigor-dark overflow-hidden">
        <img
          src="/images/spa-capsule-hero-opt.jpg"
          alt="Delight Spa Capsule pods"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vigor-dark via-vigor-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-vigor-dark via-transparent to-vigor-dark/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
              <FadeIn>
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-vigor-silver-400 hover:text-vigor-orange-400 font-body text-sm mb-6 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Services
                </Link>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  Delight Spa Capsule
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="font-body text-xl text-vigor-orange-400 mb-6">
                  Detox • Recover • Recharge • Glow
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-body text-vigor-silver-400 mb-8 max-w-lg">
                  Step into a private wellness pod designed to relax your body, stimulate circulation, 
                  burn calories, detoxify through sweat, and leave you feeling completely renewed.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/booking" className="btn-primary">
                      <span>Book Your Session</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </FadeIn>
          </div>
        </div>
      </section>

      {/* Key Benefits Cards */}
      <section className="py-16 bg-vigor-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              { icon: <Flame className="w-6 h-6" />, label: '6-in-1 Therapy', desc: 'Complete wellness pod' },
              { icon: <Sparkles className="w-6 h-6" />, label: 'Deep Detox', desc: 'Infrared penetration' },
              { icon: <Heart className="w-6 h-6" />, label: 'Total Relaxation', desc: 'Stress melts away' },
              { icon: <Zap className="w-6 h-6" />, label: 'Passive Cardio', desc: 'Burn calories resting' },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-soft-lg transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-vigor-orange-100 to-vigor-teal-100 flex items-center justify-center text-vigor-orange-500 mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg text-vigor-silver-900 mb-1">{item.label}</h3>
                  <p className="font-body text-sm text-vigor-silver-500">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-20 lg:py-28 bg-vigor-silver-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <Tabs tabs={tabContent} defaultTab="overview" />
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vigor-orange-500 via-vigor-orange-600 to-vigor-teal-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Ready to Reset?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body text-white/90 mb-8 max-w-2xl mx-auto">
              Experience 30-45 minutes that can change how your body feels for days. 
              Relax deeper. Recover faster. Glow brighter.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-vigor-orange-600 font-body font-bold text-lg rounded-full hover:shadow-2xl transition-all"
              >
                <span>Book Your Spa Capsule Session</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
