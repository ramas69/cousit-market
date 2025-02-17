import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { StockDashboard } from '../features/inventory/pages/StockDashboard'
import { ProductsList } from '../features/inventory/pages/ProductsList'
import { Marketplace } from '../features/marketplace/pages/Marketplace'
import { Login } from '../features/auth/components/Login'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<StockDashboard />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
} 