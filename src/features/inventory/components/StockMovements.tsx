export function StockMovements() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Historique des Mouvements</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Produit</th>
              <th>Type</th>
              <th>Quantité</th>
              <th>Raison</th>
              <th>Utilisateur</th>
            </tr>
          </thead>
          <tbody>
            {/* Lignes de mouvements */}
          </tbody>
        </table>
      </div>
    </div>
  )
} 