import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './components/layout/RootLayout'
import { Home } from './pages/Home'
import { Workspace } from './pages/Workspace'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'workspace',
        element: <Workspace />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
