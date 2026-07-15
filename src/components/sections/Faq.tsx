import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FaqItem {
  id: string
  question: string
  answer: string
}

export const Faq: React.FC = () => {
  const [openId, setOpenId] = React.useState<string | null>(null)

  const faqs: FaqItem[] = [
    {
      id: 'faq-01',
      question: 'What is MakeWith and how does it work?',
      answer:
        'MakeWith is a high-performance checkout overlay platform. It enables creators to map shoppable product pins onto vertical short-form videos. Viewers checkout natively inside the video player, and payouts are split automatically according to predefined campaign terms.',
    },
    {
      id: 'faq-02',
      question: 'How are commission splits paid out?',
      answer:
        'All payouts are handled by automated smart contract split agreements. The moment a viewer completes a checkout session, the referral split is computed instantly and routed directly to the creator and brand wallets respectively.',
    },
    {
      id: 'faq-03',
      question: 'Does the overlay redirect buyers to external pages?',
      answer:
        'No. MakeWith is engineered for zero-redirect checkouts. Buyers enter billing details and complete checkouts natively inside the active video drawer, reducing dropped-cart sessions by 40%.',
    },
    {
      id: 'faq-04',
      question: 'How do brands list products on the marketplace?',
      answer:
        'Brands upload inventory logs via custom APIs or Shopify database connectors. When publishing campaigns, brands pre-configure exact commission split ratios (e.g., 12% to creators) before creators tag them.',
    },
    {
      id: 'faq-05',
      question: 'Are there any platform setup fees?',
      answer:
        'No. Creating accounts, listing products, and mapping campaign tags is completely free. MakeWith only collects a minimal micro-service transaction fee upon successful checkout splits.',
    },
  ]

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      id="faq"
      className="py-16 md:py-24 border-t border-border bg-background transition-colors duration-150"
      aria-labelledby="faq-heading"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Support Resources
          </p>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Find answers to common questions about checkout overlays, commission splits, and
            marketplace integrations.
          </p>
        </div>

        {/* Accordions List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <Card
                key={faq.id}
                className={`bg-card border-border overflow-hidden transition-all duration-200 ${
                  isOpen ? 'ring-1 ring-zinc-300 dark:ring-zinc-800' : ''
                }`}
              >
                {/* Trigger Button: Touch target min 44px */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 font-semibold text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:bg-accent/20 cursor-pointer min-h-[48px]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  id={`faq-button-${faq.id}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-zinc-500 shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Animated Accordion Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-button-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden border-t border-border/80"
                    >
                      <div className="p-6 text-xs text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
