import { mockProducts, mockHistory } from '../data/mockData'
import type { StockMovement, Product } from '../../../shared/types'

export const inventoryService = {
  async getStockItems() {
    return mockHistory
  },

  async addProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) {
    return mockProducts[0]
  }
} 