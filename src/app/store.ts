import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { User, CartState, AuthState } from '../shared/types'

interface StoreState {
  auth: AuthState
  cart: CartState
  theme: 'light' | 'dark'
  
  // Actions
  setUser: (user: User | null) => void
  setAuthLoading: (isLoading: boolean) => void
  setAuthError: (error: string | null) => void
  addToCart: (productId: string, quantity: number) => void
  removeFromCart: (productId: string) => void
  toggleCart: () => void
  clearCart: () => void
  toggleTheme: () => void
}

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        auth: {
          user: null,
          loading: false,
          error: null
        },
        cart: {
          items: [],
          isOpen: false
        },
        theme: 'light',

        setUser: (user) => set((state) => ({ 
          auth: { ...state.auth, user } 
        })),
        setAuthLoading: (isLoading) => set((state) => ({ 
          auth: { ...state.auth, isLoading } 
        })),
        setAuthError: (error) => set((state) => ({ 
          auth: { ...state.auth, error } 
        })),
        addToCart: (productId, quantity) => set((state) => ({
          cart: {
            ...state.cart,
            items: [...state.cart.items, { productId, quantity }]
          }
        })),
        removeFromCart: (productId) => set((state) => ({
          cart: {
            ...state.cart,
            items: state.cart.items.filter(item => item.productId !== productId)
          }
        })),
        toggleCart: () => set((state) => ({
          cart: { ...state.cart, isOpen: !state.cart.isOpen }
        })),
        clearCart: () => set((state) => ({
          cart: { ...state.cart, items: [] }
        })),
        toggleTheme: () => set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light'
        }))
      }),
      {
        name: 'app-storage'
      }
    )
  )
) 