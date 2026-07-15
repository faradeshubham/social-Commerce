import * as React from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { QrCode, ShieldCheck, Zap } from 'lucide-react'

export const Download: React.FC = () => {
  return (
    <section
      id="download"
      className="py-16 md:py-24 border-t border-border bg-background transition-colors duration-150"
      aria-labelledby="download-heading"
    >
      <Card className="bg-card border-border overflow-hidden relative shadow-lg">
        {/* Subtle decorative background canvas grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-secondary),transparent_50%)] opacity-35 z-0 pointer-events-none" />

        <div className="p-8 md:p-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Block: Information & CTAs (Col span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-zinc-400 animate-pulse" />
              Creator Shop Companion
            </p>

            <h2
              id="download-heading"
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
            >
              Take your creator split store mobile.
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
              Track conversions, edit shoppable pin coordinates, chat with brand campaigns, and
              manage instant splits on the go. Available for iOS and Android.
            </p>

            {/* Bullet value points */}
            <div className="space-y-3.5 text-xs text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Secure wallet integrations and multi-signature authorization keys.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>NFC and Bluetooth tag mapping capabilities for in-person activations.</span>
              </div>
            </div>

            {/* Badges Buttons: min touch target 44px */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* App Store */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-zinc-950 hover:bg-zinc-900 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-950 px-5 py-3 rounded-lg border border-zinc-800 dark:border-zinc-300 transition-all duration-150 group min-h-[48px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                aria-label="Download on App Store"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94.1.08.2.12.31.12.9 0 2.01-.58 2.5-1.45z" />
                </svg>
                <div className="text-left leading-tight shrink-0">
                  <p className="text-[9px] uppercase tracking-wider font-mono opacity-80">
                    Download on the
                  </p>
                  <p className="text-xs font-bold font-sans">App Store</p>
                </div>
                <Badge className="ml-2 shrink-0 text-[8px] bg-zinc-800 text-zinc-300 dark:bg-zinc-300 dark:text-zinc-700 border-none px-1.5 py-0 font-mono">Coming Soon</Badge>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-zinc-950 hover:bg-zinc-900 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-950 px-5 py-3 rounded-lg border border-zinc-800 dark:border-zinc-300 transition-all duration-150 group min-h-[48px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                aria-label="Download on Google Play Store"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M5.25 3.05a2 2 0 0 0-1.25 1.83v14.24a2 2 0 0 0 1.25 1.83l8.4-8.95-8.4-8.95zM14.65 12l-7.7-8.2 9.5 5.5c.78.45 1.22 1.14 1.22 1.8 0 .66-.44 1.35-1.22 1.8l-9.5 5.5 7.7-8.2zM4.65 21.05l7.7-8.2.93.98-7.38 4.28c-.42.25-.86.25-1.25.02v2.92zM4.65 2.95v2.92c.39-.23.83-.23 1.25.02l7.38 4.28-.93.98-7.7-8.2z" />
                </svg>
                <div className="text-left leading-tight shrink-0">
                  <p className="text-[9px] uppercase tracking-wider font-mono opacity-80">
                    Get it on
                  </p>
                  <p className="text-xs font-bold font-sans">Google Play</p>
                </div>
                <Badge className="ml-2 shrink-0 text-[8px] bg-zinc-800 text-zinc-300 dark:bg-zinc-300 dark:text-zinc-700 border-none px-1.5 py-0 font-mono">Coming Soon</Badge>
              </a>

              {/* Android APK */}
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-zinc-950 hover:bg-zinc-900 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-950 px-5 py-3 rounded-lg border border-zinc-800 dark:border-zinc-300 transition-all duration-150 group min-h-[48px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                aria-label="Download Android APK"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0004.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.022 3.503C15.5902 8.2435 13.8533 7.85 12 7.85s-3.5902.3935-5.1371 1.1002l-2.022-3.503a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1182-9.4396"/>
                </svg>
                <div className="text-left leading-tight shrink-0">
                  <p className="text-[9px] uppercase tracking-wider font-mono opacity-80">
                    Download
                  </p>
                  <p className="text-xs font-bold font-sans">Android (APK)</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Block: Custom SVG QR Code Module (Col span 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <Card className="bg-background border-border p-6 shadow-md max-w-[220px] w-full text-center space-y-4 shrink-0">
              <div className="relative aspect-square w-full border border-border bg-secondary/30 rounded-lg flex items-center justify-center p-3 select-none">
                {/* SVG Rendered Premium QR Code Grid */}
                <svg
                  className="w-full h-full text-foreground"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  {/* Outer corner square 1 */}
                  <rect
                    x="5"
                    y="5"
                    width="25"
                    height="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                  />
                  <rect x="13" y="13" width="9" height="9" />
                  {/* Outer corner square 2 */}
                  <rect
                    x="70"
                    y="5"
                    width="25"
                    height="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                  />
                  <rect x="78" y="13" width="9" height="9" />
                  {/* Outer corner square 3 */}
                  <rect
                    x="5"
                    y="70"
                    width="25"
                    height="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                  />
                  <rect x="13" y="78" width="9" height="9" />
                  {/* Pixelated details (random geometric mock pixels) */}
                  <rect x="40" y="10" width="6" height="6" />
                  <rect x="55" y="10" width="6" height="12" />
                  <rect x="40" y="25" width="12" height="6" />
                  <rect x="55" y="30" width="6" height="6" />

                  <rect x="10" y="40" width="12" height="6" />
                  <rect x="25" y="45" width="6" height="12" />
                  <rect x="5" y="55" width="12" height="6" />

                  <rect x="40" y="45" width="18" height="6" />
                  <rect x="45" y="55" width="6" height="18" />
                  <rect x="55" y="65" width="12" height="6" />

                  <rect x="75" y="40" width="6" height="18" />
                  <rect x="85" y="45" width="10" height="6" />
                  <rect x="70" y="65" width="12" height="6" />

                  <rect x="40" y="80" width="12" height="6" />
                  <rect x="55" y="75" width="6" height="12" />
                  <rect x="75" y="80" width="15" height="6" />
                  <rect x="80" y="88" width="6" height="6" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-foreground flex items-center justify-center gap-1">
                  <QrCode className="w-3.5 h-3.5 text-zinc-500" />
                  Scan to Download
                </p>
                <p className="text-[9px] text-muted-foreground font-mono">
                  Redirects to active device store
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </section>
  )
}
