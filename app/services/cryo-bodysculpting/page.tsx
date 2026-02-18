import { Metadata } from 'next'
import CryoContent from './CryoContent'

export const metadata: Metadata = {
  title: 'Cryo Bodysculpting with Glypto® | Non-Invasive Fat Reduction',
  description: 'Sculpt your body with Glypto® Cryo Bodysculpting in Las Vegas. Non-invasive fat reduction, skin tightening, and body contouring with zero downtime.',
  keywords: [
    'cryo bodysculpting Las Vegas',
    'Glypto cryotherapy',
    'fat freezing Las Vegas',
    'body contouring',
    'non-invasive fat reduction',
    'coolsculpting alternative',
    'skin tightening',
    'love handles treatment',
    'belly fat removal',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'GLYPTO Cryo Bodysculpting',
  description: 'Non-invasive fat reduction and body contouring using advanced Glypto® cryotherapy technology. Targets stubborn fat areas with zero downtime, including skin tightening and cellulite reduction.',
  url: 'https://vigorlv.com/services/cryo-bodysculpting',
  serviceType: 'Cryotherapy Body Contouring',
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

export default function CryoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CryoContent />
    </>
  )
}
