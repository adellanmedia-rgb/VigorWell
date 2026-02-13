'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Snowflake, Timer, Sparkles, Target, Shield, Clock,
  CheckCircle, ArrowRight, ChevronRight 
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import Tabs from '@/components/Tabs'
import Accordion from '@/components/Accordion'

const treatableAreas = [
  'Abdomen', 'Flanks (love handles)', 'Thighs', 'Arms', 'Back', 'Bra bulge', 'Double chin'
]

const benefits = [
  { icon: <Shield className="w-5 h-5" />, text: 'Non-invasive — No incisions, no anesthesia' },
  { icon: <Timer className="w-5 h-5" />, text: 'No downtime — Resume normal activities immediately' },
  { icon: <Target className="w-5 h-5" />, text: 'Targeted fat reduction in stubborn areas' },
  { icon: <Sparkles className="w-5 h-5" />, text: 'Skin tightening & smoother contours' },
  { icon: <CheckCircle className="w-5 h-5" />, text: 'Permanent fat cell elimination' },
  { icon: <Clock className="w-5 h-5" />, text: 'Quick sessions — 30-60 minutes per area' },
]

const timeline = [
  { week: '2-3', title: 'Early Changes', desc: 'Body begins breaking down treated fat cells' },
  { week: '8-12', title: 'Best Results', desc: 'Optimal visible improvement in treated areas' },
  { week: '16', title: 'Continued Improvement', desc: 'Results may continue improving' },
]

const faqItems = [
  {
    id: '1',
    title: 'Does Cryo Bodysculpting hurt?',
    content: 'Most clients feel cold and pressure during treatment, but not pain. The area may feel numb during the session. Some temporary redness, tingling, or mild discomfort may occur afterward.',
  },
  {
    id: '2',
    title: 'How many sessions do I need?',
    content: 'Typically 1-3 sessions per area depending on your goals. During your consultation, we\'ll create a customized treatment plan for optimal results.',
  },
  {
    id: '3',
    title: 'Is the fat loss permanent?',
    content: 'Yes — treated fat cells are permanently destroyed and eliminated by your body. However, remaining fat cells can still expand with significant weight gain, so maintaining a healthy lifestyle is recommended.',
  },
  {
    id: '4',
    title: 'Can I treat multiple areas in one visit?',
    content: 'Yes — customized multi-area treatment plans are common. We can treat multiple areas in a single visit to help you achieve your body contouring goals efficiently.',
  },
  {
    id: '5',
    title: 'Am I a good candidate?',
    content: 'Cryo Bodysculpting is ideal for people near or at a healthy weight who have stubborn fat pockets that won\'t respond to diet and exercise. It\'s body sculpting, not weight loss.',
  },
]

