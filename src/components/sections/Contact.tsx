import * as React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Mail, MessageCircle, CheckCircle2 } from 'lucide-react'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export const Contact: React.FC = () => {
  const [form, setForm] = React.useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clean specific error on user typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!form.name.trim()) {
      tempErrors.name = 'Full name is required.'
    }
    if (!form.email.trim()) {
      tempErrors.email = 'Email address is required.'
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) {
      tempErrors.message = 'Message content is required.'
    } else if (form.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long.'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate network submission request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-t border-border bg-background transition-colors duration-150"
      aria-labelledby="contact-heading"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">Get in Touch</p>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Connect with our engineering & support nodes.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Have questions about split commissions, custom API builds, or brand campaigns? Submit a
            support message below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Panel: Form (Col span 7) */}
          <div className="lg:col-span-7">
            <Card className="bg-card border-border h-full">
              <CardContent className="p-6 md:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-full">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-base text-foreground">
                        Message Submitted Successfully
                      </h3>
                      <p className="text-xs text-muted-foreground max-w-sm">
                        Thank you for reaching out. A platform engineer will review your telemetry
                        logs or query and get back to you shortly.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs h-9 rounded"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name-input" className="text-xs font-semibold text-foreground">
                        Full Name
                      </label>
                      <input
                        id="name-input"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleInputChange}
                        className={`w-full rounded-md border bg-background px-3.5 py-2.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 min-h-[44px] ${
                          errors.name
                            ? 'border-destructive ring-1 ring-destructive'
                            : 'border-input'
                        }`}
                        placeholder="e.g. John Doe"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-destructive font-medium">{errors.name}</p>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email-input"
                        className="text-xs font-semibold text-foreground"
                      >
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleInputChange}
                        className={`w-full rounded-md border bg-background px-3.5 py-2.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 min-h-[44px] ${
                          errors.email
                            ? 'border-destructive ring-1 ring-destructive'
                            : 'border-input'
                        }`}
                        placeholder="e.g. john@example.com"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-destructive font-medium">{errors.email}</p>
                      )}
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message-input"
                        className="text-xs font-semibold text-foreground"
                      >
                        Message Content
                      </label>
                      <textarea
                        id="message-input"
                        name="message"
                        value={form.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full rounded-md border bg-background px-3.5 py-2.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 min-h-[100px] resize-none ${
                          errors.message
                            ? 'border-destructive ring-1 ring-destructive'
                            : 'border-input'
                        }`}
                        placeholder="Describe your inquiry or integration requirements..."
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p className="text-[10px] text-destructive font-medium">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        isLoading={isSubmitting}
                        className="w-full text-xs font-semibold h-11 shadow-sm"
                      >
                        Submit Query
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Panel: Support Links, Social Blocks (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Email Widget */}
            <Card className="bg-card border-border flex-1">
              <CardContent className="p-6 flex flex-col justify-between h-full gap-4">
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-secondary text-foreground w-fit flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">Direct Email Channel</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Prefer direct inbox logs? Send queries about enterprise billing, custom
                    contracts, or merchant partnerships.
                  </p>
                </div>
                <a
                  href="mailto:hello@makewith.co"
                  className="inline-flex items-center text-xs font-semibold text-foreground hover:underline gap-1 mt-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring min-h-[32px] p-1 rounded"
                >
                  hello@makewith.co
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp Widget */}
            <Card className="bg-card border-border flex-1">
              <CardContent className="p-6 flex flex-col justify-between h-full gap-4">
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-secondary text-foreground w-fit flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">Instant WhatsApp Support</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Need immediate integration telemetry debugging? Chat directly with our emergency
                    support engineers.
                  </p>
                </div>
                <a
                  href="https://wa.me/15550199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-foreground hover:underline gap-1 mt-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring min-h-[32px] p-1 rounded"
                >
                  +1 (555) 0199
                </a>
              </CardContent>
            </Card>

            {/* Professional Networks */}
            <Card className="bg-card border-border p-6 shrink-0">
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-wider font-mono">
                  Professional Networks
                </h3>
                <div className="flex items-center space-x-3 pt-1">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md border border-border hover:border-foreground hover:text-foreground text-muted-foreground transition-all duration-150 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    aria-label="Twitter X Link"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md border border-border hover:border-foreground hover:text-foreground text-muted-foreground transition-all duration-150 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    aria-label="GitHub Link"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md border border-border hover:border-foreground hover:text-foreground text-muted-foreground transition-all duration-150 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    aria-label="LinkedIn Link"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
