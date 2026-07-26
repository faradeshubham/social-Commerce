import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './components/layout/RootLayout'
import { Home } from './pages/Home'
import { Workspace } from './pages/Workspace'
import { Admin } from './pages/Admin'

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
      {
        path: 'admin',
        element: <Admin />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
