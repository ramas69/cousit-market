import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { User, CartState, AuthState } from '../../shared/types'

interface StoreState {
  // Auth state
  auth: AuthState
  setUser: (user: User | null) => void
  setAuthLoading: (isLoading: boolean) => void
  setAuthError: (error: string | null) => void

  // Cart state
  cart: CartState
  addToCart: (productId: string, quantity: number) => void
  removeFromCart: (productId: string) => void
  toggleCart: () => void
  clearCart: () => void

  // Theme
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        // Auth initial state
        auth: {
          user: null,
          loading: true,
          error: null,
        },
        setUser: (user) => set((state) => ({ auth: { ...state.auth, user } })),
        setAuthLoading: (isLoading) => set((state) => ({ auth: { ...state.auth, loading: isLoading } })),
        setAuthError: (error) => set((state) => ({ auth: { ...state.auth, error } })),

        // Cart initial state
        cart: {
          items: [],
          isOpen: false,
        },
        addToCart: (productId, quantity) =>
          set((state) => ({
            cart: {
              ...state.cart,
              items: [...state.cart.items, { productId, quantity }],
            },
          })),
        removeFromCart: (productId) =>
          set((state) => ({
            cart: {
              ...state.cart,
              items: state.cart.items.filter((item) => item.productId !== productId),
            },
          })),
        toggleCart: () =>
          set((state) => ({
            cart: { ...state.cart, isOpen: !state.cart.isOpen },
          })),
        clearCart: () =>
          set((state) => ({
            cart: { ...state.cart, items: [] },
          })),

        // Theme initial state
        theme: 'light',
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
          })),
      }),
      {
        name: 'app-storage',
      }
    )
  )
) 