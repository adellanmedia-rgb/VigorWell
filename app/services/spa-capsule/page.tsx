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

export default function SpaCapsulePage() {
  return <SpaCapsuleContent />
}
