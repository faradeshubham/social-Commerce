import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

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
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-150">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onCtaClick={() => window.dispatchEvent(new CustomEvent('add-new-campaign-task'))}
      />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-background py-6 text-center text-xs text-muted-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-foreground">
              MakeWith &copy; {new Date().getFullYear()}
            </span>
            <span className="text-border">|</span>
            <span>All systems operational</span>
          </div>
          <p>Productivity platform for social commerce creators & brands.</p>
        </div>
      </footer>
    </div>
  )
}
