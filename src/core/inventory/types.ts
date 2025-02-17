/**
 * Représente un élément en stock dans l'inventaire
 */
export interface StockItem {
  /** Identifiant unique de l'élément */
  id: string
  /** Identifiant du produit associé */
  productId: string
  /** Quantité actuellement en stock */
  quantity: number
  /** Seuil minimal avant déclenchement d'une alerte */
  minThreshold: number
  /** Emplacement physique du stock (optionnel) */
  location?: string
  /** Date de dernière mise à jour (format ISO 8601) */
  lastUpdated: Date
}

/**
 * Types de mouvements de stock possibles
 */
export type StockMovementType = 'in' | 'out'

/**
 * Représente un mouvement de stock (entrée ou sortie)
 */
export interface StockMovement {
  /** Identifiant unique du mouvement */
  id: string
  /** Identifiant du produit concerné */
  productId: string
  /** Quantité concernée par le mouvement */
  quantity: number
  /** Type de mouvement (entrée ou sortie) */
  type: StockMovementType
  /** Raison du mouvement (ex: "vente", "réapprovisionnement", "perte") */
  reason: string
  /** Date de création du mouvement (format ISO 8601) */
  createdAt: Date
}

/**
 * Types d'alertes de stock possibles
 */
export type StockAlertType = 'low_stock' | 'out_of_stock'

/**
 * Représente une alerte liée au niveau de stock
 */
export interface StockAlert {
  /** Identifiant unique de l'alerte */
  id: string
  /** Identifiant du produit concerné */
  productId: string
  /** Type d'alerte */
  type: StockAlertType
  /** Seuil qui a déclenché l'alerte */
  threshold: number
  /** Date de création de l'alerte (format ISO 8601) */
  createdAt: Date
}

/**
 * Statistiques globales de l'inventaire
 */
export interface InventoryStats {
  /** Nombre total de produits différents */
  totalProducts: number
  /** Valeur totale du stock en euros */
  totalValue: number
  /** Nombre d'alertes actives */
  activeAlerts: number
} 