import { Metadata } from 'next'
import BookingPageContent from './BookingPageContent'

export const metadata: Metadata = {
  title: 'Book Your Appointment',
  description: 'Schedule your wellness session at VIGOR The Wellness Spa. Book Brain Mapping, Cryo Bodysculpting, or Spa Capsule treatments online.',
}

export default function BookingPage() {
  return <BookingPageContent />
}
