import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Package, ShoppingBag } from 'lucide-react'

export function Sidenav() {
  const location = useLocation()

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { path: '/products', label: 'Produits', icon: <Package className="w-5 h-5" /> },
    { path: '/marketplace', label: 'Marketplace', icon: <ShoppingBag className="w-5 h-5" /> },
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] bg-white border-r border-gray-200 p-4">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
          <Package className="h-5 w-5 text-white" />
        </div>
        <span className="text-lg font-semibold">Cousit</span>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
              ${location.pathname === item.path 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
              }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
} 