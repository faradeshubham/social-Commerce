import * as React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { UserPlus, UserCheck, Search, Play, Tag, ShoppingBag, Award } from 'lucide-react'

interface TimelineStep {
  title: string
  description: string
  icon: React.ReactNode
  number: string
}

export const HowItWorks: React.FC = () => {
  const steps: TimelineStep[] = [
    {
      number: '01',
      title: 'Join MakeWith',
      description:
        'Create your secure account. Verify your creator social handles or brand details in minutes with our fast onboarding flow.',
      icon: <UserPlus className="w-5 h-5 text-foreground" />,
    },
    {
      number: '02',
      title: 'Configure Profile',
      description:
        'Build your storefront credentials. Connect your wallet, set up preferred categories, and outline collaboration terms.',
      icon: <UserCheck className="w-5 h-5 text-foreground" />,
    },
    {
      number: '03',
      title: 'Explore Products & Campaigns',
      description:
        'Brands upload physical inventory catalogs while creators browse campaigns featuring competitive, automated split commissions.',
      icon: <Search className="w-5 h-5 text-foreground" />,
    },
    {
      number: '04',
      title: 'Watch & Create Reels',
      description:
        'Upload short-form videos directly to the feed or view interactive content showing streetwear, lifestyle, and tech accessories.',
      icon: <Play className="w-5 h-5 text-foreground" />,
    },
    {
      number: '05',
      title: 'Tag Products Dynamically',
      description:
        'Overlay pixel-perfect shoppable tags onto active frames. Select corresponding catalog products to create instant buyer checkpoints.',
      icon: <Tag className="w-5 h-5 text-foreground" />,
    },
    {
      number: '06',
      title: 'Zero-Friction Purchase',
      description:
        'Buyers complete checkouts natively inside the active video drawer. No external tabs, no redirection, zero lost conversions.',
      icon: <ShoppingBag className="w-5 h-5 text-foreground" />,
    },
    {
      number: '07',
      title: 'Earn & Split Payouts',
      description:
        'Smart contract rules trigger immediately upon checkout, delivering automated splits directly to creator and brand wallets.',
      icon: <Award className="w-5 h-5 text-foreground" />,
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 border-t border-border bg-background"
      aria-labelledby="how-it-works-heading"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Platform Workflow
          </p>
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            A seamless journey from content to checkout.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Discover how our automated pipeline connects creators, brands, and buyers without
            transactional friction.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line for Desktop, Left Line for Mobile */}
          <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={step.number}
                  className={`flex flex-col lg:flex-row items-start lg:items-center relative w-full ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline Node Point */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-200">
                      <span className="text-[10px] font-mono font-bold text-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Spacer or Card Container (Left for odd, Right for even on desktop) */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-8">
                    <div
                      className={`flex flex-col ${
                        isEven ? 'lg:items-start' : 'lg:items-end lg:text-right'
                      }`}
                    >
                      <Card className="max-w-md w-full bg-card border-border hover:shadow-md transition-shadow">
                        <div className="p-6 space-y-4">
                          <div
                            className={`flex items-center gap-3 ${
                              !isEven ? 'lg:flex-row-reverse' : ''
                            }`}
                          >
                            <div className="p-2 rounded-lg bg-secondary text-foreground flex items-center justify-center shrink-0">
                              {step.icon}
                            </div>
                            <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* Empty Spacer side on Desktop */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
