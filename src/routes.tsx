import { createBrowserRouter } from 'react-router-dom'
import { inventoryRoutes } from './features/inventory/routes'

export const router = createBrowserRouter([
  ...inventoryRoutes
]) 