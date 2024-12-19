import Benefits from '@/components/Benefits'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Solutions from '@/components/Solutions'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Solutions />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

