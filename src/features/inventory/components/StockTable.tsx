import { useState, useEffect } from 'react'
import { inventoryService } from '../services/inventory.service'
import type { StockMovement } from '../../../shared/types'

export function StockTable() {
  const [stockItems, setStockItems] = useState<StockMovement[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStockItems()
  }, [])

  const loadStockItems = async () => {
    try {
      const items = await inventoryService.getStockItems()
      setStockItems(items)
    } catch (error) {
      console.error('Erreur lors du chargement du stock:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Chargement...</div>

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Stock Actuel</h2>
        <div className="flex gap-2">
          <input 
            type="search" 
            placeholder="Rechercher..." 
            className="input-search"
          />
          <select className="select-filter">
            <option>Tous les produits</option>
            <option>Stock bas</option>
            <option>Rupture</option>
          </select>
        </div>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Produit
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Stock
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Seuil Alerte
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Dernière MAJ
            </th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stockItems.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-4 whitespace-nowrap">{item.productId}</td>
              <td className="px-4 py-4 whitespace-nowrap">{item.quantity}</td>
              <td className="px-4 py-4 whitespace-nowrap">{item.minThreshold}</td>
              <td className="px-4 py-4 whitespace-nowrap">
                {item.lastUpdated ? new Date(item.lastUpdated).toLocaleDateString() : '-'}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                {/* Actions de produit */}
              </td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  )
} 