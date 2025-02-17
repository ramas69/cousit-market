import React, { useState } from 'react'
import { Box, Package, Clock, BarChart, Search, MoreHorizontal, ChevronRight, AlertTriangle, Euro, Store } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const mockProducts = [
  { category: 'Tissus', quantity: 23, value: 774.77 },
  { category: 'Accessoires', quantity: 150, value: 148.50 },
  { category: 'Mercerie', quantity: 5, value: 19.95 }
]

const chartData = [
  { date: 'Lun', ventes: 4000, stock: 2400 },
  { date: 'Mar', ventes: 3000, stock: 1398 },
  { date: 'Mer', ventes: 2000, stock: 9800 },
  { date: 'Jeu', ventes: 2780, stock: 3908 },
  { date: 'Ven', ventes: 1890, stock: 4800 },
  { date: 'Sam', ventes: 2390, stock: 3800 },
  { date: 'Dim', ventes: 3490, stock: 4300 }
]

export function StockDashboard() {
  const topSellingProducts = [
    { name: 'Tissu Coton Bio', sales: 156, revenue: 1247.88 },
    { name: 'Fil à Coudre Premium', sales: 143, revenue: 428.57 },
    { name: 'Boutons Nacre', sales: 98, revenue: 392.00 },
    { name: 'Élastique Large', sales: 87, revenue: 261.00 }
  ]
  const totalValue = mockProducts.reduce((sum, p) => sum + p.value, 0)
  const soldProducts = 61556
  const pendingOrders = 12
  const lowStockCount = 3
  const productsOnMarketplace = 178

  return (
    <div className="flex-1 w-full">
      <div className="w-full h-full p-5">
        {/* Header avec recherche */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative flex-1 max-w-md ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Rechercher un produit..."
              className="w-full pl-9 pr-4 py-1.5 bg-white rounded-full border border-gray-200 text-sm"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-5">
          {/* Total Products Card */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-5 text-white">
              <h2 className="text-lg font-semibold mb-2">Total Produits</h2>
              <div className="text-3xl font-bold mb-3">{totalValue.toFixed(2)} €</div>
              <div className="inline-flex items-center px-2.5 py-0.5 bg-blue-400/20 rounded-full text-sm">
                <span>Valeur du stock</span>
              </div>
            </div>
          </div>

          {/* Sold Products Card */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-5 text-white">
              <h2 className="text-lg font-semibold mb-2">Produits Vendus</h2>
              <div className="text-3xl font-bold mb-3">{soldProducts} €</div>
              <div className="inline-flex items-center px-2.5 py-0.5 bg-orange-400/20 rounded-full text-sm">
                <span>Ce mois-ci</span>
              </div>
            </div>
          </div>

          {/* Pending Orders Card */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-5 text-white">
              <h2 className="text-lg font-semibold mb-2">Commandes en Attente</h2>
              <div className="text-3xl font-bold mb-3">{pendingOrders}</div>
              <div className="inline-flex items-center px-2.5 py-0.5 bg-pink-400/20 rounded-full text-sm">
                <span>À traiter</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Stock Bas</p>
                  <h3 className="text-xl font-semibold">{lowStockCount}</h3>
                </div>
                <span className="p-2.5 bg-amber-100 rounded-xl">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                </span>
              </div>
              <div className="inline-flex items-center px-2 py-0.5 bg-amber-50 text-amber-500 rounded-full text-xs">
                <span>Produits sous le seuil</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Quantité Totale</p>
                  <h3 className="text-xl font-semibold">{mockProducts.reduce((sum, p) => sum + p.quantity, 0)}</h3>
                </div>
                <span className="p-2.5 bg-emerald-100 rounded-xl">
                  <Package className="h-5 w-5 text-emerald-500" />
                </span>
              </div>
              <div className="inline-flex items-center px-2 py-0.5 bg-emerald-50 text-emerald-500 rounded-full text-xs">
                <span>Produits en stock</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Marketplace</p>
                  <h3 className="text-xl font-semibold">{productsOnMarketplace}</h3>
                </div>
                <span className="p-2.5 bg-blue-100 rounded-xl">
                  <Store className="h-5 w-5 text-blue-500" />
                </span>
              </div>
              <div className="inline-flex items-center px-2 py-0.5 bg-blue-50 text-blue-500 rounded-full text-xs">
                <span>Produits en ligne</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="col-span-12 bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-semibold">Évolution des Ventes</h2>
              <select className="text-sm border rounded-lg px-2 py-1">
                <option>7 derniers jours</option>
                <option>30 derniers jours</option>
                <option>Cette année</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="ventes" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                  <Area type="monotone" dataKey="stock" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Products List */}
          <div className="col-span-12 bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-semibold">Statistiques par Catégorie</h2>
              <button>
                <MoreHorizontal className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-3">
              {mockProducts.map((product) => (
                <div key={product.category} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Package className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{product.category}</h3>
                      <p className="text-xs text-gray-500">Stock: {product.quantity} unités</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{product.value.toFixed(2)} €</p>
                    <p className="text-xs text-gray-500">Valeur</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 bg-white rounded-2xl border border-gray-100 p-5">
            <h2 className="text-lg font-semibold mb-5">Objectifs du Mois</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Ventes</span>
                  <span>75%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: '75%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Nouveaux Produits</span>
                  <span>40%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '40%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Top Selling Products */}
          <div className="col-span-12 lg:col-span-6 bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-semibold">Produits les Plus Vendus</h2>
            </div>
            <div className="space-y-3">
              {topSellingProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      #{index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{product.name}</h3>
                      <p className="text-xs text-gray-500">{product.sales} ventes</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{product.revenue.toFixed(2)} €</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
