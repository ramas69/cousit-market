import { mockProducts } from '../../inventory/data/mockData'
import type { Product } from '../../../shared/types'

export const productService = {
  async getProducts(category?: string) {
    if (category) {
      return mockProducts.filter(p => p.category === category)
    }
    return mockProducts
  },

  async getProductById(id: string) {
    return mockProducts.find(p => p.id.toString() === id) || mockProducts[0]
  },

  async createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) {
    return mockProducts[0]
  }
} 