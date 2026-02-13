'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Brain, Activity, Zap, Target, Users, Clock, 
  CheckCircle, ArrowRight, ChevronRight 
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import Tabs from '@/components/Tabs'
import Accordion from '@/components/Accordion'

const benefits = [
  { icon: <Target className="w-5 h-5" />, text: 'Improved focus, attention, and clarity' },
  { icon: <Activity className="w-5 h-5" />, text: 'Reduced anxiety, stress, and tension' },
  { icon: <Brain className="w-5 h-5" />, text: 'Enhanced memory and recall' },
  { icon: <Zap className="w-5 h-5" />, text: 'Faster decision making' },
  { icon: <Activity className="w-5 h-5" />, text: 'Better balance and coordination' },
  { icon: <CheckCircle className="w-5 h-5" />, text: 'Improved sleep quality' },
]

const whoCanBenefit = [
  'Athletes seeking peak performance',
  'Executives & high-performers',
  'Students with learning challenges',
  'Post-concussion & neuro-injury patients',
  'People with anxiety, ADHD, PTSD',
  'Anyone seeking enhanced cognitive performance',
]

const steps = [
  { step: 1, title: 'Assessment', desc: 'Brain Map (qEEG) — Baseline scan + personalized brain signature report' },
  { step: 2, title: 'Interpretation', desc: 'Consultation + detailed explanation of your results' },
  { step: 3, title: 'Neuro-PT Training', desc: 'Guided sessions targeting neural pathways linked to your goals' },
  { step: 4, title: 'Neurofeedback', desc: 'Iterative brain training through feedback-based sessions' },
  { step: 5, title: 'Progress Tracking', desc: 'Data-driven progress updates & recalibration plans' },
]

const faqItems = [
  {
    id: '1',
    title: 'Is Brain Mapping safe?',
    content: 'Yes, qEEG brain mapping is completely non-invasive and safe. It simply reads electrical activity on the scalp — nothing is transmitted into your brain. It\'s been used in clinical and research settings for decades.',
  },
  {
    id: '2',
    title: 'How long does a session take?',
    content: 'The initial brain mapping assessment takes approximately 45-60 minutes. Follow-up neurofeedback sessions are typically 30-45 minutes.',
  },
  {
    id: '3',
    title: 'How many sessions will I need?',
    content: 'Most clients see optimal results with 20-40 sessions, though many notice improvements within the first 10 sessions. Your personalized plan will be determined after your initial assessment.',
  },
  {
    id: '4',
    title: 'Is there any downtime?',
    content: 'None at all. You can return to your normal activities immediately after each session. Many clients schedule sessions during lunch breaks or between meetings.',
  },
]

export default function BrainMappingContent() {
  const tabContent = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h3 className="font-heading text-2xl text-vigor-silver-900 mb-4">What It Is</h3>
            <p className="text-body text-vigor-silver-600">
              Brain Mapping & Neuro-PT combines three powerful, science-backed modalities to optimize 
              your brain's performance: quantitative EEG (qEEG) brain mapping, SYMMETRY Neuro-Pathway 
              Training®, and Neurofeedback therapy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-vigor-silver-50 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-vigor-orange-100 flex items-center justify-center text-vigor-orange-500 mb-4">
                <Brain className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-lg text-vigor-silver-900 mb-2">Brain Mapping (qEEG)</h4>
              <p className="text-body-sm text-vigor-silver-600">
                A functional MRI for your brain's electrical patterns. Captures brainwave activity in real time 
                and identifies patterns of dysregulation.
              </p>
            </div>

            <div className="bg-vigor-silver-50 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-vigor-teal-100 flex items-center justify-center text-vigor-teal-500 mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-lg text-vigor-silver-900 mb-2">SYMMETRY Neuro-PT</h4>
              <p className="text-body-sm text-vigor-silver-600">
                Cutting-edge neuromuscular and neurocognitive training designed to improve brain-body 
                communication and build adaptive neuroplasticity.
              </p>
            </div>

            <div className="bg-vigor-silver-50 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-vigor-orange-100 flex items-center justify-center text-vigor-orange-500 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-lg text-vigor-silver-900 mb-2">Neurofeedback</h4>
              <p className="text-body-sm text-vigor-silver-600">
                Real-time brain training that teaches your brain to self-regulate using instant visual 
                and audio feedback. Non-invasive and drug-free.
              </p>
            </div>
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
                <div className="w-10 h-10 rounded-lg bg-vigor-orange-100 flex items-center justify-center text-vigor-orange-500">
                  {benefit.icon}
                </div>
                <span className="font-body text-vigor-silver-700">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-vigor-teal-50 to-vigor-orange-50 rounded-2xl p-8">
            <h4 className="font-heading text-xl text-vigor-silver-900 mb-4">
              Physical & Performance Enhancements
            </h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {['Increased reaction times', 'Better balance and coordination', 'Stronger motor control', 'Optimized athletic performance'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-body-sm text-vigor-silver-700">
                  <CheckCircle className="w-4 h-4 text-vigor-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'process',
      label: 'The Process',
      content: (
        <div className="space-y-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-vigor-orange-500 to-vigor-orange-600 flex items-center justify-center text-white font-heading text-xl">
                {item.step}
              </div>
              <div className="flex-1 pb-6 border-b border-vigor-silver-100 last:border-0">
                <h4 className="font-heading text-lg text-vigor-silver-900 mb-1">{item.title}</h4>
                <p className="text-body-sm text-vigor-silver-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      id: 'who',
      label: 'Who It\'s For',
      content: (
        <div className="space-y-8">
          <p className="text-body text-vigor-silver-600">
            Almost anyone with a brain can benefit — but this treatment is especially effective for:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {whoCanBenefit.map((item, index) => (
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
          src="/images/brain-mapping-hero-opt.jpg"
          alt="Brain mapping neuroscience"
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
                  Brain Mapping & Neuro-PT
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="font-body text-xl text-vigor-orange-400 mb-6">
                  Optimize Performance • Enhance Recovery • Rewire the Brain
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-body text-vigor-silver-400 mb-8 max-w-lg">
                  A cutting-edge combination of qEEG brain mapping, SYMMETRY Neuro-Pathway Training®, 
                  and Neurofeedback therapy to optimize your brain's performance.
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
              { icon: <Brain className="w-6 h-6" />, label: 'Non-Invasive', desc: 'No surgery or drugs' },
              { icon: <Clock className="w-6 h-6" />, label: 'Quick Sessions', desc: '30-45 minutes' },
              { icon: <Activity className="w-6 h-6" />, label: 'Science-Backed', desc: 'Clinically proven' },
              { icon: <Users className="w-6 h-6" />, label: 'Personalized', desc: 'Custom treatment plans' },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-soft-lg transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-vigor-orange-100 flex items-center justify-center text-vigor-orange-500 mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-br from-vigor-orange-600 to-vigor-orange-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Ready to Optimize Your Brain Performance?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step toward enhanced cognitive function, better focus, and peak mental performance.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link
                href="/contact#booking"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-vigor-orange-600 font-body font-bold text-lg rounded-full hover:shadow-2xl transition-all"
              >
                <span>Schedule Your Brain Map</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
