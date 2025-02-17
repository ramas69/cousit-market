import React, { useState } from 'react'
import { Package, Search, Plus, Heart } from 'lucide-react'

interface FabricProduct {
  id: string
  name: string
  type: 'fabric'
  dimensions: {
    width: number
    length: number
    unit: 'cm' | 'm'
  }
  pricePerMeter: number
  totalValue: number
  supplier: {
    name: string
    url: string
  }
  image: string
}

const mockProducts: FabricProduct[] = [
  {
    id: '1',
    name: 'Tissu Coton Bio',
    type: 'fabric',
    dimensions: {
      width: 150,
      length: 100,
      unit: 'cm'
    },
    pricePerMeter: 24.99,
    totalValue: 374.85, // pricePerMeter * (length/100) pour les mètres
    supplier: {
      name: 'Tissus.net',
      url: 'https://www.tissus.net/coton-bio'
    },
    image: 'https://www.tissus.net/dw/image/v2/BGWZ_PRD/on/demandware.static/-/Sites-stoffe-master/default/dw8a1f8209/images/main/63/04047/011.jpg?sw=1125&sh=1125&sm=fit'
  },
  {
    id: '2',
    name: 'Tissu Lin',
    type: 'fabric',
    dimensions: {
      width: 150,
      length: 100,
      unit: 'cm'
    },
    pricePerMeter: 29.99,
    totalValue: 299.90, // pricePerMeter * (length/100) pour les mètres
    supplier: {
      name: 'Tissus.net',
      url: 'https://www.tissus.net/lin'
    },
    image: 'https://www.tissus.net/dw/image/v2/BGWZ_PRD/on/demandware.static/-/Sites-stoffe-master/default/dw71e25497/images/main/63/06053/009.jpg?sw=1125&sh=1125&sm=fit'
  },
  {
    id: '3',
    name: 'Tissu Lin',
    type: 'fabric',
    dimensions: {
      width: 150,
      length: 100,
      unit: 'cm'
    },
    pricePerMeter: 29.99,
    totalValue: 299.90, // pricePerMeter * (length/100) pour les mètres
    supplier: {
      name: 'Tissus.net',
      url: 'https://www.tissus.net/lin'
    },
    image: 'https://www.tissus.net/dw/image/v2/BGWZ_PRD/on/demandware.static/-/Sites-stoffe-master/default/dwe1527505/images/main/206/tula224/6091/01.jpg?sw=1125&sh=1125&sm=fit'
  },
  {
    id: '4',
    name: 'Tissu Coton Bio',
    type: 'fabric',
    dimensions: {
      width: 150,
      length: 100,
      unit: 'cm'
    },
    pricePerMeter: 24.99,
    totalValue: 374.85, // pricePerMeter * (length/100) pour les mètres
    supplier: {
      name: 'Tissus.net',
      url: 'https://www.tissus.net/coton-bio'
    },
    image: 'https://www.tissus.net/dw/image/v2/BGWZ_PRD/on/demandware.static/-/Sites-stoffe-master/default/dw8a1f8209/images/main/63/04047/011.jpg?sw=1125&sh=1125&sm=fit'
  },
  // ... autres produits
]

export function ProductsList() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Produits</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          Nouveau Produit
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Rechercher un produit..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <div key={product.id} className="relative group overflow-hidden rounded-2xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
              <div className="flex items-center justify-between text-sm">
                <span>Valeur totale</span>
                <span className="font-semibold">{product.totalValue.toFixed(2)}€</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 