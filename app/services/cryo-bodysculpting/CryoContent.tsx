'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Snowflake, Timer, Sparkles, Target, Shield, Clock, Zap, Heart,
  CheckCircle, ArrowRight, ChevronRight 
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import Tabs from '@/components/Tabs'
import Accordion from '@/components/Accordion'

const treatableAreas = [
  'Abdomen', 'Love Handles', 'Thighs', 'Arms', 'Glutes', 'Back'
]

const benefits = [
  { icon: <Shield className="w-5 h-5" />, text: 'Non-surgical & non-invasive — no incisions, anesthesia, or recovery time' },
  { icon: <Target className="w-5 h-5" />, text: 'Fat reduction — permanently destroys fat cells in targeted stubborn areas' },
  { icon: <Zap className="w-5 h-5" />, text: 'Muscle toning & definition — EMS deep-tones muscles, enhancing contours beyond fat loss alone' },
  { icon: <Sparkles className="w-5 h-5" />, text: 'Skin tightening & cellulite improvement — enhanced collagen and better circulation' },
  { icon: <CheckCircle className="w-5 h-5" />, text: 'Comfortable & convenient — 30–45 minute sessions with no downtime' },
  { icon: <Clock className="w-5 h-5" />, text: 'Progressive results — visible improvements often after just one session' },
]

