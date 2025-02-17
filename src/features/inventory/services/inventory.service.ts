import { mockProducts } from '../data/mockData'
import type { StockMovement } from '../../../shared/types'
import type { FabricProduct } from '../pages/ProductsList'

export const inventoryService = {
  async getStockItems(): Promise<StockMovement[]> {
    return mockProducts.map(p => ({
      id: p.id,
      product: p.name,
      type: 'in',
      quantity: p.stock,
      date: new Date().toISOString(),
      productId: p.id.toString()
    }))
  },

  async addProduct(product: Partial<FabricProduct>) {
    // Simulation d'ajout
    console.log('Produit ajouté:', product)
    return product
  },

  async deleteProduct(productId: string): Promise<void> {
    // Simulation d'une requête API
    return new Promise((resolve) => {
      console.log(`Produit ${productId} supprimé`)
      setTimeout(resolve, 500)
    })
  }
} 