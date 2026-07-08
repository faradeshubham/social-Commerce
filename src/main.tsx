import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css' // Moved below component imports (standard convention for style overrides)

// 1. Human Touch: Safe element selection instead of using the aggressive TypeScript non-null assertion operator (!)
const rootElement = document.getElementById('root')

if (!rootElement) {
  // A human wants a helpful failure message if the HTML gets broken during a build or refactor
  throw new Error(
    "Failed to find the root element. Make sure your index.html has an element with id='root'."
  )
}

// 2. Clean initialization
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
