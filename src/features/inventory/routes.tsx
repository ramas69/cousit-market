import { RouteObject } from 'react-router-dom'
import { ProductsList } from './pages/ProductsList'
import CreateProduct from './pages/CreateProduct'
import { StockDashboard } from './pages/StockDashboard'

export const inventoryRoutes: RouteObject[] = [
  {
    path: "/",
    element: <ProductsList />
  },
  {
    path: "/products",
    element: <ProductsList />
  },
  {
    path: "/products/new",
    element: <CreateProduct />
  },
  {
    path: "/dashboard",
    element: <StockDashboard />
  }
] 