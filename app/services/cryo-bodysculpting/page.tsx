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

export default function CryoPage() {
  return <CryoContent />
}
