export function StockAlerts() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Alertes Stock</h2>
      <div className="space-y-4">
        {/* Liste des alertes */}
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <div className="flex items-center">
            <span className="text-red-600 text-sm font-medium">
              Stock critique
            </span>
          </div>
          <p className="text-sm text-gray-600">Tissu Coton - 2 unités restantes</p>
        </div>
      </div>
    </div>
  )
} 