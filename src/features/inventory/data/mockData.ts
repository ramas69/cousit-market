export const mockProducts = [
  { 
    id: 1, 
    name: 'Tissu Coton Bio', 
    category: 'Tissus',
    stock: 15,
    threshold: 20,
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400',
    description: 'Coton biologique de haute qualité'
  },
  { 
    id: 2, 
    name: 'Boutons dorés', 
    category: 'Accessoires',
    stock: 150,
    threshold: 100,
    price: 0.99,
    image: 'https://images.unsplash.com/photo-1595850420816-5fd31aef4ce6?auto=format&fit=crop&q=80&w=400',
    description: 'Boutons métalliques finition dorée'
  },
  { 
    id: 3, 
    name: 'Fil à coudre', 
    category: 'Mercerie',
    stock: 5,
    threshold: 30,
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&q=80&w=400',
    description: 'Fil à coudre polyester'
  }
]

export const mockHistory = [
  { id: 1, product: 'Tissu Coton Bio', type: 'sortie', quantity: 5, date: '2024-03-10' },
  { id: 2, product: 'Boutons dorés', type: 'entrée', quantity: 100, date: '2024-03-09' },
  { id: 3, product: 'Fil à coudre', type: 'sortie', quantity: 10, date: '2024-03-08' }
] 