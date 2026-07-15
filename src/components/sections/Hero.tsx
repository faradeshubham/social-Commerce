import * as React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, ShoppingBag, Heart, MessageSquare, Play, Sparkles } from 'lucide-react'

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-28 overflow-hidden bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Heading, Subheading & CTAs */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex max-w-fit">
            <Badge
              variant="outline"
              className="flex items-center gap-1.5 py-1 px-3 border-zinc-200 dark:border-zinc-800 text-xs font-medium tracking-tight rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
              <span>Platform v1.0.0 is Live</span>
            </Badge>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              Social commerce meets <br />
              <span className="text-zinc-400 dark:text-zinc-600 font-normal italic">
                developer precision
              </span>
              .
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl font-normal leading-relaxed">
              Integrate creator short-form content with direct checkout, manage multi-party splits
              in real-time, and run collaborative social store campaigns seamlessly.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <Link to="/waitlist">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto font-semibold shadow-md group"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="#download" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full font-semibold">
                Download App
              </Button>
            </a>
          </motion.div>

          {/* Quick trust metrics */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-border flex flex-wrap gap-8 text-xs text-muted-foreground"
          >
            <div>
              <p className="font-bold text-foreground text-sm">3.2M+</p>
              <p>Active Reach</p>
            </div>
            <div>
              <p className="font-bold text-foreground text-sm">$480k+</p>
              <p>Creator Payouts</p>
            </div>
            <div>
              <p className="font-bold text-foreground text-sm">99.9%</p>
              <p>Checkout Uptime</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Handcrafted App Feed Mockup */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative w-full max-w-[340px] aspect-[9/18] rounded-[2.5rem] border-[10px] border-zinc-900 dark:border-zinc-800 bg-zinc-950 p-3 shadow-2xl flex flex-col justify-between overflow-hidden">
            {/* Phone Speaker/Camera notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-zinc-900 dark:bg-zinc-800 rounded-b-2xl z-20"></div>

            {/* Video Post Card (Simulating Reels View) */}
            <div className="relative flex-1 rounded-[1.8rem] overflow-hidden bg-zinc-900 flex flex-col justify-between p-4 pt-8">
              {/* Overlay Mock Video Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-0"></div>

              {/* Mock Video Placeholder / Static image feeling */}
              <div className="absolute inset-0 flex items-center justify-center opacity-25 z-0">
                <Play className="w-16 h-16 text-white stroke-[1]" />
              </div>

              {/* Status Header */}
              <div className="relative z-10 flex items-center justify-between text-zinc-100 text-[10px] font-medium tracking-tight">
                <span className="bg-black/40 px-2 py-0.5 rounded-full">@shubham_make</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Live</span>
                </span>
              </div>

              {/* Bottom Info and Tagged Product Overlay */}
              <div className="relative z-10 space-y-3">
                <div className="text-zinc-200 space-y-1">
                  <p className="font-semibold text-xs">Utility Streetwear Lookbook</p>
                  <p className="text-[10px] text-zinc-400">
                    Styling the Canvas Worker Jacket with custom overlays.
                  </p>
                </div>

                {/* Inline Product Tag Widget */}
                <div className="bg-zinc-950/90 border border-zinc-800/80 rounded-xl p-2.5 flex items-center gap-2.5 text-zinc-200">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-300">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[11px] truncate">Canvas Worker Jacket</p>
                    <p className="text-[10px] text-zinc-500 font-mono">SKU: JKT-WRK-01</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[11px] text-foreground">$98.00</p>
                    <Badge className="text-[8px] bg-zinc-800 border-none text-zinc-300 rounded font-mono px-1 py-0 mt-0.5">
                      Shop
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated overlay interactions */}
            <div className="absolute right-6 top-1/3 z-10 flex flex-col gap-4 text-white">
              <div className="flex flex-col items-center gap-0.5">
                <button className="w-9 h-9 rounded-full bg-black/40 border border-zinc-800/40 flex items-center justify-center hover:bg-black/60 transition-colors">
                  <Heart className="w-4 h-4 text-zinc-300" />
                </button>
                <span className="text-[9px] font-semibold">12.4k</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <button className="w-9 h-9 rounded-full bg-black/40 border border-zinc-800/40 flex items-center justify-center hover:bg-black/60 transition-colors">
                  <MessageSquare className="w-4 h-4 text-zinc-300" />
                </button>
                <span className="text-[9px] font-semibold">348</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
