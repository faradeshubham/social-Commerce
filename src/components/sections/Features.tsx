import * as React from 'react'
import { FeatureCard } from '@/components/ui/FeatureCard'
import {
  Sparkles,
  Users,
  Handshake,
  DollarSign,
  Tag,
  MessageSquare,
  Heart,
  Compass,
} from 'lucide-react'

interface FeatureItem {
  title: string
  description: string
  icon: React.ReactNode
  badgeText?: string
}

export const Features: React.FC = () => {
  const featuresList: FeatureItem[] = [
    {
      title: 'AI Product Discovery',
      description:
        'Automatically analyzes video frames to discover, resolve, and match featured clothing or items against product catalog databases.',
      icon: <Sparkles className="w-4 h-4" />,
      badgeText: 'AI Powered',
    },
    {
      title: 'Creator Marketplace',
      description:
        'Connect with verified creators based on conversion ratios, average checkout times, and niche audience attribution records.',
      icon: <Users className="w-4 h-4" />,
      badgeText: 'Matchmaking',
    },
    {
      title: 'Brand Collaboration',
      description:
        'Configure multi-signature split-commission agreements, publish campaigns, and negotiate commission percentages directly.',
      icon: <Handshake className="w-4 h-4" />,
    },
    {
      title: 'Affiliate Shopping',
      description:
        'Audiences purchase items straight from referral links with automatic commission payouts routed directly to the creator wallet.',
      icon: <DollarSign className="w-4 h-4" />,
      badgeText: 'Instant Split',
    },
    {
      title: 'Product Tagging',
      description:
        'Overlay interactive checkout pins and labels onto active sections of short-form videos for seamless contextual buying.',
      icon: <Tag className="w-4 h-4" />,
      badgeText: 'Interactive',
    },
    {
      title: 'Direct Messaging',
      description:
        'Align on creative directions, inspect payout splits, and coordinate physical product deliveries through a secure inbox layer.',
      icon: <MessageSquare className="w-4 h-4" />,
    },
    {
      title: 'Contextual Wishlist',
      description:
        'Allows video viewers to save tagged products, monitor discount events, and execute bundle checkouts at a later date.',
      icon: <Heart className="w-4 h-4" />,
    },
    {
      title: 'AI Recommendations',
      description:
        'Dynamically adapts the shopping feed to recommend products based on engagement metrics, purchase history, and creator tags.',
      icon: <Compass className="w-4 h-4" />,
      badgeText: 'Predictive',
    },
    {
      title: 'Profile System',
      description:
        'Build your storefront credentials and connect your wallet to showcase your unique style and products.',
      icon: <Users className="w-4 h-4" />,
    },
    {
      title: 'Follow System',
      description:
        'Follow your favorite creators and brands to get notified on new product drops and collaborations immediately.',
      icon: <Handshake className="w-4 h-4" />,
    },
  ]

  return (
    <section
      id="features"
      className="py-16 md:py-24 border-t border-border bg-background"
      aria-labelledby="features-heading"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Core Architecture
          </p>
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Built for creators, engineered for brands.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Discover how MakeWith integrates interactive content with robust transactional mechanics
            to scale social shop campaigns.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {featuresList.map((feature, index) => (
            <div key={index} className="h-full">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                badgeText={feature.badgeText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