export default function CryoContent() {
  const tabContent = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h3 className="font-heading text-2xl text-vigor-silver-900 mb-4">What Is Cryo Bodysculpting?</h3>
            <p className="text-body text-vigor-silver-600">
              Cryo Bodysculpting with the Glypto® device uses targeted cold energy to selectively treat 
              unwanted fat, tighten skin, and reveal a more sculpted, refined silhouette — without surgery, 
              needles, or downtime.
            </p>
            <p className="text-body text-vigor-silver-600">
              Unlike traditional weight loss (which shrinks fat cells), Glypto's technology crystallizes 
              and eliminates fat cells, allowing the body to naturally dispose of them over time.
            </p>
          </div>

          <div className="bg-vigor-teal-50 rounded-2xl p-8 border border-vigor-teal-100">
            <h4 className="font-heading text-xl text-vigor-silver-900 mb-4">How It Works</h4>
            <ol className="space-y-4">
              {[
                'Vacuum applicator draws tissue into the treatment area',
                'Controlled cold temperature crystallizes fat cells',
                'Fat cells are destroyed and metabolized by the lymphatic system',
                'Treated fat cells don\'t regenerate — they\'re permanently gone',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-vigor-teal-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-body-sm text-vigor-silver-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ),
    },
    {
      id: 'benefits',
      label: 'Benefits',
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-vigor-silver-100"
              >
                <div className="w-10 h-10 rounded-lg bg-vigor-teal-100 flex items-center justify-center text-vigor-teal-500">
                  {benefit.icon}
                </div>
                <span className="font-body text-vigor-silver-700">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-vigor-orange-50 to-vigor-teal-50 rounded-2xl p-8">
            <h4 className="font-heading text-xl text-vigor-silver-900 mb-4">
              Results Timeline
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {timeline.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center mx-auto mb-3">
                    <span className="font-heading text-xl text-vigor-orange-500">{item.week}</span>
                  </div>
                  <p className="font-body text-xs text-vigor-silver-500 mb-1">Weeks</p>
                  <h5 className="font-heading text-lg text-vigor-silver-900 mb-1">{item.title}</h5>
                  <p className="text-body-sm text-vigor-silver-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'areas',
      label: 'Treatment Areas',
      content: (
        <div className="space-y-8">
          <p className="text-body text-vigor-silver-600">
            Glypto® can target stubborn areas that diet and exercise can't fix:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {treatableAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 text-center border border-vigor-silver-100 hover:border-vigor-teal-200 hover:shadow-soft transition-all"
              >
                <Snowflake className="w-6 h-6 text-vigor-teal-500 mx-auto mb-2" />
                <span className="font-body text-sm text-vigor-silver-700">{area}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-vigor-silver-900 rounded-2xl p-8 text-white">
            <h4 className="font-heading text-xl mb-4">Ideal Candidates</h4>
            <ul className="space-y-3">
              {[
                'Near or at a healthy weight',
                'Notice stubborn fat pockets that won\'t budge',
                'Desire improved definition without surgery',
                'Want non-invasive body contouring',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-vigor-teal-400" />
                  <span className="text-vigor-silver-200">{item}</span>
                </li>
              ))}
            </ul>
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
              <h4 className="font-heading text-lg text-vigor-silver-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-vigor-teal-100 text-vigor-teal-600 flex items-center justify-center text-sm font-bold">1</span>
                Before
              </h4>
              <ul className="space-y-2 text-body-sm text-vigor-silver-600">
                <li>• Complimentary consultation</li>
                <li>• Customized treatment plan</li>
                <li>• No special preparation required</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-vigor-silver-100">
              <h4 className="font-heading text-lg text-vigor-silver-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-vigor-orange-100 text-vigor-orange-600 flex items-center justify-center text-sm font-bold">2</span>
                During
              </h4>
              <ul className="space-y-2 text-body-sm text-vigor-silver-600">
                <li>• Comfortable position</li>
                <li>• Cooling sensation for 30-60 mins</li>
                <li>• Relax, watch media, or rest</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-vigor-silver-100">
              <h4 className="font-heading text-lg text-vigor-silver-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-vigor-teal-100 text-vigor-teal-600 flex items-center justify-center text-sm font-bold">3</span>
                After
              </h4>
              <ul className="space-y-2 text-body-sm text-vigor-silver-600">
                <li>• No downtime — resume activities</li>
                <li>• Possible mild redness or tingling</li>
                <li>• Results develop over weeks</li>
              </ul>
            </div>
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
          src="/images/cryo-hero-opt.jpg"
          alt="Cryo bodysculpting treatment"
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
                  Cryo Bodysculpting
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="font-body text-xl text-vigor-teal-400 mb-6">
                  Sculpt • Freeze • Transform
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-body text-vigor-silver-400 mb-8 max-w-lg">
                  Ultimate body contouring that's non-invasive, science-backed, and designed 
                  for real results. Eliminate stubborn fat without surgery or downtime.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/contact#booking" className="btn-primary">
                      <span>Book Consultation</span>
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
              { icon: <Snowflake className="w-6 h-6" />, label: 'Non-Invasive', desc: 'No surgery required' },
              { icon: <Timer className="w-6 h-6" />, label: 'Zero Downtime', desc: 'Resume activities same day' },
              { icon: <Target className="w-6 h-6" />, label: 'Targeted Results', desc: 'Precise fat reduction' },
              { icon: <Sparkles className="w-6 h-6" />, label: 'Permanent', desc: 'Fat cells eliminated' },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-soft-lg transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-vigor-teal-100 flex items-center justify-center text-vigor-teal-500 mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-br from-vigor-teal-600 to-vigor-teal-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Ready to Sculpt Your Dream Body?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body text-white/90 mb-8 max-w-2xl mx-auto">
              Say goodbye to stubborn fat and hello to a more confident you. 
              Schedule your free consultation today.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link
                href="/contact#booking"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-vigor-teal-600 font-body font-bold text-lg rounded-full hover:shadow-2xl transition-all"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
