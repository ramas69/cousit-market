import { Outlet, useLocation } from 'react-router-dom'
import { Sidenav } from '../navigation/Sidenav'

export default function Layout() {
  const location = useLocation()
  const noSidenavPaths = ['/marketplace', '/login', '/register']
  const shouldShowSidenav = !noSidenavPaths.includes(location.pathname)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {shouldShowSidenav && <Sidenav />}
      <main className={`flex-1 ${shouldShowSidenav ? 'ml-[240px]' : ''}`}>
        <Outlet />
      </main>
    </div>
  )
} 