const faqItems = [
  {
    id: '1',
    title: 'Does Cryo Bodysculpting hurt?',
    content: 'Most clients describe the experience as a cold "workout massage." The area may feel cold during the session, but the gliding wand technique means less discomfort compared to traditional fat-freezing systems. There is typically no bruising or downtime.',
  },
  {
    id: '2',
    title: 'How many sessions do I need?',
    content: 'Most providers recommend a series of sessions spaced a few days to a week apart for optimal contouring results. During your consultation, we\'ll create a customized treatment plan based on your goals.',
  },
  {
    id: '3',
    title: 'Is the fat loss permanent?',
    content: 'Yes — once fat cells are damaged by cold, they\'re gradually processed and eliminated by your lymphatic system. Fat cells do not return in the treated area. However, remaining fat cells can still expand with significant weight gain, so maintaining a healthy lifestyle is recommended.',
  },
  {
    id: '4',
    title: 'Can I treat multiple areas in one visit?',
    content: 'Yes — Glypto can target multiple areas including abdomen, love handles, thighs, arms, glutes, back and more. Customized multi-area treatment plans are common.',
  },
  {
    id: '5',
    title: 'How is Glypto different from CoolSculpting?',
    content: 'Unlike traditional fat-freezing systems that rely on static suction cups or plates, Glypto uses a handheld, gliding wand that can be moved and adapted during treatment — allowing for more precision, comfort, and simultaneous muscle stimulation. This often means less discomfort and no bruising or downtime.',
  },
  {
    id: '6',
    title: 'Am I a good candidate?',
    content: 'Cryo Bodysculpting with Glypto is particularly appealing for people seeking natural-looking results in areas resistant to diet and exercise. It\'s ideal for those near or at a healthy weight who want to refine their physique without surgery.',
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
            <h3 className="font-heading text-2xl text-vigor-silver-900 mb-4">What Is GLYPTO Cryo Bodysculpting?</h3>
            <p className="text-body text-vigor-silver-600">
              Cryo Bodysculpting with the Glypto is a non-invasive, body-contouring treatment that combines 
              advanced cryotherapy (controlled cold) and electrical muscle stimulation (EMS) to reduce stubborn 
              fat, tone muscles, tighten skin, and improve body contours — all without surgery, needles, or downtime.
            </p>
          </div>

          <div className="bg-vigor-teal-50 rounded-2xl p-8 border border-vigor-teal-100">
            <h4 className="font-heading text-xl text-vigor-silver-900 mb-6">How It Works</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-heading text-lg text-vigor-teal-600 mb-2 flex items-center gap-2">
                  <Snowflake className="w-5 h-5" />
                  Cryotherapy (Cold-Induced Fat Reduction)
                </h5>
                <p className="text-body-sm text-vigor-silver-700">
                  Targeted cooling is applied to specific areas of the body, lowering the temperature of fat cells 
                  enough to trigger apoptosis — a natural cell-death process. Once fat cells are damaged by cold, 
                  they&apos;re gradually processed and eliminated by your lymphatic system over the weeks following 
                  treatment. This results in permanent reduction of fat in the treated area (fat cells do not return).
                </p>
              </div>
              <div>
                <h5 className="font-heading text-lg text-vigor-teal-600 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  EMS (Electrical Muscle Stimulation)
                </h5>
                <p className="text-body-sm text-vigor-silver-700">
                  While cooling happens, gentle electrical impulses cause deep muscle contractions — similar to an 
                  intense workout but without exertion. This builds muscle tone and boosts metabolic activity in the treated zone.
                </p>
              </div>
              <div>
                <h5 className="font-heading text-lg text-vigor-teal-600 mb-2 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Skin and Tissue Benefits
                </h5>
                <p className="text-body-sm text-vigor-silver-700">
                  The combination of cold and muscle stimulation can also boost circulation, support lymphatic drainage, 
                  and stimulate collagen production, leading to firmer, smoother skin.
                </p>
              </div>
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
                <div className="w-10 h-10 rounded-lg bg-vigor-teal-100 flex items-center justify-center text-vigor-teal-500 flex-shrink-0">
                  {benefit.icon}
                </div>
                <span className="font-body text-vigor-silver-700">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-vigor-orange-50 to-vigor-teal-50 rounded-2xl p-8">
            <h4 className="font-heading text-xl text-vigor-silver-900 mb-4">
              Why It&apos;s Different from Traditional Cryolipolysis
            </h4>
            <p className="text-body text-vigor-silver-700">
              Unlike traditional fat-freezing systems (e.g., CoolSculpting) that rely on static suction cups or plates, 
              Glypto uses a handheld, gliding wand that can be moved and adapted during treatment — allowing for more 
              precision, comfort, and simultaneous muscle stimulation. This often means less discomfort and no bruising or downtime.
            </p>
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
            Glypto Cryo Bodysculpting is customizable for multiple areas of the body:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
            <p className="text-vigor-silver-300 mb-4">
              Particularly appealing for people seeking natural-looking results in areas resistant to diet and exercise:
            </p>
            <ul className="space-y-3">
              {[
                'Near or at a healthy weight',
                'Notice stubborn fat pockets that won\'t budge',
                'Desire improved definition without surgery',
                'Want comprehensive body-shaping — fat reduction, muscle toning, and skin tightening',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-vigor-teal-400 flex-shrink-0" />
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
          <div className="bg-vigor-teal-50 rounded-2xl p-6 border border-vigor-teal-100 mb-6">
            <p className="text-body text-vigor-silver-700">
              Sessions typically take about 45 minutes and feel like a cold &quot;workout massage.&quot; Most 
              providers recommend a series of sessions spaced a few days to a week apart for optimal contouring 
              results. After treatment you can resume normal activities immediately.
            </p>
          </div>

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
                <li>• Comfortable 30–45 minute session</li>
                <li>• Cold sensation with gliding wand technique</li>
                <li>• Simultaneous EMS muscle stimulation</li>
                <li>• Most clients find it relaxing</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-vigor-silver-100">
              <h4 className="font-heading text-lg text-vigor-silver-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-vigor-teal-100 text-vigor-teal-600 flex items-center justify-center text-sm font-bold">3</span>
                After
              </h4>
              <ul className="space-y-2 text-body-sm text-vigor-silver-600">
                <li>• No downtime — resume activities immediately</li>
                <li>• No bruising typical</li>
                <li>• Visible improvements often after one session</li>
                <li>• Best outcomes over a series of treatments</li>
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
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 bg-vigor-dark overflow-hidden">
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
                  GLYPTO Cryo Bodysculpting
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="font-body text-xl text-vigor-teal-400 mb-6">
                  Sculpt • Tone • Transform
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-body text-vigor-silver-400 mb-8 max-w-lg">
                  A comprehensive body-shaping treatment — reducing fat, enhancing muscle tone, 
                  tightening skin, and improving overall body definition without surgery or recovery time.
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
              { icon: <Snowflake className="w-6 h-6" />, label: 'Non-Invasive', desc: 'No surgery or needles' },
              { icon: <Zap className="w-6 h-6" />, label: 'Cryo + EMS', desc: 'Fat reduction & muscle toning' },
              { icon: <Target className="w-6 h-6" />, label: 'Targeted Results', desc: 'Precise body contouring' },
              { icon: <Sparkles className="w-6 h-6" />, label: 'Permanent', desc: 'Fat cells eliminated for good' },
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

      {/* Summary Section */}
      <section className="pt-2 pb-16 bg-vigor-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-body text-vigor-silver-700 text-lg leading-relaxed">
              Cryo Bodysculpting with Glypto is a comprehensive body-shaping treatment — reducing fat, 
              enhancing muscle tone, tightening skin, and improving overall body definition without surgery 
              or recovery time. It&apos;s particularly appealing for people seeking natural-looking results 
              in areas resistant to diet and exercise.
            </p>
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
                href="/booking"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-vigor-teal-600 font-body font-bold text-lg rounded-full hover:shadow-2xl transition-all"
              >
                <span>Book Your Cryo Sculpting Session</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
