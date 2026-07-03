import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Sun, Moon, Sparkles } from 'lucide-react'

export const RootLayout: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return (
        document.documentElement.classList.contains('dark') ||
        localStorage.getItem('theme') === 'dark'
      )
    }
    return false
  })

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col transition-colors duration-300">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary-500 animate-pulse" />
            <span className="font-heading font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              Make<span className="text-gradient">With</span>
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <span className="cursor-not-allowed opacity-50">Discovery</span>
            <span className="cursor-not-allowed opacity-50">Marketplace</span>
            <span className="cursor-not-allowed opacity-50">Reels</span>
            <span className="cursor-not-allowed opacity-50">Creators</span>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 rounded-xl transition-all shadow-premium">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="font-heading font-bold tracking-tight text-slate-800 dark:text-slate-200">
              MakeWith &copy; {new Date().getFullYear()}
            </span>
          </div>
          <p>Handcrafted with passion for social commerce.</p>
        </div>
      </footer>
    </div>
  )
}
