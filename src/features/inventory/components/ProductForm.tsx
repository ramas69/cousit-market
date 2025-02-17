import { useState } from 'react'
import type { FabricProduct } from '../pages/ProductsList'

interface ProductFormProps {
  product?: FabricProduct
  onSubmit: (product: Partial<FabricProduct>) => void
  onCancel: () => void
}

export function ProductForm({ product, onSubmit, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    dimensions: {
      width: product?.dimensions.width || 0,
      length: product?.dimensions.length || 0,
      unit: product?.dimensions.unit || 'cm'
    },
    pricePerMeter: product?.pricePerMeter || 0,
    image: product?.image || '',
    supplier: {
      name: product?.supplier?.name || '',
      url: product?.supplier?.url || ''
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      totalValue: formData.pricePerMeter * (formData.dimensions.length / 100)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          {product ? 'Modifier le produit' : 'Nouveau produit'}
        </h2>
      </div>

      {/* Nom du produit */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-600">
          Nom du produit
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Dimensions */}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            Largeur
          </label>
          <input
            type="number"
            value={formData.dimensions.width}
            onChange={(e) => setFormData({
              ...formData,
              dimensions: { ...formData.dimensions, width: Number(e.target.value) }
            })}
            className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            Longueur
          </label>
          <input
            type="number"
            value={formData.dimensions.length}
            onChange={(e) => setFormData({
              ...formData,
              dimensions: { ...formData.dimensions, length: Number(e.target.value) }
            })}
            className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            Unité
          </label>
          <select
            value={formData.dimensions.unit}
            onChange={(e) => setFormData({
              ...formData,
              dimensions: { ...formData.dimensions, unit: e.target.value }
            })}
            className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="cm">cm</option>
            <option value="m">m</option>
          </select>
        </div>
      </div>

      {/* Prix par mètre */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-600">
          Prix par mètre (€)
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.pricePerMeter}
          onChange={(e) => setFormData({ ...formData, pricePerMeter: Number(e.target.value) })}
          className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Image URL */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-600">
          URL de l'image
        </label>
        <input
          type="url"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Fournisseur */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            Nom du fournisseur
          </label>
          <input
            type="text"
            value={formData.supplier.name}
            onChange={(e) => setFormData({
              ...formData,
              supplier: { ...formData.supplier, name: e.target.value }
            })}
            className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">
            URL du fournisseur
          </label>
          <input
            type="url"
            value={formData.supplier.url}
            onChange={(e) => setFormData({
              ...formData,
              supplier: { ...formData.supplier, url: e.target.value }
            })}
            className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Boutons */}
      <div className="flex justify-end space-x-4 pt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          {product ? 'Modifier' : 'Créer'}
        </button>
      </div>
    </form>
  )
} 