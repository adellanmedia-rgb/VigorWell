export const siteConfig = {
  name: 'VIGOR The Wellness Spa',
  tagline: 'Recover ∞ Rejuvenate ∞ Perform',
  description: 'Experience holistic wellness solutions for a balanced life.',
  url: 'https://vigorlv.com',
  email: 'info@vigorlv.com',
  phone: '844-844-6758',
  phoneDisplay: '844-VIGOR-LV (844-844-6758)',
  address: {
    street: '10300 W Charleston Blvd',
    suite: 'Suite 17',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89135',
    full: '10300 W Charleston Blvd, Suite 17, Las Vegas, NV 89135',
  },
  hours: {
    weekdays: '9:00 AM - 5:00 PM',
    saturday: 'By Appointment',
    sunday: 'Closed',
  },
  social: {
    facebook: 'https://facebook.com/vigorwellnesslv',
    instagram: 'https://instagram.com/vigorwellnesslv',
  },
}

export const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    children: [
      { name: 'Brain Mapping & Neuro-PT', href: '/services/brain-mapping' },
      { name: 'Cryo Bodysculpting', href: '/services/cryo-bodysculpting' },
      { name: 'Spa Capsule Experience', href: '/services/spa-capsule' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export const promo = {
  title: 'Spring Wellness Spectacular',
  subtitle: 'Grand Opening Event — Summerlin Specialty Wellness Studio',
  dates: 'March 5th – 7th',
  daysOnly: '3 DAYS ONLY',
  time: '10:00 AM – 4:00 PM',
  offer: 'All 3 Services for Just $99',
  regularPrice: '$580',
  deposit: '49',
  balanceDue: '50',
  charity: '15% of this event\'s proceeds will go to Bonner Elementary School',
  note: 'NO WALK-INS • APPOINTMENTS ONLY',
  limitedSlots: 'Limited Slots Available',
  preRegistration: 'Pre-registration Required',
  services: [
    {
      name: 'Cryo Bodysculpting',
      tagline: 'Freeze away stubborn fat',
    },
    {
      name: 'Spa Capsule',
      tagline: 'Detox & skin softening',
    },
    {
      name: 'Brain Mapping',
      tagline: 'Enhance cognitive function',
    },
  ],
  howItWorks: {
    intro: 'We are officially opening our new Summerlin specialty wellness studio — an intimate, high-performance space focused on three powerful services: GLYPTO Cryo Bodysculpting, Delight Spa Capsules (2 sessions), and Brain Mapping / Neuro-PT.',
    eventDetails: 'To celebrate our launch, we\'re offering all three services for just $99 total during our Grand Opening Event.',
    steps: [
      'Reserve your time slot with a $49 deposit.',
      'Pay the remaining $50 when you arrive.',
      'After completing your first session, you\'ll schedule the remaining two services.',
    ],
    noHiddenFees: 'No hidden fees. Just $99 total for all three services — a package normally valued at approximately $580.',
    donation: '15% of this event\'s proceeds will go to Bonner Elementary School.',
  },
}

export const services = [
  {
    id: 'brain-mapping',
    name: 'Brain Mapping & Neuro-PT',
    shortName: 'Brain Mapping',
    tagline: 'Optimize Performance • Enhance Recovery • Rewire the Brain',
    shortDescription: 'A cutting-edge combination of qEEG brain mapping, SYMMETRY Neuro-Pathway Training®, and Neurofeedback therapy to optimize your brain\'s performance.',
    icon: 'brain',
    image: '/images/brain-mapping.jpg',
    href: '/services/brain-mapping',
  },
  {
    id: 'cryo-bodysculpting',
    name: 'Cryo Bodysculpting',
    shortName: 'Cryo Sculpting',
    tagline: 'Sculpt • Freeze • Transform',
    shortDescription: 'Non-invasive body contouring using Glypto® technology to eliminate stubborn fat and tighten skin without surgery or downtime.',
    icon: 'snowflake',
    image: '/images/cryo-bodysculpting.jpg',
    href: '/services/cryo-bodysculpting',
  },
  {
    id: 'spa-capsule',
    name: 'Delight Spa Capsule',
    shortName: 'Spa Capsule',
    tagline: 'Detox • Recover • Recharge • Glow',
    shortDescription: 'A full-body wellness pod combining infrared heat, steam, vibration therapy, chromotherapy, and aromatherapy for total rejuvenation.',
    icon: 'sparkles',
    image: '/images/spa-capsule.jpg',
    href: '/services/spa-capsule',
  },
]

export const whyChooseUs = [
  {
    title: 'Cutting-Edge Technology',
    description: 'We use only the most advanced, science-backed equipment including Glypto® cryo technology, medical-grade brain mapping systems, and luxury Delight spa capsules.',
    icon: 'cpu',
  },
  {
    title: 'Personalized Approach',
    description: 'Every treatment plan is tailored to your unique goals. From your initial brain performance blueprint to customized body contouring plans, your journey is uniquely yours.',
    icon: 'user',
  },
  {
    title: 'Expert Practitioners',
    description: 'Our certified therapists are trained in the latest wellness techniques, ensuring safe, effective treatments that deliver real, measurable results.',
    icon: 'award',
  },
  {
    title: 'Non-Invasive Solutions',
    description: 'All our treatments are non-surgical, drug-free, and require zero downtime. Return to your normal activities immediately after each session.',
    icon: 'shield',
  },
  {
    title: 'Holistic Wellness',
    description: 'We treat the whole person — mind and body. Our integrated approach addresses cognitive performance, physical wellness, and relaxation in harmony.',
    icon: 'heart',
  },
  {
    title: 'Proven Results',
    description: 'Our treatments are backed by clinical research and real client outcomes. See measurable improvements in focus, body contour, energy, and overall wellbeing.',
    icon: 'trending-up',
  },
]

export const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Las Vegas, NV',
    rating: 5,
    text: 'The Brain Mapping session was eye-opening! I finally understand why I\'ve been struggling with focus. After just a few neurofeedback sessions, I\'m already noticing improvements in my concentration and sleep quality.',
    service: 'Brain Mapping & Neuro-PT',
    date: 'January 2026',
  },
  {
    id: 2,
    name: 'Michael R.',
    location: 'Henderson, NV',
    rating: 5,
    text: 'I was skeptical about Cryo Bodysculpting, but the results speak for themselves. My love handles that wouldn\'t budge with diet and exercise are finally gone. The staff was professional and made me feel comfortable throughout.',
    service: 'Cryo Bodysculpting',
    date: 'December 2025',
  },
  {
    id: 3,
    name: 'Jennifer L.',
    location: 'Summerlin, NV',
    rating: 5,
    text: 'The Spa Capsule is my weekly reset! I leave feeling lighter, my skin glows, and my stress just melts away. It\'s like a cardio workout without moving — and the chromotherapy is so relaxing.',
    service: 'Spa Capsule Experience',
    date: 'February 2026',
  },
  {
    id: 4,
    name: 'David K.',
    location: 'Las Vegas, NV',
    rating: 5,
    text: 'As an executive with a demanding schedule, I needed something to help me perform at my best. The combination of neurofeedback and the spa capsule has transformed my energy levels and mental clarity.',
    service: 'Multiple Services',
    date: 'January 2026',
  },
]

