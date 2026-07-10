import * as React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ArrowUpRight, TrendingUp, Users, ShoppingBag } from 'lucide-react'

interface ProductItem {
  id: string
  name: string
  brand: string
  price: string
  category: string
  imageUrl: string
  stats: string
}

interface CreatorItem {
  handle: string
  role: string
  followers: string
  conversion: string
  initials: string
}

interface BrandItem {
  name: string
  category: string
  campaignsCount: number
}

export const Marketplace: React.FC = () => {
  const products: ProductItem[] = [
    {
      id: 'prod-01',
      name: 'Raw Worker Denim Jacket',
      brand: 'Monomark Studio',
      price: '$148.00',
      category: 'Outerwear',
      imageUrl:
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600',
      stats: '14.2k Views',
    },
    {
      id: 'prod-02',
      name: 'Minimalist Tech Backpack',
      brand: 'Aether Gear',
      price: '$120.00',
      category: 'Accessories',
      imageUrl:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600',
      stats: '9.8k Views',
    },
    {
      id: 'prod-03',
      name: 'Canvas Chore Utility Pants',
      brand: 'Monomark Studio',
      price: '$95.00',
      category: 'Bottoms',
      imageUrl:
        'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600',
      stats: '7.5k Views',
    },
    {
      id: 'prod-04',
      name: 'Apex Modular Trail Boot',
      brand: 'Forma Lab',
      price: '$220.00',
      category: 'Footwear',
      imageUrl:
        'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=600',
      stats: '18.4k Views',
    },
  ]

  const trendingCreators: CreatorItem[] = [
    {
      handle: '@alex_design',
      role: 'Tech & Streetwear Creator',
      followers: '48.2k',
      conversion: '12.4% CR',
      initials: 'AD',
    },
    {
      handle: '@sarah_style',
      role: 'Minimalist Wardrobe Designer',
      followers: '62.1k',
      conversion: '9.8% CR',
      initials: 'SS',
    },
    {
      handle: '@lucas_fits',
      role: 'Urban Utility Curator',
      followers: '34.5k',
      conversion: '11.1% CR',
      initials: 'LF',
    },
  ]

  const trendingBrands: BrandItem[] = [
    {
      name: 'Monomark Studio',
      category: 'Heavy Canvas & Workwear',
      campaignsCount: 6,
    },
    {
      name: 'Forma Lab',
      category: 'Modular Technical Gear',
      campaignsCount: 4,
    },
    {
      name: 'Aether Gear',
      category: 'High-Altitude Travel Kits',
      campaignsCount: 3,
    },
  ]

  return (
    <section
      id="marketplace"
      className="py-16 md:py-24 border-t border-border bg-background"
      aria-labelledby="marketplace-heading"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Platform Assets
          </p>
          <h2
            id="marketplace-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Explore marketplace contracts & verified products.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Directly browse products carrying pre-configured smart contracts. Check conversion
            metrics and run a test buy.
          </p>
        </div>

        {/* Main Grid: Left side side panel, Right side product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Trending Creators and Brands (Col span 4) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
            {/* Trending Creators Card */}
            <Card className="bg-card border-border">
              <div className="p-5 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-zinc-500" />
                  <h3 className="font-bold text-sm text-foreground">Trending Creators</h3>
                </div>
                <Badge variant="outline" className="text-[10px] font-mono rounded">
                  Live Stats
                </Badge>
              </div>
              <div className="p-5 divide-y divide-border space-y-4">
                {trendingCreators.map((creator, i) => (
                  <div
                    key={creator.handle}
                    className={`flex items-center justify-between ${i > 0 ? 'pt-4' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-zinc-100 dark:bg-zinc-800 text-[11px] font-bold font-mono text-zinc-800 dark:text-zinc-200 flex items-center justify-center">
                        {creator.initials}
                      </div>
                      <div>
                        <p className="font-bold text-xs text-foreground">{creator.handle}</p>
                        <p className="text-[10px] text-muted-foreground">{creator.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="text-[9px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-none rounded">
                        {creator.conversion}
                      </Badge>
                      <p className="text-[9px] text-muted-foreground mt-0.5">
                        {creator.followers} followers
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Trending Brands Card */}
            <Card className="bg-card border-border">
              <div className="p-5 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-zinc-500" />
                  <h3 className="font-bold text-sm text-foreground">Featured Brands</h3>
                </div>
              </div>
              <div className="p-5 divide-y divide-border space-y-4">
                {trendingBrands.map((brand, i) => (
                  <div
                    key={brand.name}
                    className={`flex items-center justify-between ${i > 0 ? 'pt-4' : ''}`}
                  >
                    <div>
                      <p className="font-bold text-xs text-foreground">{brand.name}</p>
                      <p className="text-[10px] text-muted-foreground">{brand.category}</p>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <span className="text-xs font-mono font-bold text-foreground">
                        {brand.campaignsCount}
                      </span>
                      <span className="text-[9px] text-muted-foreground">Campaigns</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Products Catalog (Col span 8) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  hoverEffect={true}
                  className="bg-card border-border overflow-hidden flex flex-col group h-full"
                >
                  {/* Image container with fixed ratio & lazy loading */}
                  <div className="relative aspect-[4/3] bg-secondary overflow-hidden shrink-0">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="text-[9px] font-mono rounded">
                        {product.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[9px] font-mono py-0.5 px-2 rounded-full backdrop-blur-xs">
                      {product.stats}
                    </div>
                  </div>

                  <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        {product.brand}
                      </p>
                      <h4 className="font-bold text-sm text-foreground group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                        {product.name}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div>
                        <span className="text-[10px] text-muted-foreground font-mono block">
                          Contract Price
                        </span>
                        <span className="text-sm font-bold text-foreground">{product.price}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-[10px] h-8 rounded px-3 gap-1 hover:bg-foreground hover:text-background border-zinc-300 dark:border-zinc-700"
                        leftIcon={<ShoppingBag className="w-3.5 h-3.5" />}
                      >
                        Buy Test
                        <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
