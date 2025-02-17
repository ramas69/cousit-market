import create from 'zustand'
import type { FabricProduct } from '../../features/inventory/pages/ProductsList'

interface InventoryState {
  products: FabricProduct[]
  loading: boolean
  error: string | null
  addProduct: (product: FabricProduct) => void
  updateProduct: (product: FabricProduct) => void
  deleteProduct: (id: string) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useInventoryStore = create<InventoryState>((set) => ({
  products: [],
  loading: false,
  error: null,
  addProduct: (product) => set((state) => ({ 
    products: [...state.products, product] 
  })),
  updateProduct: (product) => set((state) => ({
    products: state.products.map(p => p.id === product.id ? product : p)
  })),
  deleteProduct: (id) => set((state) => ({
    products: state.products.filter(p => p.id !== id)
  })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error })
})) 