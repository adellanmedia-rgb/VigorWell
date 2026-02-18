import { Metadata } from 'next'
import BrainMappingContent from './BrainMappingContent'

export const metadata: Metadata = {
  title: 'Brain Mapping & Neuro-PT | SYMMETRY Neuro-Pathway Training®',
  description: 'Optimize brain performance with qEEG brain mapping, SYMMETRY Neuro-Pathway Training®, and Neurofeedback therapy. Non-invasive, drug-free, science-backed treatments in Las Vegas.',
  keywords: [
    'brain mapping Las Vegas',
    'qEEG therapy',
    'neurofeedback Las Vegas',
    'neuro-PT therapy',
    'SYMMETRY Neuro-Pathway Training',
    'cognitive enhancement',
    'brain performance',
    'ADHD treatment Las Vegas',
    'anxiety therapy',
    'concussion recovery',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Brain Mapping & Neuro-PT (SYMMETRY Neuro-Pathway Training®)',
  description: 'Optimize brain performance with qEEG brain mapping, SYMMETRY Neuro-Pathway Training®, and Neurofeedback therapy. Non-invasive, drug-free, science-backed treatments for focus, stress, sleep, anxiety, ADHD, and cognitive enhancement.',
  url: 'https://vigorlv.com/services/brain-mapping',
  serviceType: 'Neurofeedback Therapy',
  category: 'Health and Wellness',
  areaServed: {
    '@type': 'City',
    name: 'Las Vegas',
    address: { '@type': 'PostalAddress', addressRegion: 'NV', addressCountry: 'US' },
  },
  provider: {
    '@type': 'HealthAndBeautyBusiness',
    name: 'VIGOR The Wellness Spa',
    url: 'https://vigorlv.com',
    telephone: '844-844-6758',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10300 W Charleston Blvd, Suite 17',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89135',
      addressCountry: 'US',
    },
  },
}

export default function BrainMappingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BrainMappingContent />
    </>
  )
}
