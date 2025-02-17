import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            Cousit Marketplace
          </div>
          <div className="flex gap-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Dashboard
            </Link>
            <Link to="/marketplace" className="text-gray-600 hover:text-blue-600">
              Marketplace
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600">
              Connexion
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 