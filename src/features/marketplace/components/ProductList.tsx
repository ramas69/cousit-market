import { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'
import { productService } from '../services/product.service'
import type { Product, ProductFilters } from '../../../core/marketplace/types'

interface ProductListProps {
  filters?: ProductFilters
}

export function ProductList({ filters }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadProducts()
  }, [filters])

  const loadProducts = async () => {
    try {
      setLoading(true)
      const data = await productService.getProducts(filters?.category)
      setProducts(data)
    } catch (err) {
      setError('Erreur lors du chargement des produits')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Chargement...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => console.log('Ajouter au panier:', product.id)}
        />
      ))}
    </div>
  )
} 