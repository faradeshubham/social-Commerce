import * as React from 'react'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Features } from '@/components/sections/Features'

export const Home: React.FC = () => {
  return (
    <div className="space-y-4">
      <Hero />
      <About />
      <Features />
    </div>
  )
}