export const trustBadges = [
  { name: 'Satisfaction Guaranteed', icon: 'star' },
  { name: 'Science-Backed', icon: 'beaker' },
]

export const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What should I wear to my appointment?',
        answer: 'For Brain Mapping, wear comfortable clothing and avoid heavy hair products. For Cryo Bodysculpting, we\'ll provide appropriate coverings. For the Spa Capsule, bring a swimsuit or wear the disposable undergarments we provide.',
      },
      {
        question: 'How do I book an appointment?',
        answer: 'You can book online through our website using the Book Now button, call us at 844-844-6758, or email info@vigorlv.com. We require appointments for all services — no walk-ins.',
      },
      {
        question: 'Do you accept insurance?',
        answer: 'Our services are considered wellness/elective treatments and are not typically covered by insurance. However, you may be able to use HSA/FSA funds. We recommend checking with your provider.',
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'We require 24-hour notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee.',
      },
    ],
  },
  {
    category: 'Brain Mapping & Neuro-PT',
    questions: [
      {
        question: 'Is Brain Mapping safe?',
        answer: 'Yes, qEEG brain mapping is completely non-invasive and safe. It simply reads electrical activity on the scalp — nothing is transmitted into your brain. It\'s been used in clinical and research settings for decades.',
      },
      {
        question: 'How long does a Brain Mapping session take?',
        answer: 'The initial brain mapping assessment takes approximately 45-60 minutes. Follow-up neurofeedback sessions are typically 30-45 minutes.',
      },
      {
        question: 'How many neurofeedback sessions will I need?',
        answer: 'Most clients see optimal results with 20-40 sessions, though many notice improvements within the first 10 sessions. Your personalized plan will be determined after your initial assessment.',
      },
    ],
  },
  {
    category: 'Cryo Bodysculpting',
    questions: [
      {
        question: 'Does Cryo Bodysculpting hurt?',
        answer: 'Most clients feel cold and pressure during treatment, but not pain. The area may feel numb during the session. Some temporary redness, tingling, or mild discomfort may occur afterward.',
      },
      {
        question: 'When will I see results?',
        answer: 'Early changes appear around 2-3 weeks as your body begins eliminating the treated fat cells. Best results are typically visible at 8-12 weeks, with continued improvement up to 16 weeks.',
      },
      {
        question: 'Is the fat loss permanent?',
        answer: 'Yes — treated fat cells are permanently destroyed and eliminated by your body. However, remaining fat cells can still expand with significant weight gain, so maintaining a healthy lifestyle is recommended.',
      },
    ],
  },
  {
    category: 'Spa Capsule Experience',
    questions: [
      {
        question: 'Will I feel claustrophobic?',
        answer: 'The Spa Capsule is designed with your comfort in mind — your head remains outside the capsule at all times, so you can breathe normally and won\'t feel enclosed.',
      },
      {
        question: 'How often should I use the Spa Capsule?',
        answer: 'For best results, we recommend 2-3 sessions per week for detox and body goals, or weekly for maintenance. It\'s also excellent for post-workout recovery.',
      },
      {
        question: 'Should I eat before my session?',
        answer: 'We recommend eating a light meal 1-2 hours before your session. Avoid heavy meals immediately before, and stay well hydrated. We provide electrolyte support after your session.',
      },
    ],
  },
]
