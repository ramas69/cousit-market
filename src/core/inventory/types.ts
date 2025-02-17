export interface StockItem {
  id: string
  productId: string
  quantity: number
  minThreshold: number
  location?: string
  lastUpdated: string
}

export interface StockMovement {
  id: string
  productId: string
  quantity: number
  type: 'in' | 'out'
  reason: string
  createdAt: string
}

export interface StockAlert {
  id: string
  productId: string
  type: 'low_stock' | 'out_of_stock'
  threshold: number
  createdAt: string
} 