import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Raleway } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PromoTicker from '@/components/PromoTicker'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vigorlv.com'),
  title: {
    default: 'VIGOR The Wellness Spa | Las Vegas Premier Wellness Center',
    template: '%s | VIGOR The Wellness Spa',
  },
  description: 'Experience holistic wellness at VIGOR The Wellness Spa in Las Vegas. Offering Brain Mapping & Neuro-PT, Cryo Bodysculpting, and Delight Spa Capsule treatments. Recover. Rejuvenate. Perform.',
  keywords: [
    'wellness spa Las Vegas',
    'brain mapping Las Vegas',
    'neurofeedback therapy',
    'cryo bodysculpting',
    'cryotherapy Las Vegas',
    'spa capsule therapy',
    'holistic wellness',
    'body contouring Las Vegas',
    'neuro-PT therapy',
    'infrared therapy Las Vegas',
  ],
  authors: [{ name: 'VIGOR The Wellness Spa' }],
  creator: 'VIGOR The Wellness Spa',
  publisher: 'VIGOR The Wellness Spa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vigorlv.com',
    siteName: 'VIGOR The Wellness Spa',
    title: 'VIGOR The Wellness Spa | Las Vegas Premier Wellness Center',
    description: 'Experience holistic wellness at VIGOR The Wellness Spa in Las Vegas. Recover. Rejuvenate. Perform.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIGOR The Wellness Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIGOR The Wellness Spa | Las Vegas Premier Wellness Center',
    description: 'Experience holistic wellness at VIGOR The Wellness Spa in Las Vegas. Recover. Rejuvenate. Perform.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${raleway.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#E85D04" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HealthAndBeautyBusiness',
              name: 'VIGOR The Wellness Spa',
              image: 'https://vigorlv.com/logo.png',
              '@id': 'https://vigorlv.com',
              url: 'https://vigorlv.com',
              telephone: '844-844-6758',
              email: 'info@vigorlv.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '10300 W Charleston Blvd, Suite 17',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89135',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.1595,
                longitude: -115.3601,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00',
              },
              priceRange: '$$',
              servesCuisine: 'Wellness Services',
              sameAs: [
                'https://www.facebook.com/vigorwellnesslv',
                'https://www.instagram.com/vigorwellnesslv',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-vigor-cream antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <PromoTicker />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
