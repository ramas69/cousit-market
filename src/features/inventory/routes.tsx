import { RouteObject } from 'react-router-dom'
import { StockDashboard } from './pages/StockDashboard'
import { ProductsList } from './pages/ProductsList'

export const inventoryRoutes: RouteObject[] = [
  {
    path: 'dashboard',
    element: <StockDashboard />
  },
  {
    path: 'products',
    element: <ProductsList />
  }
] 