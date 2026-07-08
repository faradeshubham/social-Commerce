import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Layers, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export interface NavLinkItem {
  label: string
  href: string
}

export interface NavbarProps {
  links?: NavLinkItem[]
  ctaText?: string
  onCtaClick?: () => void
  darkMode: boolean
  onToggleDarkMode: () => void
}

const DEFAULT_WORKSPACE_LINKS: NavLinkItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Campaigns', href: '#campaigns' },
  { label: 'Products', href: '#products' },
  { label: 'Creator Splits', href: '#splits' },
  { label: 'Logs', href: '#logs' },
]

const DEFAULT_LANDING_LINKS: NavLinkItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
]

export const Navbar: React.FC<NavbarProps> = ({
  ctaText = 'New Campaign',
  onCtaClick,
  darkMode,
  onToggleDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const location = useLocation()
  const isWorkspace = location.pathname.startsWith('/workspace')

  const links = isWorkspace ? DEFAULT_WORKSPACE_LINKS : DEFAULT_LANDING_LINKS

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Workspace Brand Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded p-1"
          aria-label="MakeWith Home"
        >
          <div className="text-foreground flex items-center justify-center">
            <Layers className="h-5 w-5" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-foreground">
            MakeWith{' '}
            {isWorkspace && <span className="text-muted-foreground font-normal">/ Workspace</span>}
          </span>
        </Link>

        {/* Desktop Links - shadcn-like horizontal tabs */}
        <nav
          className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted-foreground"
          aria-label="Desktop navigation"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            onClick={onToggleDarkMode}
            className="p-0 h-9 w-9 rounded-md text-muted-foreground hover:text-foreground"
            aria-label="Toggle light or dark theme"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {isWorkspace ? (
            <Button
              variant="primary"
              size="sm"
              onClick={onCtaClick}
              className="hidden sm:inline-flex text-xs h-9"
            >
              {ctaText}
            </Button>
          ) : (
            <Link to="/workspace" className="hidden sm:inline-flex">
              <Button variant="primary" size="sm" className="text-xs h-9">
                Launch Workspace
              </Button>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            onClick={toggleMobileMenu}
            className="p-0 h-9 w-9 md:hidden text-muted-foreground hover:text-foreground"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out bg-background ${
          mobileMenuOpen ? 'max-h-64 py-3 px-4 border-t border-border' : 'max-h-0 py-0 px-4'
        }`}
      >
        <nav
          className="flex flex-col space-y-2.5 text-sm font-medium"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors rounded py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-border flex justify-between items-center sm:hidden">
            <span className="text-xs text-muted-foreground">
              {isWorkspace ? 'Workspace Action:' : 'Platform:'}
            </span>
            {isWorkspace ? (
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onCtaClick) onCtaClick()
                }}
                className="h-8 text-xs px-3"
              >
                {ctaText}
              </Button>
            ) : (
              <Link to="/workspace" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="sm" className="h-8 text-xs px-3">
                  Launch Workspace
                </Button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
