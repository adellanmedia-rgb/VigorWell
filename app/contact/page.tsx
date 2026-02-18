import { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact VIGOR The Wellness Spa in Las Vegas. Book appointments, get directions, or send us a message. Located at 10300 W Charleston Blvd, Suite 17.',
  keywords: ['VIGOR wellness spa contact', 'wellness spa Summerlin', 'spa near me Las Vegas', 'Charleston Blvd wellness', 'wellness spa phone number'],
}

export default function ContactPage() {
  return <ContactContent />
}
