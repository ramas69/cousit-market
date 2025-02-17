import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { StockDashboard } from '../features/inventory/pages/StockDashboard'
import { ProductsList } from '../features/inventory/pages/ProductsList'
import { Marketplace } from '../features/marketplace/pages/Marketplace'
import { Login } from '../features/auth/components/Login'
import CreateProduct from '../features/inventory/pages/CreateProduct'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<StockDashboard />} />
        <Route path="/dashboard" element={<StockDashboard />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/new" element={<CreateProduct />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
} 