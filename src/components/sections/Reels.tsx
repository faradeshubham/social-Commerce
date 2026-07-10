import * as React from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Play, Heart, MessageSquare, Share2, ShoppingBag } from 'lucide-react'

interface ReelItem {
  id: string
  creator: string
  title: string
  videoThumbnailUrl: string
  likes: string
  comments: string
  taggedProduct: {
    name: string
    price: string
    sku: string
  }
}

export const Reels: React.FC = () => {
  const reels: ReelItem[] = [
    {
      id: 'reel-01',
      creator: '@alex_design',
      title: 'Styling the Raw Worker Denim Jacket',
      videoThumbnailUrl:
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600',
      likes: '12.4k',
      comments: '348',
      taggedProduct: {
        name: 'Raw Worker Denim Jacket',
        price: '$148.00',
        sku: 'JKT-WRK-01',
      },
    },
    {
      id: 'reel-02',
      creator: '@sarah_style',
      title: 'Minimalist EDC Pack Showcase',
      videoThumbnailUrl:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600',
      likes: '8.9k',
      comments: '212',
      taggedProduct: {
        name: 'Minimalist Tech Backpack',
        price: '$120.00',
        sku: 'BPK-TECH-02',
      },
    },
    {
      id: 'reel-03',
      creator: '@lucas_fits',
      title: 'Apex Modular Trail Boot Field Test',
      videoThumbnailUrl:
        'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=600',
      likes: '15.1k',
      comments: '492',
      taggedProduct: {
        name: 'Apex Modular Trail Boot',
        price: '$220.00',
        sku: 'BT-APEX-04',
      },
    },
  ]

  const handleAction = (action: string, id: string) => {
    alert(`Reel ${id}: Triggered ${action}`)
  }

  return (
    <section
      id="reels"
      className="py-16 md:py-24 border-t border-border bg-background"
      aria-labelledby="reels-heading"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Interactive Content
          </p>
          <h2
            id="reels-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Live creator feed with shoppable overlay nodes.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Watch creators demonstrate items and shop instantly. Checkout coordinates are mapped
            frame-by-frame.
          </p>
        </div>

        {/* Responsive Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {reels.map((reel) => (
            <Card
              key={reel.id}
              className="relative w-full max-w-[360px] aspect-[9/16] overflow-hidden bg-zinc-950 border-zinc-800 shadow-xl group hover:shadow-2xl transition-all duration-300"
            >
              {/* Thumbnail Image */}
              <img
                src={reel.videoThumbnailUrl}
                alt={reel.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 z-10" />

              {/* Top Header Row */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
                <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-bold text-zinc-200 font-mono">
                  {reel.creator}
                </span>
                <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-xs py-1 px-2.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-semibold text-zinc-200 uppercase tracking-wider">
                    Interactive
                  </span>
                </span>
              </div>

              {/* Middle Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button
                  onClick={() => handleAction('play', reel.id)}
                  className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center backdrop-blur-xs scale-100 group-hover:scale-110 transition-transform duration-200 cursor-pointer"
                  aria-label="Play video reel"
                >
                  <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
                </button>
              </div>

              {/* Right Side Interaction Overlay */}
              <div className="absolute right-4 bottom-32 z-20 flex flex-col gap-4">
                <div className="flex flex-col items-center gap-1">
                  <button
                    onClick={() => handleAction('like', reel.id)}
                    className="w-10 h-10 rounded-full bg-black/60 border border-zinc-800/80 flex items-center justify-center hover:bg-black/80 transition-colors text-zinc-200"
                    aria-label="Like video"
                  >
                    <Heart className="w-4 h-4 text-zinc-300" />
                  </button>
                  <span className="text-[10px] font-bold text-zinc-300">{reel.likes}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <button
                    onClick={() => handleAction('comment', reel.id)}
                    className="w-10 h-10 rounded-full bg-black/60 border border-zinc-800/80 flex items-center justify-center hover:bg-black/80 transition-colors text-zinc-200"
                    aria-label="View comments"
                  >
                    <MessageSquare className="w-4 h-4 text-zinc-300" />
                  </button>
                  <span className="text-[10px] font-bold text-zinc-300 font-mono">
                    {reel.comments}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => handleAction('share', reel.id)}
                    className="w-10 h-10 rounded-full bg-black/60 border border-zinc-800/80 flex items-center justify-center hover:bg-black/80 transition-colors text-zinc-200"
                    aria-label="Share video"
                  >
                    <Share2 className="w-4 h-4 text-zinc-300" />
                  </button>
                </div>
              </div>

              {/* Bottom Tagged Product Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 space-y-3">
                <div className="text-zinc-100 space-y-0.5">
                  <p className="font-semibold text-xs leading-snug">{reel.title}</p>
                </div>

                <div className="bg-zinc-950/90 border border-zinc-800/60 rounded-xl p-3 flex items-center gap-3 backdrop-blur-xs">
                  <div className="w-10 h-10 bg-zinc-850 rounded-lg flex items-center justify-center text-zinc-300 shrink-0">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[11px] text-zinc-100 truncate">
                      {reel.taggedProduct.name}
                    </p>
                    <p className="text-[9px] text-zinc-500 font-mono">
                      SKU: {reel.taggedProduct.sku}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[11px] text-zinc-100">
                      {reel.taggedProduct.price}
                    </p>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleAction('shop', reel.id)}
                      className="text-[9px] h-6 px-2.5 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 mt-1 rounded font-bold font-mono"
                    >
                      Shop
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
