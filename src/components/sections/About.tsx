import * as React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Target, Eye, ShieldCheck, Zap, BarChart2 } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 border-t border-border bg-background"
      aria-labelledby="about-heading"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Platform Overview
          </p>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Connecting vision with automated commerce.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            MakeWith removes transaction friction and builds transparent trust pipelines. We align
            creator influence with automated logistics to shape the future of social selling.
          </p>
        </div>

        {/* Asymmetric Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Vision & Mission (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card hoverEffect={false} className="bg-card border-border flex-1">
              <CardHeader className="p-6 pb-2.5 flex flex-row items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary text-foreground">
                  <Eye className="w-5 h-5" />
                </div>
                <CardTitle className="text-base font-bold text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-1 text-xs text-muted-foreground leading-relaxed">
                We envision a world where creator engagement and product checkouts coexist fluidly,
                allowing buyers to support their favorite creators with zero transactional friction.
              </CardContent>
            </Card>

            <Card hoverEffect={false} className="bg-card border-border flex-1">
              <CardHeader className="p-6 pb-2.5 flex flex-row items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary text-foreground">
                  <Target className="w-5 h-5" />
                </div>
                <CardTitle className="text-base font-bold text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-1 text-xs text-muted-foreground leading-relaxed">
                To build high-performance checkout overlays, transparent conversion tracking, and
                automated multi-signature commission splits that protect creator revenue and brand
                investments.
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Why Choose MakeWith (Col span 7) */}
          <Card
            hoverEffect={false}
            className="lg:col-span-7 bg-card border-border flex flex-col justify-between"
          >
            <CardHeader className="p-6 pb-4">
              <div className="space-y-1">
                <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  Value Proposition
                </p>
                <CardTitle className="text-lg font-bold text-foreground">
                  Why Choose MakeWith
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-foreground font-semibold text-xs">
                  <Zap className="w-4 h-4 text-zinc-500" />
                  <span>Zero Redirect Checkouts</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Audiences shop directly inside the video interface. No popups, no external tabs,
                  and no dropped cart sessions.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-foreground font-semibold text-xs">
                  <ShieldCheck className="w-4 h-4 text-zinc-500" />
                  <span>Trust-First Payout Split</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Automated contract nodes handle creator referral payouts instantly. Payout
                  schedules are clear, secure, and verifiable.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-foreground font-semibold text-xs">
                  <BarChart2 className="w-4 h-4 text-zinc-500" />
                  <span>Attribution Telemetry</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Brands and creators view identical sync logs of conversions, clicks, and inventory
                  counts in real-time.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-foreground font-semibold text-xs">
                  <ShieldCheck className="w-4 h-4 text-zinc-500" />
                  <span>Monochromatic Precision</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A developer-friendly design system stripped of marketing fluff, placing
                  performance and transparency at the forefront.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
