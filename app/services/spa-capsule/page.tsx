import { Metadata } from 'next'
import SpaCapsuleContent from './SpaCapsuleContent'

export const metadata: Metadata = {
  title: 'Delight Spa Capsule Experience | Infrared Detox Therapy',
  description: 'Experience the Delight Spa Capsule in Las Vegas. Infrared heat therapy, steam detox, vibrational massage, chromotherapy, and aromatherapy for total rejuvenation.',
  keywords: [
    'spa capsule Las Vegas',
    'infrared therapy',
    'detox spa treatment',
    'steam therapy',
    'chromotherapy',
    'relaxation therapy',
    'wellness pod',
    'recovery therapy Las Vegas',
    'stress relief spa',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Delight Spa Capsule Experience',
  description: 'Multi-sensory wellness pod combining infrared heat therapy, steam detox, vibrational massage, chromotherapy, and aromatherapy for deep relaxation, detoxification, pain relief, and total rejuvenation.',
  url: 'https://vigorlv.com/services/spa-capsule',
  serviceType: 'Infrared Therapy and Detox',
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

export default function SpaCapsulePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SpaCapsuleContent />
    </>
  )
}
