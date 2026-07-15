import * as React from 'react'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Features } from '@/components/sections/Features'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Marketplace } from '@/components/sections/Marketplace'
import { Reels } from '@/components/sections/Reels'
import { AppShowcase } from '@/components/sections/AppShowcase'
import { Download } from '@/components/sections/Download'
import { Testimonials } from '@/components/sections/Testimonials'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'

export const Home: React.FC = () => {
  return (
    <div className="space-y-4">
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Marketplace />
      <Reels />
      <AppShowcase />
      <Download />
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  )
}
