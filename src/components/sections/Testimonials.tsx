import * as React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Star, CheckCircle2, Quote } from 'lucide-react'

type TestimonialCategory = 'all' | 'creator' | 'brand' | 'user'

interface TestimonialItem {
  id: string
  name: string
  handle: string
  role: string
  monogram: string
  quote: string
  category: TestimonialCategory
  rating: number
}

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = React.useState<TestimonialCategory>('all')

  const items: TestimonialItem[] = [
    {
      id: 'test-01',
      name: 'Marcus Fits',
      handle: '@marcus_fits',
      role: 'Streetwear Creator',
      monogram: 'MF',
      quote:
        'MakeWith converted 14% of my lookbook viewers into direct customers. The payout was split and routed to my wallet instantly upon checkouts.',
      category: 'creator',
      rating: 5,
    },
    {
      id: 'test-02',
      name: 'Nordic Apparel',
      handle: 'nordic_apparel',
      role: 'E-commerce Ops Lead',
      monogram: 'NA',
      quote:
        'Automated payouts removed all referral disputes. Our creators get paid exactly what they earn, instantly, driven by the synced database log.',
      category: 'brand',
      rating: 5,
    },
    {
      id: 'test-03',
      name: 'Tech Buyer',
      handle: '@tech_buyer',
      role: 'Verified Customer',
      monogram: 'TB',
      quote:
        'Buying clothes straight from the video player without being redirected is a game-changer. Easiest checkout process on mobile.',
      category: 'user',
      rating: 5,
    },
    {
      id: 'test-04',
      name: 'Elena Creative',
      handle: '@elena_creative',
      role: 'Lifestyle Vlogger',
      monogram: 'EC',
      quote:
        'No more compiling click logs for brand payouts. The sync telemetry handles it automatically, protecting my referral commission.',
      category: 'creator',
      rating: 5,
    },
    {
      id: 'test-05',
      name: 'Aether Gear',
      handle: 'aether_gear',
      role: 'Marketing Director',
      monogram: 'AG',
      quote:
        'Direct checkout integration reduced our dropped-cart sessions by 40% compared to typical redirect links.',
      category: 'brand',
      rating: 4,
    },
    {
      id: 'test-06',
      name: 'Streetwear Fan',
      handle: '@streetwear_fan',
      role: 'Verified Customer',
      monogram: 'SF',
      quote:
        'Simple, fast, and secure. I can see details of the outfits and checkout in under 10 seconds. Excellent UX.',
      category: 'user',
      rating: 5,
    },
  ]

  const filteredItems = filter === 'all' ? items : items.filter((item) => item.category === filter)

  const filterTabs: { id: TestimonialCategory; label: string }[] = [
    { id: 'all', label: 'All Reviews' },
    { id: 'creator', label: 'Creators' },
    { id: 'brand', label: 'Brands' },
    { id: 'user', label: 'Buyers' },
  ]

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 border-t border-border bg-background transition-colors duration-150"
      aria-labelledby="testimonials-heading"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Community Reviews
            </p>
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
            >
              Approved by high-growth creators and brands.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Read how checkout overlays and automated smart contract nodes transform social
              selling.
            </p>
          </div>

          {/* Filters tabs: min touch target 44px */}
          <div className="flex flex-wrap gap-1.5 bg-secondary/40 p-1 rounded-lg border border-border shrink-0 self-start md:self-end">
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-tight transition-all cursor-pointer min-h-[36px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
                    isActive
                      ? 'bg-background text-foreground shadow-sm font-semibold border border-border/80'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              hoverEffect={true}
              className="bg-card border-border flex flex-col justify-between h-full"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full space-y-6">
                {/* Quote details */}
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    {/* Star Rating */}
                    <div
                      className="flex items-center gap-0.5 text-foreground"
                      aria-label={`Rating: ${item.rating} stars`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < item.rating
                              ? 'fill-current text-foreground'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                    {/* Quote Icon */}
                    <Quote className="w-5 h-5 text-muted-foreground/20 rotate-180" />
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Profile block */}
                <div className="pt-4 border-t border-border flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-secondary text-foreground text-[10px] font-bold font-mono flex items-center justify-center border border-border">
                      {item.monogram}
                    </div>
                    <div>
                      <p className="font-bold text-xs text-foreground flex items-center gap-1">
                        {item.name}
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/10"
                          aria-label="Verified Reviewer"
                        />
                      </p>
                      <p className="text-[10px] text-muted-foreground font-mono">{item.handle}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-[9px] font-mono rounded capitalize">
                    {item.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
