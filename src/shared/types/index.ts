// Types de base
export type UserRole = 'artisan' | 'buyer' | 'admin'
export type ProductCategory = 'fabric' | 'accessory' | 'haberdashery'

// Interfaces principales
export interface User {
  id: string
  email: string
  fullName: string
  role: UserRole
  createdAt: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  category: ProductCategory
  images: string[]
  sellerId: string
  createdAt: string
  updatedAt: string
}

// Types liés à l'inventaire
export interface StockMovement {
  id: number
  product: string
  type: string
  quantity: number
  date: string
  productId?: string
  reason?: string
  minThreshold?: number
  lastUpdated?: string
  createdAt?: string
}

export interface StockAlert {
  id: string
  productId: string
  type: 'low_stock' | 'out_of_stock'
  threshold: number
  createdAt: string
}

// Types liés à l'authentification
export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

// Types pour le panier
export interface CartItem {
  productId: string
  quantity: number
}

export interface CartState {
  items: CartItem[]
  isOpen: boolean
} 