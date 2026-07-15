import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

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

      <Footer />
    </div>
  )
}
