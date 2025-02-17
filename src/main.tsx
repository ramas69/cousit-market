import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app/routes'
import './index.css'
import './styles/dashboard.css'

const router = createBrowserRouter([
  {
    path: '/*',
    element: <AppRoutes />,
  },
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
