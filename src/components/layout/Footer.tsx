import * as React from 'react'
import { Link } from 'react-router-dom'
import { Layers, MessageSquare } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background py-12 text-sm text-muted-foreground transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Section: Branding, Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo & Vision (Col span 4) */}
          <div className="md:col-span-4 space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-foreground font-semibold tracking-tight"
              aria-label="MakeWith Home"
            >
              <Layers className="h-5 w-5" />
              <span>MakeWith</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              The high-performance checkout and split-commission pipeline for social commerce.
              Connecting creators and brands natively inside the scroll.
            </p>
          </div>

          {/* Links: Platform (Col span 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider font-mono">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-foreground transition-colors">
                  App Showcase
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-foreground transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Trust & Docs (Col span 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider font-mono">
              Trust & Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#testimonials" className="hover:text-foreground transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Legal & Social (Col span 2) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider font-mono">
              Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright, Operational Status, Social Icons */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          {/* Copyright & Operations */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span className="font-medium text-foreground">
              MakeWith &copy; {new Date().getFullYear()}
            </span>
            <span className="text-border">|</span>
            <div className="flex items-center gap-1.5 bg-secondary/50 dark:bg-zinc-900/50 px-2 py-0.5 rounded border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono font-medium text-foreground">
                All systems operational
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-border hover:border-foreground hover:text-foreground transition-all duration-150"
              aria-label="Twitter Page"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-border hover:border-foreground hover:text-foreground transition-all duration-150"
              aria-label="GitHub Repository"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-border hover:border-foreground hover:text-foreground transition-all duration-150"
              aria-label="Discord Server"
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
