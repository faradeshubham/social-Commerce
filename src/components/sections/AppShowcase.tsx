import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  Layers,
  ShoppingBag,
  Play,
  MessageSquare,
  User,
  Bell,
  Send,
  Lock,
  Search,
} from 'lucide-react'

type ScreenTab = 'home' | 'marketplace' | 'reels' | 'chat' | 'profile'

interface TabDetails {
  id: ScreenTab
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
}

export const AppShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<ScreenTab>('home')

  const tabs: TabDetails[] = [
    {
      id: 'home',
      title: 'Home Dashboard',
      subtitle: 'Real-time Telemetry',
      description:
        'Track active campaign performance, reach counts, and withdraw split payouts directly to your linked wallet address.',
      icon: <Layers className="w-4 h-4" />,
    },
    {
      id: 'marketplace',
      title: 'Creator Marketplace',
      subtitle: 'Smart Contract Catalogs',
      description:
        'Browse brand inventories configured with verified payout rules. Instantly reserve campaign slots and pull assets.',
      icon: <ShoppingBag className="w-4 h-4" />,
    },
    {
      id: 'reels',
      title: 'Interactive Reels',
      subtitle: 'Zero-Redirect Checkouts',
      description:
        'View creator short-form videos with shoppable tag overlays. Click pins to checkout natively without jumping out of the feed.',
      icon: <Play className="w-4 h-4" />,
    },
    {
      id: 'chat',
      title: 'Collaborative Chat',
      subtitle: 'Escrow & Payout Negotiation',
      description:
        'Secure communication hub with built-in contract nodes. Set commission rates and lock agreements inline.',
      icon: <MessageSquare className="w-4 h-4" />,
    },
    {
      id: 'profile',
      title: 'Verified Profile',
      subtitle: 'Telemetry & Integrations',
      description:
        'Manage your connected merchant accounts, display analytics, and verify your payout wallet balances.',
      icon: <User className="w-4 h-4" />,
    },
  ]

  // Render content depending on activeTab
  const renderPhoneScreen = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="flex flex-col h-full bg-zinc-950 text-zinc-100 p-4 space-y-4 font-sans select-none">
            {/* Mock Header */}
            <div className="flex items-center justify-between text-xs pt-4 border-b border-zinc-900 pb-2">
              <span className="font-bold flex items-center gap-1 font-mono">
                <Layers className="w-3.5 h-3.5 text-zinc-400" />
                MakeWith
              </span>
              <Bell className="w-3.5 h-3.5 text-zinc-400" />
            </div>
            {/* Wallet Balance Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 space-y-2">
              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider block">
                Total Wallet Balance
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-extrabold font-mono">$2,840.50</span>
                <Badge className="text-[8px] bg-emerald-950 text-emerald-400 border-none font-mono">
                  +12.4%
                </Badge>
              </div>
              <Button
                size="sm"
                className="w-full text-[10px] h-7 bg-zinc-100 text-zinc-950 hover:bg-zinc-200"
              >
                Withdraw Splits
              </Button>
            </div>
            {/* Active Campaigns list */}
            <div className="space-y-2 flex-1 overflow-hidden">
              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider block">
                Active Campaigns (3)
              </span>
              <div className="space-y-1.5 overflow-y-auto max-h-[140px] pr-1">
                <div className="bg-zinc-900/50 border border-zinc-900 p-2.5 rounded-lg flex items-center justify-between text-[10px]">
                  <div>
                    <p className="font-bold">Monomark Chore Pant</p>
                    <p className="text-[8px] text-zinc-500">12% Split locked</p>
                  </div>
                  <span className="text-emerald-400 font-mono">+$180.00</span>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-900 p-2.5 rounded-lg flex items-center justify-between text-[10px]">
                  <div>
                    <p className="font-bold">Aether Tech Pack</p>
                    <p className="text-[8px] text-zinc-500">10% Split locked</p>
                  </div>
                  <span className="text-emerald-400 font-mono">+$310.00</span>
                </div>
              </div>
            </div>
          </div>
        )
      case 'marketplace':
        return (
          <div className="flex flex-col h-full bg-zinc-950 text-zinc-100 p-4 space-y-4 font-sans select-none">
            {/* Search header */}
            <div className="flex items-center gap-2 pt-4 shrink-0">
              <div className="relative flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-1 flex items-center gap-1.5 text-[10px]">
                <Search className="w-3 h-3 text-zinc-500" />
                <span className="text-zinc-500">Search products...</span>
              </div>
            </div>
            {/* Categories */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 shrink-0 scrollbar-none text-[8px] font-mono">
              <span className="bg-zinc-100 text-zinc-950 px-2 py-0.5 rounded font-bold">All</span>
              <span className="bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">
                Outerwear
              </span>
              <span className="bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">
                Footwear
              </span>
            </div>
            {/* Product items feed */}
            <div className="grid grid-cols-2 gap-2 flex-1 overflow-y-auto pr-1">
              <div className="bg-zinc-900 border border-zinc-800/80 rounded-lg p-2 flex flex-col justify-between space-y-2">
                <div className="aspect-[4/3] bg-zinc-850 rounded overflow-hidden flex items-center justify-center">
                  <span className="text-[9px] font-mono text-zinc-500">JKT-WRK</span>
                </div>
                <div>
                  <p className="font-bold text-[9px] truncate">Worker Jacket</p>
                  <p className="text-[8px] text-zinc-500">Monomark Studio</p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-zinc-800 text-[9px]">
                  <span className="font-bold">$148</span>
                  <Badge className="text-[7px] bg-zinc-800 border-none font-mono py-0 px-1 rounded">
                    12% CR
                  </Badge>
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800/80 rounded-lg p-2 flex flex-col justify-between space-y-2">
                <div className="aspect-[4/3] bg-zinc-850 rounded overflow-hidden flex items-center justify-center">
                  <span className="text-[9px] font-mono text-zinc-500">BPK-TECH</span>
                </div>
                <div>
                  <p className="font-bold text-[9px] truncate">Tech Pack</p>
                  <p className="text-[8px] text-zinc-500">Aether Gear</p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-zinc-800 text-[9px]">
                  <span className="font-bold">$120</span>
                  <Badge className="text-[7px] bg-zinc-800 border-none font-mono py-0 px-1 rounded">
                    10% CR
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        )
      case 'reels':
        return (
          <div className="relative h-full w-full bg-zinc-900 text-zinc-100 select-none overflow-hidden flex flex-col justify-between p-4 pt-10">
            {/* Mock Video BG (Simulated with gradient) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/60 z-0" />
            <div className="absolute inset-0 flex items-center justify-center opacity-30 z-0">
              <Play className="w-10 h-10 text-white stroke-[1]" />
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between text-[8px] font-medium tracking-tight">
              <span className="bg-black/40 px-2 py-0.5 rounded">@alex_design</span>
              <span className="flex items-center gap-1 font-mono text-[7px] tracking-wider bg-emerald-950 text-emerald-400 py-0.5 px-2 rounded-full border border-emerald-800/50">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                Live Shop
              </span>
            </div>

            {/* Product tag widget at the bottom */}
            <div className="relative z-10 space-y-2 mt-auto">
              <p className="text-[10px] font-semibold">Streetwear Styling chore pants...</p>

              <div className="bg-zinc-950/95 border border-zinc-850 rounded-xl p-2.5 flex items-center gap-2.5 text-zinc-200">
                <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center text-zinc-400 shrink-0">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[9px] truncate">Canvas Chore Pants</p>
                  <p className="text-[8px] text-zinc-500 font-mono">$95.00</p>
                </div>
                <Button
                  size="sm"
                  className="text-[8px] h-6 px-2 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 rounded font-bold font-mono"
                >
                  Shop
                </Button>
              </div>
            </div>
          </div>
        )
      case 'chat':
        return (
          <div className="flex flex-col h-full bg-zinc-950 text-zinc-100 p-4 space-y-3 font-sans select-none">
            {/* Header */}
            <div className="flex items-center gap-2 pt-4 border-b border-zinc-900 pb-2 shrink-0">
              <div className="w-5 h-5 bg-zinc-800 text-[9px] font-bold font-mono flex items-center justify-center rounded">
                ML
              </div>
              <div>
                <p className="font-bold text-[9px] text-foreground">Monomark Lab</p>
                <p className="text-[7px] text-emerald-500 font-mono">Campaign node active</p>
              </div>
            </div>

            {/* Chat conversation thread */}
            <div className="flex-1 overflow-y-auto space-y-2 text-[9px] pr-1">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2 max-w-[85%]">
                <p className="text-zinc-400 text-[8px] font-mono mb-0.5">Monomark • 10:14 AM</p>
                <p className="leading-normal">
                  Hi Sarah! We propose setting up a custom checkout overlay node for the Chore
                  Pants.
                </p>
              </div>
              <div className="bg-zinc-800/80 rounded-lg p-2 max-w-[85%] ml-auto text-right">
                <p className="text-zinc-400 text-[8px] font-mono mb-0.5">Me • 10:15 AM</p>
                <p className="leading-normal">
                  Sounds perfect. Can we set the affiliate split target at 12% per checkout?
                </p>
              </div>
              <div className="bg-zinc-900/30 border border-dashed border-zinc-800 rounded-lg p-2 flex items-center justify-center gap-2 text-center text-zinc-400 font-mono text-[7px] py-2">
                <Lock className="w-3 h-3 text-zinc-500" />
                <span>Contract Node Split Locked at 12.0%</span>
              </div>
            </div>

            {/* Input bar */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-1.5 flex items-center justify-between shrink-0">
              <span className="text-zinc-500 text-[9px] pl-1.5">Type message...</span>
              <div className="w-5 h-5 rounded bg-zinc-100 flex items-center justify-center text-zinc-950 hover:bg-zinc-200 cursor-pointer">
                <Send className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        )
      case 'profile':
        return (
          <div className="flex flex-col h-full bg-zinc-950 text-zinc-100 p-4 space-y-4 font-sans select-none">
            {/* Header */}
            <div className="text-center pt-4 shrink-0 flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-zinc-800 border border-zinc-700 text-sm font-bold font-mono text-zinc-100 flex items-center justify-center rounded-full">
                SS
              </div>
              <div>
                <h4 className="font-extrabold text-[11px]">@sarah_style</h4>
                <p className="text-[8px] text-zinc-500 font-mono">Account ID: CR-894-A</p>
              </div>
            </div>

            {/* Profile Statistics */}
            <div className="grid grid-cols-3 gap-1 bg-zinc-900 p-2.5 rounded-lg border border-zinc-805 text-center shrink-0">
              <div>
                <p className="font-mono font-bold text-[10px]">62.1k</p>
                <p className="text-[7px] text-zinc-500 uppercase tracking-wider font-mono">Reach</p>
              </div>
              <div className="border-x border-zinc-800">
                <p className="font-mono font-bold text-[10px] text-emerald-400">9.8%</p>
                <p className="text-[7px] text-zinc-500 uppercase tracking-wider font-mono">
                  Avg CR
                </p>
              </div>
              <div>
                <p className="font-mono font-bold text-[10px]">$4.8k</p>
                <p className="text-[7px] text-zinc-500 uppercase tracking-wider font-mono">
                  Earned
                </p>
              </div>
            </div>

            {/* Settings toggles */}
            <div className="space-y-2 flex-1">
              <span className="text-[8px] text-zinc-500 font-mono uppercase tracking-wider block">
                Configuration settings
              </span>
              <div className="bg-zinc-900/50 p-2 rounded border border-zinc-900 flex items-center justify-between text-[9px]">
                <span>Auto-Withdraw Splits</span>
                <span className="w-6 h-3.5 bg-emerald-600 rounded-full relative">
                  <span className="absolute right-0.5 top-0.5 bg-white w-2.5 h-2.5 rounded-full" />
                </span>
              </div>
              <div className="bg-zinc-900/50 p-2 rounded border border-zinc-900 flex items-center justify-between text-[9px]">
                <span>NFC Product Tags</span>
                <span className="w-6 h-3.5 bg-zinc-850 rounded-full relative border border-zinc-800">
                  <span className="absolute left-0.5 top-0.5 bg-zinc-500 w-2.5 h-2.5 rounded-full" />
                </span>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <section
      id="showcase"
      className="py-16 md:py-24 border-t border-border bg-background"
      aria-labelledby="showcase-heading"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Interactive Mockup
          </p>
          <h2
            id="showcase-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            A high-performance mobile app built for the field.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Preview the custom user interface. Toggle tabs on the left to see how checkout nodes,
            telemetry, splits, and campaigns flow directly on mobile devices.
          </p>
        </div>

        {/* Showcase Grid: left buttons layout, right mobile mockup showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Nav Tabs (Col span 7) */}
          <div className="lg:col-span-7 space-y-4">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-4.5 rounded-xl border relative transition-transform duration-150 flex items-start gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring z-0 overflow-hidden ${
                    isActive
                      ? 'border-zinc-400 dark:border-zinc-700 shadow-md translate-x-1'
                      : 'bg-background border-border hover:border-zinc-300 dark:hover:border-zinc-800 hover:bg-accent/20'
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-card z-[-1] rounded-xl"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Icon Block */}
                  <div
                    className={`p-2.5 rounded-lg shrink-0 flex items-center justify-center relative z-10 ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {tab.icon}
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1.5 relative z-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-foreground leading-none">
                        {tab.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className={`text-[8px] px-1.5 py-0 rounded font-mono ${
                          isActive
                            ? 'bg-primary/10 text-foreground dark:bg-primary/30'
                            : 'bg-secondary text-muted-foreground'
                        }`}
                      >
                        {tab.subtitle}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {tab.description}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column: Mobile Bezel Phone Mockup (Col span 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] aspect-[9/18] rounded-[2.5rem] border-[8px] border-zinc-900 dark:border-zinc-800 bg-zinc-950 p-2 shadow-2xl flex flex-col justify-between overflow-hidden">
              {/* Camera Notch Bezel */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-900 dark:bg-zinc-800 rounded-b-2xl z-30" />

              {/* Screen View */}
              <div className="relative flex-1 rounded-[1.8rem] overflow-hidden bg-zinc-950 z-10 border border-zinc-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    {renderPhoneScreen()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-zinc-800 rounded-full z-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
