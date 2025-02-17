export interface AuthUser {
  id: string
  email: string
  fullName: string
  role: UserRole
  createdAt: string
}

export type UserRole = 'artisan' | 'buyer' | 'admin'

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData extends LoginCredentials {
  fullName: string
  role: UserRole
} 