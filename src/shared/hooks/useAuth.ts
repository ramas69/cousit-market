import { useState, useEffect } from 'react'
import { authService } from '../../features/auth/services/auth.service'
import type { AuthUser } from '../../core/auth/types'

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const user = await authService.getCurrentUser()
      setUser(user)
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'utilisateur:', error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    const data = await authService.login(email, password)
    await checkUser()
    return data
  }

  const logout = async () => {
    await authService.logout()
    setUser(null)
  }

  return {
    user,
    loading,
    login,
    logout,
    checkUser,
  }
} 