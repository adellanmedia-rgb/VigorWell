import { Metadata } from 'next'
import BookingPageContent from './BookingPageContent'

export const metadata: Metadata = {
  title: 'Book Your Appointment',
  description: 'Schedule your wellness session at VIGOR The Wellness Spa. Book Brain Mapping, Cryo Bodysculpting, or Spa Capsule treatments online.',
  keywords: ['book wellness appointment Las Vegas', 'schedule spa treatment', 'wellness booking online', 'brain mapping appointment', 'cryo bodysculpting booking'],
}

export default function BookingPage() {
  return <BookingPageContent />
}
