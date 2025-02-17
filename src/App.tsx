import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './index.css'
import './styles/dashboard.css'

export function App() {
  return <RouterProvider router={router} />
}
