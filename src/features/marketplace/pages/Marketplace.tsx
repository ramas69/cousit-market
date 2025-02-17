import { ProductList } from '../components/ProductList'

export function Marketplace() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Marketplace</h1>
      <div className="mb-6">
        <input
          type="search"
          placeholder="Rechercher un produit..."
          className="w-full max-w-md px-4 py-2 border rounded-lg"
        />
      </div>
      <ProductList filters={{}} />
    </div>
  )
} 