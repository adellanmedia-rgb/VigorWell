import Hero from '@/components/Hero'
import PromoBanner from '@/components/PromoBanner'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import Reviews from '@/components/Reviews'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <PromoBanner />
      <ServicesOverview />
      <WhyChooseUs />
      <Reviews />
      <CTASection />
    </>
  )
}
