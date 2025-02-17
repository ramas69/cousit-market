import { FC } from 'react'

export const StockOverview: FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Vue d'ensemble</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Total des produits</h3>
          <p className="text-2xl font-semibold">156</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Valeur du stock</h3>
          <p className="text-2xl font-semibold">15,780 €</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Alertes actives</h3>
          <p className="text-2xl font-semibold text-yellow-600">8</p>
        </div>
      </div>
    </div>
  )
} 