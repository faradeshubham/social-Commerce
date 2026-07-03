import * as React from 'react'
import { Button } from '@/components/ui/Button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card'
import { Compass, ShoppingBag, Eye, Heart, ArrowRight } from 'lucide-react'

export const Home: React.FC = () => {
  const [btnLoading, setBtnLoading] = React.useState(false)

  const handleTestClick = () => {
    setBtnLoading(true)
    setTimeout(() => setBtnLoading(false), 2000)
  }

  return (
    <div className="space-y-12">
      {/* Hero Welcome banner */}
      <section className="text-center py-12 md:py-16 space-y-6">
        <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-950/30 border border-primary-100 dark:border-primary-900/50 px-4 py-1.5 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400">
          <span>Day 1: Design Tokens & Foundation Boilerplate Active</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
          Where Social Meets <span className="text-gradient">Commerce</span>
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Welcome to the foundation of the MakeWith project. Below, verify the core typography,
          colors, responsive design indicators, and base UI components.
        </p>
      </section>

      {/* Breakpoint Indicator */}
      <section className="bg-slate-100 dark:bg-slate-900/80 p-6 rounded-2xl border-glass">
        <h2 className="text-xl mb-4 text-slate-800 dark:text-slate-200">
          Responsive Breakpoint Indicator
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Resize the browser window to see which breakpoint is active. This confirms the responsive
          styling config is active.
        </p>
        <div className="flex flex-wrap gap-2 text-center text-xs font-bold text-white">
          <div className="px-4 py-2 rounded-lg bg-rose-500 block sm:hidden">Mobile (&lt;640px)</div>
          <div className="px-4 py-2 rounded-lg bg-amber-500 hidden sm:block md:hidden">
            Small Tablet (sm: 640px - 768px)
          </div>
          <div className="px-4 py-2 rounded-lg bg-emerald-500 hidden md:block lg:hidden">
            Tablet (md: 768px - 1024px)
          </div>
          <div className="px-4 py-2 rounded-lg bg-teal-500 hidden lg:block xl:hidden">
            Laptop (lg: 1024px - 1280px)
          </div>
          <div className="px-4 py-2 rounded-lg bg-indigo-500 hidden xl:block 2xl:hidden">
            Desktop (xl: 1280px - 1536px)
          </div>
          <div className="px-4 py-2 rounded-lg bg-violet-600 hidden 2xl:block">
            Ultra-Wide (2xl: &gt;1536px)
          </div>
        </div>
      </section>

      {/* Reusable Buttons Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading border-b border-slate-200 dark:border-slate-800 pb-2">
          Reusable Buttons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Variants */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-400">VARIANTS</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="danger">Danger Button</Button>
            </div>
          </div>

          {/* Sizes and States */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-400">SIZES & INTERACTIVE STATES</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small Size</Button>
              <Button size="md">Medium (Default)</Button>
              <Button size="lg">Large Size</Button>
              <Button
                variant="primary"
                isLoading={btnLoading}
                onClick={handleTestClick}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Click to Test Loader
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Cards Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading border-b border-slate-200 dark:border-slate-800 pb-2">
          Reusable Card Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="aspect-video bg-gradient-to-tr from-primary-500 to-indigo-600 flex items-center justify-center text-white">
              <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <CardHeader>
              <CardTitle>AI Discovery Feed</CardTitle>
              <CardDescription>Tailored content for your unique taste.</CardDescription>
            </CardHeader>
            <CardContent>
              Explore products recommended dynamically based on your viewing history and social
              interactions.
            </CardContent>
            <CardFooter className="justify-between">
              <span className="text-xs text-slate-400">Features Phase 6</span>
              <Button size="sm" variant="ghost">
                Preview
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="aspect-video bg-gradient-to-tr from-accent-400 to-emerald-600 flex items-center justify-center text-white">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <CardHeader>
              <CardTitle>Social Marketplace</CardTitle>
              <CardDescription>Direct-to-consumer shopping.</CardDescription>
            </CardHeader>
            <CardContent>
              Shop straight from the creator's posts. Connect, tag, buy, and get rewards in seconds.
            </CardContent>
            <CardFooter className="justify-between">
              <span className="text-xs text-slate-400">Marketplace Phase 8</span>
              <Button size="sm" variant="ghost">
                Preview
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="aspect-video bg-gradient-to-tr from-rose-500 to-pink-600 flex items-center justify-center text-white">
              <div className="flex space-x-2">
                <Eye className="w-8 h-8" />
                <Heart className="w-8 h-8 fill-current" />
              </div>
            </div>
            <CardHeader>
              <CardTitle>Creator Reels</CardTitle>
              <CardDescription>Vibrant short videos.</CardDescription>
            </CardHeader>
            <CardContent>
              Engage with immersive creator content, with interactive tagging and integrated
              checkout.
            </CardContent>
            <CardFooter className="justify-between">
              <span className="text-xs text-slate-400">Reels Phase 9</span>
              <Button size="sm" variant="ghost">
                Preview
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
