import { useNavigate } from 'react-router-dom'
import { ProductForm } from '../components/ProductForm'
import { inventoryService } from '../services/inventory.service'
import type { FabricProduct } from './ProductsList'

export default function CreateProduct() {
  const navigate = useNavigate()

  const handleSubmit = async (product: Partial<FabricProduct>) => {
    try {
      await inventoryService.addProduct(product)
      navigate('/products')
    } catch (error) {
      console.error('Erreur lors de la création:', error)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-6">Nouveau Produit</h1>
      <ProductForm
        onSubmit={handleSubmit}
        onCancel={() => navigate('/products')}
      />
    </div>
  )
} 