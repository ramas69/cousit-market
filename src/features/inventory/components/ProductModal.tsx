import { useState } from 'react'
import { Edit, Trash2, ShoppingCart, X } from 'lucide-react'
import type { FabricProduct } from '../pages/ProductsList'
import { ProductForm } from './ProductForm'
import type { ShippingAddress } from '../../../core/shipping/types'

interface ProductModalProps {
  product: FabricProduct
  isOpen: boolean
  onClose: () => void
  onEdit: (product: FabricProduct) => void
  onDelete: (product: FabricProduct) => void
  onSell: (product: FabricProduct) => void
}

export function ProductModal({ product, isOpen, onClose, onEdit, onDelete, onSell }: ProductModalProps) {
  const [isEditing, setIsEditing] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (updatedProduct: Partial<FabricProduct>) => {
    onEdit({ ...product, ...updatedProduct })
    setIsEditing(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {isEditing ? (
          <ProductForm
            product={product}
            onSubmit={handleSubmit}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <button onClick={onClose}>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Détails du produit */}
            <div className="mb-6">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
              <div className="mt-4 space-y-2">
                <p><span className="font-semibold">Prix/mètre:</span> {product.pricePerMeter}€</p>
                <p><span className="font-semibold">Valeur totale:</span> {product.totalValue}€</p>
                <p><span className="font-semibold">Dimensions:</span> {product.dimensions.width}x{product.dimensions.length}{product.dimensions.unit}</p>
                <p><span className="font-semibold">Fournisseur:</span> {product.supplier.name}</p>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                <Edit className="h-4 w-4" />
                Modifier
              </button>
              <button
                onClick={() => onDelete(product)}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg"
              >
                <Trash2 className="h-4 w-4" />
                Supprimer
              </button>
              <button
                onClick={() => onSell(product)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg ml-auto"
              >
                <ShoppingCart className="h-4 w-4" />
                Vendre
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 